(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(60)},30:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),o=a.n(r),m=a(64),s=a(63),i=a(62),c=a(61);a(30);var d=function(e){return l.a.createElement("header",{className:"navbar_nomadi"},l.a.createElement(c.a,{to:"/"},l.a.createElement("h2",null,"nomadi",l.a.createElement("span",null,"."))))};a(34),a(36),a(15);var u=function(e){return l.a.createElement(c.a,{to:e.url,className:"btn btn-primary w-75 mw-100 p-2",id:"component-button-next"},e.children)};var h=function(){return l.a.createElement("main",{className:"home"},l.a.createElement("section",{className:"title-home"},l.a.createElement("h1",null,"T\xe3o simples que nem parece mudan\xe7a.")),l.a.createElement("section",{className:"buttons-home"},l.a.createElement(u,{url:"/pedido"},"Fazer um pedido"),l.a.createElement(u,{url:"/pedido"},"Falar com um consultor")))},p=a(6),E=a(7),f=a(9),b=a(8),g=a(10);a(39);var v=function(e){return l.a.createElement("fieldset",{className:"input"},l.a.createElement("label",{htmlFor:e.htmlFor},e.children),l.a.createElement("input",{id:e.id,type:e.type,name:e.name}))},C=(a(41),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).handleOptionChange=function(e){"nao"===e.target.value?a.setState({selectedOption:!0}):a.setState({selectedOption:!1})},a.state={selectedOption:""},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(e){return l.a.createElement("fieldset",{className:"complement-property"},l.a.createElement("fieldset",{className:"apt"},l.a.createElement(v,{htmlFor:"aptNumber",id:"aptNumber",type:"text",name:"aptNumber"},"Apartamento:")),l.a.createElement("fieldset",{className:"has-lift"},l.a.createElement("legend",null,"Tem elevador?"),l.a.createElement("input",{type:"radio",id:this.props.idYes,name:this.props.name,value:"sim",onChange:this.handleOptionChange}),l.a.createElement("label",{className:"has-lift",htmlFor:this.props.idYes,children:"Sim"}),l.a.createElement("input",{type:"radio",id:this.props.idNo,name:this.props.name,value:"nao",onChange:this.handleOptionChange}),l.a.createElement("label",{className:"has-lift",htmlFor:this.props.idNo,children:"N\xe3o"})),this.state.selectedOption&&l.a.createElement(v,{htmlFor:"stgNumber",id:"stgNumber",type:"text",name:"stgNumber"},"Andar:"))}}]),t}(n.Component));var N=function(){return l.a.createElement("fieldset",{className:"comments"},l.a.createElement(v,{htmlFor:"comments",id:"comments",type:"text",name:"comments"},"Observa\xe7\xf5es:"))},O=[{id:"ap",name:"tipo-origem",value:"apartamento",children:"Apartamento"},{id:"casa",name:"tipo-origem",value:"casa",children:"Casa"}],w=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).selectedChangeOrigem=function(e){var t=e.target.value;"apartamento"===t?(a.setState({showComplement:!0}),a.setState({showComments:!1})):"casa"===t&&(a.setState({showComments:!0}),a.setState({showComplement:!1}))},a.state={value:"",showComplement:!1,showComments:!1},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"origem"},l.a.createElement("h2",null,"Origem"),l.a.createElement(v,{htmlFor:"adrStr",id:"adrStr",type:"text",name:"adrStr"},"Endere\xe7o:"),l.a.createElement("fieldset",{className:"property-options"},l.a.createElement("legend",null,"Tipo de im\xf3vel:"),O.map(function(t){return l.a.createElement(n.Fragment,null,l.a.createElement("input",{type:"radio",id:t.id,name:t.name,value:t.value,onChange:e.selectedChangeOrigem}),l.a.createElement("label",{className:"property-options",htmlFor:t.id,children:t.children}))})),this.state.showComplement&&l.a.createElement(C,{idNo:"noHasLiftOrigem",idYes:"yesHasLiftOrigem",name:"hasLiftOrigem"}),this.state.showComments&&l.a.createElement(N,null))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).selectedChangeDestino=function(e){var t=e.target.value;"apartamento"===t?(a.setState({showComplement:!0}),a.setState({showComments:!1})):"casa"===t&&(a.setState({showComments:!0}),a.setState({showComplement:!1}))},a.state={value:"",showComplement:!1,showComments:!1},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"origem"},l.a.createElement("h2",null,"Destino"),l.a.createElement(v,{htmlFor:"adrStr",id:"adrStr",type:"text",name:"adrStr"},"Endere\xe7o:"),l.a.createElement("fieldset",{className:"property-options"},l.a.createElement("legend",null,"Tipo de im\xf3vel:"),l.a.createElement("input",{type:"radio",id:"apDestino",name:"tipo-destino",value:"apartamento",onChange:this.selectedChangeDestino}),l.a.createElement("label",{class:"radio-btn",htmlFor:"apDestino",children:"Apartamento"}),l.a.createElement("input",{type:"radio",id:"casaDestino",name:"tipo-destino",value:"casa",onChange:this.selectedChangeDestino}),l.a.createElement("label",{class:"radio-btn",htmlFor:"casaDestino",children:"Casa"})),this.state.showComplement&&l.a.createElement(C,{idNo:"noHasLiftDestino",idYes:"yesHasLiftDestino",name:"hasLiftDestino"}),this.state.showComments&&l.a.createElement(N,null))}}]),t}(l.a.Component),j=a(20),S=a.n(j),F=(a(53),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).selectedChange=function(e){"outro"===e.target.value?a.setState({showInput:!0}):"outro"!==e.target.value&&a.setState({showInput:!1})},a.state={showInput:!1},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"portage-date"},l.a.createElement("h2",null,"Data e Hora"),l.a.createElement(S.a,{id:"datePicker",onSubmit:function(e){return console.log("selected date",e)}}),l.a.createElement("fieldset",{className:"hourPeriod"},l.a.createElement("legend",null,"Escolha o per\xedodo:"),l.a.createElement("input",{type:"radio",id:"manha",name:"period",value:"manha",onChange:this.selectedChange}),l.a.createElement("label",{className:"hourPeriod",htmlFor:"manha",children:"Manh\xe3 (de 09h - 12h)"}),l.a.createElement("input",{type:"radio",id:"tarde",name:"period",value:"tarde",onChange:this.selectedChange}),l.a.createElement("label",{className:"hourPeriod",htmlFor:"tarde",children:"Tarde (de 12h - 18h)"}),l.a.createElement("input",{type:"radio",id:"dia",name:"period",value:"dia",onChange:this.selectedChange}),l.a.createElement("label",{className:"hourPeriod",htmlFor:"dia",children:"Em hor\xe1rio comercial (de 9h - 18h)"}),l.a.createElement("input",{type:"radio",id:"outro",name:"period",value:"outro",onChange:this.selectedChange}),l.a.createElement("label",{className:"hourPeriod",htmlFor:"outro",children:"Outro (definir)"})),l.a.createElement("fieldset",{className:"otherHourPeriod"},this.state.showInput&&l.a.createElement(v,null)))}}]),t}(n.Component));a(55);var D=function(){return l.a.createElement("form",{className:"pedido"},l.a.createElement("h1",null,"Descubra o valor do seu frete"),l.a.createElement("fieldset",null,l.a.createElement(w,null)),l.a.createElement("fieldset",null,l.a.createElement(y,null)),l.a.createElement("fieldset",null,l.a.createElement(F,null)),l.a.createElement("div",{className:"btn"},l.a.createElement(u,{url:"/"},"Pr\xf3ximo")))};a(57);o.a.render(l.a.createElement(i.a,null,l.a.createElement(function(){return l.a.createElement("div",{className:"app"},l.a.createElement(d,null),l.a.createElement(m.a,null,l.a.createElement(s.a,{path:"/",exact:!0,component:h}),l.a.createElement(s.a,{path:"/pedido",component:D})))},null)),document.getElementById("form-pedido"))}},[[25,2,1]]]);
//# sourceMappingURL=main.4f5c762d.chunk.js.map