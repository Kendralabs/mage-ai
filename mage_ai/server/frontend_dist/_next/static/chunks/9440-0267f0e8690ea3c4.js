"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9440],{39440:function(e,n,t){t.d(n,{Z:function(){return fe}});var o=t(21831),i=t(82394),l=t(75582),r=t(65701),u=t(1254),c=t(82684),a=t(69864),d=t(10975),s=t(14567),h=t(47041),f=t(70515),v=t(28598),m=3*f.iI;var p=function(e){e.blockLayoutItem;var n=e.buildChart,t=e.height,o=e.width,i=(0,c.useMemo)((function(){return t-(h.nn+m)}),[t]),l=(0,c.useMemo)((function(){return null===n||void 0===n?void 0:n({height:i,width:o})}),[n,i,o]);return(0,v.jsx)(v.Fragment,{children:l})},x=t(75399),g=t(71180),b=t(4006),j=t(97618),y=t(55485),Z=t(46732),k=t(72473),_=t(38626),C=t(44897),P=t(42631),I=3*f.iI,w=_.default.div.withConfig({displayName:"indexstyle__DividerStyle",componentId:"sc-17acf36-0"})(["display:flex;position:relative;",";",";"],(function(e){return!e.horizontal&&"\n    height: 100%;\n    justify-content: center;\n    width: ".concat(I,"px;\n  ")}),(function(e){return e.horizontal&&"\n    align-items: center;\n    height: ".concat(I,"px;\n    margin-left: ").concat(I,"px;\n    margin-right: ").concat(I,"px;\n    width: calc(100% - ").concat(2*I,"px);\n  ")})),O=_.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-17acf36-1"})(["border-radius:","px;"," ",";",";"],P.Ro,(function(e){return"\n    background-color: ".concat((e.theme||C.Z).accent.blueLight,";\n  ")}),(function(e){return!e.horizontal&&"\n    height: 100%;\n    width: ".concat(.5*f.iI,"px;\n  ")}),(function(e){return e.horizontal&&"\n    height: ".concat(.5*f.iI,"px;\n    width: 100%;\n  ")})),M=_.default.a.withConfig({displayName:"indexstyle__ButtonStyle",componentId:"sc-17acf36-2"})(["align-items:center;border-radius:50%;display:flex;height:","px;justify-content:center;position:absolute;width:","px;"," ",";",";"],3*f.iI,3*f.iI,(function(e){return"\n    background-color: ".concat((e.theme||C.Z).background.page,";\n    border: ").concat(P.mP,"px solid ").concat((e.theme||C.Z).accent.blueLight,";\n    box-shadow:\n      0 0 0 ").concat(P.mP,"px ").concat((e.theme||C.Z).background.page,";\n\n    &:hover {\n      background-color: ").concat((e.theme||C.Z).interactive.linkPrimary,";\n      border: ").concat(P.mP,"px solid ").concat((e.theme||C.Z).interactive.linkPrimary,";\n      cursor: pointer;\n    }\n  ")}),(function(e){return!e.horizontal&&"\n    top: ".concat(3*f.iI,"px;\n  ")}),(function(e){return e.horizontal&&"\n    left: ".concat(3*f.iI,"px;\n  ")}));var S=function(e){var n=e.horizontal,t=e.onClickAdd,o=(0,c.useState)(!1),i=o[0],l=o[1];return(0,v.jsx)(w,{horizontal:n,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:i&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(M,{horizontal:n,href:"#",onClick:function(e){e.preventDefault(),null===t||void 0===t||t()},children:(0,v.jsx)(k.mm,{size:2*f.iI})}),(0,v.jsx)(O,{horizontal:n})]})})},E=t(38276),L=t(4190),N=t(30160),R=t(17488),D=t(35686),U=2*(P.YF+f.cd*f.iI)+I,B=_.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-rcft6g-0"})(["border-radius:","px;padding:","px;",""],P.Ro,f.cd*f.iI,(function(e){return"\n    border: ".concat(P.YF,"px ").concat(P.M8," ").concat((e.theme||C.Z).interactive.defaultBorder,";\n    background-color: ").concat((e.theme||C.Z).background.chartBlock,";\n  ")})),H=t(35058);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q=function(e){var n,t,o=e.block,r=e.blockLayoutItem,u=void 0===r?null:r,a=e.blockUUID,h=e.columnIndex,m=e.columnLayoutSettings,_=e.columnsInRow,C=e.createNewBlockItem,P=e.detail,w=e.disableDrag,O=e.first,M=e.height,A=e.onDrop,q=e.onSave,W=e.pageBlockLayoutUUID,z=e.removeBlockLayoutItem,T=e.rowIndex,J=e.setSelectedBlockItem,K=e.updateLayout,V=e.width,Y=(0,c.useRef)(null),G=(0,c.useState)(!1),X=G[0],Q=G[1],$=(0,c.useState)(!1),ee=$[0],ne=$[1],te=(0,c.useState)(!1),oe=te[0],ie=te[1],le=(0,c.useState)(m)[0],re=(0,c.useState)(null),ue=re[0],ce=re[1],ae=(0,c.useMemo)((function(){return u||ue}),[u,ue]),de=(0,c.useState)(null),se=de[0],he=de[1],fe=(0,c.useMemo)((function(){return(null===ae||void 0===ae?void 0:ae.data)||se}),[ae,se]),ve=(0,c.useMemo)((function(){var e,n=null===ae||void 0===ae||null===(e=ae.data_source)||void 0===e?void 0:e.refresh_interval;return n?Math.max(n,1e3):n}),[ae]),me=D.ZP.block_layout_items.page_block_layouts.detail(!u&&encodeURIComponent(W),!u&&encodeURIComponent(a),{},{refreshInterval:ve,revalidateOnFocus:!ve}).data;(0,c.useEffect)((function(){ae||(o?ce(o):null!==me&&void 0!==me&&me.block_layout_item&&ce(null===me||void 0===me?void 0:me.block_layout_item))}),[o,ae,me]),(0,c.useEffect)((function(){var e,n;null!==me&&void 0!==me&&null!==(e=me.block_layout_item)&&void 0!==e&&e.data&&he(null===me||void 0===me||null===(n=me.block_layout_item)||void 0===n?void 0:n.data)}),[null===me||void 0===me||null===(n=me.block_layout_item)||void 0===n?void 0:n.data]);var pe=(0,c.useCallback)((function(e){var n,t=e.height,o=e.width;if(!fe)return null;var l=null===fe||void 0===fe?void 0:fe.render;if(l){var r=null===fe||void 0===fe?void 0:fe.render_type;if(x.hN.JPEG===r||x.hN.JPG===r)return(0,v.jsx)("img",{height:t,src:"data:image/jpeg;base64,".concat(l),width:o});if(x.hN.PNG===r)return(0,v.jsx)("img",{height:t,src:"data:image/png;base64,".concat(l),width:o});if(x.hN.HTML===r)return(0,v.jsx)("iframe",{srcdoc:l,style:{height:t,width:o}})}return(0,v.jsx)(b.Z,{block:F(F({},ae),{},{configuration:F(F({},null===ae||void 0===ae?void 0:ae.configuration),{},(0,i.Z)({},H.JJ,t))}),data:fe,width:o,xAxisLabel:null===ae||void 0===ae||null===(n=ae.configuration)||void 0===n?void 0:n.x_axis_label})}),[ae,fe]),xe=(0,d.c)((function(){return{collect:function(e){return{isDragging:!!e.isDragging()}},item:{blockLayoutItem:ae,columnIndex:h,rowIndex:T},type:"BlockLayoutItem"}}),[ae,h,T]),ge=(0,l.Z)(xe,2),be=ge[0],je=ge[1],ye=(0,s.L)((function(){return{accept:"BlockLayoutItem",drop:function(e){return null===A||void 0===A?void 0:A(e)}}}),[A]),Ze=(0,l.Z)(ye,2)[1];return P?(0,v.jsx)(p,{blockLayoutItem:ae,buildChart:pe,height:M,width:V}):(0,v.jsxs)(v.Fragment,{children:[O&&(0,v.jsx)(S,{onClickAdd:function(){return C({columnIndex:h,rowIndex:T})}}),(0,v.jsx)(j.Z,{flex:1,flexDirection:"column",children:(0,v.jsx)("div",{onMouseEnter:function(){return ie(!0)},onMouseLeave:function(){return ie(!1)},ref:Ze,children:(0,v.jsxs)(B,F(F({},be),{},{ref:w?null:je,children:[(0,v.jsx)(E.Z,{mb:1,children:(0,v.jsxs)(y.ZP,{alignContent:"center",justifyContent:"space-between",children:[(0,v.jsx)(E.Z,{py:1,children:(0,v.jsx)(N.ZP,{bold:!0,default:!0,children:(null===ae||void 0===ae?void 0:ae.name)||a})}),(0,v.jsx)("div",{children:(0,v.jsx)(Z.Z,{items:[{label:function(){return"Edit content"},onClick:function(){return null===J||void 0===J?void 0:J(ae)},uuid:"Edit content"},{label:function(){return"Change height and/or width"},onClick:function(){return ne(!0)},uuid:"Change"},{label:function(){return"Remove chart"},onClick:function(){return null===z||void 0===z?void 0:z()},uuid:"Remove chart"}],onClickCallback:function(){return Q(!1)},onClickOutside:function(){return Q(!1)},open:X,parentRef:Y,rightOffset:0,uuid:"BlockLayoutItem/".concat(a),children:(oe||X)&&(0,v.jsx)(g.Z,{iconOnly:!0,noBackground:!0,onClick:function(){Q(!0)},children:(0,v.jsx)(k.mH,{default:!0,size:2*f.iI})})})})]})}),ee&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(y.ZP,{alignItems:"center",fullWidth:!0,children:[(0,v.jsxs)(j.Z,{flex:1,flexDirection:"column",children:[(0,v.jsx)(N.ZP,{bold:!0,muted:!0,small:!0,children:"Width (flex box)"}),(0,v.jsx)(R.Z,{compact:!0,fullWidth:!0,onChange:function(e){return null===K||void 0===K?void 0:K(F(F({},m),{},{width:"undefined"!==typeof e.target.value?Number(e.target.value):e.target.value}))},primary:!0,setContentOnMount:!0,small:!0,type:"number",value:(null===m||void 0===m?void 0:m.width)||""})]}),(0,v.jsx)(E.Z,{mr:1}),(0,v.jsxs)(j.Z,{flex:1,flexDirection:"column",children:[(0,v.jsx)(N.ZP,{bold:!0,muted:!0,small:!0,children:"Max width (%)"}),(0,v.jsx)(R.Z,{compact:!0,fullWidth:!0,label:"Max width percentage",onChange:function(e){return null===K||void 0===K?void 0:K(F(F({},m),{},{max_width_percentage:"undefined"!==typeof e.target.value?Number(e.target.value):e.target.value}))},primary:!0,setContentOnMount:!0,small:!0,type:"number",value:(null===m||void 0===m?void 0:m.max_width_percentage)||""})]}),(0,v.jsx)(E.Z,{mr:1}),(0,v.jsxs)(j.Z,{flex:1,flexDirection:"column",children:[(0,v.jsx)(N.ZP,{bold:!0,muted:!0,small:!0,children:"Height (pixels)"}),(0,v.jsx)(R.Z,{compact:!0,fullWidth:!0,onChange:function(e){return null===K||void 0===K?void 0:K(F(F({},m),{},{height:"undefined"!==typeof e.target.value?Number(e.target.value):e.target.value}))},primary:!0,setContentOnMount:!0,small:!0,type:"number",value:(null===m||void 0===m?void 0:m.height)||""})]})]}),(0,v.jsx)(E.Z,{mt:f.cd,children:(0,v.jsxs)(y.ZP,{alignItems:"center",justifyContent:"flex-end",children:[(0,v.jsx)(g.Z,{compact:!0,onClick:function(){null===q||void 0===q||q(),ne(!1)},primary:!0,small:!0,children:"Save"}),(0,v.jsx)(E.Z,{mr:1}),(0,v.jsx)(g.Z,{compact:!0,onClick:function(){ne(!1),null===K||void 0===K||K(le)},small:!0,children:"Cancel"})]})})]}),!me&&!fe&&(0,v.jsx)(L.Z,{inverted:!0}),fe&&pe({height:M||(null===ae||void 0===ae||null===(t=ae.configuration)||void 0===t?void 0:t[H.JJ]),width:V-(U+1)-(_?I/_:0)})]}))})}),(0,v.jsx)(S,{onClickAdd:function(){return C({columnIndex:h+1,rowIndex:T})}})]})},W=t(44425),z=t(54750),T=t(31882),J=t(10305),K=t(44085),V=t(85108),Y=t(81728),G=t(86735);function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=function(e){var n=e.block,t=e.updateConfiguration,o=n||{},r=o.data,u=o.configuration,a=(u||{}).chart_type,d=(r||{}).columns,s=V.G8[a],h=(0,c.useMemo)((function(){return Object.entries(s||{}).reduce((function(e,n){var o=(0,l.Z)(n,2),r=o[0],c=o[1];return Q(Q({},e),{},(0,i.Z)({},r,c.map((function(e){var n,o=e.autoRun,l=e.label,r=e.monospace,c=e.options,a=e.settings,s=void 0===a?{}:a,h=e.type,f=e.uuid,m={fullWidth:!0,key:f,label:(0,Y.kC)(l()),monospace:r,onChange:function(e){return t((0,i.Z)({},f,e.target.value),{autoRun:o})},value:(null===u||void 0===u?void 0:u[f])||""};if(V.VR.COLUMNS===h){var p=u[f]||[];n=(0,v.jsxs)(v.Fragment,{children:[(!s.maxValues||p.length<s.maxValues)&&(0,v.jsx)(K.Z,Q(Q({},m),{},{onChange:function(e){var n=u[f]||[],l=e.target.value;n.includes(l)?n=(0,G.Od)(n,(function(e){return e===l})):n.push(l),t((0,i.Z)({},f,n),{autoRun:o})},value:null,children:(0,G.YC)((d||[]).filter((function(e){return!p.includes(e)})),(function(e){return e})).map((function(e){return(0,v.jsx)("option",{value:e,children:e},e)}))})),p.map((function(e){return(0,v.jsx)("div",{style:{display:"inline-block",marginRight:2,marginTop:2},children:(0,v.jsx)(T.Z,{label:e,onClick:function(){t((0,i.Z)({},f,(0,G.Od)(p,(function(n){return n===e}))),{autoRun:o})}})},e)}))]})}else if(V.VR.METRICS===h){var x=u[f]||[];n=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Metrics"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Select a column and an aggregation function."}),(0,v.jsxs)(J.Z,{onChange:function(e,n){var l=n.resetValues,r=n.setValues;2===e.filter((function(e){return!!e})).length&&(x.find((function(n){var t=n.aggregation;return n.column===e[1]&&t===e[0]}))||(t((0,i.Z)({},f,x.concat({aggregation:e[0],column:e[1]})),{autoRun:o}),r([null,null]),l()))},children:[(0,v.jsx)(K.Z,Q(Q({},m),{},{label:"aggregation",children:(0,G.YC)(H.bn,(function(e){return e})).map((function(e){return(0,v.jsx)("option",{value:e,children:e},e)}))})),(0,v.jsx)(K.Z,Q(Q({},m),{},{label:"column",children:(0,G.YC)(d||[],(function(e){return e})).map((function(e){return(0,v.jsx)("option",{value:e,children:e},e)}))}))]}),x.map((function(e){var n=e.aggregation,l=e.column;return(0,v.jsx)("div",{style:{display:"inline-block",marginRight:2,marginTop:2},children:(0,v.jsx)(T.Z,{label:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(N.ZP,{inline:!0,monospace:!0,children:[n,"("]}),l,(0,v.jsx)(N.ZP,{inline:!0,monospace:!0,children:")"})]}),onClick:function(){t((0,i.Z)({},f,(0,G.Od)(x,(function(e){var t=e.aggregation,o=e.column;return n===t&&l===o}))),{autoRun:o})}})},"".concat(n,"(").concat(l,")"))}))]})}else n=c?(0,v.jsx)(K.Z,Q(Q({},m),{},{children:c.map((function(e){return(0,v.jsx)("option",{value:e,children:e},e)}))})):(0,v.jsx)(R.Z,Q(Q({},m),{},{type:h}));return(0,v.jsx)(E.Z,{mb:1,children:n},f)}))))}),{noCode:[]})}),[d,u,s,t]),f=(h.code,h.noCode);return(0,v.jsx)(v.Fragment,{children:f})},ee=t(75810),ne=t(15338),te=t(85854),oe=t(48670),ie=t(62547),le=t(2842),re=t(53808),ue=t(42122),ce=t(72619),ae=t(23780),de=t(19183);function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function he(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?se(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var fe=function(e){var n,t=e.leftOffset,d=e.pageBlockLayoutTemplate,s=e.topOffset,m=e.uuid,p=(0,ae.VI)(null,{},[],{uuid:"BlockLayout/".concat(m)}),b=(0,l.Z)(p,1)[0],Z=(0,c.useState)({}),_=(Z[0],Z[1],(0,c.useState)(null)),C=_[0],P=_[1],I=(0,c.useState)(!1),w=(I[0],I[1],(0,c.useRef)(null),"block_layout_after_width_".concat(m)),O="block_layout_before_width_".concat(m),M=(0,c.useRef)(null),U=(0,c.useState)((0,re.U2)(w,40*f.iI)),B=U[0],A=U[1],F=(0,c.useState)(!1),T=F[0],J=F[1],V=(0,c.useState)(Math.max((0,re.U2)(O),50*f.iI)),X=V[0],Q=V[1],se=(0,c.useState)(!1),fe=se[0],ve=se[1],me=(0,c.useRef)(null),pe=(0,de.i)(),xe=(0,c.useState)(null),ge=xe[0],be=xe[1],je=(0,c.useMemo)((function(){var e;return null===ge||void 0===ge||null===(e=ge.data_source)||void 0===e?void 0:e.refresh_interval}),[ge]),ye=D.ZP.block_layout_items.page_block_layouts.detail(ge&&encodeURIComponent(m),ge&&encodeURIComponent(null===ge||void 0===ge?void 0:ge.uuid),{configuration_override:encodeURIComponent(JSON.stringify((null===C||void 0===C?void 0:C.configuration)||"")),data_source_override:encodeURIComponent(JSON.stringify((null===C||void 0===C?void 0:C.data_source)||""))},{refreshInterval:je,revalidateOnFocus:!je}),Ze=ye.data,ke=ye.mutate,_e=(0,c.useMemo)((function(){return null===Ze||void 0===Ze?void 0:Ze.block_layout_item}),[Ze]);(0,c.useEffect)((function(){var e;null!==_e&&void 0!==_e&&null!==(e=_e.data)&&void 0!==e&&e.error&&b({response:null===_e||void 0===_e?void 0:_e.data})}),[_e,b]);var Ce=(0,c.useCallback)((function(e){ke(),P(e)}),[ke,P]),Pe=(0,c.useCallback)((function(e){Ce((function(n){var t=he(he({},n),e);return"undefined"===typeof(null===t||void 0===t?void 0:t.name_new)&&(t.name_new=null===t||void 0===t?void 0:t.name),t})),be(e)}),[Ce,be]),Ie=D.ZP.page_block_layouts.detail(encodeURIComponent(m)).data,we=(0,c.useState)(null),Oe=we[0],Me=we[1],Se=(0,c.useMemo)((function(){return null===Oe||void 0===Oe?void 0:Oe.layout}),[Oe]),Ee=(0,c.useCallback)((function(e){Me((function(n){return he(he({},n),{},{layout:e})}))}),[Me]);(0,c.useEffect)((function(){null!==Ie&&void 0!==Ie&&Ie.page_block_layout&&Me(null===Ie||void 0===Ie?void 0:Ie.page_block_layout)}),[Ie]);var Le=(0,a.Db)(D.ZP.page_block_layouts.useUpdate(encodeURIComponent(m)),{onSuccess:function(e){return(0,ce.wD)(e,{callback:function(e){var n=e.page_block_layout,t=n.blocks;Me(n);var o=Object.values(t).find((function(e){return e.name===(null===C||void 0===C?void 0:C.name_new)}));o&&Pe(o),ke()},onErrorCallback:function(e,n){return b({errors:n,response:e})}})}}),Ne=(0,l.Z)(Le,2),Re=Ne[0],De=Ne[1].isLoading,Ue=(0,c.useCallback)((function(e){return Re({page_block_layout:{blocks:he(he({},null===Oe||void 0===Oe?void 0:Oe.blocks),{},(0,i.Z)({},null===e||void 0===e?void 0:e.uuid,(0,ue.gR)(e,["data"]))),layout:null===Oe||void 0===Oe?void 0:Oe.layout}})}),[Oe,Re]),Be=(0,c.useCallback)((function(){return Re({page_block_layout:{blocks:null===Oe||void 0===Oe?void 0:Oe.blocks,layout:null===Oe||void 0===Oe?void 0:Oe.layout}})}),[Oe,Re]),He=(0,c.useMemo)((function(){return null===Oe||void 0===Oe?void 0:Oe.blocks}),[Oe]),Ae=(0,c.useCallback)((function(e,n,t){var i=(0,o.Z)(Se);i[e][n]=t,Ee(i)}),[Se,Ee]),Fe=(0,c.useState)(null),qe=Fe[0],We=Fe[1],ze=(0,c.useState)(null),Te=ze[0],Je=ze[1];(0,c.useEffect)((function(){var e;null===M||void 0===M||!M.current||T||fe||We(null===M||void 0===M||null===(e=M.current)||void 0===e?void 0:e.getBoundingClientRect())}),[T,fe,M,ge,pe]),(0,c.useEffect)((function(){var e;null!==me&&void 0!==me&&me.current&&Je(null===me||void 0===me||null===(e=me.current)||void 0===e?void 0:e.getBoundingClientRect())}),[me,ge,pe]),(0,c.useEffect)((function(){T||(0,re.t8)(w,B)}),[T,B,w]),(0,c.useEffect)((function(){fe||(0,re.t8)(O,X)}),[fe,X,O]);var Ke=(0,c.useCallback)((function(e,n,t){var i=he({},null===Oe||void 0===Oe?void 0:Oe.blocks);null===i||void 0===i||delete i[e];var l=(0,o.Z)(null===Oe||void 0===Oe?void 0:Oe.layout),r=l[n]||[],u=(0,G.oM)(r,t);0===(null===u||void 0===u?void 0:u.length)?l=(0,G.oM)(l,n):l[n]=u,Re({page_block_layout:{blocks:i,layout:l}})}),[Oe,Re]),Ve=(0,c.useCallback)((function(e,n,t,i){var l=(0,o.Z)(Se||[]),r=l[e]||[],u=r[n];if(e===t&&n!==i){var c=(0,G.oM)(r,n);l[e]=(0,G.Hk)(u,i>n?i:i-1,c)}else{var a=(0,G.oM)(r,n);l[e]=a;var d=(0,G.Hk)(u,i,l[t]);l[t]=d,0===(null===a||void 0===a?void 0:a.length)&&(l=(0,G.oM)(l,e))}e===t&&n===i||Re({page_block_layout:{blocks:null===Oe||void 0===Oe?void 0:Oe.blocks,layout:l}})}),[Se,Oe,Re]),Ye=(0,c.useCallback)((function(e){var n=(0,Y.Y6)(),t={name:n,type:W.tf.CHART,uuid:(0,Y.kE)(n)},l=(0,o.Z)(Se||[]),r={block_uuid:t.uuid,width:1};if(e){var u=e||{},c=u.columnIndex,a=void 0===c?0:c,d=u.rowIndex,s=u.rowIndexInsert;"undefined"!==typeof s?l=(0,G.Hk)([r],s,l):l[d]=(0,G.Hk)(r,a,l[d])}else l.push([r]);Re({page_block_layout:{blocks:he(he({},null===Oe||void 0===Oe?void 0:Oe.blocks),{},(0,i.Z)({},t.uuid,t)),layout:l}}),Pe(t)}),[Se,Oe,Pe,Re]),Ge=(0,c.useMemo)((function(){var e=[];return null===Se||void 0===Se||Se.forEach((function(n,t){var o=[],i=(0,G.Sm)(null===n||void 0===n?void 0:n.map((function(e){return e.width||0})));n.forEach((function(e,l){var r=e.block_uuid,u=e.height,c=e.max_width_percentage,a=e.width,d=null===He||void 0===He?void 0:He[r],s="undefined"!==typeof c&&null!==c?c>=0?c/100:c:null,f=a/i,p=s&&f>s?s:f,x=(null===qe||void 0===qe?void 0:qe.width)-h.nn;o.push((0,v.jsx)(j.Z,{flexBasis:"".concat(Math.floor(100*p),"%"),children:(0,v.jsx)(q,{block:d,blockUUID:r,columnIndex:l,columnLayoutSettings:e,columnsInRow:null===n||void 0===n?void 0:n.length,createNewBlockItem:Ye,first:0===l,height:u,onDrop:function(e){var n=e.columnIndex,o=e.rowIndex;Ve(o,n,t,l)},onSave:Be,pageBlockLayoutUUID:m,removeBlockLayoutItem:function(){return Ke(r,t,l)},rowIndex:t,setSelectedBlockItem:Pe,updateLayout:function(e){return Ae(t,l,e)},width:Math.floor(p*x)})},"row-".concat(t,"-column-").concat(l,"-").concat(r)))})),0===t&&e.push((0,v.jsx)(S,{horizontal:!0,onClickAdd:function(){return Ye({rowIndexInsert:t})}},"layout-divider-".concat(t,"-top"))),e.push((0,v.jsx)(y.ZP,{children:o},"row-".concat(t))),e.push((0,v.jsx)(S,{horizontal:!0,onClickAdd:function(){return Ye({rowIndexInsert:t+1})}},"layout-divider-".concat(t,"-bottom")))})),e}),[He,qe,Ye,Se,Ve,Ke,Be,Pe,Ae,m]),Xe=(0,c.useMemo)((function(){return Ie&&0===(null===Se||void 0===Se?void 0:Se.length)}),[Ie,Se]),Qe=(0,c.useMemo)((function(){return(0,v.jsx)(y.ZP,{justifyContent:"center",children:(0,v.jsxs)(E.Z,{my:3*f.HN,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:f.Mq,children:[(0,v.jsx)(E.Z,{mb:1,children:(0,v.jsx)(te.Z,{center:!0,children:"Create a custom dashboard"})}),(0,v.jsx)(N.ZP,{center:!0,default:!0,children:"Add customizable charts with the exact insights you need."}),d&&(0,v.jsx)(N.ZP,{center:!0,default:!0,children:"Start with a recommended set or freely define your own."})]}),(0,v.jsxs)(y.ZP,{alignContent:"center",justifyContent:"center",children:[d&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g.Z,{onClick:function(){return Re({page_block_layout:d})},primary:!0,children:"Add recommended charts"}),(0,v.jsx)(E.Z,{mr:1})]}),(0,v.jsx)(g.Z,{onClick:function(){return Ye()},primary:!d,secondary:!!d,children:"Create new chart"})]})]})})}),[Ye,d,Re]),$e=(0,c.useMemo)((function(){return(null===qe||void 0===qe?void 0:qe.height)-(null===Te||void 0===Te?void 0:Te.height)}),[qe,Te]),en=(0,c.useMemo)((function(){return!ge}),[ge]),nn=D.ZP.pipelines.detail(null===C||void 0===C||null===(n=C.data_source)||void 0===n?void 0:n.pipeline_uuid).data,tn=(0,c.useMemo)((function(){return null===nn||void 0===nn?void 0:nn.pipeline}),[nn]),on=(0,c.useMemo)((function(){return(0,G.YC)((null===tn||void 0===tn?void 0:tn.blocks)||[],"uuid")}),[tn]),ln=D.ZP.pipelines.list().data,rn=(0,c.useMemo)((function(){return(0,G.YC)((null===ln||void 0===ln?void 0:ln.pipelines)||[],"uuid")}),[ln]),un=D.ZP.pipeline_schedules.pipelines.list(null===tn||void 0===tn?void 0:tn.uuid).data,cn=(0,c.useMemo)((function(){return null===un||void 0===un?void 0:un.pipeline_schedules}),[un]),an=(0,c.useMemo)((function(){return he(he(he({},ge),C),{},{data:he(he(he({},null===ge||void 0===ge?void 0:ge.data),null===C||void 0===C?void 0:C.data),null===_e||void 0===_e?void 0:_e.data)})}),[_e,C,ge]),dn=(0,c.useMemo)((function(){var e,n,t,o,i,l,r,u,c,a,d,h,m;return(0,v.jsxs)("div",{style:{paddingBottom:f.Mq*f.iI,paddingTop:"undefined"===typeof s?le.Wi:0},children:[(0,v.jsxs)(E.Z,{mt:f.Mq,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:1,children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Chart name"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Human readable name for your chart."})]}),(0,v.jsx)(R.Z,{onChange:function(e){return Ce((function(n){return he(he({},n),{},{name_new:e.target.value})}))},placeholder:"Type name for chart...",primary:!0,setContentOnMount:!0,value:(null===C||void 0===C?void 0:C.name_new)||""})]}),(0,v.jsxs)(E.Z,{mt:f.Mq,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:1,children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Chart type"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Choose how you want to display your data."})]}),(0,v.jsx)(K.Z,{onChange:function(e){return Ce((function(n){return he(he({},n),{},{configuration:{chart_type:e.target.value}})}))},placeholder:"Select chart type",primary:!0,value:(null===C||void 0===C||null===(e=C.configuration)||void 0===e?void 0:e.chart_type)||"",children:H.CK.concat(H.oV.CUSTOM).map((function(e){return(0,v.jsx)("option",{value:e,children:(0,Y.kC)(e)},e)}))})]}),(0,v.jsx)(E.Z,{mt:f.Mq,children:(0,v.jsx)(ne.Z,{light:!0})}),(0,v.jsx)(E.Z,{mt:f.Mq,px:f.cd,children:(0,v.jsx)(te.Z,{children:"Data source"})}),(0,v.jsxs)(E.Z,{mt:f.Mq,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:1,children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Data source type"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Configure where the data for this chart comes from."})]}),(0,v.jsx)(K.Z,{onChange:function(e){return Ce((function(n){return he(he({},n),{},{data_source:he(he({},null===n||void 0===n?void 0:n.data_source),{},{type:e.target.value})})}))},placeholder:"Select data source type",primary:!0,value:(null===C||void 0===C||null===(n=C.data_source)||void 0===n?void 0:n.type)||"",children:x.tW.map((function(e){return(0,v.jsx)("option",{value:e,children:(0,Y.kC)(x.Qj[e])},e)}))})]}),[x.XO.BLOCK,x.XO.BLOCK_RUNS,x.XO.PIPELINE_RUNS,x.XO.PIPELINE_SCHEDULES].includes(null===C||void 0===C||null===(t=C.data_source)||void 0===t?void 0:t.type)&&(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(E.Z,{mt:f.Mq,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:1,children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Pipeline UUID"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Select the pipeline the data source comes from."})]}),(0,v.jsxs)(K.Z,{monospace:!0,onChange:function(e){return Ce((function(n){return he(he({},n),{},{data_source:he(he({},null===n||void 0===n?void 0:n.data_source),{},{block_uuid:null,pipeline_schedule_id:null,pipeline_uuid:e.target.value})})}))},primary:!0,value:(null===C||void 0===C||null===(o=C.data_source)||void 0===o?void 0:o.pipeline_uuid)||"",children:[(0,v.jsx)("option",{value:null}),null===rn||void 0===rn?void 0:rn.map((function(e){var n=e.uuid;return(0,v.jsx)("option",{value:n,children:n},n)}))]})]})}),[x.XO.PIPELINE_RUNS].includes(null===C||void 0===C||null===(i=C.data_source)||void 0===i?void 0:i.type)&&(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(E.Z,{mt:f.Mq,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:1,children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Trigger"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Select the trigger that the pipeline runs should belong to."})]}),(0,v.jsxs)(K.Z,{monospace:!0,onChange:function(e){return Ce((function(n){return he(he({},n),{},{data_source:he(he({},null===n||void 0===n?void 0:n.data_source),{},{pipeline_schedule_id:e.target.value})})}))},primary:!0,value:(null===C||void 0===C||null===(l=C.data_source)||void 0===l?void 0:l.pipeline_schedule_id)||"",children:[(0,v.jsx)("option",{value:null}),null===cn||void 0===cn?void 0:cn.map((function(e){var n=e.id,t=e.name;return(0,v.jsx)("option",{value:n,children:t},n)}))]})]})}),x.XO.BLOCK===(null===C||void 0===C||null===(r=C.data_source)||void 0===r?void 0:r.type)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(E.Z,{mt:f.Mq,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:1,children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Block UUID"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Select the block the data source comes from."})]}),(0,v.jsxs)(K.Z,{monospace:!0,onChange:function(e){return Ce((function(n){return he(he({},n),{},{data_source:he(he({},null===n||void 0===n?void 0:n.data_source),{},{block_uuid:e.target.value})})}))},primary:!0,value:(null===C||void 0===C||null===(u=C.data_source)||void 0===u?void 0:u.block_uuid)||"",children:[(0,v.jsx)("option",{value:null}),null===on||void 0===on?void 0:on.map((function(e){var n=e.uuid;return(0,v.jsx)("option",{value:n,children:n},n)}))]})]}),(0,v.jsxs)(E.Z,{mt:f.Mq,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:1,children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Partitions"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Enter a positive or a negative number. If positive, then data from the block will be the most recent N partitions. If negative, then data from the block will be the oldest N partitions."}),(0,v.jsx)(E.Z,{mt:1,children:(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"Leave blank if you want the chart to execute the block and display the data produced from that ad hoc block execution."})})]}),(0,v.jsx)(R.Z,{monospace:!0,onChange:function(e){return Ce((function(n){return he(he({},n),{},{data_source:he(he({},null===n||void 0===n?void 0:n.data_source),{},{partitions:"undefined"!==typeof e.target.value?Number(e.target.value):e.target.value})})}))},placeholder:"Enter number of partitions",primary:!0,setContentOnMount:!0,type:"number",value:(null===C||void 0===C||null===(c=C.data_source)||void 0===c?void 0:c.partitions)||""})]})]}),(0,v.jsxs)(E.Z,{mt:f.Mq,px:f.cd,children:[(0,v.jsxs)(E.Z,{mb:1,children:[(0,v.jsx)(N.ZP,{bold:!0,children:"Refresh interval"}),(0,v.jsx)(N.ZP,{muted:!0,small:!0,children:"How frequent do you want this chart to automatically fetch new data from its data source? Enter a number in milliseconds (e.g. 1000ms is 1 second)."})]}),(0,v.jsx)(R.Z,{monospace:!0,onChange:function(e){return Ce((function(n){return he(he({},n),{},{data_source:he(he({},null===n||void 0===n?void 0:n.data_source),{},{refresh_interval:e.target.value})})}))},placeholder:"Enter number for refresh interval",primary:!0,setContentOnMount:!0,type:"number",value:(null===C||void 0===C||null===(a=C.data_source)||void 0===a?void 0:a.refresh_interval)||6e4})]}),(0,v.jsx)(E.Z,{mt:f.Mq,children:(0,v.jsx)(ne.Z,{light:!0})}),(0,v.jsx)(E.Z,{mt:f.Mq,px:f.cd,children:(0,v.jsx)(te.Z,{children:"Chart display settings"})}),(0,v.jsx)(E.Z,{mt:f.Mq,px:f.cd,children:(0,v.jsxs)(N.ZP,{default:!0,children:["Number of columns from data source: ","undefined"!==typeof(null===an||void 0===an||null===(d=an.data)||void 0===d?void 0:d.columns)?(0,v.jsx)(N.ZP,{bold:!0,inline:!0,monospace:!0,children:null===an||void 0===an||null===(h=an.data)||void 0===h||null===(m=h.columns)||void 0===m?void 0:m.length}):(0,v.jsx)(E.Z,{mt:1,children:(0,v.jsx)(L.Z,{inverted:!0,small:!0})})]})}),(0,v.jsx)(E.Z,{mt:f.Mq,px:f.cd,children:(0,v.jsx)($,{block:an,updateConfiguration:function(e){Ce((function(n){return he(he({},n),{},{configuration:he(he({},null===n||void 0===n?void 0:n.configuration),e)})}))}})})]})}),[an,on,C,cn,rn,Ce,s]),sn=(0,c.useMemo)((function(){return ge&&(0,v.jsxs)(E.Z,{py:f.cd,children:[(0,v.jsxs)(E.Z,{mb:f.Mq,px:f.cd,children:[(0,v.jsx)(E.Z,{mb:1,children:(0,v.jsx)(te.Z,{children:"Custom code"})}),(0,v.jsxs)(N.ZP,{default:!0,children:["Write code for custom data sources, parsing, etc. For more information on what is possible, please check out the ",(0,v.jsx)(oe.Z,{href:"https://docs.mage.ai/visualizations/dashboards#custom-code-for-chart",openNewWindow:!0,children:"chart documentation"}),"."]})]}),(0,v.jsx)(ee.Z,{autoHeight:!0,block:ge,onChange:function(e){Ce((function(n){return he(he({},n),{},{content:e})}))},value:(null===C||void 0===C?void 0:C.content)||(null===_e||void 0===_e?void 0:_e.content)||"",width:"100%"})]})}),[_e,C,ge,Ce]);return(0,v.jsxs)(ie.Z,{after:sn,afterHeightOffset:s||0,afterHidden:en,afterMousedownActive:T,afterWidth:B,before:dn,beforeFooter:!en&&(0,v.jsx)(E.Z,{p:f.cd,children:(0,v.jsxs)(y.ZP,{children:[(0,v.jsx)(g.Z,{fullWidth:!0,loading:De,onClick:function(){return Ue(C)},primary:!0,children:"Save changes"}),(0,v.jsx)(E.Z,{mr:1}),(0,v.jsx)(g.Z,{fullWidth:!0,onClick:function(){return Pe(null)},secondary:!0,children:"Back to dashboard"})]})}),beforeHeader:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(z.Z,{breadcrumbs:[{label:function(){return"Back to dashboard"},onClick:function(){return Pe(null)}},{bold:!0,label:function(){return(null===ge||void 0===ge?void 0:ge.name)||(null===ge||void 0===ge?void 0:ge.uuid)}}]})}),beforeHeaderOffset:6*f.iI,beforeHeightOffset:s||0,beforeHidden:en,beforeMousedownActive:fe,beforeWidth:X,contained:!0,headerOffset:s||0,hideAfterCompletely:!0,hideBeforeCompletely:!0,leftOffset:t||0,mainContainerRef:M,setAfterMousedownActive:J,setAfterWidth:A,setBeforeMousedownActive:ve,setBeforeWidth:Q,children:[(0,v.jsx)("div",{ref:me,children:(0,v.jsxs)(y.ZP,{justifyContent:"space-between",children:[(0,v.jsx)(j.Z,{flex:1}),en&&!Xe&&(0,v.jsx)(E.Z,{p:f.cd,children:(0,v.jsx)(g.Z,{beforeIcon:(0,v.jsx)(k.mm,{size:2*f.iI}),onClick:function(){return Ye()},primary:!0,children:"Create new chart"})})]})}),(0,v.jsxs)(r.W,{backend:u.PD,children:[ge&&(0,v.jsx)(q,{block:ge,blockLayoutItem:he(he({},_e),{},{configuration:he(he({},null===_e||void 0===_e?void 0:_e.configuration),null===C||void 0===C?void 0:C.configuration),data_source:he(he({},null===_e||void 0===_e?void 0:_e.data_source),null===C||void 0===C?void 0:C.data_source)}),blockUUID:null===ge||void 0===ge?void 0:ge.uuid,detail:!0,disableDrag:!0,height:$e,pageBlockLayoutUUID:m,setSelectedBlockItem:Pe,width:null===qe||void 0===qe?void 0:qe.width}),!ge&&!Xe&&Ge,!ge&&Xe&&Qe]})]})}},75399:function(e,n,t){t.d(n,{Qj:function(){return c},XO:function(){return i},hN:function(){return l},tW:function(){return u}});var o,i,l,r=t(82394);!function(e){e.BLOCK="block",e.BLOCK_RUNS="block_runs",e.CHART_CODE="chart_code",e.PIPELINES="pipelines",e.PIPELINE_RUNS="pipeline_runs",e.PIPELINE_SCHEDULES="pipeline_schedules"}(i||(i={})),function(e){e.HTML="html",e.JPEG="jpeg",e.JPG="jpg",e.PNG="png"}(l||(l={}));var u=[i.BLOCK,i.BLOCK_RUNS,i.CHART_CODE,i.PIPELINES,i.PIPELINE_RUNS,i.PIPELINE_SCHEDULES],c=(o={},(0,r.Z)(o,i.BLOCK,"Block data output"),(0,r.Z)(o,i.BLOCK_RUNS,"Block runs"),(0,r.Z)(o,i.CHART_CODE,"Custom code"),(0,r.Z)(o,i.PIPELINES,"Pipelines"),(0,r.Z)(o,i.PIPELINE_RUNS,"Pipeline runs"),(0,r.Z)(o,i.PIPELINE_SCHEDULES,"Triggers"),o)}}]);