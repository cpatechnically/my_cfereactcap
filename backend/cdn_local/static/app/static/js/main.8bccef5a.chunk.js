(this["webpackJsonpcap-ui-1"]=this["webpackJsonpcap-ui-1"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(4),o=n.n(s),r=(n(9),n(1)),i=n(2),u=(n.p,n(11),c.a.useEffect),l=c.a.useState,f=function(e){var t=l(""),n=Object(i.a)(t,2),c=n[0],s=n[1],o=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),r=o[0],u=o[1],l=function(e,t){c(e);var n="true"===String(t);u(n)};return Object(a.useEffect)((function(){var e;return""!==n&&(e=setTimeout((function(){l("",!1)}),r?2e4:5e3)),function(){clearTimeout(e)}})),[n,r,l]}(),f=Object(i.a)(o,3),p=f[0],d=f[1],m=f[2],b=l(""),j=Object(i.a)(b,2);j[0],j[1];u((function(){var e="".concat("http://127.0.0.1:8000","/api/capture/token/"),t=new XMLHttpRequest;t.open("GET",e,!0),t.setRequestHeader("Content-Type","application/json"),t.onload=function(){200===t.status?console.log(t):alert("Error")},t.send()}));var v=e.config;return Object(r.jsxs)("form",{className:v.formClass,onSubmit:function(e){e.preventDefault();var t=function(e){var t={};return document.cookie&&""!==document.cookie&&document.cookie.split(";").forEach((function(e){var n=e.trim().match(/(\w+)=(.*)/);void 0!==n&&(t[n[1]]=decodeURIComponent(n[2]))})),e?t[e]:t}("csrftoken");if(t||m("This is not a valid embed.",!0),""!==c&&void 0!==c&&null!==c){var n="".concat("http://127.0.0.1:8000","/api/capture/email/"),a={email:c},o=JSON.stringify(a),r=new XMLHttpRequest;r.open("POST",n,!0),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("X-CSRFTOKEN",t),r.onerror=function(){m("Error! Please try again later.",!0)},r.onload=function(){201===r.status?(s(""),m("Success! You email is saved.",!1)):m("Error! Please try again.",!0)},r.send(o)}else m("Value is required",!0)},children:[!d&&p&&Object(r.jsx)("div",{className:v.successClass?v.successClass:"alert alert-success",children:p}),Object(r.jsx)("input",{className:v.inputClass,value:c,onChange:function(e){s(e.target.value),m("",!1)},type:"email",placeholder:"your email",required:!0}),d&&p&&Object(r.jsx)("p",{className:v.errorClass,children:p}),"false"===v.btnShow?"":Object(r.jsx)("p",{children:Object(r.jsx)("button",{className:v.btnClass,type:"submit",children:"Save Email"})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))},d=c.a.createElement;document.querySelectorAll(".cap-ui").forEach((function(e){o.a.render(d(f,{config:e.dataset}),e)})),p()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8bccef5a.chunk.js.map