(this["webpackJsonpfirefighting-planner"]=this["webpackJsonpfirefighting-planner"]||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"a":"firefighting-planner","b":"0.1.0"}')},218:function(e,a,t){e.exports=t(316)},223:function(e,a,t){},316:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),i=t(391),c=(t(223),t(87)),s=t(74),u=t(362),p=t(158),m=t(144),d=t(99),g=t(188),f=t(190),b=t.n(f),h=t(21),E=t(184),v=t.n(E),w=function(e){return function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object.keys(e),r={},l=0;l<n.length;l++){var o=e[n[l]](a[n[l]],t);r[n[l]]=o}return r}},y=t(102),O=t(10);function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(t,!0).forEach((function(a){Object(O.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var P={dateTime:"2018-08-01T10:10",searchWord:"",drawerOpen:!1};function L(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?L(t,!0).forEach((function(a){Object(O.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var N={compass:!1,cordinates:!1,viewControls:!1,threeD:!1,BMNG:!0,BMNGLandsat:!1,BingAerial:!1,BingAerialWithLabels:!0,BingRoads:!1,OpenStreetMapImage:!1,Atmosphere:!0,layer:{label:"Select leyer",tag:"_"}};function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(t,!0).forEach((function(a){Object(O.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var T={range:6e5,lat:36.256535392993314,lon:-119.2002385680952,plans:[],dialogOpen:!1,plan:{}};function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?D(t,!0).forEach((function(a){Object(O.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var _={range:6e5,lat:36.256535392993314,lon:-119.2002385680952,reports:[],dialogOpen:!1,report:{}},x=w({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@app/setDateTime":return C({},e,{dateTime:a.dateTime});case"@app/setSearchWord":return C({},e,{searchWord:a.searchWord});case"@app/toggleDrawer":return C({},e,{drawerOpen:!e.drawerOpen});default:return e}},map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@map/setLayer":return R({},e,{layer:a.layer});case"@map/toggleThreeD":return R({},e,{threeD:!e.threeD});case"@map/toggleCompass":return R({},e,{compass:!e.compass});case"@map/toggleCordinates":return R({},e,{cordinates:!e.cordinates});case"@map/toggleViewControls":return R({},e,{viewControls:!e.viewControls});case"@map/toggleBMNG":return R({},e,{BMNG:!e.BMNG});case"@map/toggleBMNGLandsat":return R({},e,{BMNGLandsat:!e.BMNGLandsat});case"@map/toggleBingAerial":return R({},e,{BingAerial:!e.BingAerial});case"@map/toggleBingAerialWithLabels":return R({},e,{BingAerialWithLabels:!e.BingAerialWithLabels});case"@map/toggleBingRoads":return R({},e,{BingRoads:!e.BingRoads});case"@map/toggleOpenStreetMapImage":return R({},e,{OpenStreetMapImage:!e.OpenStreetMapImage});case"@map/toggleAtmosphere":return R({},e,{Atmosphere:!e.Atmosphere});default:return e}},planner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@planner/setPlan":return k({},e,{plan:a.plan});case"@planner/setDialogOpen":return k({},e,{dialogOpen:a.dialogOpen});case"@planner/setRange":return k({},e,{range:a.range});case"@planner/setLat":return k({},e,{lat:a.lat});case"@planner/setLon":return k({},e,{lon:a.lon});case"@planner/setPlans":return k({},e,{plans:a.plans});default:return e}},reporter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@reporter/setReport":return A({},e,{report:a.report});case"@reporter/setDialogOpen":return A({},e,{dialogOpen:a.dialogOpen});case"@reporter/setRange":return A({},e,{range:a.range});case"@reporter/setLat":return A({},e,{lat:a.lat});case"@reporter/setLon":return A({},e,{lon:a.lon});case"@reporter/setReports":return A({},e,{reports:a.reports});default:return e}}}),I={app:P,map:N,planner:T,reporter:_},W=JSON.parse(localStorage.getItem("".concat(y.a,"@").concat(y.b))),F=Object(n.createContext)(v()(I,W)),M=function(e){var a=Object(n.useContext)(F);return{state:a.state,dispatch:a.dispatch}},B=t(117),G=t(157),U=t(187),V=t.n(U);var H=function(){var e=Object(n.useState)(null),a=Object(h.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(h.a)(o,2),c=i[0],u=i[1],p=Object(n.useState)(!1),d=Object(h.a)(p,2),g=d[0],f=d[1];return g?r.a.createElement(s.a,{push:!0,to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{edge:"end",onClick:function(e){l(e.currentTarget),u(!0)},color:"inherit"},r.a.createElement(V.a,null)),r.a.createElement(B.a,{open:c,onClose:function(){l(null),u(!1)},anchorEl:t},r.a.createElement(G.a,{component:"a",href:"https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/firefighting-planner/project",target:"_blank"},"Project detail"),r.a.createElement(G.a,{component:"a",href:"https://opennex.org/project/projectDetail/275",target:"_blank"},"OpenNEX"),r.a.createElement(G.a,{component:"a",href:"https://github.com/watilde/firefighting-planner",target:"_blank"},"GitHub"),r.a.createElement(G.a,{onClick:function(){localStorage.clear()}},"Clear cache"),r.a.createElement(G.a,{onClick:function(){f(!0)}},"Logout")))},z=t(202),J=t(11),K=t(189),Y=t.n(K),Q=Object(g.a)((function(e){return{search:Object(O.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(J.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(J.c)(e.palette.common.white,.25)},marginLeft:0,marginRight:"5px",width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}));var X=function(){var e=M(),a=e.dispatch,t=e.state.app.searchWord,n=Q();return r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(Y.a,null)),r.a.createElement(z.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onKeyPress:function(e){"Enter"===e.key&&a({type:"@app/setSearchWord",searchWord:e.target.value})},defaultValue:t}))},q=Object(g.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},logo:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}}));var $=function(){var e=M().dispatch,a=q();return r.a.createElement("div",{className:a.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(m.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:function(a){e({type:"@app/toggleDrawer"})}},r.a.createElement(b.a,null)),r.a.createElement(d.a,{variant:"h6",className:a.title,noWrap:!0},"Firefighting planner"),r.a.createElement(X,null),r.a.createElement(H,null))))},Z=t(395),ee=t(365),ae=t(191),te=t.n(ae),ne=t(361),re=t(332),le=[{label:"Reporter",pathname:"/report"},{label:"Planner",pathname:"/plan"},{label:"Dashboard",pathname:"/dashboard"}],oe=Object(g.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},listLink:{textDecoration:"none",color:"#000"},listItem:{cursor:"pointer","&:hover":{backgroundColor:"#eee"},"&.active":{backgroundColor:"#ddd"}}}}));var ie=function(){var e=Object(s.g)(),a=oe();return r.a.createElement(ne.a,{className:a.list},r.a.createElement(re.a,{className:a.listHeader},"Menu"),le.map((function(t){var n=e.pathname===t.pathname?"".concat(a.listItem," active"):a.listItem;return r.a.createElement(c.b,{key:t.label,to:t.pathname,className:a.listLink},r.a.createElement(re.a,{className:n},t.label))})))},ce=t(180),se=Object(g.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},textField:{minWidth:"200px"}}}));var ue=function(){var e=se(),a=M(),t=a.state,n=a.dispatch,l=t.app.dateTime;return r.a.createElement(ne.a,{className:e.list},r.a.createElement(re.a,{className:e.listHeader},"Target Date"),r.a.createElement(re.a,null,r.a.createElement(ce.a,{type:"datetime-local",defaultValue:l,className:e.textField,variant:"outlined",InputLabelProps:{shrink:!0},onChange:function(e){n({type:"@app/setDateTime",dateTime:e.target.value})}})))},pe=t(364),me=Object(g.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},listText:{fontSize:"14px"},listItem:{display:"flex",justifyContent:"space-between",paddingTop:0,paddingBottom:0}}}));var de=function(){var e=me(),a=M(),t=a.state,n=a.dispatch,l=t.map,o=l.threeD,i=l.compass,c=l.cordinates,s=l.viewControls,u=function(e){n({type:"@map/toggle".concat(e)})};return r.a.createElement(ne.a,{className:e.list},r.a.createElement(re.a,{className:e.listHeader},"Map options"),r.a.createElement(re.a,{className:e.listItem},r.a.createElement(d.a,{className:e.listText},"3D"),r.a.createElement(pe.a,{checked:o,onChange:function(){u("ThreeD")}})),r.a.createElement(re.a,{className:e.listItem},r.a.createElement(d.a,{className:e.listText},"Compass"),r.a.createElement(pe.a,{checked:i,onChange:function(){u("Compass")}})),r.a.createElement(re.a,{className:e.listItem},r.a.createElement(d.a,{className:e.listText},"Cordinates"),r.a.createElement(pe.a,{checked:c,onChange:function(){u("Cordinates")}})),r.a.createElement(re.a,{className:e.listItem},r.a.createElement(d.a,{className:e.listText},"View Controls"),r.a.createElement(pe.a,{checked:s,onChange:function(){u("ViewControls")}})))},ge=t(393),fe=[{label:"No layer",tag:"_"},{label:"Land Surface Temperature [Day]",tag:"MOD_LSTD_D"},{label:"Land Surface Temperature [Night]",tag:"MOD_LSTN_D"},{label:"Cloud Water Content",tag:"MYDAL2_D_CLD_WP"},{label:"Leaf Area Index",tag:"MOD15A2_E_LAI"},{label:"Nitrogen Dioxide",tag:"AURA_NO2_D"},{label:"Population",tag:"SEDAC_POP"},{label:"Rainfall",tag:"TRMM_3B43D"},{label:"Snow Cover",tag:"MOD10C1_D_SNOW"},{label:"Snow Water Equivalent",tag:"SWE_M"},{label:"Solar Insolation",tag:"CERES_INSOL_D"},{label:"Topography",tag:"SRTM_RAMP2_TOPO"},{label:"UV Index",tag:"AURA_UVI_CLIM_M"},{label:"Vegetation Index (NDVI)",tag:"MOD_NDVI_16"},{label:"Water Vapor",tag:"MYDAL2_D_SKY_WV"}],be=Object(g.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},listText:{fontSize:"14px"},listItem:{display:"flex",justifyContent:"space-between",paddingTop:0,paddingBottom:0}}}));var he=function(){var e=be(),a=M(),t=a.state,n=a.dispatch,l=t.map.layer;return r.a.createElement(ne.a,{className:e.list},r.a.createElement(re.a,{className:e.listHeader},"Layer options for Planner"),fe.map((function(a){return r.a.createElement(re.a,{key:a.tag,className:e.listItem},r.a.createElement(d.a,{className:e.listText},a.label),r.a.createElement(ge.a,{checked:l.tag===a.tag,onChange:function(){!function(e){var a=fe.filter((function(a){return a.tag===e})).pop();n({type:"@map/setLayer",layer:a})}(a.tag)}}))})))},Ee=Object(g.a)((function(e){return{drawerHeader:{display:"flex",alignItems:"center",justifyContent:"flex-start"},drawerPaper:{width:300}}}));var ve=function(){var e=M(),a=e.dispatch,t=e.state.app.drawerOpen,n=Ee();return r.a.createElement(Z.a,{className:n.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(m.a,{onClick:function(e){a({type:"@app/toggleDrawer"})}},r.a.createElement(te.a,null))),r.a.createElement(ee.a,null),r.a.createElement(ue,null),r.a.createElement(ee.a,null),r.a.createElement(ie,null),r.a.createElement(ee.a,null),r.a.createElement(de,null),r.a.createElement(ee.a,null),r.a.createElement(he,null))},we=t(366),ye=t(123),Oe=t.n(ye),je=t(89),Ce=t.n(je),Pe=Object(g.a)((function(e){return{fab:{position:"fixed",margin:e.spacing(1),bottom:0,right:0}}}));var Le=function(){var e=M(),a=e.state,t=e.dispatch,n=a.reporter,l=n.lat,o=n.lon,i=a.app.dateTime,c=Pe();return r.a.createElement(we.a,{color:"secondary","aria-label":"add",className:c.fab,onClick:function(e){t({type:"@reporter/setDialogOpen",dialogOpen:!0}),t({type:"@reporter/setReport",report:{category:"Report",uuid:Ce()(),type:"",description:"",dateTime:i,lat:l,lon:o}})}},r.a.createElement(Oe.a,null))},Re=t(367),Ne=t(368),Se=t(369),ke=t(370),Te=t(160),De=t(181),Ae=t(179),_e=t(371),xe=t(161),Ie=Object(g.a)((function(e){return{formControl:{minWidth:120}}}));var We=function(){var e=M(),a=e.dispatch,t=e.state.reporter,n=t.report,l=t.reports,o=t.dialogOpen,i=Ie(),c=function(){a({type:"@reporter/setDialogOpen",dialogOpen:!1})},s=function(e){var t=Object.assign({},n);t[e.target.name]=e.target.value,a({type:"@reporter/setReport",report:t})};return r.a.createElement(Re.a,{open:o,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ne.a,{id:"form-dialog-title"},"New report"),r.a.createElement(Se.a,null,r.a.createElement(ke.a,null,"Your report will be immediately shared with the firefighters."),r.a.createElement(Te.a,{className:i.formControl},r.a.createElement(De.a,{htmlFor:"type"},"Report type"),r.a.createElement(Ae.a,{inputProps:{name:"type"},value:n.type,onChange:s},r.a.createElement(G.a,{value:"Evacuation help"},"Evacuation help"),r.a.createElement(G.a,{value:"Wildfire report"},"Wildfire report"),r.a.createElement(G.a,{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{label:"Description",name:"description",value:n.description,fullWidth:!0,onChange:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{name:"dateTime",label:"When",type:"datetime-local",value:n.dateTime,InputLabelProps:{shrink:!0},onChange:s})),r.a.createElement(_e.a,null,r.a.createElement(xe.a,{onClick:c,color:"primary"},"Cancel"),r.a.createElement(xe.a,{onClick:function(e){var t=[].concat(l,n);a({type:"@reporter/setReports",reports:t}),a({type:"@reporter/setDialogOpen",dialogOpen:!1})},color:"primary"},"Save")))},Fe=t(7),Me=t.n(Fe),Be=function(e,a){var t=new Me.a.PlacemarkAttributes(null);t.imageScale=.05,t.imageColor=Me.a.Color.RED,t.labelAttributes.offset=new Me.a.Offset(Me.a.OFFSET_FRACTION,.5,Me.a.OFFSET_FRACTION,1),t.imageSource="".concat(Me.a.configuration.baseUrl,"images/white-dot.png");var n={};return n.name=e.recordNumber,n.attributes=new Me.a.PlacemarkAttributes(t),n.attributes.imageScale=.04+.001*e.values.FRP,n};var Ge=function(){var e=M(),a=e.dispatch,t=e.state,l=t.reporter,o=l.lat,i=l.lon,c=l.range,s=l.reports,u=t.map,p=u.compass,m=u.cordinates,d=u.viewControls,g=u.threeD,f=t.app.searchWord,b=function(e){a({type:"@planner/setLat",lat:e})},h=function(e){a({type:"@planner/setLon",lon:e})};Me.a.configuration.baseUrl="".concat(""),Me.a.BingMapsKey="Arpxb2gWJKw1Q7P7mt4_d1Lhg_sRPDCiH25jPkNGUanfiHyEi1Ijlk-4UVgkyu65";var E=new Me.a.Globe(new Me.a.EarthElevationModel),v=new Me.a.Globe2D;return v.projection=new Me.a.ProjectionMercator,Object(n.useEffect)((function(){var e=document.getElementById("canvas");e.width=window.innerWidth,e.height=window.innerHeight-64;var t=new Me.a.WorldWindow("canvas");t.globe=g?E:v,t.navigator.lookAtLocation.latitude=o,t.navigator.lookAtLocation.longitude=i,t.navigator.range=c;for(var n=[{layer:new Me.a.BMNGLayer,enabled:!0},{layer:new Me.a.BMNGLandsatLayer,enabled:!1},{layer:new Me.a.BingAerialLayer(null),enabled:!1},{layer:new Me.a.BingAerialWithLabelsLayer(null),enabled:!0},{layer:new Me.a.BingRoadsLayer(null),enabled:!1},{layer:new Me.a.OpenStreetMapImageLayer(null),enabled:!1},{layer:new Me.a.AtmosphereLayer,enabled:!0},{layer:new Me.a.CompassLayer,enabled:p},{layer:new Me.a.CoordinatesDisplayLayer(t),enabled:m},{layer:new Me.a.ViewControlsLayer(t),enabled:d}],r=0;r<n.length;r++)n[r].layer.enabled=n[r].enabled,t.addLayer(n[r].layer);var l=new Me.a.RenderableLayer("Fires");new Me.a.Shapefile("".concat(Me.a.configuration.baseUrl,"firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp")).load(null,Be,l),t.addLayer(l);var u=new Me.a.RenderableLayer("Reports"),w=new Me.a.PlacemarkAttributes(null);w.imageScale=.5,w.imageColor=Me.a.Color.GREEN,w.labelAttributes.offset=new Me.a.Offset(Me.a.OFFSET_FRACTION,.5,Me.a.OFFSET_FRACTION,1),s.forEach((function(e){var a=new Me.a.Placemark(new Me.a.Position(e.lat,e.lon,100),!0,null);a.label="".concat(e.type,"\n").concat(e.dateTime),a.altitudeMode=Me.a.RELATIVE_TO_GROUND;var t=new Me.a.PlacemarkAttributes(w);t.imageSource="".concat(Me.a.configuration.baseUrl,"images/white-dot.png"),a.attributes=t;var n=new Me.a.PlacemarkAttributes(t);n.imageScale=1.2,a.highlightAttributes=n,u.addRenderable(a)})),t.addLayer(u);var y=new Me.a.NominatimGeocoder,O=new Me.a.GoToAnimator(t);if(f)if(f.match(Me.a.WWUtil.latLonRegex)){var j=f.split(","),C=parseFloat(j[0]),P=parseFloat(j[1]);O.goTo(new Me.a.Location(C,P),(function(){b(C),h(P)}))}else y.lookup(f,(function(e,a){if(0!==a.length){var t=parseFloat(a[0].lat),n=parseFloat(a[0].lon);O.goTo(new Me.a.Location(t,n),(function(){b(t),h(n)}))}}));var L=function(e){var a=e.clientX,n=e.clientY,r=t.pick(t.canvasCoordinates(a,n));if(1===r.objects.length&&r.objects[0].isTerrain){var l=r.objects[0].position;O.goTo(new Me.a.Location(l.latitude,l.longitude),(function(){b(l.latitude),h(l.longitude)}))}};t.addEventListener("wheel",(function(e){var n;n=t.navigator.range,a({type:"@planner/setRange",range:n})})),new Me.a.ClickRecognizer(t,L),new Me.a.TapRecognizer(t,L)}),[f,g,s,p,m,d]),r.a.createElement("canvas",{id:"canvas"})};var Ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(ve,null),r.a.createElement(Ge,null),r.a.createElement(We,null),r.a.createElement(Le,null))},Ve=Object(g.a)((function(e){return{fab:{position:"fixed",margin:e.spacing(1),bottom:0,right:0}}}));var He=function(){var e=M(),a=e.state,t=e.dispatch,n=a.planner,l=n.lat,o=n.lon,i=a.app.dateTime,c=Ve();return r.a.createElement(we.a,{color:"secondary","aria-label":"add",className:c.fab,onClick:function(e){t({type:"@planner/setDialogOpen",dialogOpen:!0}),t({type:"@planner/setPlan",plan:{category:"Plan",uuid:Ce()(),type:"",description:"",dateTime:i,lat:l,lon:o}})}},r.a.createElement(Oe.a,null))},ze=Object(g.a)((function(e){return{formControl:{minWidth:120}}}));var Je=function(){var e=M(),a=e.dispatch,t=e.state.planner,n=t.plan,l=t.plans,o=t.dialogOpen,i=ze(),c=function(){a({type:"@planner/setDialogOpen",dialogOpen:!1})},s=function(e){var t=Object.assign({},n);t[e.target.name]=e.target.value,a({type:"@planner/setPlan",plan:t})};return r.a.createElement(Re.a,{open:o,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ne.a,{id:"form-dialog-title"},"Add plan"),r.a.createElement(Se.a,null,r.a.createElement(ke.a,null,"Added plan will be immediately shared with the other teams."),r.a.createElement(Te.a,{className:i.formControl},r.a.createElement(De.a,{htmlFor:"type"},"Plan type"),r.a.createElement(Ae.a,{inputProps:{name:"type"},value:n.type,onChange:s},r.a.createElement(G.a,{value:"Spraying the water"},"Spraying the water"),r.a.createElement(G.a,{value:"Prescribed burning"},"Prescribed burning"),r.a.createElement(G.a,{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{label:"Description",name:"description",value:n.description,fullWidth:!0,onChange:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{name:"dateTime",label:"When",type:"datetime-local",value:n.dateTime,InputLabelProps:{shrink:!0},onChange:s})),r.a.createElement(_e.a,null,r.a.createElement(xe.a,{onClick:c,color:"primary"},"Cancel"),r.a.createElement(xe.a,{onClick:function(e){var t=[].concat(l,n);a({type:"@planner/setPlans",plans:t}),a({type:"@planner/setDialogOpen",dialogOpen:!1})},color:"primary"},"Save")))},Ke="https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";function Ye(e){return e.text().then((function(e){return(new DOMParser).parseFromString(e,"text/xml")}))}var Qe=function(e,a){var t=new Me.a.PlacemarkAttributes(null);t.imageScale=.05,t.imageColor=Me.a.Color.RED,t.labelAttributes.offset=new Me.a.Offset(Me.a.OFFSET_FRACTION,.5,Me.a.OFFSET_FRACTION,1),t.imageSource="".concat(Me.a.configuration.baseUrl,"images/white-dot.png");var n={};return n.name=e.recordNumber,n.attributes=new Me.a.PlacemarkAttributes(t),n.attributes.imageScale=.04+.001*e.values.FRP,n};var Xe=function(){var e=M(),a=e.dispatch,t=e.state,l=t.planner,o=l.lat,i=l.lon,c=l.range,s=l.plans,u=t.map,p=u.compass,m=u.cordinates,d=u.viewControls,g=u.layer,f=u.threeD,b=t.app.searchWord,h=function(e){a({type:"@planner/setLat",lat:e})},E=function(e){a({type:"@planner/setLon",lon:e})};Me.a.configuration.baseUrl="".concat(""),Me.a.BingMapsKey="Arpxb2gWJKw1Q7P7mt4_d1Lhg_sRPDCiH25jPkNGUanfiHyEi1Ijlk-4UVgkyu65";var v=new Me.a.Globe(new Me.a.EarthElevationModel),w=new Me.a.Globe2D;return w.projection=new Me.a.ProjectionMercator,Object(n.useEffect)((function(){var e=document.getElementById("canvas");e.width=window.innerWidth,e.height=window.innerHeight-64;var t=new Me.a.WorldWindow("canvas");t.globe=f?v:w,t.navigator.lookAtLocation.latitude=o,t.navigator.lookAtLocation.longitude=i,t.navigator.range=c;for(var n=[{layer:new Me.a.BMNGLayer,enabled:!0},{layer:new Me.a.BMNGLandsatLayer,enabled:!1},{layer:new Me.a.BingAerialLayer(null),enabled:!1},{layer:new Me.a.BingAerialWithLabelsLayer(null),enabled:!0},{layer:new Me.a.BingRoadsLayer(null),enabled:!1},{layer:new Me.a.OpenStreetMapImageLayer(null),enabled:!1},{layer:new Me.a.AtmosphereLayer,enabled:!0},{layer:new Me.a.CompassLayer,enabled:p},{layer:new Me.a.CoordinatesDisplayLayer(t),enabled:m},{layer:new Me.a.ViewControlsLayer(t),enabled:d}],r=0;r<n.length;r++)n[r].layer.enabled=n[r].enabled,t.addLayer(n[r].layer);var l=new Me.a.RenderableLayer("Fires");new Me.a.Shapefile("".concat(Me.a.configuration.baseUrl,"firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp")).load(null,Qe,l),t.addLayer(l);var u=new Me.a.RenderableLayer("Plans"),y=new Me.a.PlacemarkAttributes(null);y.imageScale=.5,y.imageColor=Me.a.Color.GREEN,y.labelAttributes.offset=new Me.a.Offset(Me.a.OFFSET_FRACTION,.5,Me.a.OFFSET_FRACTION,1),s.forEach((function(e){var a=new Me.a.Placemark(new Me.a.Position(e.lat,e.lon,100),!0,null);a.label="".concat(e.type,"\n").concat(e.dateTime),a.altitudeMode=Me.a.RELATIVE_TO_GROUND;var t=new Me.a.PlacemarkAttributes(y);t.imageSource="".concat(Me.a.configuration.baseUrl,"images/white-dot.png"),a.attributes=t;var n=new Me.a.PlacemarkAttributes(t);n.imageScale=1.2,a.highlightAttributes=n,u.addRenderable(a)})),t.addLayer(u),"_"!==g.tag&&fetch(Ke).then(Ye).then((function(e){var a=g.tag,n=new Me.a.WmsCapabilities(e).getNamedLayer(a),r=Me.a.WmsLayer.formLayerConfiguration(n);r.title=g.label;var l=new Me.a.WmsLayer(r);l.opacity="0.5",t.addLayer(l)}));var O=new Me.a.NominatimGeocoder,j=new Me.a.GoToAnimator(t);if(b)if(b.match(Me.a.WWUtil.latLonRegex)){var C=b.split(","),P=parseFloat(C[0]),L=parseFloat(C[1]);j.goTo(new Me.a.Location(P,L),(function(){h(P),E(L)}))}else O.lookup(b,(function(e,a){if(0!==a.length){var t=parseFloat(a[0].lat),n=parseFloat(a[0].lon);j.goTo(new Me.a.Location(t,n),(function(){h(t),E(n)}))}}));var R=function(e){var a=e.clientX,n=e.clientY,r=t.pick(t.canvasCoordinates(a,n));if(1===r.objects.length&&r.objects[0].isTerrain){var l=r.objects[0].position;j.goTo(new Me.a.Location(l.latitude,l.longitude),(function(){h(l.latitude),E(l.longitude)}))}};t.addEventListener("wheel",(function(e){var n;n=t.navigator.range,a({type:"@planner/setRange",range:n})})),new Me.a.ClickRecognizer(t,R),new Me.a.TapRecognizer(t,R)}),[b,s,g,f,p,m,d]),r.a.createElement("canvas",{id:"canvas"})};var qe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(ve,null),r.a.createElement(Xe,null),r.a.createElement(Je,null),r.a.createElement(He,null))},$e=t(192),Ze=t.n($e),ea=t(375),aa=t(376),ta=t(377),na=t(378),ra=t(379),la=t(380),oa=t(381),ia=t(382),ca=t(383),sa=t(384),ua=t(385),pa=t(386),ma=t(387),da=t(388),ga=t(389),fa={Add:Object(n.forwardRef)((function(e,a){return r.a.createElement(ea.a,Object.assign({},e,{ref:a}))})),Check:Object(n.forwardRef)((function(e,a){return r.a.createElement(aa.a,Object.assign({},e,{ref:a}))})),Clear:Object(n.forwardRef)((function(e,a){return r.a.createElement(ta.a,Object.assign({},e,{ref:a}))})),Delete:Object(n.forwardRef)((function(e,a){return r.a.createElement(na.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(n.forwardRef)((function(e,a){return r.a.createElement(ra.a,Object.assign({},e,{ref:a}))})),Edit:Object(n.forwardRef)((function(e,a){return r.a.createElement(la.a,Object.assign({},e,{ref:a}))})),Export:Object(n.forwardRef)((function(e,a){return r.a.createElement(oa.a,Object.assign({},e,{ref:a}))})),Filter:Object(n.forwardRef)((function(e,a){return r.a.createElement(ia.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(ca.a,Object.assign({},e,{ref:a}))})),LastPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(sa.a,Object.assign({},e,{ref:a}))})),NextPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(ra.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(ua.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(n.forwardRef)((function(e,a){return r.a.createElement(ta.a,Object.assign({},e,{ref:a}))})),Search:Object(n.forwardRef)((function(e,a){return r.a.createElement(pa.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(n.forwardRef)((function(e,a){return r.a.createElement(ma.a,Object.assign({},e,{ref:a}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,a){return r.a.createElement(da.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(n.forwardRef)((function(e,a){return r.a.createElement(ga.a,Object.assign({},e,{ref:a}))}))};var ba=function(){var e=M(),a=e.dispatch,t=e.state,n=t.planner.plans,l=t.reporter.reports,o=[].concat(n,l);return r.a.createElement(Ze.a,{title:"All posted data",icons:fa,options:{title:!1,search:!1,exportButton:!0,editable:!0,minBodyHeight:"".concat(window.innerHeight-180,"px")},style:{borderRadius:0},columns:[{title:"Category",field:"category",editComponent:function(e){return r.a.createElement(Ae.a,{value:e.value||"",onChange:function(a){return e.onChange(a.target.value)}},r.a.createElement(G.a,{value:"Report"},"Report"),r.a.createElement(G.a,{value:"Plan"},"Plan"))}},{title:"Type",field:"type"},{title:"Description",field:"description"},{title:"Latitude",field:"lat",editComponent:function(e){return r.a.createElement(ce.a,{fullWidth:!0,placeholder:"Latitude",type:"number",value:e.value||"",onChange:function(a){return e.onChange(a.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:-90,max:90}})}},{title:"Longitude",field:"lon",editComponent:function(e){return r.a.createElement(ce.a,{fullWidth:!0,placeholder:"Longitude",type:"number",value:e.value||"",onChange:function(a){return e.onChange(a.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:-180,max:180}})}},{title:"Date time",field:"dateTime",editComponent:function(e){return r.a.createElement(ce.a,{type:"datetime-local",value:e.value||"",onChange:function(a){return e.onChange(a.target.value)},InputLabelProps:{shrink:!0}})}}],editable:{onRowAdd:function(e){if(e.uuid=Ce()(),"Plan"===e.category){var t=[].concat(n,e);a({type:"@planner/setPlans",plans:t})}else{var r=[].concat(l,e);a({type:"@reporter/setReports",reports:r})}return new Promise((function(e,a){e()}))},onRowUpdate:function(e){if("Plan"===e.category){var t=[].concat(n).map((function(a){return a.uuid===e.uuid?e:a}));a({type:"@planner/setPlans",plans:t})}else{var r=[].concat(l).map((function(a){return a.uuid===e.uuid?e:a}));a({type:"@reporter/setReports",reports:r})}return new Promise((function(e,a){e()}))},onRowDelete:function(e){if("Plan"===e.category){var t=[].concat(n).filter((function(a){return a.uuid!==e.uuid}));a({type:"@planner/setPlans",plans:t})}else{var r=[].concat(l).filter((function(a){return a.uuid!==e.uuid}));a({type:"@reporter/setReports",reports:r})}return new Promise((function(e,a){e()}))}},data:o})};var ha=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(ve,null),r.a.createElement(ba,null))},Ea=t(390),va=t(373),wa=t(392),ya={citizen:"know how far wildfire is from my town and ask for help when it\u2019s needed.","senior-firefighter":"manage scattered wildfire information, related data and firefighting plans in a single place.","junior-firefighter":"learn the best practice of fire fighting planning from the past."},Oa={citizen:"/report","firefight-team-manager":"/plan",firefighter:"/dashboard"},ja=Object(g.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},submit:{margin:e.spacing(3,0,0)},description:{fontSize:"16px",border:"1px solid rgba(0, 0, 0, 0.23)",padding:"12.5px 24px 12.5px 14px",borderRadius:"4px",minHeight:"56px"}}}));var Ca=function(){var e=ja(),a=Object(n.useState)(""),t=Object(h.a)(a,2),l=t[0],o=t[1],i=Object(n.useState)(""),c=Object(h.a)(i,2),u=c[0],p=c[1];return u?r.a.createElement(s.a,{push:!0,to:Oa[l]}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ea.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:e.paper},r.a.createElement(va.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(va.a,{item:!0,xs:12},r.a.createElement(d.a,{component:"h1",variant:"h5"},"Try Firefighting planner"))),r.a.createElement("br",null),r.a.createElement(va.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(va.a,{item:!0,xs:2},"as a"),r.a.createElement(va.a,{item:!0,xs:10},r.a.createElement(Ae.a,{value:l,onChange:function(e){o(e.target.value)},variant:"outlined",fullWidth:!0},r.a.createElement(G.a,{value:"citizen"},"Citizen"),r.a.createElement(G.a,{value:"firefight-team-manager"},"Firefight team manager"),r.a.createElement(G.a,{value:"firefighter"},"Firefighter")))),r.a.createElement("br",null),r.a.createElement(va.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(va.a,{item:!0,xs:2},"to"),r.a.createElement(va.a,{item:!0,xs:10},r.a.createElement(d.a,{className:e.description},ya[l]||""))),r.a.createElement(xe.a,{disabled:!l,type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){p(!0)}},"Enter"))),r.a.createElement(wa.a,{mt:8},r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Created for ",r.a.createElement("a",{href:"https://2019.spaceappschallenge.org",target:"_blank",rel:"noopener noreferrer"},"NASA International Space Apps Challenge 2019")," and the world\ud83c\udf0f",r.a.createElement("br",null),"Made by ",r.a.createElement("a",{href:"https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/firefighting-planner/project",target:"_blank",rel:"noopener noreferrer"},"Team Firefighting planner")," with love\ud83d\udc96")))};var Pa=function(){return r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(Ca,null)),r.a.createElement(s.b,{exact:!0,path:"/report"},r.a.createElement(Ue,null)),r.a.createElement(s.b,{exact:!0,path:"/plan"},r.a.createElement(qe,null)),r.a.createElement(s.b,{exact:!0,path:"/dashboard"},r.a.createElement(ha,null))))},La=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ra(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement((function(e){var a=e.children,t=Object(n.useReducer)(x,I),l=Object(h.a)(t,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){localStorage.setItem("".concat(y.a,"@").concat(y.b),JSON.stringify(o))}),[o]),r.a.createElement(F.Provider,{value:{state:o,dispatch:i}},a)}),null,r.a.createElement(i.a,null),r.a.createElement(Pa,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");La?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ra(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ra(a,e)}))}}()}},[[218,1,2]]]);
//# sourceMappingURL=main.e1875c37.chunk.js.map