(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d13773f"],{"15fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("b64b");function i(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}function r(e,t){if(null==e)return{};var n,r,a=i(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"1c59":function(e,t,n){"use strict";var i=n("6d61"),r=n("6566");i("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},2076:function(e,t,n){"use strict";var i=n("c7eb"),r=n("1da1"),a=n("2638"),o=n.n(a),s=n("5530"),l=(n("d81d"),n("b64b"),n("c740"),n("f092")),c=n("d4e0"),u=n("2ae7"),f=n("ed08");t["a"]={components:{normalTableRender:{functional:!0,name:"normal-table-render",render:function(e,t){return t.parent.tableRender(t)}},ProTable:l["a"],DialogForm:c["a"],ToobarButton:u["a"]},data:function(){return{selectionList:[],searchModel:{},searchConfig:[],toolbarConfig:[],actionConfig:[],tableColumns:[],tableProps:{},checkbox:!1,showIndex:!1,showToolbar:!0,pagination:!0,dialogTitle:"新增",dialogWidth:"600px",dialogLabelWidth:"80px",dialogVisible:!1,dialogFormConfig:[],formModel:{},formRules:{},tableData:null,dictHandle:Object(f["c"])(this.dictWithData,1e3)}},watch:{"dict.type":{handler:function(){this.dictHandle()},deep:!0}},methods:{tableRender:function(e){var t=this,n=this.$createElement,i=e.slots();return n("div",[n("pro-table",o()([{ref:"tableRef",attrs:{data:this.tableData,"search-model":this.searchModel,"search-config":this.searchConfig,"toolbar-config":this.toolbarConfig,"table-props":this.tableProps,"table-columns":this.tableColumns,checkbox:this.checkbox,request:this.request,showIndex:this.showIndex,showToolbar:this.showToolbar,pagination:this.pagination,resetHandle:this.resetHandle,searchHandle:this.searchHandle},on:{buttonClick:this.buttonClick,handleSelectionChange:this.handleSelectionChange}},{scopedSlots:Object(s["a"])({actions:function(e,i){return n("div",{style:{display:"flex","justify-content":"center",width:"100%"}},[n("toobar-button",{attrs:{config:t.actionConfig,data:i},on:{buttonClick:function(n){t.actionClick(n,i,e.$index)}}})])}},e.scopedSlots)}]),[Object.keys(i).map((function(e){return n("template",{slot:e},[i[e]])}))]),n("dialog-form",o()([{attrs:{title:this.dialogTitle,width:this.dialogWidth,"label-width":this.dialogLabelWidth,configs:this.dialogFormConfig,dialogVisible:this.dialogVisible,"form-model":this.formModel,"form-rules":this.formRules},on:{close:this.closeDialog,confirm:this.confirm}},{scopedSlots:e.scopedSlots}]))])},getDictValue:function(e,t){var n,i;return null!==(n=this.dict)&&void 0!==n&&n.type[e]?null===(i=this.dict)||void 0===i?void 0:i.label[e][t]:""},setDictValue:function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value";return null!==(t=this.dict)&&void 0!==t&&t.type[e]?null===(n=this.dict)||void 0===n?void 0:n.type[e].map((function(e){return{label:e[i],value:e[r]}})):[]},getOptionsByDict:function(e,t){var n=this.searchConfig.findIndex((function(t){return t.model===e}));-1!==n&&(this.searchConfig[n].options=this.setDictValue(t))},closeDialog:function(){this.dialogVisible=!1},confirm:function(e){this.dialogVisible=!1},reload:function(){this.selectionList=[],this.$refs.tableRef&&this.$refs.tableRef.reload()},request:function(){return Object(r["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{list:[],total:0});case 1:case"end":return e.stop()}}),e)})))()},buttonClick:function(){},handleSelectionChange:function(e){this.selectionList=e},dictWithData:function(){},actionClick:function(){},resetHandle:function(){},searchHandle:function(){}}}},2638:function(e,t,n){"use strict";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)}var r=["attrs","props","domProps"],a=["class","style","directives"],o=["on","nativeOn"],s=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==r.indexOf(n))e[n]=i({},e[n],t[n]);else if(-1!==a.indexOf(n)){var s=e[n]instanceof Array?e[n]:[e[n]],c=t[n]instanceof Array?t[n]:[t[n]];e[n]=[].concat(s,c)}else if(-1!==o.indexOf(n))for(var u in t[n])if(e[n][u]){var f=e[n][u]instanceof Array?e[n][u]:[e[n][u]],d=t[n][u]instanceof Array?t[n][u]:[t[n][u]];e[n][u]=[].concat(f,d)}else e[n][u]=t[n][u];else if("hook"===n)for(var p in t[n])e[n][p]=e[n][p]?l(e[n][p],t[n][p]):t[n][p];else e[n]=t[n];else e[n]=t[n];return e}),{})},l=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=s},"3cf6":function(e,t,n){"use strict";n("77ff")},"466d":function(e,t,n){"use strict";var i=n("c65b"),r=n("d784"),a=n("825a"),o=n("7234"),s=n("50c4"),l=n("577e"),c=n("1d80"),u=n("dc4a"),f=n("8aa5"),d=n("14c3");r("match",(function(e,t,n){return[function(t){var n=c(this),r=o(t)?void 0:u(t,e);return r?i(r,t,n):new RegExp(t)[e](l(n))},function(e){var i=a(this),r=l(e),o=n(t,i,r);if(o.done)return o.value;if(!i.global)return d(i,r);var c=i.unicode;i.lastIndex=0;var u,p=[],h=0;while(null!==(u=d(i,r))){var b=l(u[0]);p[h]=b,""===b&&(i.lastIndex=f(r,s(i.lastIndex),c)),h++}return 0===h?null:p}]}))},"4fad":function(e,t,n){var i=n("d039"),r=n("861d"),a=n("c6b6"),o=n("d86b"),s=Object.isExtensible,l=i((function(){s(1)}));e.exports=l||o?function(e){return!!r(e)&&((!o||"ArrayBuffer"!=a(e))&&(!s||s(e)))}:s},6062:function(e,t,n){n("1c59")},6566:function(e,t,n){"use strict";var i=n("9bf2").f,r=n("7c73"),a=n("6964"),o=n("0366"),s=n("19aa"),l=n("7234"),c=n("2266"),u=n("c6d2"),f=n("4754"),d=n("2626"),p=n("83ab"),h=n("f183").fastKey,b=n("69f3"),v=b.set,g=b.getterFor;e.exports={getConstructor:function(e,t,n,u){var f=e((function(e,i){s(e,d),v(e,{type:t,index:r(null),first:void 0,last:void 0,size:0}),p||(e.size=0),l(i)||c(i,e[u],{that:e,AS_ENTRIES:n})})),d=f.prototype,b=g(t),m=function(e,t,n){var i,r,a=b(e),o=x(e,t);return o?o.value=n:(a.last=o={index:r=h(t,!0),key:t,value:n,previous:i=a.last,next:void 0,removed:!1},a.first||(a.first=o),i&&(i.next=o),p?a.size++:e.size++,"F"!==r&&(a.index[r]=o)),e},x=function(e,t){var n,i=b(e),r=h(t);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==t)return n};return a(d,{clear:function(){var e=this,t=b(e),n=t.index,i=t.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;t.first=t.last=void 0,p?t.size=0:e.size=0},delete:function(e){var t=this,n=b(t),i=x(t,e);if(i){var r=i.next,a=i.previous;delete n.index[i.index],i.removed=!0,a&&(a.next=r),r&&(r.previous=a),n.first==i&&(n.first=r),n.last==i&&(n.last=a),p?n.size--:t.size--}return!!i},forEach:function(e){var t,n=b(this),i=o(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:n.first){i(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!x(this,e)}}),a(d,n?{get:function(e){var t=x(this,e);return t&&t.value},set:function(e,t){return m(this,0===e?0:e,t)}}:{add:function(e){return m(this,e=0===e?0:e,e)}}),p&&i(d,"size",{get:function(){return b(this).size}}),f},setStrong:function(e,t,n){var i=t+" Iterator",r=g(t),a=g(i);u(e,t,(function(e,t){v(this,{type:i,target:e,state:r(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?f("keys"==t?n.key:"values"==t?n.value:[n.key,n.value],!1):(e.target=void 0,f(void 0,!0))}),n?"entries":"values",!n,!0),d(t)}}},6964:function(e,t,n){var i=n("cb2d");e.exports=function(e,t,n){for(var r in t)i(e,r,t[r],n);return e}},"6d61":function(e,t,n){"use strict";var i=n("23e7"),r=n("da84"),a=n("e330"),o=n("94ca"),s=n("cb2d"),l=n("f183"),c=n("2266"),u=n("19aa"),f=n("1626"),d=n("7234"),p=n("861d"),h=n("d039"),b=n("1c7e"),v=n("d44e"),g=n("7156");e.exports=function(e,t,n){var m=-1!==e.indexOf("Map"),x=-1!==e.indexOf("Weak"),y=m?"set":"add",w=r[e],_=w&&w.prototype,k=w,O={},D=function(e){var t=a(_[e]);s(_,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(x&&!p(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return x&&!p(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(x&&!p(e))&&t(this,0===e?0:e)}:function(e,n){return t(this,0===e?0:e,n),this})},j=o(e,!f(w)||!(x||_.forEach&&!h((function(){(new w).entries().next()}))));if(j)k=n.getConstructor(t,e,m,y),l.enable();else if(o(e,!0)){var C=new k,S=C[y](x?{}:-0,1)!=C,M=h((function(){C.has(1)})),T=b((function(e){new w(e)})),F=!x&&h((function(){var e=new w,t=5;while(t--)e[y](t,t);return!e.has(-0)}));T||(k=t((function(e,t){u(e,_);var n=g(new w,e,k);return d(t)||c(t,n[y],{that:n,AS_ENTRIES:m}),n})),k.prototype=_,_.constructor=k),(M||F)&&(D("delete"),D("has"),m&&D("get")),(F||S)&&D(y),x&&_.clear&&delete _.clear}return O[e]=k,i({global:!0,constructor:!0,forced:k!=w},O),v(k,e),x||n.setStrong(k,e,m),k}},"77ff":function(e,t,n){},bb2f:function(e,t,n){var i=n("d039");e.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d86b:function(e,t,n){var i=n("d039");e.exports=i((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},ed08:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"j",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return d}));n("53ca"),n("ac1f"),n("5319"),n("14d9"),n("a15b"),n("d81d"),n("b64b"),n("d3b7"),n("159b"),n("fb6a"),n("d9e2"),n("a630"),n("3ca3"),n("6062"),n("ddb0"),n("25f0"),n("466d"),n("4d63"),n("c607"),n("2c3e"),n("00b4"),n("b680"),n("c38a");function i(e){if(null==e||""==e)return"";var t=new Date(e),n=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,r=t.getDate()<10?"0"+t.getDate():t.getDate(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),o=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return n+"-"+i+"-"+r+" "+a+":"+o+":"+s}function r(e,t,n){var i,r,a,o,s,l=function l(){var c=+new Date-o;c<t&&c>0?i=setTimeout(l,t-c):(i=null,n||(s=e.apply(a,r),i||(a=r=null)))};return function(){for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];a=this,o=+new Date;var f=n&&!i;return i||(i=setTimeout(l,t)),f&&(s=e.apply(a,c),a=c=null),s}}function a(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var o="export default ",s={html:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"separate",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0},js:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"normal",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!0,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0}};function l(e){return e.replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))}function c(e){return/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(e)}function u(e,t){var n=null;return function(){var i=this,r=arguments;n&&clearTimeout(n),n=setTimeout((function(){e.apply(i,r)}),t)}}function f(e){var t;t=10===e.length?new Date(1e3*e):new Date(e);var n=t.getFullYear()+"-",i=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",r=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",a=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",o=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return n+i+r+a+o+s}function d(e){if(!e)return"";var t=e/1e3;if(t<60)return t.toFixed(0)+" 秒";var n=t/60;if(n<60)return n.toFixed(0)+" 分钟";var i=n/60;if(i<24)return i.toFixed(0)+" 小时";var r=i/24;if(r<30)return r.toFixed(0)+" 天";var a=r/30;if(a<12)return a.toFixed(0)+" 个月";var o=a/12;return o.toFixed(0)+" 年"}},f183:function(e,t,n){var i=n("23e7"),r=n("e330"),a=n("d012"),o=n("861d"),s=n("1a2d"),l=n("9bf2").f,c=n("241c"),u=n("057f"),f=n("4fad"),d=n("90e3"),p=n("bb2f"),h=!1,b=d("meta"),v=0,g=function(e){l(e,b,{value:{objectID:"O"+v++,weakData:{}}})},m=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!s(e,b)){if(!f(e))return"F";if(!t)return"E";g(e)}return e[b].objectID},x=function(e,t){if(!s(e,b)){if(!f(e))return!0;if(!t)return!1;g(e)}return e[b].weakData},y=function(e){return p&&h&&f(e)&&!s(e,b)&&g(e),e},w=function(){_.enable=function(){},h=!0;var e=c.f,t=r([].splice),n={};n[b]=1,e(n).length&&(c.f=function(n){for(var i=e(n),r=0,a=i.length;r<a;r++)if(i[r]===b){t(i,r,1);break}return i},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},_=e.exports={enable:w,fastKey:m,getWeakData:x,onFreeze:y};a[b]=!0},f951:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("normal-table-render"),n("detail",{attrs:{visible:e.visible,data:e.detailData},on:{close:function(t){e.visible=!1}}})],1)},r=[],a=n("5530"),o=n("c7eb"),s=n("1da1"),l=n("2076"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dialog",{attrs:{title:"详情",visible:e.visible,width:"700px"},on:{close:e.closeDialog}},[n("el-form",{attrs:{"label-width":"140px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"车牌号码："}},[n("span",[e._v(e._s(e.data.xxx||"-"))])])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"车类型："}},[n("span",[e._v(e._s(e.data.xxx||"-"))])])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"司机姓名："}},[n("span",[e._v(e._s(e.data.xxx||"-"))])])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"手机号码："}},[n("span",[e._v(e._s(e.data.xxx||"-"))])])],1),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"身份证号码："}},[n("span",[e._v(e._s(e.data.xxx||"-"))])])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"个人照片："}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.url,"preview-src-list":[e.url],fit:"cover"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"行驶证："}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.url,"preview-src-list":[e.url],fit:"cover"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"驾驶证："}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.url,"preview-src-list":[e.url],fit:"cover"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"从事资格证："}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.url,"preview-src-list":[e.url],fit:"cover"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"道路运输证："}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.url,"preview-src-list":[e.url],fit:"cover"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"质量检测合格证："}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.url,"preview-src-list":[e.url],fit:"cover"}})],1)],1),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"入厂事由："}},[n("span",[e._v(e._s(e.data.xxx||"-"))])])],1)],1)],1),n("template",{slot:"footer"},[n("el-button",{attrs:{type:"gray"},on:{click:e.closeDialog}},[e._v(" 取消 ")])],1)],2)},u=[],f=n("9039"),d={name:"VisitorApproveDetail",components:{Dialog:f["a"]},props:{visible:{type:Boolean,default:!1},data:{type:Object,default:function(){return{}}}},data:function(){return{url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}},methods:{closeDialog:function(){this.$emit("close")}}},p=d,h=(n("3cf6"),n("2877")),b=Object(h["a"])(p,c,u,!1,null,"5f17ce36",null),v=b.exports;n("b775");var g={name:"DangerCarManage",mixins:[l["a"]],components:{Detail:v},data:function(){return{visible:!1,checkbox:!0,dialogLabelWidth:"120px",dialogWidth:"850px",detailData:{},dialogFormConfig:[{type:"input",label:"车牌号码",model:"number",span:12},{type:"input",label:"车辆类型",model:"type",span:12,options:[{label:"xxx",value:1}]},{type:"input",label:"司机姓名",model:"name",span:12},{type:"input",label:"手机号码",model:"time",span:12},{type:"input",label:"身份证号",model:"time"},{type:"imageUpload",label:"个人照片",model:"number",span:12},{type:"imageUpload",label:"行驶证",model:"number",span:12},{type:"imageUpload",label:"驾驶证",model:"number",span:12},{type:"imageUpload",label:"从事资格证",model:"number",span:12},{type:"imageUpload",label:"道路运输证",model:"number",span:12},{type:"imageUpload",label:"质量检测合格证",model:"number",span:12},{type:"textarea",label:"入厂事由",model:"status"}],formRules:{number:[{required:!0,message:"请输入车牌号码"}],name:[{required:!0,message:"请输入车辆姓名"}],type:[{required:!0,message:"请选择车辆类型"}],time:[{required:!0,message:"请选择有效期"}],status:[{required:!0,message:"请选择车辆状态"}]},searchConfig:[{type:"date",model:"type",label:"日期"},{type:"select",model:"status",label:"车辆类型",options:[{label:"xxx",value:1}]}],toolbarConfig:[{label:"新增",icon:"el-icon-plus",action:"add"}],actionConfig:[{label:"详情",icon:"el-icon-view",type:"text",action:"detail"}],tableColumns:[{key:"processName",title:"入厂日期"},{key:"number",title:"车牌号"},{key:"status",title:"车辆类型"},{key:"status",title:"驾驶员姓名"},{key:"status",title:"入场理由"},{key:"status",title:"审批结果"},{key:"status",title:"实际入厂时间"},{key:"status",title:"实际离厂时间"},{key:"actions",title:"操作",props:{align:"center",minWidth:"120"},scopedSlots:{customRender:"actions"}}]}},methods:{request:function(e){return Object(s["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{list:[{title:"我问问",processName:"我问问",currTaskName:"13255048788",number:"闽AXX905",result:"辅导费",createTime:"辅导费",applyTime:"生产管理部",status:"13255044444"}],total:100});case 1:case"end":return e.stop()}}),e)})))()},buttonClick:function(e){switch(e.action){case"add":this.dialogTitle="新增",this.dialogVisible=!0;break}},actionClick:function(e,t){switch(e.action){case"detail":this.detailData=Object(a["a"])({},t),this.visible=!0;break}}}},m=g,x=Object(h["a"])(m,i,r,!1,null,"0cc49688",null);t["default"]=x.exports}}]);