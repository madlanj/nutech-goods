(this["webpackJsonpfrontend-nutech-goods"]=this["webpackJsonpfrontend-nutech-goods"]||[]).push([[4],{88:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(88);function c(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(89);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,c,r=[],s=!0,l=!1;try{for(a=a.call(e);!(s=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);s=!0);}catch(i){l=!0,c=i}finally{try{s||null==a.return||a.return()}finally{if(l)throw c}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r}));var n=a(16),c=function(e){return{type:n.a,formdata:e}},r=function(){return{type:"SIGN_OUT"}}},92:function(e,t,a){"use strict";var n=a(8),c=a(21),r=(a(1),a(29),a(6)),s=a(14),l=a(23),i=a(91),o=a(7),u=function(e){var t=Object(r.g)(),a=e.SignOut,l=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(),s.a.getToken("remove");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("nav",{className:"navbar is-light",role:"navigation","aria-label":"main navigation",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"navbar-brand"}),Object(o.jsxs)("div",{id:"navbarBasicExample",className:"navbar-menu",children:[Object(o.jsx)("div",{className:"navbar-start",children:Object(o.jsx)("a",{onClick:function(){t.push("/")},className:"navbar-item",children:"Home"})}),Object(o.jsx)("div",{className:"navbar-end",children:Object(o.jsx)("div",{className:"navbar-item",children:Object(o.jsx)("div",{className:"buttons",children:Object(o.jsx)("button",{onClick:l,className:"button is-light",children:"Log Out"})})})})]})]})})};u.defaultProps={},t.a=Object(l.b)((function(){return{}}),{SignOut:i.b})(u)},96:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a(21),r=a(35),s=a(5),l=a(90),i=a(1),o=a(34),u=a(92),b=a(6),j=a(7);t.default=function(e){var t=Object(i.useState)([]),a=Object(l.a)(t,2),d=(a[0],a[1],Object(i.useState)(!1)),m=Object(l.a)(d,2),h=m[0],O=(m[1],Object(i.useState)(!1)),f=Object(l.a)(O,2),p=(f[0],f[1],Object(i.useState)("")),v=Object(l.a)(p,2),x=v[0],N=v[1],g=Object(b.g)(),y=Object(i.useState)("https://fakeimg.pl/350x200/"),S=Object(l.a)(y,2),k=S[0],w=S[1],C=Object(i.useState)(null),A=Object(l.a)(C,2),B=A[0],U=A[1],H=Object(i.useState)({title:"",purchasePrice:"",purchaseSell:"",stock:""}),L=Object(l.a)(H,2),P=L[0],E=L[1],I=function(e){E(Object(s.a)(Object(s.a)({},P),{},Object(r.a)({},e.target.name,e.target.value)))};var J=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,a=new URLSearchParams,Object.keys(P).map((function(e){a.append(e,P[e])})),Object.keys(P).map((function(e){""===P[e]&&Reflect.deleteProperty(P,e)})),4!==Object.keys(P).length){e.next=10;break}return e.next=8,new o.a({url:"/api/v1/goods",body:a}).post().then((function(e){var t;null!==e&&void 0!==e&&e.error?alert(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:"Some Error"):B?R(e.data.id):(alert("Success Updated!"),g.push("/"))})).catch((function(e){alert(e.message)}));case 8:e.next=11;break;case 10:alert("Some Error!");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response&&N(e.t0.response.errors);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(B),(a=new FormData).append("image",B),e.next=5,new o.a({url:"/api/v1/goods/image/".concat(t),body:a}).put().then((function(e){null!==e&&void 0!==e&&e.error||g.push("/")})).catch((function(e){}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return h?"Loading...":Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{}),Object(j.jsx)("div",{className:"container mt-5",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"columns is-centered",children:Object(j.jsx)("div",{className:"column is-4-desktop",children:Object(j.jsxs)("form",{onSubmit:J,className:"box",children:[Object(j.jsx)("p",{className:"has-text-centered",children:x}),Object(j.jsxs)("div",{className:"field mt-5",children:[Object(j.jsx)("label",{className:"label",children:"Gambar Barang"}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:k,className:"img-thumbnail",alt:"..."})}),Object(j.jsx)("div",{className:"file has-name is-fullwidth",children:Object(j.jsxs)("label",{className:"file-label",children:[Object(j.jsx)("input",{className:"file-input",name:"image",onChange:function(e){var t=e.target.files[0];w(URL.createObjectURL(t)),U(t)},type:"file"}),Object(j.jsxs)("span",{className:"file-cta",children:[Object(j.jsx)("span",{className:"file-icon",children:Object(j.jsx)("i",{className:"fas fa-upload"})}),Object(j.jsx)("span",{className:"file-label",children:"Choose a file\u2026"})]}),Object(j.jsx)("span",{className:"file-name",children:"...."})]})})]}),Object(j.jsxs)("div",{className:"field mt-5",children:[Object(j.jsx)("label",{className:"label",children:"Nama Barang"}),Object(j.jsx)("div",{className:"controls",children:Object(j.jsx)("input",{type:"text",className:"input",placeholder:"Nama Barang",name:"title",onChange:I})})]}),Object(j.jsxs)("div",{className:"field mt-5",children:[Object(j.jsx)("label",{className:"label",children:"Harga Beli"}),Object(j.jsx)("div",{className:"controls",children:Object(j.jsx)("input",{type:"number",className:"input",placeholder:"Harga Beli",name:"purchasePrice",onChange:I})})]}),Object(j.jsxs)("div",{className:"field mt-5",children:[Object(j.jsx)("label",{className:"label",children:"Harga Jual"}),Object(j.jsx)("div",{className:"controls",children:Object(j.jsx)("input",{type:"number",className:"input",placeholder:"Harga Jual",name:"purchaseSell",onChange:I})})]}),Object(j.jsxs)("div",{className:"field mt-5",children:[Object(j.jsx)("label",{className:"label",children:"Stok"}),Object(j.jsx)("div",{className:"controls",children:Object(j.jsx)("input",{type:"number",className:"input",placeholder:"Stok",name:"stock",onChange:I})})]}),Object(j.jsx)("div",{className:"field mt-5",children:Object(j.jsx)("button",{className:"button is-success is-fullwidth",children:"Submit"})})]})})})})})]})}}}]);
//# sourceMappingURL=4.8189c269.chunk.js.map