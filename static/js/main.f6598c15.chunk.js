(this["webpackJsonpfirefighting-planner"]=this["webpackJsonpfirefighting-planner"]||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"a":"firefighting-planner","b":"0.1.0"}')},218:function(e,a,t){e.exports=t(316)},223:function(e,a,t){},316:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),i=t(391),c=(t(223),t(87)),s=t(74),u=t(362),p=t(158),m=t(144),d=t(98),g=t(188),f=t(190),b=t.n(f),h=t(21),E=t(184),y=t.n(E),v=function(e){return function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object.keys(e),r={},l=0;l<n.length;l++){var o=e[n[l]](a[n[l]],t);r[n[l]]=o}return r}},O=t(101),w=t(10);function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(t,!0).forEach((function(a){Object(w.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var C={dateTime:"2018-08-01T10:10",searchWord:"",drawerOpen:!1};function L(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?L(t,!0).forEach((function(a){Object(w.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var T={threeD:!1,layer:{label:"Select leyer",tag:"_"}};function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?D(t,!0).forEach((function(a){Object(w.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var k={range:6e5,lat:36.256535392993314,lon:-119.2002385680952,plans:[],dialogOpen:!1,plan:{}};function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(t,!0).forEach((function(a){Object(w.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var A={range:6e5,lat:36.256535392993314,lon:-119.2002385680952,reports:[],dialogOpen:!1,report:{}},x=v({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@app/setDateTime":return P({},e,{dateTime:a.dateTime});case"@app/setSearchWord":return P({},e,{searchWord:a.searchWord});case"@app/toggleDrawer":return P({},e,{drawerOpen:!e.drawerOpen});default:return e}},map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@map/setLayer":return R({},e,{layer:a.layer});case"@map/toggleThreeD":return R({},e,{threeD:!e.threeD});default:return e}},planner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@planner/setPlan":return S({},e,{plan:a.plan});case"@planner/setDialogOpen":return S({},e,{dialogOpen:a.dialogOpen});case"@planner/setRange":return S({},e,{range:a.range});case"@planner/setLat":return S({},e,{lat:a.lat});case"@planner/setLon":return S({},e,{lon:a.lon});case"@planner/setPlans":return S({},e,{plans:a.plans});default:return e}},reporter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@reporter/setReport":return N({},e,{report:a.report});case"@reporter/setDialogOpen":return N({},e,{dialogOpen:a.dialogOpen});case"@reporter/setRange":return N({},e,{range:a.range});case"@reporter/setLat":return N({},e,{lat:a.lat});case"@reporter/setLon":return N({},e,{lon:a.lon});case"@reporter/setReports":return N({},e,{reports:a.reports});default:return e}}}),I={app:C,map:T,planner:k,reporter:A},W=JSON.parse(localStorage.getItem("".concat(O.a,"@").concat(O.b))),F=Object(n.createContext)(y()(I,W)),M=function(e){var a=Object(n.useContext)(F);return{state:a.state,dispatch:a.dispatch}},U=t(116),G=t(157),H=t(187),V=t.n(H);var B=function(){var e=Object(n.useState)(null),a=Object(h.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(h.a)(o,2),c=i[0],u=i[1],p=Object(n.useState)(!1),d=Object(h.a)(p,2),g=d[0],f=d[1];return g?r.a.createElement(s.a,{push:!0,to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{edge:"end",onClick:function(e){l(e.currentTarget),u(!0)},color:"inherit"},r.a.createElement(V.a,null)),r.a.createElement(U.a,{open:c,onClose:function(){l(null),u(!1)},anchorEl:t},r.a.createElement(G.a,{component:"a",href:"https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/firefighting-planner/project",target:"_blank"},"Project detail"),r.a.createElement(G.a,{component:"a",href:"https://opennex.org/project/projectDetail/275",target:"_blank"},"OpenNEX"),r.a.createElement(G.a,{component:"a",href:"https://github.com/watilde/firefighting-planner",target:"_blank"},"GitHub"),r.a.createElement(G.a,{onClick:function(){localStorage.clear()}},"Clear cache"),r.a.createElement(G.a,{onClick:function(){f(!0)}},"Logout")))},z=t(202),J=t(12),K=t(189),Y=t.n(K),Q=Object(g.a)((function(e){return{search:Object(w.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(J.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(J.c)(e.palette.common.white,.25)},marginLeft:0,marginRight:"5px",width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(w.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}));var X=function(){var e=M(),a=e.dispatch,t=e.state.app.searchWord,n=Q();return r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(Y.a,null)),r.a.createElement(z.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onKeyPress:function(e){"Enter"===e.key&&a({type:"@app/setSearchWord",searchWord:e.target.value})},defaultValue:t}))},q=Object(g.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));var $=function(){var e=M().dispatch,a=q();return r.a.createElement("div",{className:a.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(m.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:function(a){e({type:"@app/toggleDrawer"})}},r.a.createElement(b.a,null)),r.a.createElement(d.a,{variant:"h6",className:a.title,noWrap:!0},"Firefighting planner"),r.a.createElement(X,null),r.a.createElement(B,null))))},Z=t(394),ee=t(365),ae=t(191),te=t.n(ae),ne=t(361),re=t(332),le=[{label:"Reporter",pathname:"/report"},{label:"Planner",pathname:"/plan"},{label:"Dashboard",pathname:"/dashboard"}],oe=Object(g.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},listLink:{textDecoration:"none",color:"#000"},listItem:{cursor:"pointer","&:hover":{backgroundColor:"#eee"},"&.active":{backgroundColor:"#ddd"}}}}));var ie=function(){var e=Object(s.g)(),a=oe();return r.a.createElement(ne.a,{className:a.list},r.a.createElement(re.a,{className:a.listHeader},"Menu"),le.map((function(t){var n=e.pathname===t.pathname?"".concat(a.listItem," active"):a.listItem;return r.a.createElement(c.b,{key:t.label,to:t.pathname,className:a.listLink},r.a.createElement(re.a,{className:n},t.label))})))},ce=t(181),se=Object(g.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},textField:{minWidth:"200px"}}}));var ue=function(){var e=se(),a=M(),t=a.state,n=a.dispatch,l=t.app.dateTime;return r.a.createElement(ne.a,{className:e.list},r.a.createElement(re.a,{className:e.listHeader},"Target Date"),r.a.createElement(re.a,null,r.a.createElement(ce.a,{type:"datetime-local",defaultValue:l,className:e.textField,variant:"outlined",InputLabelProps:{shrink:!0},onChange:function(e){n({type:"@app/setDateTime",dateTime:e.target.value})}})))},pe=t(364),me=[{label:"No layer",tag:"_"},{label:"Land Surface Temperature [Day]",tag:"MOD_LSTD_D"},{label:"Land Surface Temperature [Night]",tag:"MOD_LSTN_D"},{label:"Cloud Water Content",tag:"MYDAL2_D_CLD_WP"},{label:"Leaf Area Index",tag:"MOD15A2_E_LAI"},{label:"Nitrogen Dioxide",tag:"AURA_NO2_D"},{label:"Population",tag:"SEDAC_POP"},{label:"Rainfall",tag:"TRMM_3B43D"},{label:"Snow Cover",tag:"MOD10C1_D_SNOW"},{label:"Snow Water Equivalent",tag:"SWE_M"},{label:"Solar Insolation",tag:"CERES_INSOL_D"},{label:"Topography",tag:"SRTM_RAMP2_TOPO"},{label:"UV Index",tag:"AURA_UVI_CLIM_M"},{label:"Vegetation Index (NDVI)",tag:"MOD_NDVI_16"},{label:"Water Vapor",tag:"MYDAL2_D_SKY_WV"}],de=Object(g.a)((function(e){return{list:{padding:0},listHeader:{fontWeight:"bold"},listText:{fontSize:"13px"},listItem:{display:"flex",justifyContent:"space-between"}}}));var ge=function(){var e=de(),a=M(),t=a.state,n=a.dispatch,l=t.map,o=l.layer,i=l.threeD;return r.a.createElement(ne.a,{className:e.list},r.a.createElement(re.a,{className:e.listHeader},"Map Options"),me.map((function(a){return r.a.createElement(re.a,{key:a.tag,className:e.listItem},r.a.createElement(d.a,{className:e.listText},a.label),r.a.createElement(pe.a,{checked:o.tag===a.tag,onChange:function(){!function(e){var a=me.filter((function(a){return a.tag===e})).pop();n({type:"@map/setLayer",layer:a})}(a.tag)}}))})),r.a.createElement(ee.a,null),r.a.createElement(re.a,{className:e.listItem},r.a.createElement(d.a,{className:e.listText},"3D"),r.a.createElement(pe.a,{checked:i,onChange:function(){n({type:"@map/toggle".concat("ThreeD")})}})))},fe=Object(g.a)((function(e){return{drawerHeader:{display:"flex",alignItems:"center",justifyContent:"flex-start"},drawerPaper:{width:300}}}));var be=function(){var e=M(),a=e.dispatch,t=e.state.app.drawerOpen,n=fe();return r.a.createElement(Z.a,{className:n.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(m.a,{onClick:function(e){a({type:"@app/toggleDrawer"})}},r.a.createElement(te.a,null))),r.a.createElement(ee.a,null),r.a.createElement(ue,null),r.a.createElement(ee.a,null),r.a.createElement(ie,null),r.a.createElement(ee.a,null),r.a.createElement(ge,null))},he=t(366),Ee=t(123),ye=t.n(Ee),ve=t(88),Oe=t.n(ve),we=Object(g.a)((function(e){return{fab:{position:"fixed",margin:e.spacing(1),bottom:0,right:0}}}));var je=function(){var e=M(),a=e.state,t=e.dispatch,n=a.reporter,l=n.lat,o=n.lon,i=a.app.dateTime,c=we();return r.a.createElement(he.a,{color:"secondary","aria-label":"add",className:c.fab,onClick:function(e){t({type:"@reporter/setDialogOpen",dialogOpen:!0}),t({type:"@reporter/setReport",report:{category:"Report",uuid:Oe()(),type:"",description:"",dateTime:i,lat:l,lon:o}})}},r.a.createElement(ye.a,null))},Pe=t(367),Ce=t(368),Le=t(369),Re=t(370),Te=t(160),De=t(180),Se=t(179),ke=t(371),_e=t(161),Ne=Object(g.a)((function(e){return{formControl:{minWidth:120}}}));var Ae=function(){var e=M(),a=e.dispatch,t=e.state.reporter,n=t.report,l=t.reports,o=t.dialogOpen,i=Ne(),c=function(){a({type:"@reporter/setDialogOpen",dialogOpen:!1})},s=function(e){var t=Object.assign({},n);t[e.target.name]=e.target.value,a({type:"@reporter/setReport",report:t})};return r.a.createElement(Pe.a,{open:o,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ce.a,{id:"form-dialog-title"},"New report"),r.a.createElement(Le.a,null,r.a.createElement(Re.a,null,"Your report will be immediately shared with the firefighters."),r.a.createElement(Te.a,{className:i.formControl},r.a.createElement(De.a,{htmlFor:"type"},"Report type"),r.a.createElement(Se.a,{inputProps:{name:"type"},value:n.type,onChange:s},r.a.createElement(G.a,{value:"Evacuation help"},"Evacuation help"),r.a.createElement(G.a,{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{label:"Description",name:"description",value:n.description,fullWidth:!0,onChange:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{name:"dateTime",label:"When",type:"datetime-local",value:n.dateTime,InputLabelProps:{shrink:!0},onChange:s})),r.a.createElement(ke.a,null,r.a.createElement(_e.a,{onClick:c,color:"primary"},"Cancel"),r.a.createElement(_e.a,{onClick:function(e){var t=[].concat(l,n);a({type:"@reporter/setReports",reports:t}),a({type:"@reporter/setDialogOpen",dialogOpen:!1})},color:"primary"},"Save")))},xe=t(7),Ie=t.n(xe),We=function(e,a){var t=new Ie.a.PlacemarkAttributes(null);t.imageScale=.05,t.imageColor=Ie.a.Color.RED,t.labelAttributes.offset=new Ie.a.Offset(Ie.a.OFFSET_FRACTION,.5,Ie.a.OFFSET_FRACTION,1),t.imageSource="".concat(Ie.a.configuration.baseUrl,"images/white-dot.png");var n={};return n.name=e.recordNumber,n.attributes=new Ie.a.PlacemarkAttributes(t),n.attributes.imageScale=.04+.001*e.values.FRP,n};var Fe=function(){var e,a,t,l,o=M(),i=o.dispatch,c=o.state,s=c.reporter,u=s.lat,p=s.lon,m=s.range,d=s.reports,g=c.app.searchWord,f=function(e){i({type:"@planner/setLat",lat:e})},b=function(e){i({type:"@planner/setLon",lon:e})};Ie.a.configuration.baseUrl="".concat(""),Ie.a.BingMapsKey="Arpxb2gWJKw1Q7P7mt4_d1Lhg_sRPDCiH25jPkNGUanfiHyEi1Ijlk-4UVgkyu65";var h=new Ie.a.Globe2D;return h.projection=new Ie.a.ProjectionMercator,Object(n.useEffect)((function(){(t=t||document.getElementById("canvas")).width=window.innerWidth,t.height=window.innerHeight-64,(l=l||new Ie.a.WorldWindow("canvas")).globe=h,l.navigator.lookAtLocation.latitude=u,l.navigator.lookAtLocation.longitude=p,l.navigator.range=m;for(var n=[{layer:new Ie.a.BMNGLayer,enabled:!0},{layer:new Ie.a.BMNGLandsatLayer,enabled:!1},{layer:new Ie.a.BingAerialLayer(null),enabled:!1},{layer:new Ie.a.BingAerialWithLabelsLayer(null),enabled:!0},{layer:new Ie.a.BingRoadsLayer(null),enabled:!1},{layer:new Ie.a.OpenStreetMapImageLayer(null),enabled:!1},{layer:new Ie.a.AtmosphereLayer,enabled:!0},{layer:new Ie.a.CompassLayer,enabled:!0},{layer:new Ie.a.CoordinatesDisplayLayer(l),enabled:!0},{layer:new Ie.a.ViewControlsLayer(l),enabled:!0}],r=0;r<n.length;r++)n[r].layer.enabled=n[r].enabled,l.addLayer(n[r].layer);var o=new Ie.a.RenderableLayer("Fires");new Ie.a.Shapefile("".concat(Ie.a.configuration.baseUrl,"firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp")).load(null,We,o),l.addLayer(o);var c=new Ie.a.RenderableLayer("Reports"),s=new Ie.a.PlacemarkAttributes(null);s.imageScale=.5,s.imageColor=Ie.a.Color.GREEN,s.labelAttributes.offset=new Ie.a.Offset(Ie.a.OFFSET_FRACTION,.5,Ie.a.OFFSET_FRACTION,1),d.forEach((function(e){var a=new Ie.a.Placemark(new Ie.a.Position(e.lat,e.lon,100),!0,null);a.label="".concat(e.type,"\n").concat(e.time),a.altitudeMode=Ie.a.RELATIVE_TO_GROUND;var t=new Ie.a.PlacemarkAttributes(s);t.imageSource="".concat(Ie.a.configuration.baseUrl,"images/white-dot.png"),a.attributes=t;var n=new Ie.a.PlacemarkAttributes(t);n.imageScale=1.2,a.highlightAttributes=n,c.addRenderable(a)})),l.addLayer(c);var E=new Ie.a.NominatimGeocoder,y=new Ie.a.GoToAnimator(l);if(g)if(g.match(Ie.a.WWUtil.latLonRegex)){var v=g.split(","),O=parseFloat(v[0]),w=parseFloat(v[1]);y.goTo(new Ie.a.Location(O,w),(function(){clearTimeout(a),a=setTimeout((function(){f(O),b(w)}),100)}))}else E.lookup(g,(function(e,t){if(0!==t.length){var n=parseFloat(t[0].lat),r=parseFloat(t[0].lon);y.goTo(new Ie.a.Location(n,r),(function(){clearTimeout(a),a=setTimeout((function(){f(n),b(r)}),100)}))}}));var j=function(e){var t=e.clientX,n=e.clientY,r=l.pick(l.canvasCoordinates(t,n));if(1===r.objects.length&&r.objects[0].isTerrain){var o=r.objects[0].position;y.goTo(new Ie.a.Location(o.latitude,o.longitude),(function(){clearTimeout(a),a=setTimeout((function(){f(o.latitude),b(o.longitude)}),100)}))}};l.addEventListener("wheel",(function(a){clearTimeout(e),e=setTimeout((function(){var e;e=l.navigator.range,i({type:"@planner/setRange",range:e})}),1e3)})),new Ie.a.ClickRecognizer(l,j),new Ie.a.TapRecognizer(l,j)}),[g,d]),r.a.createElement("canvas",{id:"canvas"})};var Me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(be,null),r.a.createElement(Fe,null),r.a.createElement(Ae,null),r.a.createElement(je,null))},Ue=Object(g.a)((function(e){return{fab:{position:"fixed",margin:e.spacing(1),bottom:0,right:0}}}));var Ge=function(){var e=M(),a=e.state,t=e.dispatch,n=a.planner,l=n.lat,o=n.lon,i=a.app.dateTime,c=Ue();return r.a.createElement(he.a,{color:"secondary","aria-label":"add",className:c.fab,onClick:function(e){t({type:"@planner/setDialogOpen",dialogOpen:!0}),t({type:"@planner/setPlan",plan:{category:"Plan",uuid:Oe()(),type:"",description:"",dateTime:i,lat:l,lon:o}})}},r.a.createElement(ye.a,null))},He=Object(g.a)((function(e){return{formControl:{minWidth:120}}}));var Ve=function(){var e=M(),a=e.dispatch,t=e.state.planner,n=t.plan,l=t.plans,o=t.dialogOpen,i=He(),c=function(){a({type:"@planner/setDialogOpen",dialogOpen:!1})},s=function(e){var t=Object.assign({},n);t[e.target.name]=e.target.value,a({type:"@planner/setPlan",plan:t})};return r.a.createElement(Pe.a,{open:o,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ce.a,{id:"form-dialog-title"},"Add plan"),r.a.createElement(Le.a,null,r.a.createElement(Re.a,null,"Added plan will be immediately shared with the other teams."),r.a.createElement(Te.a,{className:i.formControl},r.a.createElement(De.a,{htmlFor:"type"},"Plan type"),r.a.createElement(Se.a,{inputProps:{name:"type"},value:n.type,onChange:s},r.a.createElement(G.a,{value:"Spraying the water"},"Spraying the water"),r.a.createElement(G.a,{value:"Prescribed burning"},"Prescribed burning"),r.a.createElement(G.a,{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{label:"Description",name:"description",value:n.description,fullWidth:!0,onChange:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{name:"dateTime",label:"When",type:"datetime-local",value:n.dateTime,InputLabelProps:{shrink:!0},onChange:s})),r.a.createElement(ke.a,null,r.a.createElement(_e.a,{onClick:c,color:"primary"},"Cancel"),r.a.createElement(_e.a,{onClick:function(e){var t=[].concat(l,n);a({type:"@planner/setPlans",plans:t}),a({type:"@planner/setDialogOpen",dialogOpen:!1})},color:"primary"},"Save")))},Be="https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";function ze(e){return e.text().then((function(e){return(new DOMParser).parseFromString(e,"text/xml")}))}var Je=function(e,a){var t=new Ie.a.PlacemarkAttributes(null);t.imageScale=.05,t.imageColor=Ie.a.Color.RED,t.labelAttributes.offset=new Ie.a.Offset(Ie.a.OFFSET_FRACTION,.5,Ie.a.OFFSET_FRACTION,1),t.imageSource="".concat(Ie.a.configuration.baseUrl,"images/white-dot.png");var n={};return n.name=e.recordNumber,n.attributes=new Ie.a.PlacemarkAttributes(t),n.attributes.imageScale=.04+.001*e.values.FRP,n};var Ke=function(){var e,a,t,l,o=M(),i=o.dispatch,c=o.state,s=c.planner,u=s.lat,p=s.lon,m=s.range,d=s.plans,g=c.map,f=g.layer,b=g.threeD,h=c.app.searchWord,E=function(e){i({type:"@planner/setLat",lat:e})},y=function(e){i({type:"@planner/setLon",lon:e})};Ie.a.configuration.baseUrl="".concat(""),Ie.a.BingMapsKey="Arpxb2gWJKw1Q7P7mt4_d1Lhg_sRPDCiH25jPkNGUanfiHyEi1Ijlk-4UVgkyu65";var v=new Ie.a.Globe(new Ie.a.EarthElevationModel),O=new Ie.a.Globe2D;return O.projection=new Ie.a.ProjectionMercator,Object(n.useEffect)((function(){(t=t||document.getElementById("canvas")).width=window.innerWidth,t.height=window.innerHeight-64,(l=l||new Ie.a.WorldWindow("canvas")).globe=b?v:O,l.navigator.lookAtLocation.latitude=u,l.navigator.lookAtLocation.longitude=p,l.navigator.range=m;for(var n=[{layer:new Ie.a.BMNGLayer,enabled:!0},{layer:new Ie.a.BMNGLandsatLayer,enabled:!1},{layer:new Ie.a.BingAerialLayer(null),enabled:!1},{layer:new Ie.a.BingAerialWithLabelsLayer(null),enabled:!0},{layer:new Ie.a.BingRoadsLayer(null),enabled:!1},{layer:new Ie.a.OpenStreetMapImageLayer(null),enabled:!1},{layer:new Ie.a.AtmosphereLayer,enabled:!0},{layer:new Ie.a.CompassLayer,enabled:!0},{layer:new Ie.a.CoordinatesDisplayLayer(l),enabled:!0},{layer:new Ie.a.ViewControlsLayer(l),enabled:!0}],r=0;r<n.length;r++)n[r].layer.enabled=n[r].enabled,l.addLayer(n[r].layer);var o=new Ie.a.RenderableLayer("Fires");new Ie.a.Shapefile("".concat(Ie.a.configuration.baseUrl,"firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp")).load(null,Je,o),l.addLayer(o);var c=new Ie.a.RenderableLayer("Plans"),s=new Ie.a.PlacemarkAttributes(null);s.imageScale=.5,s.imageColor=Ie.a.Color.GREEN,s.labelAttributes.offset=new Ie.a.Offset(Ie.a.OFFSET_FRACTION,.5,Ie.a.OFFSET_FRACTION,1),d.forEach((function(e){var a=new Ie.a.Placemark(new Ie.a.Position(e.lat,e.lon,100),!0,null);a.label="".concat(e.type,"\n").concat(e.time),a.altitudeMode=Ie.a.RELATIVE_TO_GROUND;var t=new Ie.a.PlacemarkAttributes(s);t.imageSource="".concat(Ie.a.configuration.baseUrl,"images/white-dot.png"),a.attributes=t;var n=new Ie.a.PlacemarkAttributes(t);n.imageScale=1.2,a.highlightAttributes=n,c.addRenderable(a)})),l.addLayer(c),"_"!==f.tag&&fetch(Be).then(ze).then((function(e){var a=f.tag,t=new Ie.a.WmsCapabilities(e).getNamedLayer(a),n=Ie.a.WmsLayer.formLayerConfiguration(t);n.title=f.label;var r=new Ie.a.WmsLayer(n);l.addLayer(r)}));var g=new Ie.a.NominatimGeocoder,w=new Ie.a.GoToAnimator(l);if(h)if(h.match(Ie.a.WWUtil.latLonRegex)){var j=h.split(","),P=parseFloat(j[0]),C=parseFloat(j[1]);w.goTo(new Ie.a.Location(P,C),(function(){clearTimeout(a),a=setTimeout((function(){E(P),y(C)}),100)}))}else g.lookup(h,(function(e,t){if(0!==t.length){var n=parseFloat(t[0].lat),r=parseFloat(t[0].lon);w.goTo(new Ie.a.Location(n,r),(function(){clearTimeout(a),a=setTimeout((function(){E(n),y(r)}),100)}))}}));var L=function(e){var t=e.clientX,n=e.clientY,r=l.pick(l.canvasCoordinates(t,n));if(1===r.objects.length&&r.objects[0].isTerrain){var o=r.objects[0].position;w.goTo(new Ie.a.Location(o.latitude,o.longitude),(function(){clearTimeout(a),a=setTimeout((function(){E(o.latitude),y(o.longitude)}),100)}))}};l.addEventListener("wheel",(function(a){clearTimeout(e),e=setTimeout((function(){var e;e=l.navigator.range,i({type:"@planner/setRange",range:e})}),1e3)})),new Ie.a.ClickRecognizer(l,L),new Ie.a.TapRecognizer(l,L)}),[h,d]),r.a.createElement("canvas",{id:"canvas"})};var Ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(be,null),r.a.createElement(Ke,null),r.a.createElement(Ve,null),r.a.createElement(Ge,null))},Qe=t(192),Xe=t.n(Qe),qe=t(375),$e=t(376),Ze=t(377),ea=t(378),aa=t(379),ta=t(380),na=t(381),ra=t(382),la=t(383),oa=t(384),ia=t(385),ca=t(386),sa=t(387),ua=t(388),pa=t(389),ma={Add:Object(n.forwardRef)((function(e,a){return r.a.createElement(qe.a,Object.assign({},e,{ref:a}))})),Check:Object(n.forwardRef)((function(e,a){return r.a.createElement($e.a,Object.assign({},e,{ref:a}))})),Clear:Object(n.forwardRef)((function(e,a){return r.a.createElement(Ze.a,Object.assign({},e,{ref:a}))})),Delete:Object(n.forwardRef)((function(e,a){return r.a.createElement(ea.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(n.forwardRef)((function(e,a){return r.a.createElement(aa.a,Object.assign({},e,{ref:a}))})),Edit:Object(n.forwardRef)((function(e,a){return r.a.createElement(ta.a,Object.assign({},e,{ref:a}))})),Export:Object(n.forwardRef)((function(e,a){return r.a.createElement(na.a,Object.assign({},e,{ref:a}))})),Filter:Object(n.forwardRef)((function(e,a){return r.a.createElement(ra.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(la.a,Object.assign({},e,{ref:a}))})),LastPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(oa.a,Object.assign({},e,{ref:a}))})),NextPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(aa.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(ia.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(n.forwardRef)((function(e,a){return r.a.createElement(Ze.a,Object.assign({},e,{ref:a}))})),Search:Object(n.forwardRef)((function(e,a){return r.a.createElement(ca.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(n.forwardRef)((function(e,a){return r.a.createElement(sa.a,Object.assign({},e,{ref:a}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,a){return r.a.createElement(ua.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(n.forwardRef)((function(e,a){return r.a.createElement(pa.a,Object.assign({},e,{ref:a}))}))};var da=function(){var e=M(),a=e.dispatch,t=e.state,n=t.planner.plans,l=t.reporter.reports,o=[].concat(n,l);return r.a.createElement(Xe.a,{title:"All posted data",icons:ma,options:{title:!1,search:!1,exportButton:!0,editable:!0,minBodyHeight:"".concat(window.innerHeight-180,"px")},style:{borderRadius:0},columns:[{title:"Category",field:"category",editComponent:function(e){return r.a.createElement(Se.a,{value:e.value||"",onChange:function(a){return e.onChange(a.target.value)}},r.a.createElement(G.a,{value:"Report"},"Report"),r.a.createElement(G.a,{value:"Plan"},"Plan"))}},{title:"Type",field:"type"},{title:"Description",field:"description"},{title:"Latitude",field:"lat",editComponent:function(e){return r.a.createElement(ce.a,{fullWidth:!0,placeholder:"Latitude",type:"number",value:e.value||"",onChange:function(a){return e.onChange(a.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:-90,max:90}})}},{title:"Longitude",field:"lon",editComponent:function(e){return r.a.createElement(ce.a,{fullWidth:!0,placeholder:"Longitude",type:"number",value:e.value||"",onChange:function(a){return e.onChange(a.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:-180,max:180}})}},{title:"Date time",field:"dateTime",editComponent:function(e){return r.a.createElement(ce.a,{type:"datetime-local",value:e.value||"",onChange:function(a){return e.onChange(a.target.value)},InputLabelProps:{shrink:!0}})}}],editable:{onRowAdd:function(e){if(e.uuid=Oe()(),"Plan"===e.category){var t=[].concat(n,e);a({type:"@planner/setPlans",plans:t})}else{var r=[].concat(l,e);a({type:"@reporter/setReports",reports:r})}return new Promise((function(e,a){e()}))},onRowUpdate:function(e){if("Plan"===e.category){var t=[].concat(n).map((function(a){return a.uuid===e.uuid?e:a}));a({type:"@planner/setPlans",plans:t})}else{var r=[].concat(l).map((function(a){return a.uuid===e.uuid?e:a}));a({type:"@reporter/setReports",reports:r})}return new Promise((function(e,a){e()}))},onRowDelete:function(e){if("Plan"===e.category){var t=[].concat(n).filter((function(a){return a.uuid!==e.uuid}));a({type:"@planner/setPlans",plans:t})}else{var r=[].concat(l).filter((function(a){return a.uuid!==e.uuid}));a({type:"@reporter/setReports",reports:r})}return new Promise((function(e,a){e()}))}},data:o})};var ga=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(be,null),r.a.createElement(da,null))},fa=t(390),ba=t(373),ha=t(392),Ea={citizen:"know how far wildfire is from my town and ask for help when it\u2019s needed.","senior-firefighter":"manage scattered wildfire information, related data and firefighting plans in a single place.","junior-firefighter":"learn the best practice of fire fighting planning from the past."},ya={citizen:"/report","senior-firefighter":"/plan","junior-firefighter":"/dashboard"},va=Object(g.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},submit:{margin:e.spacing(3,0,0)},description:{fontSize:"16px",border:"1px solid rgba(0, 0, 0, 0.23)",padding:"8.5px 24px 12.5px 14px",borderRadius:"4px",minHeight:"56px"}}}));var Oa=function(){var e=va(),a=Object(n.useState)(""),t=Object(h.a)(a,2),l=t[0],o=t[1],i=Object(n.useState)(""),c=Object(h.a)(i,2),u=c[0],p=c[1];return u?r.a.createElement(s.a,{push:!0,to:ya[l]}):r.a.createElement(r.a.Fragment,null,r.a.createElement(fa.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:e.paper},r.a.createElement(ba.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(ba.a,{item:!0,xs:12},r.a.createElement(d.a,{component:"h1",variant:"h5"},"Try Firefighting planner"))),r.a.createElement("br",null),r.a.createElement(ba.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(ba.a,{item:!0,xs:2},"as a"),r.a.createElement(ba.a,{item:!0,xs:10},r.a.createElement(Se.a,{value:l,onChange:function(e){o(e.target.value)},variant:"outlined",fullWidth:!0},r.a.createElement(G.a,{value:"citizen"},"Citizen"),r.a.createElement(G.a,{value:"senior-firefighter"},"Senior firefighter"),r.a.createElement(G.a,{value:"junior-firefighter"},"Junior firefighter")))),r.a.createElement("br",null),r.a.createElement(ba.a,{container:!0,alignContent:"center",justify:"center",alignItems:"center"},r.a.createElement(ba.a,{item:!0,xs:2},"to"),r.a.createElement(ba.a,{item:!0,xs:10},r.a.createElement(d.a,{className:e.description},Ea[l]||""))),r.a.createElement(_e.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){p(!0)}},"Enter"))),r.a.createElement(ha.a,{mt:8},r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Created for ",r.a.createElement("a",{href:"https://2019.spaceappschallenge.org",target:"_blank",rel:"noopener noreferrer"},"NASA International Space Apps Challenge 2019")," and the world\ud83c\udf0f",r.a.createElement("br",null),"Made by ",r.a.createElement("a",{href:"https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/firefighting-planner/project",target:"_blank",rel:"noopener noreferrer"},"Team Firefighting planner")," with love\ud83d\udc96")))};var wa=function(){return r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(Oa,null)),r.a.createElement(s.b,{exact:!0,path:"/report"},r.a.createElement(Me,null)),r.a.createElement(s.b,{exact:!0,path:"/plan"},r.a.createElement(Ye,null)),r.a.createElement(s.b,{exact:!0,path:"/dashboard"},r.a.createElement(ga,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(e){var a=e.children,t=Object(n.useReducer)(x,I),l=Object(h.a)(t,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){localStorage.setItem("".concat(O.a,"@").concat(O.b),JSON.stringify(o))}),[o]),r.a.createElement(F.Provider,{value:{state:o,dispatch:i}},a)}),null,r.a.createElement(i.a,null),r.a.createElement(wa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[218,1,2]]]);
//# sourceMappingURL=main.f6598c15.chunk.js.map