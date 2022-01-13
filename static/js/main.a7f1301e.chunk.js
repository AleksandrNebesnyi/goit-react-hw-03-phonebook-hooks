(this["webpackJsonpgoit-react-hw-03-phonebook-hooks"]=this["webpackJsonpgoit-react-hw-03-phonebook-hooks"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r,o,a,c=t(0),i=t.n(c),s=t(6),l=t.n(s),b=(t(18),t(11)),d=t(4),u=t(2),p=t(3),x=p.a.div(r||(r=Object(u.a)(["\nmax-width: 1440px;\nmargin-left: auto;\nmargin-right: auto;\npadding-left: 15px;\npadding-right: 15px;\n"]))),j=t(1),f=function(n){var e=n.children;return Object(j.jsx)(x,{children:e})},m=p.a.div(o||(o=Object(u.a)(["\npadding: 15px;\ntext-align: center;\n"]))),h=p.a.h1(a||(a=Object(u.a)(["\nmargin-bottom: 15px;\n"]))),O=function(n){var e=n.title,t=n.children;return Object(j.jsxs)(m,{children:[Object(j.jsx)(h,{children:e}),t]})};O.defaultProps={title:""};var g,v,w,y,C,k,S,z,D,A,F,I,J=O,L=t(12),N=p.a.form(g||(g=Object(u.a)(["\nwidth: 100%;\nmargin-right: auto;\nmargin-left: auto;\nmargin-bottom: 15px;\npadding: 15px;\nborder: 1px solid #d4d4d4;\n"]))),P=p.a.label(v||(v=Object(u.a)(["\ndisplay: flex;\nflex-direction: column;\n\nmargin-bottom: 15px;\n\ncolor: #333232;\n"]))),B=p.a.input(w||(w=Object(u.a)(["\npadding: 11px;\nborder: 1px solid rgba(33, 33, 33, 0.2);\nborder-radius: 4px;\n\ncursor: pointer;\n\n&:focus {\n    outline: transparent;\n    border: 1px solid #2196f3;\n}\n"]))),M=p.a.button(y||(y=Object(u.a)(["\nmin-width: 150px;\n  height: 40px;\n  border: 0px solid transparent;\n  border-radius: 4px;\n\n  color: #fff;\n  background-color: #2196f3;\n\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n\n  opacity: 1;\n\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n"]))),Z=function(n){var e=n.onSubmit,t=Object(c.useState)(""),r=Object(d.a)(t,2),o=r[0],a=r[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),l=s[0],b=s[1],u=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":b(r);break;default:return}},p=function(){a(""),b("")};return Object(j.jsxs)(N,{onSubmit:function(n){n.preventDefault();var t={id:Object(L.a)(),name:o,number:l};e(t),p()},children:[Object(j.jsxs)(P,{children:["Name",Object(j.jsx)(B,{type:"text",name:"name",placeholder:"Contact name","aria-label":"Input for your name",value:o,onChange:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)(P,{children:["Number",Object(j.jsx)(B,{type:"tel",name:"number",placeholder:"Phone number","aria-label":"Input for your phone number",value:l,onChange:u,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)(M,{type:"submit",children:"Add contact"})]})},q=p.a.ul(C||(C=Object(u.a)(["\ndisplay: flex;\nflex-wrap: wrap;\n\nmargin-left: -15px;\nmargin-top: -15px;\n\n"]))),E=p.a.li(k||(k=Object(u.a)(["\ndisplay: flex;\njustify-content: space-around;\n\nflex-basis: calc(100% / 1 - 15px);\npadding: 15px 5px;\nborder: 1px solid #d4d4d4;\n\ntext-align: center;\n\nmargin-left: 15px;\nmargin-top: 15px\n\n\n"]))),T=p.a.span(S||(S=Object(u.a)(["\n color: #333232;\n  font-weight: 500;\n "]))),H=p.a.a(z||(z=Object(u.a)(["\nmargin-right: 15px;\n\ncolor: #000000;\n\nfont-weight: 700;\ntext-decoration: none;\n\ntransition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n&:hover,\n  &:focus {\n    color: #2196f3;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n"]))),$=p.a.button(D||(D=Object(u.a)(["min-width: 50px;\nheight: 30px;\nborder: 0px solid transparent;\nborder-radius: 4px;\n\ncolor: #fff;\nbackground-color: #86888a;\n\nbox-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n\nopacity: 1;\n\ntransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\ncursor: pointer;\n\n\n&:hover,\n&:focus {\n\n    opacity: 0.8;\n    background-color: #2196f3;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n"]))),G=function(n){var e=n.contact,t=n.onDeleteContact,r=e.id,o=e.name,a=e.number;return Object(j.jsxs)(E,{children:[Object(j.jsxs)(T,{children:[o,": "]}),Object(j.jsx)(H,{href:"tel:".concat(a),children:a}),Object(j.jsx)($,{type:"button",onClick:function(){return t(r)},children:"Delete"})]})},K=function(n){var e=n.contacts,t=n.onDeleteContact;return Object(j.jsx)(q,{children:e.map((function(n){return Object(j.jsx)(G,{contact:n,onDeleteContact:t},n.id)}))})},Q=p.a.form(A||(A=Object(u.a)(["\n\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n\nwidth: 300px;\npadding-bottom: 30px;\n\n"]))),R=p.a.label(F||(F=Object(u.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n\nmargin-bottom: 15px;\n\ncolor: #333232;\n"]))),U=p.a.input(I||(I=Object(u.a)(["\nwidth: 100%;\npadding: 11px;\nborder: 1px solid rgba(33, 33, 33, 0.2);\nborder-radius: 4px;\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\ncursor: pointer;\n\n&:focus {\n  outline: transparent;\n  border: 1px solid #2196f3;\n};\n\n"]))),V=function(n){var e=n.filter,t=n.onFilter;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Q,{children:Object(j.jsxs)(R,{children:[Object(j.jsx)("h3",{children:"Find contacts by name:"}),Object(j.jsx)(U,{type:"text",value:e,onChange:t})]})})})},W=t(9),X=(t(23),function(){var n=Object(c.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==n?n:[]})),e=Object(d.a)(n,2),t=e[0],r=e[1],o=Object(c.useState)(""),a=Object(d.a)(o,2),i=a[0],s=a[1];Object(c.useEffect)((function(){console.log("set item"),window.localStorage.setItem("contacts",JSON.stringify(t))}),[t]);var l=Object(c.useMemo)((function(){var n=i.toLowerCase();return""!==i?t.filter((function(e){return e.name.toLowerCase().includes(n)})):t}),[t,i]);return Object(j.jsxs)(f,{children:[Object(j.jsx)(J,{title:"Phonebook",children:Object(j.jsx)(Z,{onSubmit:function(n){t.sort((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?W.b.warn("".concat(n.name," is already on contacts")):r([].concat(Object(b.a)(t),[n]))}})}),Object(j.jsxs)(J,{title:"Contacts",children:[Object(j.jsx)(V,{filter:i,onFilter:function(n){n.preventDefault(),s(n.currentTarget.value)}}),Object(j.jsx)(K,{contacts:l,onDeleteContact:function(n){r(t.filter((function(e){return e.id!==n})))}})]}),Object(j.jsx)(W.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})});l.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a7f1301e.chunk.js.map