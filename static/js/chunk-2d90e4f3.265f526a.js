(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d90e4f3"],{"12bf":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("normal-table-render"),n("Dialog",{attrs:{title:"审批历史",visible:e.modalLsVisible,footer:!1,width:"80%"},on:{close:function(t){e.modalLsVisible=!1}}},[n("historyDetail",{tag:"component",attrs:{procInstId:e.procInstId}})],1),n("Dialog",{attrs:{title:e.title,visible:e.visible,width:"50%",footer:!1},on:{close:function(t){e.visible=!1}}},[n(e.lcModa.formComponent,{tag:"component",attrs:{disabled:e.lcModa.disabled,processData:e.lcModa.processData,isNew:e.lcModa.isNew},on:{close:function(t){e.visible=!1}}})],1)],1)},o=[],a=n("c7eb"),r=n("1da1"),s=(n("b0c0"),n("2076")),l=n("a66f"),c=n("9039"),d=n("ed08"),u=n("f8ab"),h=n("b775");function f(e){return Object(h["a"])({url:"/system/actProcessIns/getFinishedProcess",method:"get",params:e})}function p(e){return Object(h["a"])({url:"/system/actProcessIns/delHistoricInsByIds/".concat(e),method:"post"})}var m={name:"ProcessFinishManage",mixins:[s["a"],u["a"]],components:{HistoryDetail:l["a"],Dialog:c["a"]},data:function(){var e=this,t=this.$createElement;return{modalLsVisible:!1,visible:!1,procInstId:"",title:"",lcModa:{disabled:!1,formComponent:null,isNew:!1,processData:{}},searchConfig:[{type:"input",model:"name",label:"流程名称"},{type:"input",model:"key",label:"标识Key"},{type:"dateTime",model:"selectDate",label:"结束时间",change:function(t){e.formModel.startDate=t[0],e.formModel.endDate=t[1]}}],actionConfig:[{label:"表单数据",icon:"el-icon-s-data",type:"text",action:"form"},{label:"审批历史",icon:"el-icon-time",type:"text",action:"history"},{label:"删除",icon:"el-icon-delete",type:"text",action:"del"}],tableColumns:[{key:"id",title:"流程实例ID",props:{width:"150",fixed:"left"}},{key:"name",title:"流程名称",props:{width:"150",fixed:"left"}},{key:"applyer",title:"申请人",props:{width:"150"}},{key:"key",title:"标识Key",props:{width:"150"}},{key:"version",title:"版本",props:{width:"80"}},{key:"result",title:"审批结果",props:{width:"150"},customRender:function(e,n){return t("div",[4===n.priority?t("span",{style:"color: #999999;"},[" 发起人撤回 "]):5===n.resultresult?t("span",{style:"color: orange;"},[" 已删除 "]):2===n.result?t("span",{style:"color: green;"},[" 已通过 "]):3===n.result?t("span",{style:"color: red;"},[" 已驳回 "]):t("span",[" 未知 "])])}},{key:"deleteReason",title:"原因详情",props:{width:"150"}},{key:"duration",title:"总耗时",props:{width:"100"},customRender:function(e,n){return t("span",[Object(d["h"])(n.duration)])}},{key:"startTime",title:"开始时间",props:{width:"160"}},{key:"endTime",title:"结束时间",props:{width:"160"}},{key:"action",title:"操作",props:{align:"center",minWidth:"250",fixed:"right"},scopedSlots:{customRender:"actions"}}]}},methods:{request:function(e){return Object(r["a"])(Object(a["a"])().mark((function t(){var n;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:return n=t.sent,t.abrupt("return",{list:n.data});case 4:case"end":return t.stop()}}),t)})))()},actionClick:function(e,t){var n=this;switch(e.action){case"del":this.$modal.confirm("确定删除吗?").then((function(e){p(t.id).then((function(e){n.$modal.msgSuccess("删除成功"),n.reload()}))})).catch((function(){}));break;case"history":if(!t.id)return this.$modal.msgError("流程实例ID不存在");this.procInstId=t.id,this.modalLsVisible=!0;break;case"form":if(!t.routeName)return this.$modal.msgError("该流程信息未配置表单，请联系开发人员！");this.lcModa.disabled=!0,this.lcModa.formComponent=this.getFormComponent(t.routeName).component,this.lcModa.processData=t,this.lcModa.isNew=!1,this.title="查看流程业务信息："+t.name,this.visible=!0;break}}}},b=m,g=n("2877"),v=Object(g["a"])(b,i,o,!1,null,"5ef82c70",null);t["default"]=v.exports},2076:function(e,t,n){"use strict";var i=n("c7eb"),o=n("1da1"),a=n("2638"),r=n.n(a),s=n("5530"),l=(n("d81d"),n("b64b"),n("c740"),n("f092")),c=n("d4e0"),d=n("2ae7"),u=n("ed08");t["a"]={components:{normalTableRender:{functional:!0,name:"normal-table-render",render:function(e,t){return t.parent.tableRender(t)}},ProTable:l["a"],DialogForm:c["a"],ToobarButton:d["a"]},data:function(){return{selectionList:[],searchModel:{},searchConfig:[],toolbarConfig:[],actionConfig:[],tableColumns:[],tableProps:{},checkbox:!1,showIndex:!1,showToolbar:!0,pagination:!0,dialogTitle:"新增",dialogWidth:"600px",dialogLabelWidth:"80px",dialogVisible:!1,dialogFormConfig:[],formModel:{},formRules:{},tableData:null,dictHandle:Object(u["c"])(this.dictWithData,1e3)}},watch:{"dict.type":{handler:function(){this.dictHandle()},deep:!0}},methods:{tableRender:function(e){var t=this,n=this.$createElement,i=e.slots();return n("div",[n("pro-table",r()([{ref:"tableRef",attrs:{data:this.tableData,"search-model":this.searchModel,"search-config":this.searchConfig,"toolbar-config":this.toolbarConfig,"table-props":this.tableProps,"table-columns":this.tableColumns,checkbox:this.checkbox,request:this.request,showIndex:this.showIndex,showToolbar:this.showToolbar,pagination:this.pagination,resetHandle:this.resetHandle,searchHandle:this.searchHandle},on:{buttonClick:this.buttonClick,handleSelectionChange:this.handleSelectionChange}},{scopedSlots:Object(s["a"])({actions:function(e,i){return n("div",{style:{display:"flex","justify-content":"center",width:"100%"}},[n("toobar-button",{attrs:{config:t.actionConfig,data:i},on:{buttonClick:function(n){t.actionClick(n,i,e.$index)}}})])}},e.scopedSlots)}]),[Object.keys(i).map((function(e){return n("template",{slot:e},[i[e]])}))]),n("dialog-form",r()([{attrs:{title:this.dialogTitle,width:this.dialogWidth,"label-width":this.dialogLabelWidth,configs:this.dialogFormConfig,dialogVisible:this.dialogVisible,"form-model":this.formModel,"form-rules":this.formRules},on:{close:this.closeDialog,confirm:this.confirm}},{scopedSlots:e.scopedSlots}]))])},getDictValue:function(e,t){var n,i;return null!==(n=this.dict)&&void 0!==n&&n.type[e]?null===(i=this.dict)||void 0===i?void 0:i.label[e][t]:""},setDictValue:function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value";return null!==(t=this.dict)&&void 0!==t&&t.type[e]?null===(n=this.dict)||void 0===n?void 0:n.type[e].map((function(e){return{label:e[i],value:e[o]}})):[]},getOptionsByDict:function(e,t){var n=this.searchConfig.findIndex((function(t){return t.model===e}));-1!==n&&(this.searchConfig[n].options=this.setDictValue(t))},closeDialog:function(){this.dialogVisible=!1},confirm:function(e){this.dialogVisible=!1},reload:function(){this.selectionList=[],this.$refs.tableRef&&this.$refs.tableRef.reload()},request:function(){return Object(o["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{list:[],total:0});case 1:case"end":return e.stop()}}),e)})))()},buttonClick:function(){},handleSelectionChange:function(e){this.selectionList=e},dictWithData:function(){},actionClick:function(){},resetHandle:function(){},searchHandle:function(){}}}},a66f:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("el-card",{staticStyle:{"margin-bottom":"10px"}},[n("p",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("流程审批进度历史")])]),n("el-row",{staticStyle:{position:"relative"}},[n("normal-table-render")],1)],1),n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.callback},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{name:"1",label:"实时流程图"}},[n("el-card",[n("el-row",{staticStyle:{position:"relative"}},[n("img",{attrs:{src:e.imgUrl}})])],1)],1),e.lcModa?n("el-tab-pane",{attrs:{name:"2",label:"表单数据"}},[n("el-card",[n(e.lcModa.formComponent,{tag:"component",attrs:{disabled:e.lcModa.disabled,processData:e.lcModa.processData,isNew:e.lcModa.isNew,task:e.lcModa.isTask},on:{afterSubmit:e.afterSub,passTask:function(t){return e.pass(e.lcModa.processData)},backTask:function(t){return e.back(e.lcModa.processData)},close:function(t){e.lcModa.visible=!1,e.lcModa.disabled=!1}}})],1)],1):e._e()],1)],1)},o=[],a=n("c7eb"),r=n("1da1"),s=(n("a15b"),n("d81d"),n("d3b7"),n("25f0"),n("2076")),l=n("b775"),c=n("ed08"),d={name:"HistoryDetail",mixins:[s["a"]],props:{procInstId:{type:String,default:"",required:!0},lcModa:{type:Object,required:!1}},data:function(){var e=this.$createElement;return{activeName:"1",url:{historicFlow:"/system/actTask/historicFlow/",getHighlightImg:"/prod-api/system/activiti/models/getHighlightImg/"},type:0,loading:!1,loadingImg:!1,id:"",imgUrl:"",backRoute:"",pagination:!1,dialogVisible:!1,showToolbar:!1,tableColumns:[{key:"name",title:"任务名称"},{key:"assignees",title:"处理人",customRender:function(t,n){var i=n.assignees||[],o=i.map((function(e){return e.username})).join(",");return e("span",[o])}},{key:"deleteReason",title:"审批操作",customRender:function(t,n){return e("div",[n.deleteReason.toString().indexOf("通过")>-1?e("span",{style:"color: #00DB00"},[n.deleteReason]):n.deleteReason.toString().indexOf("驳回")>-1?e("span",{style:"color: red;"},[n.deleteReason]):e("span",[n.deleteReason])])}},{key:"comment",title:"审批意见"},{key:"duration",title:"耗时",customRender:function(t,n){return e("span",[Object(c["h"])(n.duration)])}},{key:"createTime",title:"创建时间",props:{width:160}},{key:"endTime",title:"完成时间",props:{width:160}},{key:"status",title:"状态",customRender:function(t,n){return e("div",[n.endTime?e("span",{style:"color: blue;"},["已办理"]):e("span",{style:"color: #999999"},["待处理"])])}}]}},created:function(){this.init()},watch:{procInstId:function(e,t){this.init()}},methods:{loadData:function(){},init:function(){this.id=this.procInstId,this.imgUrl=this.url.getHighlightImg+this.id+"?time="+new Date,this.reload()},request:function(){var e=this;return Object(r["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l["a"])({url:e.url.historicFlow+e.id,method:"get"}).then((function(t){return 200===t.code?t.data&&0!=t.data.length||e.$message.info("未找到该记录审批历史数据,历史数据可能已被删除"):e.$message.error(t.msg),{list:t.data||[],total:0}})));case 1:case"end":return t.stop()}}),t)})))()},callback:function(e,t){console.log(e,t,this.activeName)},afterSub:function(){},pass:function(e){this.$emit("passTask",e)},back:function(e){this.$emit("backTask",e)}}},u=d,h=n("2877"),f=Object(h["a"])(u,i,o,!1,null,null,null);t["a"]=f.exports},ed08:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"j",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return h}));n("53ca"),n("ac1f"),n("5319"),n("14d9"),n("a15b"),n("d81d"),n("b64b"),n("d3b7"),n("159b"),n("fb6a"),n("d9e2"),n("a630"),n("3ca3"),n("6062"),n("ddb0"),n("25f0"),n("466d"),n("4d63"),n("c607"),n("2c3e"),n("00b4"),n("b680"),n("c38a");function i(e){if(null==e||""==e)return"";var t=new Date(e),n=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,o=t.getDate()<10?"0"+t.getDate():t.getDate(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return n+"-"+i+"-"+o+" "+a+":"+r+":"+s}function o(e,t,n){var i,o,a,r,s,l=function l(){var c=+new Date-r;c<t&&c>0?i=setTimeout(l,t-c):(i=null,n||(s=e.apply(a,o),i||(a=o=null)))};return function(){for(var o=arguments.length,c=new Array(o),d=0;d<o;d++)c[d]=arguments[d];a=this,r=+new Date;var u=n&&!i;return i||(i=setTimeout(l,t)),u&&(s=e.apply(a,c),a=c=null),s}}function a(e,t){for(var n=Object.create(null),i=e.split(","),o=0;o<i.length;o++)n[i[o]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var r="export default ",s={html:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"separate",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0},js:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"normal",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!0,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0}};function l(e){return e.replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))}function c(e){return/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(e)}function d(e,t){var n=null;return function(){var i=this,o=arguments;n&&clearTimeout(n),n=setTimeout((function(){e.apply(i,o)}),t)}}function u(e){var t;t=10===e.length?new Date(1e3*e):new Date(e);var n=t.getFullYear()+"-",i=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",o=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",a=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",r=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return n+i+o+a+r+s}function h(e){if(!e)return"";var t=e/1e3;if(t<60)return t.toFixed(0)+" 秒";var n=t/60;if(n<60)return n.toFixed(0)+" 分钟";var i=n/60;if(i<24)return i.toFixed(0)+" 小时";var o=i/24;if(o<30)return o.toFixed(0)+" 天";var a=o/30;if(a<12)return a.toFixed(0)+" 个月";var r=a/12;return r.toFixed(0)+" 年"}},f8ab:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d3b7"),n("3ca3"),n("ddb0");var i=n("a66f"),o=n("2ef0"),a={computed:{allFormComponent:function(){return[{text:"示例表单",routeName:"@/views/activiti/form/demoForm",component:function(){return n.e("chunk-4701442f").then(n.bind(null,"6f25"))},businessTable:"test_demo"},{text:"请假单",routeName:"@/views/activiti/form/leaveForm",component:function(){return n.e("chunk-612ab04b").then(n.bind(null,"4f30"))},businessTable:"leave_form"}]},historyDetail:function(){return i["a"]}},methods:{getFormComponent:function(e){return Object(o["find"])(this.allFormComponent,{routeName:e})||{}}}}}}]);