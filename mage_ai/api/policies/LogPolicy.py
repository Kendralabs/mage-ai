from mage_ai.api.oauth_scope import OauthScope
from mage_ai.api.operations import constants
from mage_ai.api.policies.BasePolicy import BasePolicy
from mage_ai.api.presenters.LogPresenter import LogPresenter
from mage_ai.data_preparation.models.pipeline import Pipeline
from mage_ai.orchestration.constants import Entity
from mage_ai.orchestration.db.models.schedules import BlockRun
from mage_ai.settings.platform.utils import get_pipeline_from_platform


class LogPolicy(BasePolicy):
    def initialize_project_uuid(self):
        parent_model = self.options.get('parent_model')
        if parent_model:
            if type(parent_model) is BlockRun:
                pipeline = get_pipeline_from_platform(
                    parent_model.pipeline_run.project_uuid,
                    check_if_exists=True,
                    repo_path=parent_model.pipeline_run.pipeline_schedule.repo_path,
                    use_repo_path=True,
                )
                if pipeline:
                    self.project_uuid = pipeline.project_uuid
            elif issubclass(parent_model.__class__, Pipeline):
                self.project_uuid = parent_model.project_uuid

    @property
    def entity(self):
        parent_model = self.options.get('parent_model')
        if parent_model:
            if type(parent_model) is BlockRun:
                return Entity.PIPELINE, parent_model.pipeline_run.pipeline_uuid
            elif issubclass(parent_model.__class__, Pipeline):
                return Entity.PIPELINE, parent_model.uuid

        return super().entity


LogPolicy.allow_actions([
    constants.LIST,
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], condition=lambda policy: policy.has_at_least_viewer_role())

LogPolicy.allow_read(LogPresenter.default_attributes + [
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.LIST,
], condition=lambda policy: policy.has_at_least_viewer_role())

LogPolicy.allow_query([
    'block_run_id',
    'block_run_id[]',
    'block_type',
    'block_type[]',
    'block_uuid',
    'block_uuid[]',
    'end_timestamp',
    'level[]',
    'pipeline_run_id',
    'pipeline_run_id[]',
    'pipeline_schedule_id',
    'pipeline_schedule_id[]',
    'start_timestamp',
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.LIST,
], condition=lambda policy: policy.has_at_least_viewer_role())
