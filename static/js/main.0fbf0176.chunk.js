(this["webpackJsonpform-correios-v2"]=this["webpackJsonpform-correios-v2"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(10),n=a.n(c),o=a(2),r=a(3),l=a(5),d=a(4),j=a(9),h=a(6),u=a.p+"static/media/icon-remove.15c4fe00.svg",b=a(8),m=a.n(b),p=a(0),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"remover",value:function(){var e=this.props.indice;console.log(e),this.props.removerItem(e),this.props.calcularQuantidadeTotal(),this.props.calcularValorTotal()}},{key:"_handleConteudoDescricao",value:function(e){var t=e.target.textContent,a=e.target.id;this.props.atualizarListaDescricoes(a,t)}},{key:"_handleConteudoQuantidade",value:function(e){var t=e,a=this.props.indice;this.props.atualizarListaQuantidades(t,a),this.props.calcularQuantidadeTotal()}},{key:"_handleConteudoValores",value:function(e){var t=e,a=this.props.indice;this.props.atualizarListaValores(t,a),this.props.calcularValorTotal()}},{key:"render",value:function(){var e=this.props.indice+1;return Object(p.jsx)("section",{className:"section-descricao-item",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row dados_item",children:[Object(p.jsx)("div",{className:"col-1 coluna-indice",children:Object(p.jsx)("span",{children:e})}),Object(p.jsxs)("div",{className:"col-7 descricao-item",children:[Object(p.jsx)("div",{className:"col-11 fake-input-descricao",contentEditable:"true",id:this.props.indice,onKeyUp:this._handleConteudoDescricao.bind(this),placeholder:"Descri\xe7\xe3o",children:this.props.descricao}),Object(p.jsx)("div",{className:"col-1 remover-item",children:Object(p.jsx)("img",{src:u,alt:"Remova este item",onClick:this.remover.bind(this)})})]}),Object(p.jsx)("div",{className:"col-2 quantidade-item",children:Object(p.jsx)(m.a,{className:"input-quantidade",type:"number",min:0,max:9999,step:1,precision:0,value:this.props.quantidade,onChange:this._handleConteudoQuantidade.bind(this)})}),Object(p.jsx)("div",{className:"col-2 valor-item",children:Object(p.jsx)(m.a,{className:"input-valor",type:"number",step:1,precision:2,min:0,max:9999,value:this.props.valor,onChange:this._handleConteudoValores.bind(this)})})]})})})}}]),a}(i.Component),O=a.p+"static/media/icon-add.376e9b6a.svg",x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state_lista={itens:[]},e.state_valor_total={valor_total:0},e._novosItens=e._novosItens.bind(Object(h.a)(e)),e._novoValorTotal=e._novoValorTotal.bind(Object(h.a)(e)),e._novaQuantidadeTotal=e._novaQuantidadeTotal.bind(Object(h.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){console.log("Lista de Itens montado"),this.props.lista.inscrever(this._novosItens)}},{key:"componentWillUnmount",value:function(){this.props.lista.desinscrever(this._novosItens)}},{key:"_handleAdicionarLinha",value:function(){console.log("Deveria adicionar uma nova linha"),this.props.adicionarItem("",0,0)}},{key:"_novosItens",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state_lista),{},{itens:e}))}},{key:"_novoValorTotal",value:function(e){this.setState()}},{key:"_novaQuantidadeTotal",value:function(e){this.setState()}},{key:"imprimir",value:function(){window.print()}},{key:"render",value:function(){var e=this;return Object(p.jsx)("section",{className:"lista-itens",children:Object(p.jsxs)("div",{className:"container identificacao_dos_bens",children:[Object(p.jsx)("h2",{children:"Identifica\xe7\xe3o dos Bens"}),Object(p.jsxs)("div",{className:"row identificacao_cabecalho",children:[Object(p.jsx)("div",{className:"col-1",children:Object(p.jsx)("span",{children:"Item"})}),Object(p.jsx)("div",{className:"col-7",children:Object(p.jsx)("span",{children:"Conte\xfado"})}),Object(p.jsx)("div",{className:"col-2",children:Object(p.jsx)("span",{children:"Quant."})}),Object(p.jsx)("div",{className:"col-2",children:Object(p.jsx)("span",{children:"Valor"})})]}),this.props.lista.itens.map((function(t,a){return Object(p.jsx)("div",{children:Object(p.jsx)(v,{indice:a,descricao:t.descricao,quantidade:t.quantidade,valor:t.valor,removerItem:e.props.removerItem,atualizarListaDescricoes:e.props.atualizarListaDescricoes,atualizarListaQuantidades:e.props.atualizarListaQuantidades,atualizarListaValores:e.props.atualizarListaValores,calcularValorTotal:e.props.calcularValorTotal,calcularQuantidadeTotal:e.props.calcularQuantidadeTotal})},a)})),Object(p.jsx)("div",{className:"row adicionar-item",children:Object(p.jsxs)("div",{className:"container ",children:[Object(p.jsxs)("button",{onClick:this._handleAdicionarLinha.bind(this),children:[Object(p.jsx)("img",{src:O,alt:"Adicionar nova Linha"})," Adicionar"]}),Object(p.jsx)("button",{onClick:this.imprimir,children:"Imprimir"})]})}),Object(p.jsxs)("div",{className:"row totais",children:[Object(p.jsx)("div",{className:"col-8",children:Object(p.jsx)("span",{children:"Totais"})}),Object(p.jsx)("div",{className:"col-2",children:Object(p.jsx)("span",{children:this.props.lista.quantidade_total})}),Object(p.jsx)("div",{className:"col-2",children:Object(p.jsxs)("span",{children:["R$ ",this.props.lista.valor_total]})})]}),Object(p.jsxs)("div",{className:"row peso_total",children:[Object(p.jsx)("div",{className:"col-8",children:Object(p.jsx)("span",{children:"Peso Total (KG):"})}),Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("span",{})})]})]})})}}]),a}(i.Component),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"cabecalho",children:[Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-sm titulo",children:Object(p.jsx)("h1",{children:"Declara\xe7\xe3o de Conte\xfado"})})})}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row remetente_destinatario",children:[Object(p.jsxs)("div",{className:"col-6 remetente",children:[Object(p.jsx)("h2",{children:"Remetente"}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-sm nome",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-2 ",children:Object(p.jsx)("span",{children:"Nome:"})}),Object(p.jsx)("div",{className:"col-10 ",children:Object(p.jsx)("input",{type:"text",id:"nome_remetente",placeholder:"Nome Sobrenome"})})]})})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm endereco",children:[Object(p.jsx)("span",{children:"Endere\xe7o:"}),Object(p.jsx)("textarea",{name:"endereco remetente",id:"endereco_remetente",rows:"4"})]})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-9 cidade",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-3",children:Object(p.jsx)("span",{children:"Cidade:"})}),Object(p.jsx)("div",{className:"col-9",children:Object(p.jsx)("input",{type:"text",id:"cidade_remetente",placeholder:"Cidade"})})]})}),Object(p.jsx)("div",{className:"col-3 uf",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("span",{children:"UF:"})}),Object(p.jsx)("div",{className:"col-8",children:Object(p.jsx)("input",{type:"text",id:"uf_remetente",placeholder:"UF"})})]})})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-5 cep",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-3",children:Object(p.jsx)("span",{children:"CEP:"})}),Object(p.jsx)("div",{className:"col-9",children:Object(p.jsx)("input",{type:"text",id:"cep_remetente",placeholder:"000.000.000-00"})})]})}),Object(p.jsx)("div",{className:"col-7 cpf_cnpj",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("span",{children:"CPF/CNPJ:"})}),Object(p.jsx)("div",{className:"col-8",children:Object(p.jsx)("input",{type:"text",id:"cpf-cnpj_remetente",placeholder:"000000"})})]})})]})]}),Object(p.jsxs)("div",{className:"col-6 destinatario",children:[Object(p.jsx)("h2",{children:"Destinat\xe1rio"}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm nome",children:[Object(p.jsx)("span",{children:"Nome:"}),Object(p.jsx)("input",{type:"text",id:"nome_destinatario",placeholder:"Nome Sobrenome"})]})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm endereco",children:[Object(p.jsx)("span",{children:"Endere\xe7o:"}),Object(p.jsx)("textarea",{name:"",id:"endereco_destinatario",rows:"4"})]})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-9 cidade",children:[Object(p.jsx)("span",{children:"Cidade:"}),Object(p.jsx)("input",{type:"text",id:"cidade_destintario",placeholder:"Cidade"})]}),Object(p.jsxs)("div",{className:"col-3 uf",children:[Object(p.jsx)("span",{children:"UF:"}),Object(p.jsx)("input",{type:"text",id:"uf_destinatario",placeholder:"UF"})]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-5 cep",children:[Object(p.jsx)("span",{children:"CEP:"}),Object(p.jsx)("input",{type:"text",id:"cep_destinatario",placeholder:"000000-000"})]}),Object(p.jsxs)("div",{className:"col-7 cpf_cnpj",children:[Object(p.jsx)("span",{children:"CPF/CNPJ:"}),Object(p.jsx)("input",{type:"text",id:"cpf-cnpj_destinatario",placeholder:"00000000000"})]})]})]})]})})]})}}]),a}(i.Component),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"footer",children:[Object(p.jsx)("div",{className:"container declaracao_final",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm",children:[Object(p.jsx)("h3",{children:"Declara\xe7\xe3o"}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm",children:[Object(p.jsx)("p",{children:"Declaro que n\xe3o me enquadro no conceito de contribuinte previsto no art. 4\xba da Lei Complementar n\xba 87/1996, uma vez que n\xe3o realizo, com habitualidade ou em volume que caracterize intuito comercial, opera\xe7\xf5es de circula\xe7\xe3o de mercadoria, ainda que se iniciem no exterior, ou estou dispensado da emiss\xe3o da nota fiscal por for\xe7a da legisla\xe7\xe3o tribut\xe1ria vigente, responsabilizando-me, nos termos da lei e a quem de direito, por informa\xe7\xf5es inver\xeddicas"}),Object(p.jsx)("p",{children:"Declaro ainda que n\xe3o estou postando conte\xfado inflam\xe1vel, explosivo, causador de combust\xe3o espont\xe2nea, t\xf3xico, corrosivo, g\xe1s ou qualquer outro conte\xfado que constitua perigo, conforme o art. 13 da Lei Postal n\xba 6.538/78."})]})}),Object(p.jsxs)("div",{className:"row assinaturas",children:[Object(p.jsxs)("div",{className:"col-3",children:[Object(p.jsx)("input",{type:"text",id:"assinatura_cidade"}),Object(p.jsx)("span",{children:","})]}),Object(p.jsxs)("div",{className:"col-1",children:[Object(p.jsx)("input",{type:"text",id:"assinatura_dia"}),Object(p.jsx)("span",{children:"de"})]}),Object(p.jsxs)("div",{className:"col-2",children:[Object(p.jsx)("input",{type:"text",id:"assinatura_mes"}),Object(p.jsx)("span",{children:"de"})]}),Object(p.jsx)("div",{className:"col-1",children:Object(p.jsx)("input",{type:"text",id:"assinatura_ano"})}),Object(p.jsx)("div",{className:"col-5",children:Object(p.jsx)("input",{type:"text",id:"assinatura_assinatura"})})]}),Object(p.jsxs)("div",{className:"row subassinaturas",children:[Object(p.jsx)("div",{className:"col-7"}),Object(p.jsx)("div",{className:"col-5",children:Object(p.jsx)("span",{children:"Assinatura do Declarante/Remetente"})})]})]})})}),Object(p.jsx)("div",{className:"container observacao",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm",children:[Object(p.jsx)("h4",{children:"Observa\xe7\xe3o:"}),Object(p.jsx)("p",{children:"Constitui crime contra a ordem tribut\xe1ria suprimir ou reduzir tributo, ou contribui\xe7\xe3o social e qualquer acess\xf3rio (Lei 8.137/90 Art. 1\xba, V)."})]})})})]})}}]),a}(i.Component),_=function(){function e(){Object(o.a)(this,e),this.itens=[{descricao:"",quantidade:0,valor:0}],console.log(this.itens),this.valor_total=0,this.quantidade_total=0,this._inscritos=[]}return Object(r.a)(e,[{key:"componentDidMount",value:function(){}},{key:"inscrever",value:function(e){this._inscritos.push(e)}},{key:"desinscrever",value:function(e){this._inscritos=this._inscritos.filter((function(t){return t!==e}))}},{key:"notificar",value:function(){var e=this;this._inscritos.forEach((function(t){t(e.itens)}))}},{key:"calcularValorTotal",value:function(){var e=0;this.itens.forEach((function(t){e+=t.valor})),this.valor_total=parseFloat(e).toFixed(2),this.notificar()}},{key:"calcularQuantidadeTotal",value:function(){var e=0;this.itens.forEach((function(t){e+=t.quantidade})),this.quantidade_total=e,this.notificar()}},{key:"adicionarItem",value:function(e,t,a){var i=this.itens,s=new y(e,t,a);i.push(s),console.log("Item adicionado (em teoria). Nova lista \xe9: "),console.log(i),this.notificar()}},{key:"removerItem",value:function(e){console.log("O item a ser removido tem o ID: "+e),this.itens.splice(e,1),this.notificar()}},{key:"manterDescricaoAtualizada",value:function(e,t){this.itens[e].descricao=t}},{key:"manterQuantidadeAtualizada",value:function(e,t){this.itens[t].quantidade=e}},{key:"manterValorAtualizado",value:function(e,t){this.itens[t].valor=e}}]),e}(),y=function e(t,a,i){Object(o.a)(this,e),this.descricao=t,this.quantidade=a,this.valor=i},C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).itens=new _,e}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(N,{}),Object(p.jsx)(x,{lista:this.itens,removerItem:this.itens.removerItem.bind(this.itens),adicionarItem:this.itens.adicionarItem.bind(this.itens),atualizarListaDescricoes:this.itens.manterDescricaoAtualizada.bind(this.itens),atualizarListaQuantidades:this.itens.manterQuantidadeAtualizada.bind(this.itens),atualizarListaValores:this.itens.manterValorAtualizado.bind(this.itens),calcularValorTotal:this.itens.calcularValorTotal.bind(this.itens),calcularQuantidadeTotal:this.itens.calcularQuantidadeTotal.bind(this.itens)}),Object(p.jsx)(f,{})]})}}]),a}(i.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))};a(19),a(20);n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),k()}},[[21,1,2]]]);
//# sourceMappingURL=main.0fbf0176.chunk.js.map