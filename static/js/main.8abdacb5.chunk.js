(this["webpackJsonpreact-hw-02-phonebook"]=this["webpackJsonpreact-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={nameText:"ContactList_nameText__8KOpq"}},11:function(t,e,n){t.exports={text:"Filter_text__20oAI"}},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(8),i=n.n(o),s=n(12),l=n(2),u=n(3),h=n(5),d=n(4),j=n(20);function b(t){var e=t.children;return Object(a.jsx)("div",{children:e})}function f(t){var e=t.children,n=t.title;return Object(a.jsxs)("section",{children:[n?Object(a.jsx)("h2",{children:n}):null,e]})}var m=n(9),p=n(7),O=n.n(p),v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",phone:""},t.onClearState=function(){return t.setState({name:"",phone:""})},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.phone;t.props.onAddContacts(a,c),t.onClearState()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.name,c=e.phone;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:O.a.form,onSubmit:function(e){return t.handleSubmit(e)},children:[Object(a.jsx)("label",{id:"name",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",id:"name",value:n,onChange:function(e){return t.handleChange(e)}}),Object(a.jsx)("label",{id:"phone",htmlFor:"phone",children:"Phone"}),Object(a.jsx)("input",{className:O.a.input,type:"tel",name:"phone",id:"phone",value:c,onChange:function(e){return t.handleChange(e)}}),Object(a.jsx)("button",{type:"submit",disabled:!(n&&c),children:"add contact"})]})})}}]),n}(c.Component);v.defaultProps={};var x=n(10),g=n.n(x);function C(t){var e=t.contactsData,n=t.onDeleteBtn;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.phone;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{className:g.a.nameText,children:[c,": ",Object(a.jsx)("span",{children:r})]}),Object(a.jsx)("button",{type:"button",onClick:function(t){return n(e)},children:"Delete"})]},e)}))})})}var y=n(11),F=n.n(y);function S(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:F.a.text,name:"filter",htmlFor:"filter",value:e,children:"Find contacts by name"}),Object(a.jsx)("input",{value:e,type:"text",id:"filter",onChange:function(t){return n(t.target.value)}})]})}var _=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.changeFilter=function(e){return t.setState({filter:e})},t.handleChangeFilter=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.handleDelBtn=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n})},t.isAdded=function(e){return t.state.contacts.map((function(t){return t.name})).includes(e)},t.addContacts=function(e,n){if(t.isAdded(e))return alert("".concat(e," is already in contacts"));t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{id:Object(j.a)(),name:e,phone:n}])}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.handleChangeFilter();return Object(a.jsxs)(b,{children:[Object(a.jsx)(f,{title:"Phonebook",children:Object(a.jsx)(v,{onAddContacts:this.addContacts})}),e.length?Object(a.jsxs)(f,{title:"Contacts",children:[Object(a.jsx)(S,{value:n,onChangeFilter:this.changeFilter}),Object(a.jsx)(C,{contactsData:c,onDeleteBtn:this.handleDelBtn})]}):null]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",input:"ContactForm_input__gm87B"}}},[[18,1,2]]]);
//# sourceMappingURL=main.8abdacb5.chunk.js.map