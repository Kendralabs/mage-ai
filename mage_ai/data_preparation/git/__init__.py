from mage_ai.data_preparation.models.constants import PREFERENCES_FILE
from mage_ai.data_preparation.preferences import get_preferences
from mage_ai.data_preparation.repo_manager import get_repo_path
from mage_ai.data_preparation.shared.secrets import get_secret_value
from mage_ai.data_preparation.sync import AuthType, GitConfig
from mage_ai.orchestration.db.models.oauth import User
from mage_ai.shared.logger import VerboseFunctionExec
from typing import Any, List
from urllib.parse import urlparse, urlsplit, urlunsplit
import asyncio
import base64
import os
import shutil
import subprocess
import uuid

DEFAULT_SSH_KEY_DIRECTORY = os.path.expanduser('~/.ssh')
REMOTE_NAME = 'mage-repo'


class Git:
    def __init__(self, git_config: GitConfig) -> None:
        import git
        self.remote_repo_link = git_config.remote_repo_link
        self.repo_path = git_config.repo_path or os.getcwd()
        os.makedirs(self.repo_path, exist_ok=True)
        self.git_config = git_config
        self.auth_type = git_config.auth_type

        if self.auth_type == AuthType.HTTPS:
            url = urlsplit(self.remote_repo_link)
            token = get_secret_value(
                git_config.access_token_secret_name,
                repo_name=get_repo_path(),
            )
            user = git_config.username
            url = url._replace(netloc=f'{user}:{token}@{url.netloc}')
            self.remote_repo_link = urlunsplit(url)

        try:
            self.repo = git.Repo(self.repo_path)
        except git.exc.InvalidGitRepositoryError:
            self.__setup_repo()

        self.__set_git_config()

        if self.auth_type == AuthType.HTTPS:
            url = urlsplit(self.remote_repo_link)
            token = get_secret_value(
                git_config.access_token_secret_name,
                repo_name=get_repo_path(),
            )
            user = git_config.username
            url = url._replace(netloc=f'{user}:{token}@{url.netloc}')
            self.remote_repo_link = urlunsplit(url)

        try:
            self.repo.create_remote(REMOTE_NAME, self.remote_repo_link)
        except git.exc.GitCommandError:
            # if the remote already exists
            pass

        # replace the existing remote url if it is different from the provided url
        self.origin = self.repo.remotes[REMOTE_NAME]
        if self.remote_repo_link not in self.origin.urls:
            self.origin.set_url(self.remote_repo_link)

    @classmethod
    def get_manager(self, user: User = None) -> 'Git':
        preferences = get_preferences(user=user)
        git_config = GitConfig.load(config=preferences.sync_config)
        return Git(git_config)

    @property
    def current_branch(self) -> Any:
        return self.repo.git.branch('--show-current')

    @property
    def branches(self) -> List:
        return [branch.name for branch in self.repo.branches]

    def untracked_files(self, untracked_files: bool = False) -> List[str]:
        from git.compat import defenc
        # Taken from GitPython source code
        proc = self.repo.git.status(
            as_process=True,
            porcelain=True,
            untracked_files=untracked_files,
        )
        # Untracked files prefix in porcelain mode
        prefix = '?? '
        untracked_files = []
        for line in proc.stdout:
            line = line.decode(defenc)
            if not line.startswith(prefix):
                continue
            filename = line[len(prefix):].rstrip('\n')
            # Special characters are escaped
            if filename[0] == filename[-1] == '"':
                filename = filename[1:-1]
                # WHATEVER ... it's a mess, but works for me
                filename = (
                    filename
                    .encode('ascii')
                    .decode('unicode_escape')
                    .encode('latin1')
                    .decode(defenc)
                )
            untracked_files.append(filename)
        proc.wait()
        return untracked_files

    @property
    def modified_files(self) -> List[str]:
        return [item.a_path for item in self.repo.index.diff(None)]

    async def check_connection(self) -> None:
        proc = self.repo.git.ls_remote(self.origin.name, as_process=True)
        ct = 0
        while ct < 20:
            return_code = proc.poll()
            if return_code is not None:
                proc.kill()
                break
            ct += 1
            await asyncio.sleep(0.5)

        if return_code is not None and return_code != 0:
            _, err = proc.communicate()
            message = (
                err.decode('UTF-8') if err
                else 'Error connecting to remote, make sure your SSH key is set up properly.'
            )
            raise Exception(message)

        if return_code is None:
            proc.kill()
            raise TimeoutError

    def _run_command(self, command: str) -> None:
        proc = subprocess.Popen(args=command, shell=True)
        proc.wait()

    def _remote_command(func) -> None:
        '''
        Decorator method for commands that need to connect to the remote repo. This decorator
        will configure and test SSH settings before executing the Git command.
        '''
        def wrapper(self, *args, **kwargs):
            if self.auth_type == AuthType.SSH:
                private_key_file = self.__create_ssh_keys()

                git_ssh_cmd = f'ssh -i {private_key_file}'
                with self.repo.git.custom_environment(GIT_SSH_COMMAND=git_ssh_cmd):
                    try:
                        asyncio.run(self.check_connection())
                    except TimeoutError as err:
                        url = f'ssh://{self.git_config.remote_repo_link}'
                        hostname = urlparse(url).hostname
                        if hostname:
                            cmd = f'ssh-keyscan -t rsa {hostname} >> ~/.ssh/known_hosts'  # noqa: E501
                            self._run_command(cmd)
                            asyncio.run(self.check_connection())
                        else:
                            raise TimeoutError(
                                "Connecting to remote timed out, make sure your SSH key is set up properly"
                                " and your repository host is added as a known host. More information here:"
                                " https://docs.mage.ai/developing-in-the-cloud/setting-up-git#5-add-github-com-to-known-hosts")  # noqa: E501
                    func(self, *args, **kwargs)
            else:
                asyncio.run(self.check_connection())
                func(self, *args, **kwargs)

        return wrapper

    @_remote_command
    def reset(self, branch: str = None) -> None:
        self.origin.fetch()
        if branch is None:
            branch = self.current_branch
        self.repo.git.reset('--hard', f'{self.origin.name}/{branch}')
        self.__pip_install()

    @_remote_command
    def push(self) -> None:
        self.repo.git.push(
            '--set-upstream',
            self.origin.name,
            self.current_branch
        )

    @_remote_command
    def pull(self) -> None:
        self.origin.pull(self.current_branch)
        self.__pip_install()

    def status(self) -> str:
        return self.repo.git.status()

    def commit(self, message, files: List[str] = None) -> None:
        if self.repo.index.diff(None) or self.repo.untracked_files:
            if files:
                for file in files:
                    self.repo.git.add(file)
            else:
                self.repo.git.add('.')
            self.repo.index.commit(message)

    def change_branch(self, branch) -> None:
        if branch in self.repo.heads:
            current = self.repo.heads[branch]
        else:
            current = self.repo.create_head(branch)

        current.checkout()

    @_remote_command
    def clone(self):
        from git import Repo
        tmp_path = f'{self.repo_path}_{str(uuid.uuid4())}'
        os.mkdir(tmp_path)
        try:
            env = {}
            if self.auth_type == AuthType.SSH:
                private_key_file = self.__create_ssh_keys()
                env = {'GIT_SSH_COMMAND': f'ssh -i {private_key_file}'}
            Repo.clone_from(
                self.remote_repo_link,
                to_path=tmp_path,
                origin=REMOTE_NAME,
                env=env,
            )

            preferences_file = os.path.join(self.repo_path, PREFERENCES_FILE)
            if os.path.exists(preferences_file):
                shutil.copy(
                    preferences_file,
                    os.path.join(tmp_path, PREFERENCES_FILE),
                )
            shutil.rmtree(self.repo_path)
            shutil.copytree(tmp_path, self.repo_path)
        finally:
            shutil.rmtree(tmp_path)

    def __set_git_config(self):
        if self.git_config.username:
            self.repo.config_writer().set_value(
                'user', 'name', self.git_config.username).release()
        if self.git_config.email:
            self.repo.config_writer().set_value(
                'user', 'email', self.git_config.email).release()
        self.repo.config_writer('global').set_value(
            'safe', 'directory', self.repo_path).release()

    def __pip_install(self) -> None:
        requirements_file = os.path.join(
            self.repo.working_dir, 'requirements.txt')

        with VerboseFunctionExec(
            f'Running "pip3 install -r {requirements_file}"',
            verbose=True,
        ):
            try:
                if os.path.exists(requirements_file):
                    cmd = f'pip3 install -r {requirements_file}'
                    self._run_command(cmd)
                print(f'Installing {requirements_file} completed successfully.')
            except Exception as err:
                print(f'Skip installing {requirements_file} due to error: {err}')
                pass

    def __create_ssh_keys(self) -> str:
        if not os.path.exists(DEFAULT_SSH_KEY_DIRECTORY):
            os.mkdir(DEFAULT_SSH_KEY_DIRECTORY, 0o700)
        pubk_secret_name = self.git_config.ssh_public_key_secret_name
        if pubk_secret_name:
            public_key_file = os.path.join(
                DEFAULT_SSH_KEY_DIRECTORY,
                f'id_rsa_{pubk_secret_name}.pub'
            )
            if not os.path.exists(public_key_file):
                try:
                    public_key = get_secret_value(
                        pubk_secret_name,
                        repo_name=get_repo_path(),
                    )
                    if public_key:
                        with open(public_key_file, 'w') as f:
                            f.write(base64.b64decode(public_key).decode('utf-8'))
                        os.chmod(public_key_file, 0o600)
                except Exception:
                    pass
        pk_secret_name = self.git_config.ssh_private_key_secret_name
        private_key_file = os.path.join(DEFAULT_SSH_KEY_DIRECTORY, 'id_rsa')
        if pk_secret_name:
            private_key_file = os.path.join(
                DEFAULT_SSH_KEY_DIRECTORY,
                f'id_rsa_{pk_secret_name}'
            )
            if not os.path.exists(private_key_file):
                try:
                    private_key = get_secret_value(
                        pk_secret_name,
                        repo_name=get_repo_path(),
                    )
                    if private_key:
                        with open(private_key_file, 'w') as f:
                            f.write(base64.b64decode(private_key).decode('utf-8'))
                        os.chmod(private_key_file, 0o600)
                except Exception:
                    pass
        return private_key_file

    def __setup_repo(self):
        import git
        tmp_path = f'{self.repo_path}_{str(uuid.uuid4())}'
        os.mkdir(tmp_path)
        try:
            env = {}
            if self.auth_type == AuthType.SSH:
                private_key_file = self.__create_ssh_keys()
                env = {'GIT_SSH_COMMAND': f'ssh -i {private_key_file}'}
            mygit = git.cmd.Git(self.repo_path)
            mygit.update_environment(**env)
            mygit.clone(
                self.remote_repo_link,
                tmp_path,
                origin=REMOTE_NAME,
                kill_after_timeout=30,
            )

            preferences_file = os.path.join(self.repo_path, PREFERENCES_FILE)
            if os.path.exists(preferences_file):
                shutil.copy(
                    preferences_file,
                    os.path.join(tmp_path, PREFERENCES_FILE),
                )
            git_folder = os.path.join(self.repo_path, '.git')
            tmp_git_folder = os.path.join(tmp_path, '.git')
            shutil.move(tmp_git_folder, git_folder)
            self.repo = git.Repo(path=self.repo_path)
        except Exception:
            self.repo = git.Repo.init(self.repo_path)
            # need to commit something to initialize the repository
            self.commit('Initial commit')
        finally:
            shutil.rmtree(tmp_path)
