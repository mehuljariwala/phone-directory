(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(16),o=t.n(r),i=t(52),c=t(85),u=t(86),s=t(87),m=t(96),d=t(88),h=t(97),p=t(18),g=t(89),E=t.n(g),y=t(91),b=t.n(y),f=t(92),v=t.n(f);var w=Object(p.withStyles)({root:{flexGrow:1},appbar:{justifyContent:"center",flexDirection:"unset",backgroundColor:"black"}})(function(e){var a=e.classes;return l.a.createElement("div",{className:a.root},l.a.createElement(E.a,{position:"static",className:a.appbar},l.a.createElement(b.a,null,l.a.createElement(v.a,{variant:"h6",color:"inherit"},"Employee Management System"))))}),C=t(20),S=t.n(C),N=t(26),k=t.n(N);var P=Object(p.withStyles)({buttonClass:{marginTop:"2%"}})(function(e){var a=e.classes;return l.a.createElement("div",{style:{marginTop:"2%",width:"50%"}},l.a.createElement(k.a,{id:"outlined-full-width",label:"Name:",placeholder:"Enter name here",style:{margin:8},fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},name:"uName",onChange:e.handleChange}),l.a.createElement(k.a,{id:"outlined-full-width",label:"Phone:",placeholder:"Enter phone no here",style:{margin:8},fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},name:"uPhone",onChange:e.handleChange}),l.a.createElement(k.a,{id:"outlined-full-width",label:"Job Title:",placeholder:"Enter job title here",style:{margin:8},fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},name:"uJobTitle",onChange:e.handleChange}),l.a.createElement(k.a,{id:"outlined-full-width",label:"Total Year of Experience:",placeholder:"Enter experience here",style:{margin:8},fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},name:"uExp",onChange:e.handleChange}),l.a.createElement(k.a,{id:"outlined-full-width",label:"Salary :",placeholder:"Enter salary here",style:{margin:8},fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},name:"uSalary",onChange:e.handleChange}),l.a.createElement(S.a,{variant:"contained",color:"secondary",className:a.buttonClass,onClick:e.handleAddNew},"Add"))}),D=t(93),O=t.n(D),j=t(95),x=t.n(j),T=t(15),J=t.n(T),A=t(94),I=t.n(A),_=t(51),W=t.n(_),L=t(36),B=t.n(L);var H=Object(p.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:500,fontFamily:"monospace"}}})(function(e){var a=e.classes;return l.a.createElement(B.a,{className:a.root},l.a.createElement(O.a,{className:a.table},l.a.createElement(I.a,null,l.a.createElement(W.a,null,l.a.createElement(J.a,null,"Name"),l.a.createElement(J.a,null,"Phone No"),l.a.createElement(J.a,null,"Job Title"),l.a.createElement(J.a,null,"Experience"),l.a.createElement(J.a,null,"Salary"),l.a.createElement(J.a,null,"Action"))),l.a.createElement(x.a,null,localStorage.getItem("employeeData")&&JSON.parse(localStorage.getItem("employeeData")).map(function(a,t){return l.a.createElement(W.a,{key:t},l.a.createElement(J.a,{component:"th",scope:"row"},a.uName),l.a.createElement(J.a,null,a.uPhone),l.a.createElement(J.a,null,a.uJobTitle),l.a.createElement(J.a,null,a.uExp),l.a.createElement(J.a,null,a.uSalary),l.a.createElement(J.a,null,l.a.createElement(S.a,{variant:"contained",color:"secondary",style:{padding:"3px",fontSize:"13px"},onClick:function(){return e.handleDelete(t)}},"Delete")))}))))}),F=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={addPage:!1,employeeData:[]},t._handleHide=function(){t.setState(function(e){return{addPage:!e.addPage}})},t._handleChange=function(e){t.setState(Object(c.a)({},e.target.name,e.target.value))},t._handleAddNew=function(){var e=Object(i.a)(t.state.employeeData),a={uName:t.state.uName,uPhone:t.state.uPhone,uJobTitle:t.state.uJobTitle,uSalary:t.state.uSalary,uExp:t.state.uExp};e.push(a),t.setState({employeeData:e,addPage:!1,uName:"",uPhone:"",uJobTitle:"",uSalary:"",uExp:""}),localStorage.setItem("employeeData",JSON.stringify(e))},t._handleDelete=function(e){var a=Object(i.a)(t.state.employeeData);e>-1&&a.splice(e,1),t.setState({employeeData:a}),localStorage.setItem("employeeData",JSON.stringify(a))},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,n=t.addPage,r=t.employeeData;return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement("div",null,n?l.a.createElement(S.a,{variant:"contained",color:"default",onClick:this._handleHide,style:{marginTop:"2%"}},"Back"):l.a.createElement(S.a,{variant:"contained",color:"primary",className:a.buttonClass,onClick:this._handleHide},"Add"),n?l.a.createElement(P,{handleChange:this._handleChange,uName:this.state.uName,uPhone:this.state.uPhone,handleAddNew:this._handleAddNew}):l.a.createElement(H,{employeeData:r,handleDelete:function(a){return e._handleDelete(a)}})))}}]),a}(n.Component),z=Object(p.withStyles)({buttonClass:{marginTop:"2%",backgroundColor:"#4CAF50","&:hover":{backgroundColor:"#8BC34A"}}})(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,a,t){e.exports=t(248)}},[[98,1,2]]]);
//# sourceMappingURL=main.9a958c36.chunk.js.map