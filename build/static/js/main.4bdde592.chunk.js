(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(58)},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),m=a(62),s=a(61),i=a(60),c=a(59);a(11);var u=function(e){return r.a.createElement("header",{className:"navbar"},r.a.createElement(c.a,{to:"/"}))};a(33),a(35);var d=function(e){return r.a.createElement(c.a,{to:e.url,className:"btn btn-primary w-75 mw-100 p-2",id:"component-button-next"},e.children)};var h=function(){return r.a.createElement("main",{className:"home"},r.a.createElement("h1",null,"nomadi",r.a.createElement("span",null,".")),r.a.createElement("section",null,r.a.createElement(d,{url:"/pedido"},"Fazer um pedido"),r.a.createElement(d,{url:"/pedido"},"Falar com um consultor")))},p=a(6),E=a(7),f=a(9),b=a(8),v=a(10);a(37);var g=function(e){return r.a.createElement("fieldset",{className:"input"},r.a.createElement("label",{htmlFor:e.htmlFor},e.children),r.a.createElement("input",{id:e.id,type:e.type,name:e.name}))},N=(a(39),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).handleOptionChange=function(e){a.setState({selectedOption:e.target.value})},a.state={selectedOption:""},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(e){return r.a.createElement("fieldset",{className:"complement-property"},r.a.createElement("fieldset",{className:"apt"},r.a.createElement(g,{htmlFor:"aptNumber",id:"aptNumber",type:"number",name:"aptNumber"},"Apartamento:"),r.a.createElement(g,{htmlFor:"stgNumber",id:"stgNumber",type:"number",name:"stgNumber"},"Andar:")),r.a.createElement("fieldset",{className:"has-lift"},r.a.createElement("legend",null,"Tem elevador?"),r.a.createElement("input",{type:"radio",id:this.props.idYes,name:this.props.name,value:"sim"}),r.a.createElement("label",{className:"has-lift",htmlFor:this.props.idYes,children:"Sim"}),r.a.createElement("input",{type:"radio",id:this.props.idNo,name:this.props.name,value:"nao"}),r.a.createElement("label",{className:"has-lift",htmlFor:this.props.idNo,children:"N\xe3o"})))}}]),t}(n.Component));var C=function(){return r.a.createElement("fieldset",{className:"comments"},r.a.createElement(g,{htmlFor:"comments",id:"comments",type:"number",name:"comments"},"Observa\xe7\xf5es:"))},O=[{id:"ap",name:"tipo-origem",value:"apartamento",children:"Apartamento"},{id:"casa",name:"tipo-origem",value:"casa",children:"Casa"}],w=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).selectedChangeOrigem=function(e){var t=e.target.value;"apartamento"===t?(a.setState({showComplement:!0}),a.setState({showComments:!1})):"casa"===t&&(a.setState({showComments:!0}),a.setState({showComplement:!1}))},a.state={value:"",showComplement:!1,showComments:!1},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"origem"},r.a.createElement("h2",null,"Origem"),r.a.createElement(g,{htmlFor:"adrStr",id:"adrStr",type:"text",name:"adrStr"},"Endere\xe7o:"),r.a.createElement("fieldset",{className:"property-options"},r.a.createElement("legend",null,"Tipo de im\xf3vel:"),O.map(function(t){return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"radio",id:t.id,name:t.name,value:t.value,onChange:e.selectedChangeOrigem}),r.a.createElement("label",{className:"property-options",htmlFor:t.id,children:t.children}))})),this.state.showComplement&&r.a.createElement(N,{idNo:"noHasLiftOrigem",idYes:"yesHasLiftOrigem",name:"hasLiftOrigem"}),this.state.showComments&&r.a.createElement(C,null))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).selectedChangeDestino=function(e){var t=e.target.value;"apartamento"===t?(a.setState({showComplement:!0}),a.setState({showComments:!1})):"casa"===t&&(a.setState({showComments:!0}),a.setState({showComplement:!1}))},a.state={value:"",showComplement:!1,showComments:!1},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"origem"},r.a.createElement("h2",null,"Destino"),r.a.createElement(g,{htmlFor:"adrStr",id:"adrStr",type:"text",name:"adrStr"},"Endere\xe7o:"),r.a.createElement("fieldset",{className:"property-options"},r.a.createElement("legend",null,"Tipo de im\xf3vel:"),r.a.createElement("input",{type:"radio",id:"apDestino",name:"tipo-destino",value:"apartamento",onChange:this.selectedChangeDestino}),r.a.createElement("label",{class:"radio-btn",htmlFor:"apDestino",children:"Apartamento"}),r.a.createElement("input",{type:"radio",id:"casaDestino",name:"tipo-destino",value:"casa",onChange:this.selectedChangeDestino}),r.a.createElement("label",{class:"radio-btn",htmlFor:"casaDestino",children:"Casa"})),this.state.showComplement&&r.a.createElement(N,{idNo:"noHasLiftDestino",idYes:"yesHasLiftDestino",name:"hasLiftDestino"}),this.state.showComments&&r.a.createElement(C,null))}}]),t}(r.a.Component),j=a(20),F=a.n(j),S=(a(51),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).selectedChange=function(e){"outro"===e.target.value?a.setState({showInput:!0}):a.setState({showInput:!1})},a.state={showInput:!1},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"portage-date"},r.a.createElement("h2",null,"Data e Hora"),r.a.createElement("label",{htmlFor:"datePicker"},"Escolha as poss\xedveis datas da sua mudan\xe7a:"),r.a.createElement(F.a,{id:"datePicker",onSubmit:function(e){return console.log("selected date",e)}}),r.a.createElement("fieldset",{className:"hourPeriod"},r.a.createElement("legend",null,"Escolha o per\xedodo:"),r.a.createElement("input",{type:"radio",id:"manha",name:"period",value:"manha"}),r.a.createElement("label",{className:"hourPeriod",htmlFor:"manha",children:"Manh\xe3 (de 09h - 12h)"}),r.a.createElement("input",{type:"radio",id:"tarde",name:"period",value:"tarde"}),r.a.createElement("label",{className:"hourPeriod",htmlFor:"tarde",children:"Tarde (de 12h - 18h)"}),r.a.createElement("input",{type:"radio",id:"dia",name:"period",value:"dia"}),r.a.createElement("label",{className:"hourPeriod",htmlFor:"dia",children:"Em hor\xe1rio comercial (de 9h - 18h)"}),r.a.createElement("input",{type:"radio",id:"outro",name:"period",value:"outro",onChange:this.selectedChange}),r.a.createElement("label",{className:"hourPeriod",htmlFor:"outro",children:"Outro (definir)"})),r.a.createElement("fieldset",{className:"otherHourPeriod"},this.state.showInput&&r.a.createElement(g,null)))}}]),t}(n.Component));a(53);var D=function(){return r.a.createElement("form",{className:"pedido"},r.a.createElement("h1",null,"Descubra o valor do seu frete"),r.a.createElement("fieldset",null,r.a.createElement(w,null)),r.a.createElement("fieldset",null,r.a.createElement(y,null)),r.a.createElement("fieldset",null,r.a.createElement(S,null)),r.a.createElement("div",{className:"btn"},r.a.createElement(d,{url:"/"},"Pr\xf3ximo")))};a(55);o.a.render(r.a.createElement(i.a,null,r.a.createElement(function(){return r.a.createElement("div",{className:"app"},r.a.createElement(u,null),r.a.createElement(m.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:h}),r.a.createElement(s.a,{path:"/pedido",component:D})))},null)),document.getElementById("form-pedido"))}},[[25,2,1]]]);
//# sourceMappingURL=main.4bdde592.chunk.js.map