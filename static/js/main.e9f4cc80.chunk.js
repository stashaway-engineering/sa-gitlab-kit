(this["webpackJsonpsa-gitlab-kit"]=this["webpackJsonpsa-gitlab-kit"]||[]).push([[0],{13:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),c=a(8),i=a.n(c),o=(a(13),a(4)),u=a(6),l=a(1),p=a.n(l),s=/([a-z]+)([A-Z])/g,b=/[-_.]/g;function g(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t=(t=(t="".concat(e)).replace(s,"$1 $2")).replace(b," "),t=p.a.toLower(t),t=p.a.upperFirst(t)}var j,d=/!\[(.+)\]\((.+)\)/,E=/([a-zA-Z]+)-(\d+)/;!function(t){t[t.TEXT=0]="TEXT",t[t.IMAGE=1]="IMAGE",t[t.GROUPABLE_IMAGE=2]="GROUPABLE_IMAGE"}(j||(j={}));var v=a(0);var O=function(){var t=Object(n.useState)(""),e=Object(o.a)(t,2),a=e[0],r=e[1],c=Object(n.useCallback)((function(){var t=function(t){var e=p()(t).split("\n").map((function(t){var e=t.match(d);if(!e)return{text:t,type:j.TEXT};var a=Object(o.a)(e,3),n=a[1],r=a[2],c='<img src="'.concat(r,'" alt="').concat(n,'" width="250"/>'),i=t.match(E);if(!i)return{text:c,type:j.IMAGE};var u=Object(o.a)(i,3),l=u[1],p=u[2];return{text:c,type:j.GROUPABLE_IMAGE,meta:{group:l,imageIndex:+p}}})).value(),a=p.a.reject(e,{type:j.GROUPABLE_IMAGE}),n=p()(e).filter({type:j.GROUPABLE_IMAGE}).orderBy("meta.group").orderBy("meta.imageIndex").groupBy("meta.group").flatMap((function(t,e){return[{text:"",type:j.TEXT},{text:"## ".concat(g(e)),type:j.TEXT},{text:"",type:j.TEXT}].concat(Object(u.a)(t))})).value();return p()([].concat(Object(u.a)(a),Object(u.a)(n))).map("text").join("\n")}(a);r(t),navigator.clipboard.writeText(t)}),[a,r]);return Object(v.jsxs)("div",{style:{margin:100},children:[Object(v.jsx)("h1",{children:"Evidence formatters"}),Object(v.jsx)("textarea",{style:{height:300,width:400},value:a,onChange:function(t){return r(t.target.value)}}),Object(v.jsx)("button",{style:{display:"block"},onClick:c,children:"Format & copy"})]})},f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),c(t),i(t)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(O,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.e9f4cc80.chunk.js.map