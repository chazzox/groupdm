/**
 * @name groupdm
 * @author chazzox#1001
 * @description Group your Dms and Group Chats separately
 * @version 1.0.0
 * @website https://github.com/chazzox/groupdm#readme
 * @source https://github.com/chazzox/groupdm
 */
function e(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l);var t}c((r=r.apply(e,t||[])).next())}))}function t(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}function n(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)if(r||!(o in t)){r||(r=Array.prototype.slice.call(t,0,o));r[o]=t[o]}return e.concat(r||Array.prototype.slice.call(t))}var r,o;!function(e){e.GROUP="GROUP";e.DM="DM";e.BOTH="BOTH"}(r||(r={}));!function(e){e.GROUP='\na[aria-label~="(direct"] {\n\tdisplay: none;\n}';e.DM='\na[aria-label~="(group"] {\n    display: none;\n}';e.BOTH=""}(o||(o={}));BdApi.injectCSS("groupdm-styles","#buttonFilterContainer{display:flex;justify-content:space-evenly;align-items:center;flex-direction:row;flex-grow:0;align-content:center;background-color:var(--background-modifier-hover);border-radius:4px;margin-left:8px;margin-bottom:8px;margin-top:4px;height:42px}.filterButtons{background:none;transition:color,background-color .2s ease;color:var(--channels-default);box-sizing:border-box;border-radius:4px;font-size:15px;flex-basis:30%;padding:0 2px;border:none;height:30px;line-height:30px}.filterButtons.selected{background-color:var(--bdfdb-blurple)!important;color:var(--interactive-selected)}.filterButtons:hover{color:#fff;background-color:var(--background-modifier-selected)}");var i=BdApi.React,a=BdApi.ReactDOM,l="groupdm-filter";function c(){var e=i.useState(BdApi.loadData("groupdm","isGroup")),t=e[0],n=e[1];i.useEffect((function(){BdApi.clearCSS(l);BdApi.injectCSS(l,o[t])}),[t]);var a=function(e){n(e);BdApi.setData("groupdm","isGroup",e)};return i.createElement(i.Fragment,null,i.createElement("button",{className:"filterButtons "+(t==r.BOTH?"selected":""),onClick:function(){return a(r.BOTH)}},"All"),i.createElement("button",{className:"filterButtons "+(t==r.DM?"selected":""),onClick:function(){return a(r.DM)}},"Friends"),i.createElement("button",{className:"filterButtons "+(t==r.GROUP?"selected":""),onClick:function(){return a(r.GROUP)}},"Groups"))}function u(){return e(this,void 0,void 0,(function(){return t(this,(function(e){if(document.getElementsByClassName("privateChannelsHeaderContainer-3NB1K1")[0]&&!document.getElementById("buttonFilterContainer")){!function(){var e=document.getElementsByClassName("privateChannelsHeaderContainer-3NB1K1")[0],t=document.createElement("div");t.id="buttonFilterContainer";e.insertAdjacentElement("afterend",t)}();a.render(i.createElement(c,null),document.getElementById("buttonFilterContainer"))}return[2]}))}))}module.exports=function(){function e(){}e.prototype.load=function(){BdApi.saveData("groupdm","isGroup",r.DM)};e.prototype.start=function(){!function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];console.log.apply(console,n(["%c"+e,"color:red;"],t,!1))}("[groupdm]","Started!");u()};e.prototype.stop=function(){document.getElementById("buttonFilterContainer").remove();BdApi.clearCSS(l)};e.prototype.onSwitch=function(){u()};return e}();
