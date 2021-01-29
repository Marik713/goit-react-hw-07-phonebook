(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={FormEditor:"ContactForm_FormEditor__3zqk3",FormEditor_label:"ContactForm_FormEditor_label__278LP",FormEditor_input:"ContactForm_FormEditor_input__XKcim",FormEditor_button:"ContactForm_FormEditor_button__22XsU"}},15:function(t,e,n){t.exports={ContactList_item:"ContactListItem_ContactList_item__2CnWz",ContactList_button:"ContactListItem_ContactList_button__1srlO",numberContact:"ContactListItem_numberContact__3K-1P",contactWrapper:"ContactListItem_contactWrapper__3Cfog"}},22:function(t,e,n){t.exports={filterEditor_input:"Filter_filterEditor_input__2mc8O",filterContainer:"Filter_filterContainer__1fEJD",title:"Filter_title__1irs9"}},36:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__2ZwlY"}},37:function(t,e,n){t.exports={enter:"contact_enter__1rgsw",enterActive:"contact_enterActive__2lu9B",exit:"contact_exit__3W5t4",exitActive:"contact_exitActive__3UfGh"}},39:function(t,e,n){t.exports={loader:"Loader_loader__2ywMg"}},41:function(t,e,n){t.exports={appear:"title_appear__wbhlf",appearDone:"title_appearDone__6raFY"}},42:function(t,e,n){t.exports={enter:"filter_enter__2R3w8",enterActive:"filter_enterActive__1Ku8b",exit:"filter_exit__1SFwA",exitActive:"filter_exitActive__nP45_"}},94:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n(10),o=n.n(r),i=n(17),s=n(18),u=n(21),l=n(20),b=n(9),d=n(96),m=n(36),j=n.n(m),f=n(19),_=n(14),h=n.n(_),C=n(3),O=Object(C.b)("contacts/addRequest"),p=Object(C.b)("contacts/addSuccess"),v=Object(C.b)("contacts/addError"),x=Object(C.b)("contacts/removeRequest"),g=Object(C.b)("contacts/removeSuccess"),F=Object(C.b)("contacts/removeError"),E={addContactRequest:O,addContactSuccess:p,addContactError:v,fetchContactsRequest:Object(C.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(C.b)("contacts/fetchSuccess"),fetchContactsError:Object(C.b)("contacts/fetchError"),removeContactRequest:x,removeContactSuccess:g,removeContactError:F,changeFilter:Object(C.b)("contacts/changeFilter")};h.a.defaults.baseURL="http://localhost:2000";var L={addContact:function(t){return function(e){e(E.addContactRequest()),h.a.post("/contacts",t).then((function(t){var n=t.data;return e(E.addContactSuccess(n))})).catch((function(t){return e(E.addContactError(t))}))}},fetchContacts:function(){return function(t){t(E.fetchContactsRequest()),h.a.get("/contacts").then((function(e){var n=e.data;return t(E.fetchContactsSuccess(n))})).catch((function(e){return t(E.fetchContactsError())}))}},removeContact:function(t){return function(e){e(E.removeContactRequest()),h.a.delete("/contacts/".concat(t)).then((function(){return e(E.removeContactSuccess(t))})).catch((function(t){return e(E.removeContactError(t))}))}}},y=n(15),N=n.n(y),S=n(16),R=function(t){return t.tasks.items},k=function(t){return t.tasks.filter},q={getLoading:function(t){return t.tasks.loading},getFilter:k,getVisibleContacts:Object(S.a)([R,k],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContactById:Object(S.a)([function(t,e){return e},R],(function(t,e){return e.find((function(e){return e.id===t}))}))},w=Object(b.b)((function(t,e){var n=q.getContactById(t,e.id);return Object(f.a)({},n)}),(function(t,e){return{onRemove:function(){return t(L.removeContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.onRemove;return Object(c.jsxs)("li",{className:N.a.ContactList_item,children:[Object(c.jsxs)("div",{className:N.a.contactWrapper,children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)("p",{className:N.a.numberContact,children:n})]}),Object(c.jsx)("button",{className:N.a.ContactList_button,type:"button",name:"delete",onClick:a,children:"\u2716"})]})})),A=n(97),I=n(37),D=n.n(I),P=Object(b.b)((function(t){return{contacts:q.getVisibleContacts(t)}}))((function(t){var e=t.contacts;return Object(c.jsx)(A.a,{component:"ul",className:j.a.ContactList,children:e.map((function(t){var e=t.id;return Object(c.jsx)(d.a,{timeout:250,unmountOnExit:!0,classNames:D.a,children:Object(c.jsx)(w,{id:e},e)},e)}))})})),W=n(22),B=n.n(W),J={onChangeFilter:E.changeFilter},K=Object(b.b)((function(t){return{value:q.getFilter(t)}}),J)((function(t){var e=t.value,n=t.onChangeFilter;return Object(c.jsxs)("div",{className:B.a.filterContainer,children:[Object(c.jsx)("h3",{className:B.a.title,children:"Find contacts by name"}),Object(c.jsx)("input",{className:B.a.filterEditor_input,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})),U=n(38),z=n.n(U),M=n(39),T=n.n(M),V=function(){return Object(c.jsx)("div",{className:T.a.loader,children:Object(c.jsx)(z.a,{type:"ThreeDots",color:"grey",height:100,width:100,timeout:3e3})})},X=n(4),Y=n(11),G=n.n(Y),Z=n(40),H=n.n(Z),Q=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(X.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(f.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("form",{className:G.a.FormEditor,onSubmit:this.handleSubmit,children:[Object(c.jsxs)("label",{className:G.a.FormEditor_label,children:["Name",Object(c.jsx)("input",{className:G.a.FormEditor_input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(c.jsxs)("label",{className:G.a.FormEditor_label,children:["Number",Object(c.jsx)(H.a,{className:G.a.FormEditor_input,type:"text",name:"number",value:this.state.number,required:!0,mask:"999-99-99",onChange:this.handleChange})]}),Object(c.jsx)("button",{className:G.a.FormEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),$={onAddContact:L.addContact},tt=Object(b.b)(null,$)(Q);Q.defaultProps={name:"",number:""};var et,nt,ct=n(41),at=n.n(ct),rt=n(42),ot=n.n(rt),it=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"mainContainer",children:[Object(c.jsx)(d.a,{in:!0,timeout:500,classNames:at.a,appear:!0,children:Object(c.jsx)("h1",{className:"mainTitle",children:"Phonebook"})}),Object(c.jsx)(tt,{}),Object(c.jsx)(d.a,{in:!0,timeout:250,unmountOnExit:!0,classNames:ot.a,children:Object(c.jsx)(K,{})}),this.props.isLoadingContacts&&Object(c.jsx)(V,{}),Object(c.jsx)(P,{})]})}}]),n}(a.Component),st={onFetchContacts:L.fetchContacts},ut=Object(b.b)((function(t){return{isLoadingContacts:q.getLoading(t)}}),st)(it),lt=n(43),bt=n(8),dt=Object(C.c)([],(et={},Object(X.a)(et,E.fetchContactsSuccess,(function(t,e){return e.payload})),Object(X.a)(et,E.addContactSuccess,(function(t,e){return[e.payload].concat(Object(lt.a)(t))})),Object(X.a)(et,E.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),et)),mt=Object(C.c)("",Object(X.a)({},E.changeFilter,(function(t,e){return e.payload}))),jt=Object(C.c)(!1,(nt={},Object(X.a)(nt,E.fetchContactRequest,(function(){return!0})),Object(X.a)(nt,E.fetchContactsSuccess,(function(){return!1})),Object(X.a)(nt,E.fetchContactsError,(function(){return!1})),Object(X.a)(nt,E.addContactRequest,(function(){return!0})),Object(X.a)(nt,E.addContactSuccess,(function(){return!1})),Object(X.a)(nt,E.addContactError,(function(){return!1})),Object(X.a)(nt,E.removeContactRequest,(function(){return!0})),Object(X.a)(nt,E.removeContactSuccess,(function(){return!1})),Object(X.a)(nt,E.removeContactError,(function(){return!1})),nt)),ft=Object(bt.c)({items:dt,filter:mt,loading:jt}),_t=Object(C.a)({reducer:{tasks:ft}});n(94);o.a.render(Object(c.jsx)(b.a,{store:_t,children:Object(c.jsx)(ut,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.1221fff9.chunk.js.map