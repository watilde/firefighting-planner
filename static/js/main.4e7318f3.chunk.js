(this["webpackJsonpfirefighting-planner"]=this["webpackJsonpfirefighting-planner"]||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"a":"firefighting-planner","b":"0.1.0"}')},218:function(e,t,a){e.exports=a(316)},223:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),i=a(391),c=(a(223),a(87)),s=a(74),u=a(362),p=a(159),m=a(144),d=a(98),f=a(189),g=a(190),b=a.n(g),h=a(21),E=a(185),v=a.n(E),y=function(e){return function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,n=Object.keys(e),r={},l=0;l<n.length;l++){var o=e[n[l]](t[n[l]],a);r[n[l]]=o}return r}},w=a(101),O=a(10);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C={dateTime:"2018-08-01T10:10",searchWord:"",drawerOpen:!1};function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L={threeD:!1};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={range:6e5,lat:36.256535392993314,lon:-119.2002385680952,plans:[],dialogOpen:!1,plan:{}};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F={range:6e5,lat:36.256535392993314,lon:-119.2002385680952,reports:[],dialogOpen:!1,report:{}},x=y({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@app/setDateTime":return P({},e,{dateTime:t.dateTime});case"@app/setSearchWord":return P({},e,{searchWord:t.searchWord});case"@app/toggleDrawer":return P({},e,{drawerOpen:!e.drawerOpen});default:return e}},map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@map/toggleThreeD":return T({},e,{threeD:!e.threeD});default:return e}},planner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@planner/setPlan":return S({},e,{plan:t.plan});case"@planner/setDialogOpen":return S({},e,{dialogOpen:t.dialogOpen});case"@planner/setRange":return S({},e,{range:t.range});case"@planner/setLat":return S({},e,{lat:t.lat});case"@planner/setLon":return S({},e,{lon:t.lon});case"@planner/setPlans":return S({},e,{plans:t.plans});default:return e}},reporter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@reporter/setReport":return A({},e,{report:t.report});case"@reporter/setDialogOpen":return A({},e,{dialogOpen:t.dialogOpen});case"@reporter/setRange":return A({},e,{range:t.range});case"@reporter/setLat":return A({},e,{lat:t.lat});case"@reporter/setLon":return A({},e,{lon:t.lon});case"@reporter/setReports":return A({},e,{reports:t.reports});default:return e}}}),I={app:C,map:L,planner:D,reporter:F},_=JSON.parse(localStorage.getItem("".concat(w.a,"@").concat(w.b))),W=Object(n.createContext)(v()(I,_)),G=function(e){var t=Object(n.useContext)(W);return{state:t.state,dispatch:t.dispatch}},H=a(116),U=a(158),B=a(188),M=a.n(B);var V=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(h.a)(o,2),c=i[0],u=i[1],p=Object(n.useState)(!1),d=Object(h.a)(p,2),f=d[0],g=d[1];return f?r.a.createElement(s.a,{push:!0,to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{edge:"end",onClick:function(e){l(e.currentTarget),u(!0)},color:"inherit"},r.a.createElement(M.a,null)),r.a.createElement(H.a,{open:c,onClose:function(){l(null),u(!1)},anchorEl:a},r.a.createElement(U.a,{component:"a",href:"https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/firefighting-planner/project",target:"_blank"},"Project detail"),r.a.createElement(U.a,{component:"a",href:"https://github.com/watilde/firefighting-planner",target:"_blank"},"Source code"),r.a.createElement(U.a,{onClick:function(){g(!0)}},"Logout")))},z=a(202),J=a(12),K=a(145),Y=a.n(K),Q=Object(f.a)((function(e){return{search:Object(O.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(J.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(J.c)(e.palette.common.white,.25)},marginLeft:0,marginRight:"5px",width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}));var X=function(){var e=G(),t=e.dispatch,a=e.state.app.searchWord,n=Q();return r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(Y.a,null)),r.a.createElement(z.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onKeyPress:function(e){"Enter"===e.key&&t({type:"@app/setSearchWord",searchWord:e.target.value})},defaultValue:a}))},$=Object(f.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));var q=function(){var e=G().dispatch,t=$();return r.a.createElement("div",{className:t.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(m.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(t){e({type:"@app/toggleDrawer"})}},r.a.createElement(b.a,null)),r.a.createElement(d.a,{variant:"h6",className:t.title,noWrap:!0},"Firefighting planner"),r.a.createElement(X,null),r.a.createElement(V,null))))},Z=a(394),ee=a(365),te=a(191),ae=a.n(te),ne=a(361),re=a(332),le=[{label:"Reporter",pathname:"/report"},{label:"Planner",pathname:"/plan"},{label:"Dashboard",pathname:"/dashboard"}],oe=Object(f.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},listLink:{textDecoration:"none",color:"#000"},listItem:{cursor:"pointer","&:hover":{backgroundColor:"#eee"},"&.active":{backgroundColor:"#ddd"}}}}));var ie=function(){var e=Object(s.g)(),t=oe();return r.a.createElement(ne.a,{className:t.list},r.a.createElement(re.a,{className:t.listHeader},"Menu"),le.map((function(a){var n=e.pathname===a.pathname?"".concat(t.listItem," active"):t.listItem;return r.a.createElement(c.b,{key:a.label,to:a.pathname,className:t.listLink},r.a.createElement(re.a,{className:n},a.label))})))},ce=a(182),se=Object(f.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},textField:{minWidth:"200px"}}}));var ue=function(){var e=se(),t=G(),a=t.state,n=t.dispatch,l=a.app.dateTime;return r.a.createElement(ne.a,{className:e.list},r.a.createElement(re.a,{className:e.listHeader},"Target Date"),r.a.createElement(re.a,null,r.a.createElement(ce.a,{type:"datetime-local",defaultValue:l,className:e.textField,variant:"outlined",InputLabelProps:{shrink:!0},onChange:function(e){n({type:"@app/setDateTime",dateTime:e.target.value})}})))},pe=a(364),me=Object(f.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},listItem:{display:"flex",justifyContent:"space-between"}}}));var de=function(){var e=me(),t=G(),a=t.state,n=t.dispatch,l=a.map.threeD;return r.a.createElement(ne.a,{className:e.list},r.a.createElement(re.a,{className:e.listHeader},"Map Options"),r.a.createElement(re.a,{className:e.listItem},r.a.createElement(d.a,null,"3D"),r.a.createElement(pe.a,{checked:l,onChange:function(){n({type:"@map/toggle".concat("ThreeD")})}})))},fe=Object(f.a)((function(e){return{drawerHeader:{display:"flex",alignItems:"center",justifyContent:"flex-start"},drawerPaper:{width:260}}}));var ge=function(){var e=G(),t=e.dispatch,a=e.state.app.drawerOpen,n=fe();return r.a.createElement(Z.a,{className:n.drawer,variant:"persistent",anchor:"left",open:a,classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(m.a,{onClick:function(e){t({type:"@app/toggleDrawer"})}},r.a.createElement(ae.a,null))),r.a.createElement(ee.a,null),r.a.createElement(ue,null),r.a.createElement(ee.a,null),r.a.createElement(ie,null),r.a.createElement(ee.a,null),r.a.createElement(de,null))},be=a(366),he=a(123),Ee=a.n(he),ve=a(88),ye=a.n(ve),we=Object(f.a)((function(e){return{fab:{position:"fixed",margin:e.spacing(1),bottom:0,right:0}}}));var Oe=function(){var e=G(),t=e.state,a=e.dispatch,n=t.reporter,l=n.lat,o=n.lon,i=t.app.dateTime,c=we();return r.a.createElement(be.a,{color:"secondary","aria-label":"add",className:c.fab,onClick:function(e){a({type:"@reporter/setDialogOpen",dialogOpen:!0}),a({type:"@reporter/setReport",report:{category:"Report",uuid:ye()(),type:"",description:"",dateTime:i,lat:l,lon:o}})}},r.a.createElement(Ee.a,null))},je=a(367),Pe=a(368),Ce=a(369),Re=a(370),Te=a(161),Le=a(181),ke=a(180),Se=a(371),De=a(162),Ne=Object(f.a)((function(e){return{formControl:{minWidth:120}}}));var Ae=function(){var e=G(),t=e.dispatch,a=e.state.reporter,n=a.report,l=a.reports,o=a.dialogOpen,i=Ne(),c=function(){t({type:"@reporter/setDialogOpen",dialogOpen:!1})},s=function(e){var a=Object.assign({},n);a[e.target.name]=e.target.value,t({type:"@reporter/setReport",report:a})};return r.a.createElement(je.a,{open:o,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Pe.a,{id:"form-dialog-title"},"New report"),r.a.createElement(Ce.a,null,r.a.createElement(Re.a,null,"Your report will be immediately shared with the firefighters."),r.a.createElement(Te.a,{className:i.formControl},r.a.createElement(Le.a,{htmlFor:"type"},"Report type"),r.a.createElement(ke.a,{inputProps:{name:"type"},value:n.type,onChange:s},r.a.createElement(U.a,{value:"Evacuation help"},"Evacuation help"),r.a.createElement(U.a,{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{label:"Description",name:"description",value:n.description,fullWidth:!0,onChange:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{name:"dateTime",label:"When",type:"datetime-local",value:n.dateTime,InputLabelProps:{shrink:!0},onChange:s})),r.a.createElement(Se.a,null,r.a.createElement(De.a,{onClick:c,color:"primary"},"Cancel"),r.a.createElement(De.a,{onClick:function(e){var a=[].concat(l,n);t({type:"@reporter/setReports",reports:a}),t({type:"@reporter/setDialogOpen",dialogOpen:!1})},color:"primary"},"Save")))},Fe=a(7),xe=a.n(Fe),Ie=function(e,t){var a=new xe.a.PlacemarkAttributes(null);a.imageScale=.05,a.imageColor=xe.a.Color.RED,a.labelAttributes.offset=new xe.a.Offset(xe.a.OFFSET_FRACTION,.5,xe.a.OFFSET_FRACTION,1),a.imageSource="".concat(xe.a.configuration.baseUrl,"images/white-dot.png");var n={};return n.name=e.recordNumber,n.attributes=new xe.a.PlacemarkAttributes(a),n.attributes.imageScale=.04+.001*e.values.FRP,n};var _e=function(){var e,t,a,l,o=G(),i=o.dispatch,c=o.state,s=c.reporter,u=s.lat,p=s.lon,m=s.range,d=s.reports,f=c.app.searchWord,g=function(e){i({type:"@planner/setLat",lat:e})},b=function(e){i({type:"@planner/setLon",lon:e})};xe.a.configuration.baseUrl="".concat(""),xe.a.BingMapsKey="Arpxb2gWJKw1Q7P7mt4_d1Lhg_sRPDCiH25jPkNGUanfiHyEi1Ijlk-4UVgkyu65";var h=new xe.a.Globe2D;return h.projection=new xe.a.ProjectionMercator,Object(n.useEffect)((function(){(a=a||document.getElementById("canvas")).width=window.innerWidth,a.height=window.innerHeight-64,(l=l||new xe.a.WorldWindow("canvas")).globe=h,l.navigator.lookAtLocation.latitude=u,l.navigator.lookAtLocation.longitude=p,l.navigator.range=m;for(var n=[{layer:new xe.a.BMNGLayer,enabled:!0},{layer:new xe.a.BMNGLandsatLayer,enabled:!1},{layer:new xe.a.BingAerialLayer(null),enabled:!1},{layer:new xe.a.BingAerialWithLabelsLayer(null),enabled:!0},{layer:new xe.a.BingRoadsLayer(null),enabled:!1},{layer:new xe.a.OpenStreetMapImageLayer(null),enabled:!1},{layer:new xe.a.AtmosphereLayer,enabled:!0},{layer:new xe.a.CompassLayer,enabled:!0},{layer:new xe.a.CoordinatesDisplayLayer(l),enabled:!0},{layer:new xe.a.ViewControlsLayer(l),enabled:!0}],r=0;r<n.length;r++)n[r].layer.enabled=n[r].enabled,l.addLayer(n[r].layer);var o=new xe.a.RenderableLayer("Fires");new xe.a.Shapefile("".concat(xe.a.configuration.baseUrl,"firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp")).load(null,Ie,o),l.addLayer(o);var c=new xe.a.RenderableLayer("Reports"),s=new xe.a.PlacemarkAttributes(null);s.imageScale=.5,s.imageColor=xe.a.Color.GREEN,s.labelAttributes.offset=new xe.a.Offset(xe.a.OFFSET_FRACTION,.5,xe.a.OFFSET_FRACTION,1),d.forEach((function(e){var t=new xe.a.Placemark(new xe.a.Position(e.lat,e.lon,100),!0,null);t.label="".concat(e.type,"\n").concat(e.time),t.altitudeMode=xe.a.RELATIVE_TO_GROUND;var a=new xe.a.PlacemarkAttributes(s);a.imageSource="".concat(xe.a.configuration.baseUrl,"images/white-dot.png"),t.attributes=a;var n=new xe.a.PlacemarkAttributes(a);n.imageScale=1.2,t.highlightAttributes=n,c.addRenderable(t)})),l.addLayer(c);var E=new xe.a.NominatimGeocoder,v=new xe.a.GoToAnimator(l);if(f)if(f.match(xe.a.WWUtil.latLonRegex)){var y=f.split(","),w=parseFloat(y[0]),O=parseFloat(y[1]);v.goTo(new xe.a.Location(w,O),(function(){clearTimeout(t),t=setTimeout((function(){g(w),b(O)}),100)}))}else E.lookup(f,(function(e,a){if(0!==a.length){var n=parseFloat(a[0].lat),r=parseFloat(a[0].lon);v.goTo(new xe.a.Location(n,r),(function(){clearTimeout(t),t=setTimeout((function(){g(n),b(r)}),100)}))}}));var j=function(e){var a=e.clientX,n=e.clientY,r=l.pick(l.canvasCoordinates(a,n));if(1===r.objects.length&&r.objects[0].isTerrain){var o=r.objects[0].position;v.goTo(new xe.a.Location(o.latitude,o.longitude),(function(){clearTimeout(t),t=setTimeout((function(){g(o.latitude),b(o.longitude)}),100)}))}};l.addEventListener("wheel",(function(t){clearTimeout(e),e=setTimeout((function(){var e;e=l.navigator.range,i({type:"@planner/setRange",range:e})}),1e3)})),new xe.a.ClickRecognizer(l,j),new xe.a.TapRecognizer(l,j)}),[h,u,p,f,d,m]),r.a.createElement("canvas",{id:"canvas"})};var We=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(ge,null),r.a.createElement(_e,null),r.a.createElement(Ae,null),r.a.createElement(Oe,null))},Ge=Object(f.a)((function(e){return{fab:{position:"fixed",margin:e.spacing(1),bottom:0,right:0}}}));var He=function(){var e=G(),t=e.state,a=e.dispatch,n=t.planner,l=n.lat,o=n.lon,i=t.app.dateTime,c=Ge();return r.a.createElement(be.a,{color:"secondary","aria-label":"add",className:c.fab,onClick:function(e){a({type:"@planner/setDialogOpen",dialogOpen:!0}),a({type:"@planner/setPlan",plan:{category:"Plan",uuid:ye()(),type:"",description:"",dateTime:i,lat:l,lon:o}})}},r.a.createElement(Ee.a,null))},Ue=Object(f.a)((function(e){return{formControl:{minWidth:120}}}));var Be=function(){var e=G(),t=e.dispatch,a=e.state.planner,n=a.plan,l=a.plans,o=a.dialogOpen,i=Ue(),c=function(){t({type:"@planner/setDialogOpen",dialogOpen:!1})},s=function(e){var a=Object.assign({},n);a[e.target.name]=e.target.value,t({type:"@planner/setPlan",plan:a})};return r.a.createElement(je.a,{open:o,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Pe.a,{id:"form-dialog-title"},"Add plan"),r.a.createElement(Ce.a,null,r.a.createElement(Re.a,null,"Added plan will be immediately shared with the other teams."),r.a.createElement(Te.a,{className:i.formControl},r.a.createElement(Le.a,{htmlFor:"type"},"Plan type"),r.a.createElement(ke.a,{inputProps:{name:"type"},value:n.type,onChange:s},r.a.createElement(U.a,{value:"Spraying the water"},"Spraying the water"),r.a.createElement(U.a,{value:"Prescribed burning"},"Prescribed burning"),r.a.createElement(U.a,{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{label:"Description",name:"description",value:n.description,fullWidth:!0,onChange:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{name:"dateTime",label:"When",type:"datetime-local",value:n.dateTime,InputLabelProps:{shrink:!0},onChange:s})),r.a.createElement(Se.a,null,r.a.createElement(De.a,{onClick:c,color:"primary"},"Cancel"),r.a.createElement(De.a,{onClick:function(e){var a=[].concat(l,n);t({type:"@planner/setPlans",plans:a}),t({type:"@planner/setDialogOpen",dialogOpen:!1})},color:"primary"},"Save")))},Me=function(e,t){var a=new xe.a.PlacemarkAttributes(null);a.imageScale=.05,a.imageColor=xe.a.Color.RED,a.labelAttributes.offset=new xe.a.Offset(xe.a.OFFSET_FRACTION,.5,xe.a.OFFSET_FRACTION,1),a.imageSource="".concat(xe.a.configuration.baseUrl,"images/white-dot.png");var n={};return n.name=e.recordNumber,n.attributes=new xe.a.PlacemarkAttributes(a),n.attributes.imageScale=.04+.001*e.values.FRP,n};var Ve=function(){var e,t,a,l,o=G(),i=o.dispatch,c=o.state,s=c.planner,u=s.lat,p=s.lon,m=s.range,d=s.plans,f=c.map.threeD,g=c.app.searchWord,b=function(e){i({type:"@planner/setLat",lat:e})},h=function(e){i({type:"@planner/setLon",lon:e})};xe.a.configuration.baseUrl="".concat(""),xe.a.BingMapsKey="Arpxb2gWJKw1Q7P7mt4_d1Lhg_sRPDCiH25jPkNGUanfiHyEi1Ijlk-4UVgkyu65";var E=new xe.a.Globe(new xe.a.EarthElevationModel),v=new xe.a.Globe2D;return v.projection=new xe.a.ProjectionMercator,Object(n.useEffect)((function(){(a=a||document.getElementById("canvas")).width=window.innerWidth,a.height=window.innerHeight-64,(l=l||new xe.a.WorldWindow("canvas")).globe=f?E:v,l.navigator.lookAtLocation.latitude=u,l.navigator.lookAtLocation.longitude=p,l.navigator.range=m;for(var n=[{layer:new xe.a.BMNGLayer,enabled:!0},{layer:new xe.a.BMNGLandsatLayer,enabled:!1},{layer:new xe.a.BingAerialLayer(null),enabled:!1},{layer:new xe.a.BingAerialWithLabelsLayer(null),enabled:!0},{layer:new xe.a.BingRoadsLayer(null),enabled:!1},{layer:new xe.a.OpenStreetMapImageLayer(null),enabled:!1},{layer:new xe.a.AtmosphereLayer,enabled:!0},{layer:new xe.a.CompassLayer,enabled:!0},{layer:new xe.a.CoordinatesDisplayLayer(l),enabled:!0},{layer:new xe.a.ViewControlsLayer(l),enabled:!0}],r=0;r<n.length;r++)n[r].layer.enabled=n[r].enabled,l.addLayer(n[r].layer);var o=new xe.a.RenderableLayer("Fires");new xe.a.Shapefile("".concat(xe.a.configuration.baseUrl,"firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp")).load(null,Me,o),l.addLayer(o);var c=new xe.a.RenderableLayer("Plans"),s=new xe.a.PlacemarkAttributes(null);s.imageScale=.5,s.imageColor=xe.a.Color.GREEN,s.labelAttributes.offset=new xe.a.Offset(xe.a.OFFSET_FRACTION,.5,xe.a.OFFSET_FRACTION,1),d.forEach((function(e){var t=new xe.a.Placemark(new xe.a.Position(e.lat,e.lon,100),!0,null);t.label="".concat(e.type,"\n").concat(e.time),t.altitudeMode=xe.a.RELATIVE_TO_GROUND;var a=new xe.a.PlacemarkAttributes(s);a.imageSource="".concat(xe.a.configuration.baseUrl,"images/white-dot.png"),t.attributes=a;var n=new xe.a.PlacemarkAttributes(a);n.imageScale=1.2,t.highlightAttributes=n,c.addRenderable(t)})),l.addLayer(c);var y=new xe.a.NominatimGeocoder,w=new xe.a.GoToAnimator(l);if(g)if(g.match(xe.a.WWUtil.latLonRegex)){var O=g.split(","),j=parseFloat(O[0]),P=parseFloat(O[1]);w.goTo(new xe.a.Location(j,P),(function(){clearTimeout(t),t=setTimeout((function(){b(j),h(P)}),100)}))}else y.lookup(g,(function(e,a){if(0!==a.length){var n=parseFloat(a[0].lat),r=parseFloat(a[0].lon);w.goTo(new xe.a.Location(n,r),(function(){clearTimeout(t),t=setTimeout((function(){b(n),h(r)}),100)}))}}));var C=function(e){var a=e.clientX,n=e.clientY,r=l.pick(l.canvasCoordinates(a,n));if(1===r.objects.length&&r.objects[0].isTerrain){var o=r.objects[0].position;w.goTo(new xe.a.Location(o.latitude,o.longitude),(function(){clearTimeout(t),t=setTimeout((function(){b(o.latitude),h(o.longitude)}),100)}))}};l.addEventListener("wheel",(function(t){clearTimeout(e),e=setTimeout((function(){var e;e=l.navigator.range,i({type:"@planner/setRange",range:e})}),1e3)})),new xe.a.ClickRecognizer(l,C),new xe.a.TapRecognizer(l,C)}),[v,u,p,g,d,m]),r.a.createElement("canvas",{id:"canvas"})};var ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(ge,null),r.a.createElement(Ve,null),r.a.createElement(Be,null),r.a.createElement(He,null))},Je=a(192),Ke=a.n(Je),Ye=a(375),Qe=a(376),Xe=a(377),$e=a(378),qe=a(379),Ze=a(380),et=a(381),tt=a(382),at=a(383),nt=a(384),rt=a(385),lt=a(386),ot=a(387),it=a(388),ct=a(389),st={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(Ye.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(Qe.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(Xe.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement($e.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(qe.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(Ze.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(et.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(tt.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(at.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(nt.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(qe.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(rt.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(Xe.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(lt.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(ot.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(it.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(ct.a,Object.assign({},e,{ref:t}))}))};var ut=function(){var e=G(),t=e.dispatch,a=e.state,n=a.planner.plans,l=a.reporter.reports,o=[].concat(n,l);return r.a.createElement(Ke.a,{title:"All posted data",icons:st,options:{title:!1,search:!1,exportButton:!0,editable:!0,minBodyHeight:"".concat(window.innerHeight-180,"px")},style:{borderRadius:0},columns:[{title:"Category",field:"category",editComponent:function(e){return r.a.createElement(ke.a,{value:e.value||"",onChange:function(t){return e.onChange(t.target.value)}},r.a.createElement(U.a,{value:"Report"},"Report"),r.a.createElement(U.a,{value:"Plan"},"Plan"))}},{title:"Type",field:"type"},{title:"Description",field:"description"},{title:"Latitude",field:"lat",editComponent:function(e){return r.a.createElement(ce.a,{fullWidth:!0,placeholder:"Latitude",type:"number",value:e.value||"",onChange:function(t){return e.onChange(t.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:-90,max:90}})}},{title:"Longitude",field:"lon",editComponent:function(e){return r.a.createElement(ce.a,{fullWidth:!0,placeholder:"Longitude",type:"number",value:e.value||"",onChange:function(t){return e.onChange(t.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:-180,max:180}})}},{title:"Date time",field:"dateTime",editComponent:function(e){return r.a.createElement(ce.a,{type:"datetime-local",value:e.value||"",onChange:function(t){return e.onChange(t.target.value)},InputLabelProps:{shrink:!0}})}}],editable:{onRowAdd:function(e){if(e.uuid=ye()(),"Plan"===e.category){var a=[].concat(n,e);t({type:"@planner/setPlans",plans:a})}else{var r=[].concat(l,e);t({type:"@reporter/setReports",reports:r})}return new Promise((function(e,t){e()}))},onRowUpdate:function(e){if("Plan"===e.category){var a=[].concat(n).map((function(t){return t.uuid===e.uuid?e:t}));t({type:"@planner/setPlans",plans:a})}else{var r=[].concat(l).map((function(t){return t.uuid===e.uuid?e:t}));t({type:"@reporter/setReports",reports:r})}return new Promise((function(e,t){e()}))},onRowDelete:function(e){if("Plan"===e.category){var a=[].concat(n).filter((function(t){return t.uuid!==e.uuid}));t({type:"@planner/setPlans",plans:a})}else{var r=[].concat(l).filter((function(t){return t.uuid!==e.uuid}));t({type:"@reporter/setReports",reports:r})}return new Promise((function(e,t){e()}))}},data:o})};var pt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(ge,null),r.a.createElement(ut,null))},mt=a(390),dt=a(373),ft=a(392),gt={citizen:"know how far wildfire is from my town and ask for help when it\u2019s needed.","senior-firefighter":"manage scattered wildfire information, related data and firefighting plans in a single place.","junior-firefighter":"learn the best practice of fire fighting planning from the past."},bt={citizen:"/report","senior-firefighter":"/plan","junior-firefighter":"/dashboard"},ht=Object(f.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},submit:{margin:e.spacing(3,0,0)},description:{fontSize:"16px",border:"1px solid rgba(0, 0, 0, 0.23)",padding:"8.5px 24px 12.5px 14px",borderRadius:"4px",minHeight:"56px"}}}));var Et=function(){var e=ht(),t=Object(n.useState)(""),a=Object(h.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(""),c=Object(h.a)(i,2),u=c[0],p=c[1];return u?r.a.createElement(s.a,{push:!0,to:bt[l]}):r.a.createElement(r.a.Fragment,null,r.a.createElement(mt.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:e.paper},r.a.createElement(dt.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(dt.a,{item:!0,xs:12},r.a.createElement(d.a,{component:"h1",variant:"h5"},"Try Firefighting planner"))),r.a.createElement("br",null),r.a.createElement(dt.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(dt.a,{item:!0,xs:2},"as a"),r.a.createElement(dt.a,{item:!0,xs:10},r.a.createElement(ke.a,{value:l,onChange:function(e){o(e.target.value)},variant:"outlined",fullWidth:!0},r.a.createElement(U.a,{value:"citizen"},"Citizen"),r.a.createElement(U.a,{value:"senior-firefighter"},"Senior firefighter"),r.a.createElement(U.a,{value:"junior-firefighter"},"Junior firefighter")))),r.a.createElement("br",null),r.a.createElement(dt.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(dt.a,{item:!0,xs:2},"to"),r.a.createElement(dt.a,{item:!0,xs:10},r.a.createElement(d.a,{className:e.description},gt[l]||""))),r.a.createElement(De.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){p(!0)}},"Enter"))),r.a.createElement(ft.a,{mt:8},r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Created for ",r.a.createElement("a",{href:"https://2019.spaceappschallenge.org",target:"_blank",rel:"noopener noreferrer"},"NASA International Space Apps Challenge 2019")," and the world\ud83c\udf0f",r.a.createElement("br",null),"Made by ",r.a.createElement("a",{href:"https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/firefighting-planner/project",target:"_blank",rel:"noopener noreferrer"},"Team Firefighting planner")," with love\ud83d\udc96")))};var vt=function(){return r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(Et,null)),r.a.createElement(s.b,{exact:!0,path:"/report"},r.a.createElement(We,null)),r.a.createElement(s.b,{exact:!0,path:"/plan"},r.a.createElement(ze,null)),r.a.createElement(s.b,{exact:!0,path:"/dashboard"},r.a.createElement(pt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(e){var t=e.children,a=Object(n.useReducer)(x,I),l=Object(h.a)(a,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){localStorage.setItem("".concat(w.a,"@").concat(w.b),JSON.stringify(o))}),[o]),r.a.createElement(W.Provider,{value:{state:o,dispatch:i}},t)}),null,r.a.createElement(i.a,null),r.a.createElement(vt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[218,1,2]]]);
//# sourceMappingURL=main.4e7318f3.chunk.js.map