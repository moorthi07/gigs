(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{265:function(e,t,a){e.exports=a.p+"static/media/car-marker.c37c7a43.png"},275:function(e,t,a){},348:function(e,t,a){e.exports=a(701)},701:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"UPDATE_VEHICLES",function(){return E}),a.d(n,"RT_UPDATE_VEHICLES",function(){return y}),a.d(n,"fetchVehicles",function(){return C}),a.d(n,"fetchVehicles1",function(){return O}),a.d(n,"updateVehicles",function(){return w}),a.d(n,"rtUpdateVehicles",function(){return j});var r=a(0),l=a.n(r),o=a(21),i=a.n(o),c=a(29),s=a(30),u=a(33),m=a(31),h=a(34),d=a(321),p=a(57),g=a(50),b=a(274),f=a.n(b),E="UPDATE_VEHICLES",y="RT_UPDATE_VEHICLES",v="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRqYXlAZm9yZC5jb20iLCJzeXN0ZW1Sb2xlIjoic3lzdGVtVXNlciIsImlhdCI6MTU0MTAwNzAzMiwiaXNzIjoiaHR0cDovL3dlYi1zZXJ2ZXJzLWRldi0xNDI1MzI1MDI4LnVzLXdlc3QtMi5lbGIuYW1hem9uYXdzLmNvbSIsInN1YiI6ImUyMmE2MjlkLWRlYTAtNDc0Yi04YzY5LTFlODQwYmZkMzRmYSIsImp0aSI6IjY0Nzk2YWIwLTlhYTItNGY3Ny04OTk4LWI1MzMzYzhlMmI5OCJ9.aIGEX_qigixaA17dcO0KNJay-R_704FDaugfkIAeVLA",k="dd7295fa-6c65-484d-b38d-30df3bc31c0c",C=function(e,t){return function(a){return f.a.get("".concat("https://alpha.skylo.io/api/devices/history/ids/dd7295fa-6c65-484d-b38d-30df3bc31c0c"),{params:{since:e,until:t},headers:{Authorization:"Bearer "+v}}).then(function(e){console.log("-----------div id data",e.data.devices[k]),a(w(e.data.devices[k]))}).catch(function(e){throw e})}},O=function(e,t){return function(a){return f.a.get("".concat("http://localhost:5000/api/geo"),{params:{since:e,until:t}}).then(function(e){e.data&&console.log("-----------div id data",e.data.devices[k]),a(w(e.data.devices[k]))}).catch(function(e){throw console.log(e),e})}},w=function(e){return console.log("vehicles data",e),{type:E,vehicles:e}},j=function(e){return{type:y,vehicles:e}},M=[],S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case y:return t.vehicles;default:return e}},I=Object(p.combineReducers)({vehicles:S}),T=a(136),x=a(347),N=a(39),D=a(323),P=a(3),z=a.n(P),R=a(32),A=a(345),L=a.n(A),U=a(42),F=a.n(U),Y=a(115),W=a.n(Y),V=a(38),B=a.n(V),G=a(164),J=a.n(G),X=a(165),Z=a.n(X),H=a(130),_=a.n(H),K=a(131),q=a.n(K),Q=a(132),$=a.n(Q),ee=a(166),te=a.n(ee),ae=a(128),ne=a.n(ae),re=a(129),le=a.n(re),oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={pos:0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.pos!==this.props.pos&&this.setState({pos:e.pos})}},{key:"render",value:function(){return l.a.createElement(J.a,{width:"99%",height:"80%"},l.a.createElement(Z.a,{data:this.props.vehicles,syncId:"anyId"},l.a.createElement(le.a,{x:this.props.pos,stroke:"red",label:""}),l.a.createElement(q.a,{dataKey:"timestamp",tick:!1}),l.a.createElement($.a,null),l.a.createElement(te.a,{vertical:!1,strokeDasharray:"3 3"}),l.a.createElement(ne.a,null),l.a.createElement(_.a,{type:"monotone",dataKey:"rssi",stroke:"#82ca9d"})))}}]),t}(r.Component),ie=Object(g.connect)(function(e){return{vehicles:e.vehicles}})(oe);var ce=Object(g.connect)(function(e){return{vehicles:e.vehicles}})(function(e){var t=e.pos;return l.a.createElement(J.a,{width:"99%",height:"80%"},l.a.createElement(Z.a,{data:e.vehicles,syncId:"anyId"},l.a.createElement(q.a,{label:"Time",dataKey:"timestamp",tick:!1}),l.a.createElement($.a,null),l.a.createElement(te.a,{vertical:!1,strokeDasharray:"3 3"}),l.a.createElement(ne.a,null),l.a.createElement(le.a,{x:t,stroke:"red"}),l.a.createElement(_.a,{type:"monotone",dataKey:"speed",stroke:"#82ca9d"})))}),se=a(266),ue=a(267),me=a(268),he=a(269),de=a(270),pe=a(271),ge=a(272),be=a(9),fe=a.n(be),Ee=(a(529),a(215)),ye=a.n(Ee),ve=a(275),ke=a.n(ve);a(90).a;var Ce=function(e){function t(t){return{borderRadius:2,width:"20%",height:"".concat(25*t,"%"),background:e.strength>=25*(t-1)+10?"red":"lightgrey"}}return l.a.createElement("div",{style:{width:50,height:20,padding:"5px",marginLeft:"10px",display:"flex",alignItems:"flex-end",justifyContent:"space-between",borderRadius:2}},l.a.createElement("div",{style:t(1)}),l.a.createElement("div",{style:t(2)}),l.a.createElement("div",{style:t(3)}),l.a.createElement("div",{style:t(4)}))},Oe=a(328),we=(new fe.a.Icon({iconUrl:a(265),iconRetinaUrl:a(265),iconAnchor:[20,40],popupAnchor:[0,-35],iconSize:[40,40],shadowUrl:"./assets/images/marker-shadow.png",shadowSize:[29,40],shadowAnchor:[7,40]}),[37.774304,-122.441951]),je={position:"relative",width:"100%",height:"70%"},Me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleZoom=function(e){var t=e.target.getCenter(),n=t.lat,r=t.lng;a.setState({lat:n,lng:r,zoom:e.target.getZoom()})},a.state={waypoints:[],positions:[[43.604403,1.443373],[43.613547,1.308568]],zoom:16},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.vehicles,t=this.state.zoom,a=e.map(function(e){return[e.lat,e.long]}),n=null,r=0,o="";return a[this.props.pos]&&(we=a[this.props.pos],r=e[this.props.pos].speed,o=e[this.props.pos].rssi,n=l.a.createElement(se.a,{position:a[this.props.pos]},l.a.createElement(ue.a,null,"speed:",r,l.a.createElement("br",null)," Signal:",o))),l.a.createElement("div",null,l.a.createElement(me.a,{center:we,zoom:t,zoomControl:!1,style:je,attributionControl:!1,onzoom:this.handleZoom},l.a.createElement(he.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),l.a.createElement(de.a,{position:"bottomright"}),l.a.createElement(pe.a,{positions:a,color:"green",weight:10,opacity:.4}),n,l.a.createElement(Oe.Portal,{style:{borderRadius:5},position:"topright"},l.a.createElement("div",{style:{backgroundColor:"#000",display:"flex",width:"150px",fontSize:14,color:"#fff",opacity:.7,padding:6}},l.a.createElement("span",null,r," mph "),"       ",l.a.createElement(Ce,{strength:25*o})," ",l.a.createElement("span",null,o," "))),ye()(e,function(e,t){e.timestamp,e.type;var a,n=(a={},Object(N.a)(a,ke.a.marker,!0),Object(N.a)(a,ke.a.bus,!0),a);Object(be.divIcon)({className:z()(n),html:"<span>".concat(t,"</span>")});return l.a.createElement(ge.a,{style:{color:"red"},className:n.circle,key:t,center:[e.lat,e.long],radius:5,attribution:t},l.a.createElement(ue.a,null,"speed:",e.speed,l.a.createElement("br",null),"time:",e.timestamp))})))}}]),t}(r.Component),Se=Object(R.withStyles)(function(e){return{root:Object(N.a)({flexGrow:1,display:"flex",height:"100vh",overflow:"auto"},"height","100%"),circle:{color:"green",backgroud:"white"}}})(Object(g.connect)(function(e){return{vehicles:e.vehicles}})(Me)),Ie=a(329),Te=a.n(Ie),xe=a(28),Ne=a.n(xe),De=a(277),Pe=a.n(De),ze=a(332),Re=a.n(ze),Ae=a(333),Le=a.n(Ae),Ue=a(276),Fe=a.n(Ue),Ye=a(278),We=a.n(Ye),Ve=a(279),Be=a.n(Ve),Ge=a(330),Je=a.n(Ge),Xe=a(331),Ze=a.n(Xe),He=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSlideChange=function(e,t){console.clear("media value:",t),a.setState({showPlay:!0}),a.props.click(t)},a.handlePlayStop=function(){var e=!1;a.state.showPlay?(e=!1,a.props.MediaControlChange(5)):(e=!0,a.props.MediaControlChange(-5)),a.setState({showPlay:e})},a.state={value:0,showPlay:!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){0==e.value&&this.setState({showPlay:!0})}},{key:"handlePlaybuttons",value:function(e){switch(e){case 0:case-1:case 1:case 9:this.props.MediaControlChange(e),this.setState({showPlay:!0})}}},{key:"render",value:function(){var e,t=this.props,a=t.classes,n=t.theme,r=t.max,o=t.value;return this.step=1,l.a.createElement(Te.a,{className:a.card},l.a.createElement("div",{className:a.details},l.a.createElement(Je.a,(e={classes:{container:a.slider},value:o,min:0,max:r,step:this.step,"aria-labelledby":"slider-image",onChange:this.handleSlideChange},Object(N.a)(e,"classes",{container:a.slider,thumbIconWrapper:a.thumbIconWrapper}),Object(N.a)(e,"thumb",l.a.createElement(Ze.a,{style:{color:"#2196f3"}})),e))),l.a.createElement("div",{className:a.controls},l.a.createElement(Ne.a,{"aria-label":"First",onClick:this.handlePlaybuttons.bind(this,0)},"rtl"===n.direction?l.a.createElement(Fe.a,null):l.a.createElement(Pe.a,null)),l.a.createElement(Ne.a,{"aria-label":"Previous",onClick:this.handlePlaybuttons.bind(this,-1)},"rtl"===n.direction?l.a.createElement(We.a,null):l.a.createElement(Be.a,null)),this.state.showPlay?l.a.createElement(Ne.a,{"aria-label":"Play/pause",onClick:this.handlePlayStop},l.a.createElement(Re.a,{className:a.playIcon})):l.a.createElement(Ne.a,{"aria-label":"stop",onClick:this.handlePlayStop},l.a.createElement(Le.a,{className:a.playIcon})),l.a.createElement(Ne.a,{"aria-label":"Next",onClick:this.handlePlaybuttons.bind(this,1)},"rtl"===n.direction?l.a.createElement(Be.a,null):l.a.createElement(We.a,null)),l.a.createElement(Ne.a,{"aria-label":"Last",onClick:this.handlePlaybuttons.bind(this,9)},"rtl"===n.direction?l.a.createElement(Pe.a,null):l.a.createElement(Fe.a,null))))}}]),t}(l.a.Component),_e=Object(R.withStyles)(function(e){return{card:{width:"100%"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"100%"},controls:{width:"100%",display:"flex",justifyContent:"center"},playIcon:{height:38,width:38},slider:{padding:"22px 0px"},thumbIcon:{borderRadius:"50%"},thumbIconWrapper:{backgroundColor:"#fff"}}},{withTheme:!0})(He),Ke=a(85),qe=a(64),Qe=a.n(qe),$e=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChangedtFrom=function(e){a.setState({dtFrom:e})},a.handleChangedtTo=function(e){a.setState({dtTo:e})},a.handleOpen=function(){a.setState({open:!0})},a.state={open:!1,dtFrom:new Date("2018-11-17T03:17"),dtTo:new Date("2018-11-17T03:45"),selectedDate:new Date("2018-01-01T00:00:00.000Z")},a.handleChangedtFrom=a.handleChangedtFrom.bind(Object(Ke.a)(Object(Ke.a)(a))),a.handleChangedtTo=a.handleChangedtTo.bind(Object(Ke.a)(Object(Ke.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.selectedDate,t.dtFrom),n=t.dtTo,o=this.props.classes;function i(e){return e<10?"0"+e:e}var c=new Date,s=c.getUTCFullYear()+"-"+i(c.getUTCMonth()+1)+"-"+i(c.getUTCDate())+"T"+i(c.getUTCHours())+":"+i(c.getUTCMinutes())+":"+i(c.getUTCSeconds());return console.log("dt",s),l.a.createElement("form",{className:o.container,noValidate:!0},l.a.createElement(r.Fragment,null,l.a.createElement("div",{className:"picker"},l.a.createElement(T.a,{value:a,onChange:this.handleChangedtFrom,id:"from",label:"From",format:"MM/dd/yyyy hh:mm A"})),l.a.createElement("div",{className:"picker"},l.a.createElement(T.a,{value:n,onChange:this.handleChangedtTo,id:"to",label:"To",format:"MM/dd/yyyy hh:mm A"}))),l.a.createElement("div",null,l.a.createElement(Qe.a,{color:"secondary",onClick:function(){return e.props.submit(e.state.dtFrom,e.state.dtTo)},variant:"contained",className:o.button},"Go")))}}]),t}(l.a.Component),et=Object(R.withStyles)(function(e){return{container:{display:"flex",padding:e.spacing.unit,marginBottom:1,width:"100%"},button:{margin:e.spacing.unit},leftIcon:{marginRight:e.spacing.unit},rightIcon:{marginLeft:e.spacing.unit},iconSmall:{fontSize:20},label:{padding:5,marginBottom:e.spacing.unit},txtField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200}}})($e),tt=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return this.props.children}}]),t}(r.Component),at=Object(g.connect)(function(e){return e},function(e,t){return{actions:Object(p.bindActionCreators)(n,e)}})(tt),nt=a(287),rt=a.n(nt),lt=a(134),ot=a.n(lt),it=a(285),ct=a.n(it),st=a(119),ut=a.n(st),mt=a(284),ht=a.n(mt),dt=a(71),pt=a(342),gt=a.n(pt),bt=a(286),ft=a.n(bt),Et=a(182),yt=a.n(Et),vt=a(341),kt=a.n(vt),Ct=a(344),Ot=a.n(Ct),wt=a(343),jt=a.n(wt),Mt=a(175),St=a.n(Mt),It=a(340),Tt=a.n(It),xt=a(176),Nt=a.n(xt),Dt=a(281),Pt=a.n(Dt),zt=a(283),Rt=a.n(zt),At=a(282),Lt=a.n(At),Ut=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null,mobileMoreAnchorEl:null,open:!1},a.handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.toggleDrawer=function(){return function(){a.setState({open:!a.state.open})}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,r=Boolean(t),o=Boolean(a),i=l.a.createElement("div",{className:n.list},l.a.createElement(St.a,null,["Bookmarks","Filters","DataSources","Reports"].map(function(e,t){return l.a.createElement(Nt.a,{button:!0,key:e},l.a.createElement(Pt.a,null,t%2===0?l.a.createElement(Lt.a,null):l.a.createElement(yt.a,null)),l.a.createElement(Rt.a,{primary:e}))})),l.a.createElement(Tt.a,null),l.a.createElement(St.a,null,["History","Settings"].map(function(e,t){return l.a.createElement(Nt.a,{button:!0,key:e},l.a.createElement(Pt.a,null,t%2===0?l.a.createElement(Lt.a,null):l.a.createElement(yt.a,null)),l.a.createElement(Rt.a,{primary:e}))}))),c=l.a.createElement(ht.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose},l.a.createElement(ut.a,{onClick:this.handleMenuClose},"Profile"),l.a.createElement(ut.a,{onClick:this.handleMenuClose},"My account")),s=l.a.createElement(ht.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMobileMenuClose},l.a.createElement(ut.a,null,l.a.createElement(Ne.a,{color:"inherit"},l.a.createElement(ct.a,{badgeContent:4,color:"secondary"},l.a.createElement(yt.a,null))),l.a.createElement("p",null,"Messages")),l.a.createElement(ut.a,null,l.a.createElement(Ne.a,{color:"inherit"},l.a.createElement(ct.a,{badgeContent:11,color:"secondary"},l.a.createElement(kt.a,null))),l.a.createElement("p",null,"Notifications")),l.a.createElement(ut.a,{onClick:this.handleProfileMenuOpen},l.a.createElement(Ne.a,{color:"inherit"},l.a.createElement(ft.a,null)),l.a.createElement("p",null,"Profile")));return l.a.createElement("div",{className:n.root},l.a.createElement(rt.a,{position:"static"},l.a.createElement(ot.a,null,l.a.createElement(Ne.a,{onClick:this.toggleDrawer("left",!0),className:n.menuButton,color:"inherit","aria-label":"Open drawer"},l.a.createElement(gt.a,null)),l.a.createElement(B.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"Mars Geo Tracker"),l.a.createElement(jt.a,{open:this.state.open,onClose:this.toggleDrawer("left",!1)},l.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!0),onKeyDown:this.toggleDrawer("left",!1)},l.a.createElement(rt.a,{position:"static"},l.a.createElement(ot.a,null,l.a.createElement(B.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"Mars Geo Tracker"))),i)),l.a.createElement("div",{className:n.grow}),l.a.createElement("div",{className:n.sectionDesktop},l.a.createElement(Ne.a,{"aria-owns":r?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},l.a.createElement(ft.a,null))),l.a.createElement("div",{className:n.sectionMobile},l.a.createElement(Ne.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},l.a.createElement(Ot.a,null))))),c,s)}}]),t}(l.a.Component),Ft=Object(R.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(N.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(dt.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(dt.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(N.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(N.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(N.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(Ut),Yt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.handleSubmit=function(e,t){console.log("from-to"+e.toTimeString()+"-"+t),e&&t&&(e=a.getISODateString(e),t=a.getISODateString(t),console.log("from-to"+e+"-"+t),e.trim()&&t.trim()&&(a.props.actions.fetchVehicles(e.trim(),t.trim()),a.handleReset(),a.stopPlayMap()))},a.handleReset=function(){a.setState({dtFrom:"",dtTo:""})},a.handleRealTimeClick=function(){console.log("RT",a.state.realtime),a.setState({realtime:!0})},a.handleSlideClick=function(e){console.log("pos ".concat(e)),a.stopPlayMap(),a.setMarker(e)},a.handleMediaControlChange=function(e){console.log("media",e),a.stopPlayMap();var t=a.state.marker,n=a.props.vehicles.length;switch(console.log("mediamarker ".concat(t," , len= ").concat(n-1)),e){case 0:t=0;break;case-1:t=t-1>0?t-1:0;break;case-5:a.stopPlayMap();break;case 5:a.playMap(t);break;case 1:t=t+1<n?t+1:n-1;break;case 9:t=n-1}console.log("num  ".concat(t)),a.setMarker(t)},a.state={open:!1,realtime:!1,dtFrom:(new Date).toISOString(),dtTo:(new Date).toISOString(),marker:0,vLength:0,didMount:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({didMount:!0})}},{key:"componentWillReceiveProps",value:function(e){console.log("compwill-receive props"),this.setState({marker:0})}},{key:"pad",value:function(e){return e<10?"0"+e:e}},{key:"getISODateString",value:function(e){return e.getUTCFullYear()+"-"+this.pad(e.getUTCMonth()+1)+"-"+this.pad(e.getUTCDate())+"T"+this.pad(e.getHours())+":"+this.pad(e.getMinutes())+":"+this.pad(e.getSeconds())}},{key:"playMap",value:function(e){var t=this;if(this.state.didMount&&e>=0){var a=this.props.vehicles.length;this.setLoop=setInterval(function(){var n=e>a-1?e-=a:e++;t.setMarker(n)},1e3)}}},{key:"stopPlayMap",value:function(){this.setLoop&&clearInterval(this.setLoop)}},{key:"setMarker",value:function(e){console.log("setMarker",e),this.setState(function(){return{marker:e}})}},{key:"render",value:function(){var e,t=this.props.classes,a=this.props.vehicles,n=this.state,r=n.realtime,o=n.marker;return console.log("marker....",o),o&&(e="undefined"!==typeof a&&a.length>0?a[o].timestamp:o),l.a.createElement("div",{className:t.root},l.a.createElement(L.a,null),l.a.createElement(W.a,{container:!0,className:t.root,direction:"row",justify:"center",alignments:"stretch"},l.a.createElement(at,{realtime:r},l.a.createElement(Ft,null),l.a.createElement(W.a,{item:!0,xs:8,className:t.demo},l.a.createElement(B.a,{variant:"h4",gutterBottom:!0},"Vehicle Statestics"),l.a.createElement(Se,{className:t.demo,pos:o}),l.a.createElement(W.a,{container:!0,justify:"center"},l.a.createElement(_e,{max:a.length-1,value:o,click:this.handleSlideClick,MediaControlChange:this.handleMediaControlChange}))),l.a.createElement(W.a,{container:!0,alignments:"stretch",className:t.demo,direction:"column",item:!0,xs:4},l.a.createElement(F.a,null,l.a.createElement(F.a,null,l.a.createElement(et,{submit:this.handleSubmit,realtimeclick:this.handleRealTimeClick})),l.a.createElement(F.a,{className:t.paper},l.a.createElement(B.a,{variant:"subtitle2",gutterBottom:!0},"Signal Strength"),l.a.createElement(ie,{pos:e})),l.a.createElement(F.a,{className:t.paper},l.a.createElement(B.a,{variant:"subtitle2",gutterBottom:!0},"Speed"),l.a.createElement(ce,{pos:e})),l.a.createElement(F.a,{className:t.paper},l.a.createElement(B.a,{variant:"subtitle2",gutterBottom:!0},"Acceleration"),l.a.createElement(ce,{pos:e})))))))}}]),t}(l.a.Component),Wt=Object(R.withStyles)(function(e){return{root:{flexGrow:1,display:"flex",height:"100vh",overflow:"auto",width:"100%"},demo:{padding:e.spacing.unit},center:{textAlign:"center"},left:{textAlign:"center"},paper:{padding:2*e.spacing.unit,height:"27%",textAlign:"left",color:e.palette.text.secondary,margin:"0 2px 2px "},control:{padding:2*e.spacing.unit},card:{minWidth:2},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:12},pos:{marginBottom:12},toolbar:{paddingRight:24},toolbarIcon:Object(D.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),chartContainer:{marginLeft:-22},tableContainer:{width:"100%",height:"70%"},h5:{marginBottom:2*e.spacing.unit},button:Object(N.a)({margin:e.spacing.unit},"margin","0 0 0 12px")}})(Object(g.connect)(function(e){return e},function(e,t){return{actions:Object(p.bindActionCreators)(n,e)}})(Yt)),Vt=a(346),Bt=a.n(Vt),Gt=Object(R.createMuiTheme)({palette:{primary:Bt.a,secondary:{main:"#ffeb3b"}}}),Jt=Object(p.createStore)(I,Object(p.applyMiddleware)(d.a)),Xt=l.a.createElement(R.MuiThemeProvider,{theme:Gt},l.a.createElement(T.b,{utils:x.a},l.a.createElement(g.Provider,{store:Jt},l.a.createElement(Wt,null)))),Zt=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return Xt}}]),t}(r.Component);i.a.render(l.a.createElement(Zt,null),document.querySelector("#root"))}},[[348,2,1]]]);
//# sourceMappingURL=main.50ca7070.chunk.js.map