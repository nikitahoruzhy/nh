(this["webpackJsonpsoft-compare"]=this["webpackJsonpsoft-compare"]||[]).push([[0],{17:function(e,a,n){},18:function(e,a,n){},19:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n(1),m=n.n(r),c=n(7),u=n.n(c),i=(n(17),n(2)),s=n(6),R=(n(18),"SPEED"),j="COMPATIBILITY",o="ANIMATIONS",h="LEARNING_CURVE",b="SIMPLICITY",l="TEAMWORK",O="ACCESEBILITY",p="TESTABILITY",d="TEST",f="INTUATIVITY",x="\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c",v="\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",g="\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f",I="\u041a\u0440\u0438\u0432\u0430\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",T="\u041f\u0440\u043e\u0441\u0442\u043e\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",S="\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430",A="\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c",E="\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",N="\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439",C="\u0418\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",F=[{name:R,nameRu:x},{name:j,nameRu:v},{name:o,nameRu:g},{name:h,nameRu:I},{name:b,nameRu:T},{name:l,nameRu:S},{name:O,nameRu:A},{name:p,nameRu:E},{name:d,nameRu:N},{name:f,nameRu:C}],L=[{name:"Figma",characteristics:[{name:R,nameRu:x,rate:3},{name:j,nameRu:v,rate:4},{name:o,nameRu:g,rate:8},{name:h,nameRu:I,rate:7},{name:b,nameRu:T,rate:3},{name:l,nameRu:S,rate:4},{name:O,nameRu:A,rate:4},{name:p,nameRu:E,rate:1},{name:d,nameRu:N,rate:10},{name:f,nameRu:C,rate:8}]},{name:"InVision Studio",characteristics:[{name:R,nameRu:x,rate:2},{name:j,nameRu:v,rate:4},{name:o,nameRu:g,rate:6},{name:h,nameRu:I,rate:5},{name:b,nameRu:T,rate:3},{name:l,nameRu:S,rate:4},{name:O,nameRu:A,rate:9},{name:p,nameRu:E,rate:10},{name:d,nameRu:N,rate:7},{name:f,nameRu:C,rate:7}]},{name:"Marvel",characteristics:[{name:R,nameRu:x,rate:6},{name:j,nameRu:v,rate:6},{name:o,nameRu:g,rate:4},{name:h,nameRu:I,rate:9},{name:b,nameRu:T,rate:10},{name:l,nameRu:S,rate:8},{name:O,nameRu:A,rate:6},{name:p,nameRu:E,rate:10},{name:d,nameRu:N,rate:1},{name:f,nameRu:C,rate:10}]},{name:"Adobe XD",characteristics:[{name:R,nameRu:x,rate:10},{name:j,nameRu:v,rate:8},{name:o,nameRu:g,rate:5},{name:h,nameRu:I,rate:5},{name:b,nameRu:T,rate:6},{name:l,nameRu:S,rate:8},{name:O,nameRu:A,rate:9},{name:p,nameRu:E,rate:10},{name:d,nameRu:N,rate:4},{name:f,nameRu:C,rate:5}]},{name:"Axure",characteristics:[{name:R,nameRu:x,rate:7},{name:j,nameRu:v,rate:10},{name:o,nameRu:g,rate:7},{name:h,nameRu:I,rate:9},{name:b,nameRu:T,rate:10},{name:l,nameRu:S,rate:4},{name:O,nameRu:A,rate:2},{name:p,nameRu:E,rate:3},{name:d,nameRu:N,rate:3},{name:f,nameRu:C,rate:4}]}];function M(e){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("label",{htmlFor:e.name,children:e.nameRu}),Object(t.jsx)("input",{id:e.name,type:"checkbox",value:e.name,onChange:function(a){return e.changeHandler(a)}}),Object(t.jsx)("br",{})]})}var y=n(8),B=n(9),P=n(11),Y=n(10),k=function(e){Object(P.a)(n,e);var a=Object(Y.a)(n);function n(){return Object(y.a)(this,n),a.call(this)}return Object(B.a)(n,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"program",children:[Object(t.jsx)("h2",{children:this.props.name}),Object(t.jsx)("div",{className:"characteristics",children:this.props.characteristics.map((function(e,a){return Object(t.jsx)("div",{children:Object(t.jsxs)("div",{children:[e.nameRu,": ",e.rate]})},a)}))})]})}}]),n}(m.a.Component);var D=function(){var e=Object(r.useState)([]),a=Object(s.a)(e,2),n=a[0],m=a[1],c=Object(r.useState)([]),u=Object(s.a)(c,2),R=u[0],j=u[1],o=function(e){var a=e.currentTarget.value;if(n.includes(a))return m(Object(i.a)(n.filter((function(e){return e!==a}))));m([].concat(Object(i.a)(n),[a]))};Object(r.useEffect)((function(){}),[R]);var h=function(e){return n.reduce((function(a,n){var t;return e.characteristics.map((function(e){e.name===n&&(t=e.rate)})),a+t}),0)};return 0===R.length?Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("div",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430:"}),Object(t.jsxs)("form",{onSubmit:function(e){return function(e){var a=[];e.preventDefault(),L.map((function(e){a.push({app:e,rateSum:h(e)})})),console.log(a),a.sort((function(e,a){return a.rateSum-e.rateSum})),console.log(a),j(a)}(e)},children:[F.map((function(e,a){return Object(t.jsx)(M,{name:e.name,nameRu:e.nameRu,changeHandler:o},a)})),Object(t.jsx)("input",{type:"submit",role:"button",value:"\u0421\u0440\u0430\u0432\u043d\u0438\u0442\u044c"})]}),JSON.stringify(n)]}):Object(t.jsx)("div",{className:"result",children:Object(t.jsx)("div",{className:"result-inner",children:R.map((function(e,a){return 0===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h2",{children:"\u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435:"}),Object(t.jsx)(k,{name:e.app.name,characteristics:Object(i.a)(e.app.characteristics)},a)]}):2===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h2",{children:"\u041d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u043e:"}),Object(t.jsx)(k,{name:e.app.name,characteristics:Object(i.a)(e.app.characteristics)},a)]}):Object(t.jsx)(k,{name:e.app.name,characteristics:Object(i.a)(e.app.characteristics)},a)}))})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,m=a.getLCP,c=a.getTTFB;n(e),t(e),r(e),m(e),c(e)}))};u.a.render(Object(t.jsx)(m.a.StrictMode,{children:Object(t.jsx)(D,{})}),document.getElementById("root")),J()}},[[19,1,2]]]);
//# sourceMappingURL=main.cb508a69.chunk.js.map