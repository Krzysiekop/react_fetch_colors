(window.webpackJsonpinterwiev=window.webpackJsonpinterwiev||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(18)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,c=n(0),o=n.n(c),r=n(4),l=n.n(r),i=(n(13),n(2)),u=(n(14),n(1)),s=o.a.createContext((a={color:"",id:"",name:"",pantone:""},Object(i.a)(a,"color",""),Object(i.a)(a,"year",""),a)),m=(n(15),function(e){return o.a.createElement("div",{className:"overlay",onClick:e.onClick})}),E=function(e){var t=Object(c.useContext)(s);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{onClick:e.onClick}),o.a.createElement("div",{className:"modal",style:{backgroundColor:"".concat(t.color)}},o.a.createElement("ul",null,o.a.createElement("li",{className:"modal-item"},o.a.createElement("h1",null,t.id),o.a.createElement("h3",null,t.name),o.a.createElement("h3",null,t.pantone),o.a.createElement("h3",null,t.color),o.a.createElement("h3",null,t.year))),o.a.createElement("button",{className:"modalButton",onClick:e.onClick},"X")))},d=(n(16),function(e){return o.a.createElement("div",{className:"nav"},o.a.createElement("button",{className:"button",onClick:e.back},"Back Page"),o.a.createElement("button",{className:"button",onClick:e.next},"Next Page"))}),h=(n(17),function(e){var t=Object(c.useContext)(s);return o.a.createElement("li",{onClick:function(){t.color=e.color,t.id=e.id,t.name=e.name,t.pantone=e.pantone,t.year=e.year,e.onClick()},style:{backgroundColor:"".concat(e.color)},className:"product-item"},o.a.createElement("h1",null,e.id),o.a.createElement("h3",null,e.name),o.a.createElement("h3",null,e.pantone),o.a.createElement("h3",null,e.color),o.a.createElement("h3",null,e.year))}),b=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),l=Object(u.a)(r,2),i=l[0],s=l[1],m=Object(c.useState)(!1),b=Object(u.a)(m,2),p=b[0],f=b[1],v=Object(c.useState)(!1),k=Object(u.a)(v,2),j=k[0],O=k[1],g=Object(c.useState)(!1),w=Object(u.a)(g,2),C=w[0],y=w[1],N=Object(c.useState)(""),x=Object(u.a)(N,2),S=x[0],T=x[1],B=Object(c.useState)(1),P=Object(u.a)(B,2),q=P[0],J=P[1];Object(c.useEffect)((function(){s(!0),f(!1),O(!1),S?fetch("https://reqres.in/api/products/".concat(S)).then((function(e){if(!e.ok)throw f(e.statusText),O(!0),new Error(e.statusText);return O(!0),e.json()})).then((function(e){var t=[];t.push(e.data),a(t),s(!1),console.log(t)})).catch((function(e){console.error("There has been a problem with your fetch operation:",e.message)})):fetch("https://reqres.in/api/products?per_page=5&page=".concat(q)).then((function(e){if(!e.ok)throw f(e.statusText),O(!0),new Error(e.statusText);return e.json()})).then((function(e){a(e.data),s(!1)})).catch((function(e){console.error("There has been a problem with your fetch operation:",e.message)}))}),[q,S]);var W=function(){y(!0)};return o.a.createElement("div",{className:"content"},C&&o.a.createElement(E,{onClick:function(){y(!1)}}),o.a.createElement("section",{className:"imput-section"},o.a.createElement("input",{onChange:function(e){e.preventDefault(),T(e.target.value)},value:S,type:"number",placeholder:"Type id"})),o.a.createElement("section",null,o.a.createElement("ul",{className:"product-list"},!i&&n?n.map((function(e){return o.a.createElement(h,{key:e.id,name:e.name,id:e.id,year:e.year,pantone:e.pantone_value,color:e.color,onClick:W})})):null,i&&!p&&o.a.createElement("p",{className:"loading-message"},"Loading ..."),p&&o.a.createElement("p",{className:"error-message"},p))),j?o.a.createElement("div",{className:"nav"},o.a.createElement("button",{className:"button",onClick:function(){T("")}},"Back to list")):o.a.createElement(d,{next:function(){q<3&&J(q+1)},back:function(){q>1&&J(q-1)}}))};var p=function(){var e;return o.a.createElement("div",null,o.a.createElement(s.Provider,{value:(e={color:"",id:"",name:"",pantone:""},Object(i.a)(e,"color",""),Object(i.a)(e,"year",""),e)},o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.2cfca4fe.chunk.js.map