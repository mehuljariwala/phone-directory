(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(15),o=t.n(l),i=t(53),c=t(86),s=t(87),d=t(88),u=t(96),h=t(89),m=t(97),p=t(17),g=t(90),E=t.n(g),v=t(92),b=t.n(v),f=t(26),y=t.n(f);var w=Object(p.withStyles)({root:{flexGrow:1},appbar:{justifyContent:"center",flexDirection:"unset",backgroundColor:"black"}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,{position:"static",className:a.appbar},r.a.createElement(b.a,null,r.a.createElement(y.a,{variant:"h6",color:"inherit"},"Phone Directory"))))}),N=t(19),C=t.n(N),P=t(51),k=t.n(P);var D=Object(p.withStyles)({buttonClass:{marginTop:"2%"}})(function(e){var a=e.classes;return r.a.createElement("div",{style:{marginTop:"2%",width:"50%"}},r.a.createElement(k.a,{id:"outlined-full-width",label:"Name:",placeholder:"Enter Name Here",style:{margin:8},fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},name:"uName",onChange:e.handleChange}),r.a.createElement(k.a,{id:"outlined-full-width",label:"Phone:",placeholder:"Enter Phone No Here",style:{margin:8},fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},name:"uPhone",onChange:e.handleChange}),r.a.createElement(y.a,{variant:"h6",color:"inherit",style:{margin:8}},"Subscriber to be added:"),r.a.createElement(y.a,{variant:"h6",color:"inherit",style:{margin:8}},"Name : ",e.uName),r.a.createElement(y.a,{variant:"h6",color:"inherit",style:{margin:8}},"Phone : ",e.uPhone),r.a.createElement(C.a,{variant:"contained",color:"secondary",className:a.buttonClass,onClick:e.handleAddNew},"Add"))}),j=t(93),O=t.n(j),A=t(95),S=t.n(A),_=t(20),I=t.n(_),x=t(94),H=t.n(x),T=t(52),W=t.n(T),B=t(36),F=t.n(B);var J=Object(p.withStyles)(function(e){return{root:{width:"70%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:300,fontFamily:"monospace"}}})(function(e){var a=e.classes;return r.a.createElement(F.a,{className:a.root},r.a.createElement(O.a,{className:a.table},r.a.createElement(H.a,null,r.a.createElement(W.a,null,r.a.createElement(I.a,null,"Name"),r.a.createElement(I.a,null,"Phone No"),r.a.createElement(I.a,null,"Action"))),r.a.createElement(S.a,null,e.directoryData.map(function(a,t){return r.a.createElement(W.a,{key:t},r.a.createElement(I.a,{component:"th",scope:"row"},a.uName),r.a.createElement(I.a,null,a.uPhone),r.a.createElement(I.a,null,r.a.createElement(C.a,{variant:"contained",color:"secondary",style:{padding:"3px",fontSize:"13px"},onClick:function(){return e.handleDelete(a.uId)}},"Delete")))}))))}),L=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={addPage:!1,directoryData:[]},t._handleHide=function(){t.setState(function(e){return{addPage:!e.addPage}})},t._handleChange=function(e){t.setState(Object(c.a)({},e.target.name,e.target.value))},t._handleAddNew=function(){var e=Object(i.a)(t.state.directoryData),a={uId:Date.now(),uName:t.state.uName,uPhone:t.state.uPhone};e.push(a),t.setState({directoryData:e,addPage:!1,uName:"",uPhone:""})},t._handleDelete=function(e){var a=Object(i.a)(t.state.directoryData);a=a.filter(function(a){return a.uId!==e}),t.setState({directoryData:a})},t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,n=t.addPage,l=t.directoryData;return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("div",null,n?r.a.createElement(C.a,{variant:"contained",color:"default",onClick:this._handleHide,style:{marginTop:"2%"}},"Back"):r.a.createElement(C.a,{variant:"contained",color:"primary",className:a.buttonClass,onClick:this._handleHide},"Add"),n?r.a.createElement(D,{handleChange:this._handleChange,uName:this.state.uName,uPhone:this.state.uPhone,handleAddNew:this._handleAddNew}):r.a.createElement(J,{directoryData:l,handleDelete:function(a){return e._handleDelete(a)}})))}}]),a}(n.Component),z=Object(p.withStyles)({buttonClass:{marginTop:"2%",backgroundColor:"#4CAF50","&:hover":{backgroundColor:"#8BC34A"}}})(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,a,t){e.exports=t(248)}},[[98,1,2]]]);
//# sourceMappingURL=main.15738bd7.chunk.js.map