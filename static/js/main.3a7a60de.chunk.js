(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{128:function(e,t,n){e.exports={header:"Header_header__1VCKf"}},130:function(e,t,n){e.exports={item:"Post_item__ihtu9"}},165:function(e,t,n){},169:function(e,t,n){},17:function(e,t,n){e.exports={userPhoto:"ProfileMain_userPhoto__y_iLR",profileWrapper:"ProfileMain_profileWrapper__j3uFk",leftBox:"ProfileMain_leftBox__2J12X",status:"ProfileMain_status__14GqI",statusText:"ProfileMain_statusText__2WWzw",photo:"ProfileMain_photo__2AvVz",fullName:"ProfileMain_fullName__9FHhG",rightBox:"ProfileMain_rightBox__1YjWs",aboutMe:"ProfileMain_aboutMe__Rlx8y",bottomBox:"ProfileMain_bottomBox__tMrsu",contacts:"ProfileMain_contacts__2cJ9i",jobBox:"ProfileMain_jobBox__5qa6p",image:"ProfileMain_image__3zmG0"}},18:function(e,t,n){e.exports={nav:"Navigation_nav__INfuO",item:"Navigation_item__2T5qw",activeLink:"Navigation_activeLink__2rUFB",friends:"Navigation_friends__1A75m",activeFriend:"Navigation_activeFriend__6FThY"}},26:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItem:"Dialogs_dialogsItem__8wYI2",dialog:"Dialogs_dialog__lk_cw",activeLink:"Dialogs_activeLink__34w6e",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh",addMessage:"Dialogs_addMessage__1Bihp"}},27:function(e,t,n){e.exports={users:"Users_users__2Iv27",left:"Users_left__2qf2f",center:"Users_center__VEhBL",right:"Users_right__3lU39",ava:"Users_ava__dN1VK",selectedPage:"Users_selectedPage__J63sh",pagesNumber:"Users_pagesNumber__10oH9",preloader:"Users_preloader__HS_r6"}},286:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),a=n.n(r),c=n(63),i=n.n(c),o=(n(165),n(11)),u=n(12),l=n(8),j=(n(169),n.p+"static/media/Preloader.a0f02698.gif"),d=function(e){return Object(s.jsx)("span",{children:Object(s.jsx)("img",{src:j})})},b=n(26),f=n.n(b),h=n(13),p=function(e){var t="/dialogs/"+e.id;return Object(s.jsx)("div",{className:f.a.dialog,children:Object(s.jsxs)(h.b,{to:t,activeClassName:f.a.activeLink,children:[Object(s.jsx)("img",{src:e.ava,alt:""})," ",e.name]})})},O=function(e){return Object(s.jsx)("div",{className:f.a.message,children:e.message})},m=n(121),g=n(122),x=function(e){if(!e)return"Field is requred"},v=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},_=n(4),w=n(54),N=n(29),k=n.n(N),P=function(e){var t=e.input,n=e.meta,r=Object(w.a)(e,["input","meta"]),a=n.error&&n.touched;return Object(s.jsxs)("div",{className:a?k.a.error:k.a.noError,children:[Object(s.jsx)("textarea",Object(_.a)(Object(_.a)({},t),r)),a&&Object(s.jsx)("span",{children:n.error})]})},S=function(e){var t=e.input,n=e.meta,r=Object(w.a)(e,["input","meta"]),a=n.error&&n.touched;return Object(s.jsxs)("div",{className:a?k.a.error:k.a.noError,children:[Object(s.jsx)("input",Object(_.a)(Object(_.a)({},t),r)),a&&Object(s.jsx)("span",{children:n.error})]})},y=v(100),I=Object(g.a)({form:"dialogAddMessage"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)(m.a,{name:"addMessage",placeholder:"Add new message",component:P,validate:[y]}),Object(s.jsx)("button",{children:"Add Message"})]})})),A=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(s.jsx)(p,{ava:e.ava,name:e.name,id:e.id},e.id)})),n=e.dialogsPage.messages.map((function(e){return Object(s.jsx)(O,{message:e.message},e.id)}));return Object(s.jsxs)("div",{className:f.a.dialogs,children:[Object(s.jsx)("div",{className:f.a.dialogsItem,children:t}),Object(s.jsxs)("div",{className:f.a.messages,children:[n,Object(s.jsx)("div",{className:f.a.addMessage,children:Object(s.jsx)(I,{onSubmit:function(t){e.addMessage(t.addMessage)}})})]})]})},U=n(43),C="ADD_MESSAGE",M={dialogs:[{id:1,name:"Dormidont",ava:"http://img.crazys.info/files/i/2012.12.25/1356372924_28.jpg"},{id:2,name:"Assiry",ava:"https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg"},{id:3,name:"Sara",ava:"https://moi-tvoi.ru/upload/iblock/photos215/product_214674_0.jpg"},{id:4,name:"Solomon",ava:"https://cdn1.flamp.ru/8c5aead96cc82fbde736b4be1fe17432.jpg"},{id:5,name:"Ivan",ava:"https://i.imgur.com/ad8toZw.jpg"},{id:6,name:"Yarik",ava:"https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"},{id:7,name:"Alise",ava:"https://yt3.ggpht.com/a/AATXAJzwzRrAdErWWD7zuI-KBzY4Nma9XUotZ5UQBQ=s900-c-k-c0xffffffff-no-rj-mo"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"YO!"}]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var n={id:4,message:t.text};return Object(_.a)(Object(_.a)({},e),{},{messages:[].concat(Object(U.a)(e.messages),[n])});default:return e}},F=n(126),L=n(127),T=n(134),B=n(133),D=function(e){return e.auth.login},R=function(e){return e.auth.auth},W=function(e){return e.auth},H=function(e){return e.app.initialised},z=function(e){return e.auth.userId},G=function(e){return{isAuth:R(e)}},Y=function(e){var t=function(t){Object(T.a)(r,t);var n=Object(B.a)(r);function r(){return Object(F.a)(this,r),n.apply(this,arguments)}return Object(L.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(s.jsx)(e,Object(_.a)({},this.props)):Object(s.jsx)(u.a,{to:"/login"})}}]),r}(a.a.Component);return Object(o.b)(G)(t)},J=function(e){return e.dialogsPage},V=Object(l.d)(Object(o.b)((function(e){return{dialogsPage:J(e)}}),{addMessage:function(e){return{type:C,text:e}}}),Y)(A),X=n(128),q=n.n(X),Q=function(e){var t=e.userId,n=e.auth,r=e.login,a=e.logOut;return Object(s.jsxs)("header",{className:q.a.header,children:[Object(s.jsx)("img",{src:"http://www.usb-over-network.com/img/main/fabulatech-logo-1600.png",alt:"Our site brand"}),n?Object(s.jsxs)("div",{children:[Object(s.jsx)(h.b,{to:"/profile/".concat(t),children:r})," ",Object(s.jsx)("button",{onClick:a,children:"LogOut"})]}):Object(s.jsx)("div",{children:Object(s.jsx)(h.b,{to:"/login",children:"Login"})})]})},K=n(7),Z=n.n(K),$=n(14),ee=n(28),te=n(129).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0b33513f-dce5-466b-9c81-8713d7df6fb4"}}),ne=function(e,t){return te.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},se=function(e){return te.delete("follow/".concat(e)).then((function(e){return e.data}))},re=function(e){return te.post("follow/".concat(e)).then((function(e){return e.data}))},ae=function(){return te.get("auth/me").then((function(e){return e.data}))},ce=function(e,t,n){return te.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},ie=function(){return te.delete("auth/login").then((function(e){return e.data}))},oe=function(e){return te.get("profile/"+e).then((function(e){return e.data}))},ue=function(e){return te.get("profile/status/"+e).then((function(e){return e.data}))},le=function(e){return te.put("profile/status",{status:e}).then((function(e){return e.data.resultCode}))},je=function(e){return te.put("profile/",Object(_.a)({},e)).then((function(e){return e.data}))},de=function(e){var t=new FormData;return t.append("image",e),te.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){return e.data}))},be="SET_AUTH_ME",fe={userId:null,email:null,login:null,auth:!1},he=function(e,t,n,s){return{type:be,data:{userId:e,email:t,login:n,auth:s}}},pe=function(){return function(){var e=Object($.a)(Z.a.mark((function e(t){var n,s,r,a,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:0===(n=e.sent).resultCode&&(s=n.data,r=s.id,a=s.email,c=s.login,t(he(r,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){return function(){var e=Object($.a)(Z.a.mark((function e(t){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:0===e.sent.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(_.a)(Object(_.a)({},e),t.data);default:return e}},ge=Object(o.b)((function(e){return{login:D(e),auth:R(e),userId:z(e)}}),{logOut:Oe})((function(e){var t=e.login,n=e.auth,r=e.userId,a=e.logOut;return Object(s.jsx)(Q,{login:t,auth:n,userId:r,logOut:a})})),xe=Object(g.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsx)("div",{children:Object(s.jsx)(m.a,{name:"email",placeholder:"E-mail",component:S,validate:[x]})}),Object(s.jsx)("div",{children:Object(s.jsx)(m.a,{name:"password",placeholder:"Password",component:S,validate:[x],type:"password"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(m.a,{name:"rememberMe",component:"input",type:"checkbox"})," Remember Me"]}),n&&Object(s.jsx)("div",{className:k.a.errorForm,children:n}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Log In"})})]})})),ve=function(e){return e.auth.auth?Object(s.jsx)(u.a,{to:"/profile"}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)(xe,{onSubmit:function(t){e.logIn(t.email,t.password,t.rememberMe)}})]})},_e=Object(o.b)((function(e){return{auth:W(e)}}),{logIn:function(e,t,n){return function(){var s=Object($.a)(Z.a.mark((function s(r){var a,c;return Z.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ce(e,t,n);case 2:0===(a=s.sent).resultCode?r(pe()):(c=a.messages.length>0?a.messages[0]:"Some error",r(Object(ee.a)("login",{_error:c})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},logOut:Oe})(ve),we=function(){return Object(s.jsx)("div",{children:"Music"})},Ne=n(18),ke=n.n(Ne),Pe=function(e){return Object(s.jsxs)("nav",{className:ke.a.nav,children:[Object(s.jsx)("div",{className:ke.a.item,children:Object(s.jsx)(h.b,{to:"/profile",activeClassName:ke.a.activeLink,children:"Profile"})}),Object(s.jsx)("div",{className:ke.a.item,children:Object(s.jsx)(h.b,{to:"/dialogs",activeClassName:ke.a.activeLink,children:"Messages"})}),Object(s.jsx)("div",{className:ke.a.item,children:Object(s.jsx)(h.b,{to:"/news",activeClassName:ke.a.activeLink,children:"News"})}),Object(s.jsx)("div",{className:ke.a.item,children:Object(s.jsx)(h.b,{to:"/music",activeClassName:ke.a.activeLink,children:"Music"})}),Object(s.jsx)("div",{className:ke.a.item,children:Object(s.jsx)(h.b,{to:"/users",activeClassName:ke.a.activeLink,children:"Users"})}),Object(s.jsx)("div",{className:ke.a.item,children:Object(s.jsx)(h.b,{to:"/settings",activeClassName:ke.a.activeLink,children:"Settings"})})]})},Se=function(){return Object(s.jsx)("div",{children:"News"})},ye=v(30),Ie=Object(g.a)({form:"addMyPost"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)(m.a,{name:"addPost",placeholder:"Add new post",component:P,validate:[ye]}),Object(s.jsx)("button",{children:"Add Message"})]})})),Ae=n(68),Ue=n.n(Ae),Ce=n(130),Me=n.n(Ce),Ee=function(e){return Object(s.jsxs)("div",{className:Me.a.item,children:[Object(s.jsx)("img",{src:"https://i.pinimg.com/originals/65/b8/85/65b885158c187b7572be1b347dfaaf86.jpg"}),e.message,Object(s.jsx)("div",{children:Object(s.jsxs)("span",{children:[e.likecount," Like"]})})]})},Fe=a.a.memo((function(e){var t=e.posts.map((function(e){return Object(s.jsx)(Ee,{message:e.message,likecount:e.likecount},e.id)}));return Object(s.jsxs)("div",{className:Ue.a.myposts,children:[Object(s.jsx)("h3",{className:Ue.a.headerPosts,children:"My Posts"}),Object(s.jsx)("div",{children:Object(s.jsx)(Ie,{onSubmit:function(t){e.addPost(t.addPost)}})}),Object(s.jsx)("div",{className:Ue.a.postblock,children:t})]})})),Le="ADD_POST",Te="SET_CURRENT_PROFILE",Be="SET_STATUS",De={posts:[{id:1,message:"How are you?",likecount:30},{id:2,message:"It`s my first post",likecount:50}],profile:null,status:null},Re=function(e){return{type:Be,status:e}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Le:var n={id:3,message:t.text,likecount:0};return Object(_.a)(Object(_.a)({},e),{},{posts:[].concat(Object(U.a)(e.posts),[n])});case Te:return Object(_.a)(Object(_.a)({},e),{},{profile:t.profile});case Be:return Object(_.a)(Object(_.a)({},e),{},{status:t.status});default:return e}},He=function(e){return e.profilePage.profile},ze=function(e){return e.profilePage.status},Ge=function(e){return e.profilePage.posts},Ye=Object(o.b)((function(e){return{posts:Ge(e)}}),{addPost:function(e){return{type:Le,text:e}}})(Fe),Je=n.p+"static/media/User.8ae9816d.png",Ve=n(17),Xe=n.n(Ve),qe=n.p+"static/media/galochka.dc33bca1.png",Qe=n.p+"static/media/krestik.b732998c.jpg",Ke=n(44),Ze=function(e){var t=Object(r.useState)(!1),n=Object(Ke.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(e.status),o=Object(Ke.a)(i,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){l(e.status)}),[e.status]),Object(s.jsxs)("span",{children:[!a&&Object(s.jsx)("span",{className:Xe.a.statusText,onDoubleClick:e.userId===e.authId?function(){c(!0)}:null,children:e.status?e.status:"No status"}),a&&Object(s.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateUserStatus(u)},value:u})]})},$e=function(e){return e.profile?Object(s.jsxs)("div",{className:Xe.a.profileWrapper,children:[Object(s.jsx)("div",{className:Xe.a.leftBox,children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:Xe.a.status,children:[Object(s.jsx)("b",{children:"My status:"})," ",Object(s.jsx)(Ze,{userId:e.profile.userId,authId:e.authId,status:e.status,updateUserStatus:e.updateUserStatus})]}),Object(s.jsx)("img",{className:Xe.a.photo,src:null!=e.profile.photos.large?e.profile.photos.large:Je,alt:""}),Object(s.jsx)("div",{className:Xe.a.fullName,children:e.profile.fullName})]})}),Object(s.jsxs)("div",{className:Xe.a.rightBox,children:[Object(s.jsx)("div",{className:Xe.a.aboutMe,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("b",{children:"About me:"})," ",e.profile.aboutMe]})}),Object(s.jsxs)("div",{className:Xe.a.bottomBox,children:[Object(s.jsxs)("div",{className:Xe.a.contacts,children:[Object(s.jsx)("b",{children:"Contacts:"}),Object(s.jsxs)("div",{children:["Facebook:"," ",null!=e.profile.contacts.facebook?e.profile.contacts.facebook:"No contact"]}),Object(s.jsxs)("div",{children:["VK:"," ",null!=e.profile.contacts.vk?e.profile.contacts.vk:"No contact"]}),Object(s.jsxs)("div",{children:["YouTube:"," ",null!=e.profile.contacts.youtube?e.profile.contacts.youtube:"No contact"]}),Object(s.jsxs)("div",{children:["Instagram:"," ",null!=e.profile.contacts.instagram?e.profile.contacts.instagram:"No contact"]}),Object(s.jsxs)("div",{children:["GitHub:"," ",null!=e.profile.contacts.github?e.profile.contacts.github:"No contact"]})]}),Object(s.jsxs)("div",{className:Xe.a.jobBox,children:[Object(s.jsx)("b",{children:"About job:"}),Object(s.jsxs)("div",{className:Xe.a.image,children:["Looking for a job:"," ",!0===e.profile.lookingForAJob?Object(s.jsx)("img",{src:qe,alt:""}):Object(s.jsx)("img",{src:Qe,alt:""})]}),e.profile.lookingForAJob&&Object(s.jsxs)("div",{children:[Object(s.jsx)("b",{children:"My skills:"}),Object(s.jsx)("div",{children:e.profile.lookingForAJobDescription})]})]})]})]})]}):Object(s.jsx)(d,{})},et=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)($e,{authId:e.authId,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(s.jsx)(Ye,{})]})},tt=Object(l.d)(Object(o.b)((function(e){return{profile:He(e),status:ze(e),authId:z(e)}}),{getUserProfile:function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){var s;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe(e);case 2:s=t.sent,n({type:Te,profile:s});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){var s;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(e);case 2:s=t.sent,n(Re(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le(e);case 2:0===t.sent&&n(Re(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),u.f,Y)((function(e){var t=e.profile,n=e.getUserProfile,a=e.getUserStatus,c=e.updateUserStatus,i=e.status,o=e.authId,u=Object(w.a)(e,["profile","getUserProfile","getUserStatus","updateUserStatus","status","authId"]).match.params.userId;return null!==t&&void 0!==u||(u=o),Object(r.useEffect)((function(){n(u)}),[n,u]),Object(r.useEffect)((function(){a(u)}),[a,u]),Object(s.jsx)(et,{authId:o,profile:t,status:i,updateUserStatus:c})})),nt=n(34),st=n.n(nt),rt=Object(g.a)({form:"settings"})((function(e){var t=e.handleSubmit,n=e.error;return Object(s.jsx)("div",{className:st.a.form,children:Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsxs)("div",{children:["About me:",Object(s.jsx)(m.a,{name:"aboutMe",component:S,validate:[x]})]}),Object(s.jsxs)("div",{children:["Your contacts:",Object(s.jsxs)("div",{className:st.a.contacts,children:[Object(s.jsxs)("div",{children:["skype:",Object(s.jsx)(m.a,{name:"contacts.skype",component:S})]}),Object(s.jsxs)("div",{children:["vk:",Object(s.jsx)(m.a,{name:"contacts.vk",component:S})]}),Object(s.jsxs)("div",{children:["facebook:",Object(s.jsx)(m.a,{name:"contacts.facebook",component:S})]}),Object(s.jsxs)("div",{children:["icq:",Object(s.jsx)(m.a,{name:"contacts.icq",component:S})]}),Object(s.jsxs)("div",{children:["googlePlus:",Object(s.jsx)(m.a,{name:"contacts.googlePlus",component:S})]}),Object(s.jsxs)("div",{children:["twitter:",Object(s.jsx)(m.a,{name:"contacts.twitter",component:S})]}),Object(s.jsxs)("div",{children:["instagram:",Object(s.jsx)(m.a,{name:"contacts.instagram",component:S})]}),Object(s.jsxs)("div",{children:["whatsApp:",Object(s.jsx)(m.a,{name:"contacts.whatsApp",component:S})]})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(m.a,{name:"lookingForAJob",component:"input",type:"checkbox"}),"Looking for a job"]}),Object(s.jsxs)("div",{children:["Looking for a job description:",Object(s.jsx)(m.a,{name:"lookingForAJobDescription",component:P,validate:[x]})]}),Object(s.jsxs)("div",{children:["Full Name:",Object(s.jsx)(m.a,{name:"fullName",component:S,validate:[x]})]}),n&&Object(s.jsx)("div",{className:k.a.errorForm,children:n}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:st.a.button,children:"Save change"})})]})})})),at=function(e){var t=e.profileAuth,n=e.putAuthUserProfile,r=e.savePhoto;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:st.a.header,children:[Object(s.jsx)("h1",{children:"SETTINGS"}),Object(s.jsx)("h2",{children:"Your profile:"})]}),Object(s.jsxs)("div",{className:st.a.profileBlock,children:[Object(s.jsx)(rt,{onSubmit:function(e){n(Object(_.a)({},e))},initialValues:t}),Object(s.jsxs)("div",{className:st.a.photo,children:[Object(s.jsx)("img",{src:t.photos.large||Je,alt:""}),Object(s.jsxs)("div",{children:[Object(s.jsx)("b",{children:"Change your photo:"}),Object(s.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}})]})]})]})]})},ct=function(e){return e.setting.isLoad},it=function(e){return e.setting.profileAuth},ot="SET_AUTH_USER_PROFILE",ut="SET_IS_LOAD",lt="SET_AUSER_PHOTO",jt={profileAuth:null,isLoad:!1},dt=function(e){return{type:ot,profileAuth:e}},bt=function(e){return{type:ut,isLoadCase:e}},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ut:return Object(_.a)(Object(_.a)({},e),{},{isLoad:t.isLoadCase});case ot:return Object(_.a)(Object(_.a)({},e),{},{profileAuth:t.profileAuth});case lt:return Object(_.a)(Object(_.a)({},e),{},{profileAuth:Object(_.a)(Object(_.a)({},e.profileAuth),{},{photos:t.photos})});default:return e}},ht=Object(l.d)(Object(o.b)((function(e){return{profileAuth:it(e),isLoad:ct(e),authUserId:z(e)}}),{loadAuthUserProfile:function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){var s;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe(e);case 2:s=t.sent,n(dt(s)),n(bt(!0));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},putAuthUserProfile:function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){var s,r;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(bt(!1)),t.next=3,je(e);case 3:0===(s=t.sent).resultCode?(dt(e),bt(!0)):(r=s.messages.length>0?s.messages[0]:"Some error",n(Object(ee.a)("settings",{_error:r})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){var s;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(e);case 2:0===(s=t.sent).resultCode&&n((r=s.data.photos,{type:lt,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Y)((function(e){var t=e.profileAuth,n=e.isLoad,r=e.authUserId,a=e.loadAuthUserProfile,c=e.putAuthUserProfile,i=e.savePhoto;return!1===n&&a(r),null===t?Object(s.jsx)(d,{}):Object(s.jsx)(at,{profileAuth:t,putAuthUserProfile:c,savePhoto:i})})),pt="FOLLOW",Ot="UNFOLLOW",mt="SET_USERS",gt="SET_USERS_COUNT",xt="TOGGLE_IS_FETCHING",vt={users:[],pageSize:10,usersCount:20,isFetching:!1},_t=function(e){return{type:xt,isFetching:e}},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pt:return Object(_.a)(Object(_.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(_.a)(Object(_.a)({},e),{},{followed:!0}):e}))});case Ot:return Object(_.a)(Object(_.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(_.a)(Object(_.a)({},e),{},{followed:!1}):e}))});case mt:return Object(_.a)(Object(_.a)({},e),{},{users:Object(U.a)(t.users)});case gt:return Object(_.a)(Object(_.a)({},e),{},{usersCount:t.count});case xt:return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});default:return e}},Nt=n(27),kt=n.n(Nt),Pt=function(e){return e.users.map((function(t){return Object(s.jsxs)("div",{className:kt.a.users,children:[Object(s.jsxs)("div",{className:kt.a.left,children:[Object(s.jsx)("div",{className:kt.a.ava,children:Object(s.jsx)(h.b,{to:"profile/"+t.id,children:Object(s.jsx)("img",{src:null!=t.photos.small?t.photos.small:Je})})}),Object(s.jsx)("div",{children:t.name}),Object(s.jsx)("div",{className:kt.a.button,children:t.followed?Object(s.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(s.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(s.jsx)("div",{className:kt.a.center,children:Object(s.jsx)("div",{className:kt.a.status,children:null!=t.status?t.status:"No status"})}),Object(s.jsxs)("div",{className:kt.a.right,children:[Object(s.jsx)("div",{children:"city"}),Object(s.jsx)("div",{children:"country"})]})]},t.id)}))},St=n(91),yt=n.n(St),It=function(e){return Object(s.jsx)("section",{className:yt.a.pagesNumber,children:e.items.map((function(t){return Object(s.jsx)("button",{className:e.currentItem===t?yt.a.selectedPage:void 0,onClick:function(){e.onItemChanged(t)},children:t})}))})},At=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(It,{items:e.pages,currentItem:e.currentPage,onItemChanged:e.onPageChanged}),e.isFetching?Object(s.jsx)("div",{className:kt.a.preloader,children:Object(s.jsx)(d,{})}):Object(s.jsx)(Pt,{users:e.users,follow:e.follow,unfollow:e.unfollow})]})},Ut=n(131),Ct=Object(Ut.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Mt=function(e){return e.usersPage.pageSize},Et=function(e){return e.usersPage.usersCount},Ft=function(e){return e.usersPage.isFetching},Lt=Object(o.b)((function(e){return{users:Ct(e),pageSize:Mt(e),usersCount:Et(e),isFetching:Ft(e)}}),{follow:function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re(e);case 2:0===t.sent.resultCode&&n({type:pt,id:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se(e);case 2:0===t.sent.resultCode&&n({type:Ot,id:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},uGet:function(e,t){return function(){var n=Object($.a)(Z.a.mark((function n(s){var r;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(_t(!0)),n.next=3,ne(e,t);case 3:r=n.sent,s((c=r.items,{type:mt,users:c})),s((a=r.totalCount,{type:gt,count:a})),s(_t(!1));case 7:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.uGet,n=e.pageSize,a=e.usersCount,c=e.isFetching,i=e.users,o=e.follow,u=e.unfollow,l=Object(r.useState)([]),j=Object(Ke.a)(l,2),d=j[0],b=j[1],f=Object(r.useState)(1),h=Object(Ke.a)(f,2),p=h[0],O=h[1];return Object(r.useEffect)((function(){t(p,n)}),[t,p,n]),Object(r.useEffect)((function(){d=[];for(var e=Math.ceil(a/n),t=1;t<=e;t++)d.push(t);b(d)}),[a,n]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(At,{users:i,pages:d,currentPage:p,onPageChanged:function(e){O(e)},follow:o,unfollow:u,isFetching:c})})})),Tt="SET_INIT",Bt={initialised:!1},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Tt:return Object(_.a)(Object(_.a)({},e),{},{initialised:!0});default:return e}},Rt=Object(l.d)(Object(o.b)((function(e){return{initialised:H(e),auth:R(e)}}),{getInit:function(){return function(){var e=Object($.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(pe()),e.next=3,Promise.all([n]);case 3:t({type:Tt});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),u.f)((function(e){return e.auth||e.getInit(),e.initialised?Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(ge,{}),Object(s.jsxs)("div",{className:"app-wrapper-navi",children:[Object(s.jsx)(Pe,{}),Object(s.jsxs)("div",{className:"app-wrapper-content",children:[Object(s.jsx)(u.b,{path:"/dialogs",render:function(){return Object(s.jsx)(V,{})}}),Object(s.jsx)(u.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(tt,{})}}),Object(s.jsx)(u.b,{path:"/news",render:function(){return Object(s.jsx)(Se,{})}}),Object(s.jsx)(u.b,{path:"/music",render:function(){return Object(s.jsx)(we,{})}}),Object(s.jsx)(u.b,{path:"/settings",render:function(){return Object(s.jsx)(ht,{})}}),Object(s.jsx)(u.b,{path:"/users",render:function(){return Object(s.jsx)(Lt,{})}}),Object(s.jsx)(u.b,{path:"/login",render:function(){return Object(s.jsx)(_e,{})}})]})]})]}):Object(s.jsx)(d,{})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Wt=n(132),Ht=n(123),zt=Object(l.c)({profilePage:We,dialogsPage:E,usersPage:wt,auth:me,form:Ht.a,app:Dt,setting:ft}),Gt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Yt=Object(l.e)(zt,Gt(Object(l.a)(Wt.a)));i.a.render(Object(s.jsx)(h.a,{children:Object(s.jsx)(o.a,{store:Yt,children:Object(s.jsx)(Rt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){e.exports={error:"FormControls_error__NYm1W",noError:"FormControls_noError__3uxQe",errorForm:"FormControls_errorForm__Qb2Dh"}},34:function(e,t,n){e.exports={photo:"Settings_photo__3oPYO",header:"Settings_header__1XSBB",profileBlock:"Settings_profileBlock__3RUu7",contacts:"Settings_contacts__2MSSw",form:"Settings_form__2cCSH",button:"Settings_button__AuQXk"}},68:function(e,t,n){e.exports={myposts:"MyPosts_myposts__2WVXa",postblock:"MyPosts_postblock__1eOnW",headerPosts:"MyPosts_headerPosts__1I3Sb"}},91:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__xmQj0",pagesNumber:"Paginator_pagesNumber__1CZOG"}}},[[286,1,2]]]);
//# sourceMappingURL=main.3a7a60de.chunk.js.map