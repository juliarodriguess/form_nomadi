(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(60)},30:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),s=a(64),m=a(63),i=a(62),c=(a(30),a(12),a(61));a(33);var u=function(e){return r.a.createElement(c.a,{to:e.url,className:"btn btn-primary w-75 mw-100 p-2",id:"component-button-next"},e.children)};var d=function(){return r.a.createElement("main",{className:"home"},r.a.createElement("h1",null,"nomadi",r.a.createElement("span",null,".")),r.a.createElement("section",null,r.a.createElement(u,{url:"/pedido"},"Fazer um pedido"),r.a.createElement(u,{url:"/pedido"},"Falar com um consultor")))},p=a(6),h=a(7),E=a(9),f=a(8),b=a(10);a(37);var g=function(e){return r.a.createElement("fieldset",{className:"input"},r.a.createElement("label",{htmlFor:e.htmlFor},e.children),r.a.createElement("input",{id:e.id,type:e.type,name:e.name}))},v=(a(39),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).handleOptionChange=function(e){a.setState({selectedOption:e.target.value})},a.state={selectedOption:""},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(e){return r.a.createElement("fieldset",{className:"complement-property"},r.a.createElement("fieldset",{className:"apt"},r.a.createElement(g,{htmlFor:"aptNumber",id:"aptNumber",type:"text",name:"aptNumber"},"Apartamento:"),r.a.createElement(g,{htmlFor:"stgNumber",id:"stgNumber",type:"text",name:"stgNumber"},"Andar:")),r.a.createElement("fieldset",{className:"has-lift"},r.a.createElement("legend",null,"Tem elevador?"),r.a.createElement("input",{type:"radio",id:this.props.idYes,name:this.props.name,value:"sim"}),r.a.createElement("label",{className:"has-lift",htmlFor:this.props.idYes,children:"Sim"}),r.a.createElement("input",{type:"radio",id:this.props.idNo,name:this.props.name,value:"nao"}),r.a.createElement("label",{className:"has-lift",htmlFor:this.props.idNo,children:"N\xe3o"})))}}]),t}(n.Component));a(41);var C=function(){return r.a.createElement("fieldset",{className:"comments"},r.a.createElement(g,{htmlFor:"comments",id:"comments",type:"text",name:"comments"},"Observa\xe7\xf5es:"))},N=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).selectedChangeOrigem=function(e){var t=e.target.value;"apartamento"===t?(a.setState({showComplement:!0}),a.setState({showComments:!1})):"casa"===t&&(a.setState({showComments:!0}),a.setState({showComplement:!1}))},a.state={value:"",showComplement:!1,showComments:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"origem"},r.a.createElement("h2",null,"Origem"),r.a.createElement(g,{htmlFor:"adrStr",id:"adrStr",type:"text",name:"adrStr"},"Endere\xe7o:"),r.a.createElement("fieldset",{className:"property-options"},r.a.createElement("legend",null,"Tipo de im\xf3vel:"),r.a.createElement("input",{type:"radio",id:"ap",name:"tipo-origem",value:"apartamento",onChange:this.selectedChangeOrigem}),r.a.createElement("label",{className:"property-options",htmlFor:"ap",children:"Apartamento"}),r.a.createElement("input",{type:"radio",id:"casa",name:"tipo-origem",value:"casa",onChange:this.selectedChangeOrigem}),r.a.createElement("label",{className:"property-options",htmlFor:"casa",children:"Casa"})),this.state.showComplement&&r.a.createElement(v,{idNo:"noHasLiftOrigem",idYes:"yesHasLiftOrigem",name:"hasLiftOrigem"}),this.state.showComments&&r.a.createElement(C,null))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).selectedChangeDestino=function(e){var t=e.target.value;"apartamento"===t?(a.setState({showComplement:!0}),a.setState({showComments:!1})):"casa"===t&&(a.setState({showComments:!0}),a.setState({showComplement:!1}))},a.state={value:"",showComplement:!1,showComments:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"origem"},r.a.createElement("h2",null,"Destino"),r.a.createElement(g,{htmlFor:"adrStr",id:"adrStr",type:"text",name:"adrStr"},"Endere\xe7o:"),r.a.createElement("fieldset",{className:"property-options"},r.a.createElement("legend",null,"Tipo de im\xf3vel:"),r.a.createElement("input",{type:"radio",id:"apDestino",name:"tipo-destino",value:"apartamento",onChange:this.selectedChangeDestino}),r.a.createElement("label",{class:"radio-btn",htmlFor:"apDestino",children:"Apartamento"}),r.a.createElement("input",{type:"radio",id:"casaDestino",name:"tipo-destino",value:"casa",onChange:this.selectedChangeDestino}),r.a.createElement("label",{class:"radio-btn",htmlFor:"casaDestino",children:"Casa"})),this.state.showComplement&&r.a.createElement(v,{idNo:"noHasLiftDestino",idYes:"yesHasLiftDestino",name:"hasLiftDestino"}),this.state.showComments&&r.a.createElement(C,null))}}]),t}(r.a.Component),y=a(19),w=a.n(y),j=(a(53),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).selectedChange=function(e){"outro"===e.target.value?a.setState({showInput:!0}):a.setState({showInput:!1})},a.state={showInput:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"portage-date"},r.a.createElement("h2",null,"Data e Hora"),r.a.createElement("label",{htmlFor:"datePicker"},"Escolha as poss\xedveis datas da sua mudan\xe7a:"),r.a.createElement(w.a,{id:"datePicker",onSubmit:function(e){return console.log("selected date",e)}}),r.a.createElement("fieldset",{className:"hourPeriod"},r.a.createElement("legend",null,"Escolha o per\xedodo:"),r.a.createElement("input",{type:"radio",id:"manha",name:"period",value:"manha"}),r.a.createElement("label",{className:"hourPeriod",htmlFor:"manha",children:"Manh\xe3 (de 09h - 12h)"}),r.a.createElement("input",{type:"radio",id:"tarde",name:"period",value:"tarde"}),r.a.createElement("label",{className:"hourPeriod",htmlFor:"tarde",children:"Tarde (de 12h - 18h)"}),r.a.createElement("input",{type:"radio",id:"outro",name:"period",value:"outro",onChange:this.selectedChange}),r.a.createElement("label",{className:"hourPeriod",htmlFor:"outro",children:"Outro (definir)"})),r.a.createElement("fieldset",{className:"otherHourPeriod"},this.state.showInput&&r.a.createElement(g,null)))}}]),t}(n.Component));a(55);var F=function(){return r.a.createElement("form",{className:"pedido"},r.a.createElement("h1",null,"Descubra o valor do seu frete"),r.a.createElement("fieldset",null,r.a.createElement(N,null)),r.a.createElement("fieldset",null,r.a.createElement(O,null)),r.a.createElement("fieldset",null,r.a.createElement(j,null)),r.a.createElement("div",{className:"btn"},r.a.createElement(u,{url:"/"},"Pr\xf3ximo")))};a(57);o.a.render(r.a.createElement(i.a,null,r.a.createElement(function(){return r.a.createElement("div",{className:"app"},r.a.createElement(s.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:d}),r.a.createElement(m.a,{path:"/pedido",component:F})))},null)),document.getElementById("form-pedido"))}},[[25,2,1]]]);
//# sourceMappingURL=main.7cb12cdb.chunk.js.map