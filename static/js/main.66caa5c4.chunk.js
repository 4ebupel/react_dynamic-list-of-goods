(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{65:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var r=n(50),o=n.n(r),c=n(51),a=n(17),i=n(46),s=n.n(i),d=n(0),u=n(92),l=n(94),f=n(95),j=(n(65),n(93)),b=n(89),x=n(88),p=n(90),h=n(2),m=function(t){var e=t.goods;return Object(h.jsx)(j.a,{children:e.map((function(t){return Object(h.jsx)(b.a,{disablePadding:!0,"data-cy":"good",style:{color:t.color},sx:{display:"flex",flexDirection:"column"},children:Object(h.jsx)(x.a,{sx:{borderRadius:"10px"},children:Object(h.jsx)(p.a,{primary:t.name})})},t.id)}))})};function g(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var y=function(){var t=Object(d.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=function(){var t=Object(c.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=r,t.next=4,e;case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),r([{id:1,name:"Something went wrong",color:"red"}]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)(u.a,{variant:"outlined",sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",verticalAlign:"middle"},children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Dynamic list of Goods"}),Object(h.jsxs)(l.a,{variant:"text","aria-label":"text button group",children:[Object(h.jsx)(f.a,{type:"button","data-cy":"all-button",onClick:function(){return o(g())},children:"Load all goods"}),Object(h.jsx)(f.a,{type:"button","data-cy":"first-five-button",onClick:function(){return o(g().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})))},children:"Load 5 first goods"}),Object(h.jsx)(f.a,{type:"button","data-cy":"red-button",onClick:function(){return o(g().then((function(t){return t.filter((function(t){return"red"===t.color}))})))},children:"Load red goods"})]}),Object(h.jsx)(m,{goods:n})]})})};o.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.66caa5c4.chunk.js.map