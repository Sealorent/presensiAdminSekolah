import{H as p}from"./HeaderMenusComponent-69f096e6.js";import{_ as m,M as n,r as g,o as c,c as l,a as s,b as f,w as y,g as L,F as x,f as C,t as w}from"./index-d249554b.js";import{m as i,p as u,d as _}from"./index-147b3e89.js";import"./_commonjsHelpers-de833af9.js";const b={name:"ArrivalView",components:{headerMenusComponent:p},data(){return{mapboxAccessToken:"pk.eyJ1Ijoic2VhbG9yZW50IiwiYSI6ImNrejlzb2pldTF4amkyb28yMm84NDZmcjEifQ.rUUuGYxWEaFL6lDNl5i8zA",center:[n.getDataUser().data.area[0].longitude,n.getDataUser().data.area[0].latitude],zoom:10,currentLocation:[0,0],distance:0,selectedOption:n.getDataUser().data.area[0],selectComponent:{selectedOption:null,options:n.getDataUser().data.area}}},mounted(){i.accessToken=this.mapboxAccessToken,this.initializeMap()},methods:{initializeMap(){const t=new i.Map({container:this.$refs.map,style:"mapbox://styles/mapbox/streets-v11",center:this.center,zoom:this.zoom});t.on("load",()=>{this.addCurrentLocation(t),this.addCircleLayer(t)})},addCurrentLocation(t){navigator.permissions?navigator.permissions.query({name:"geolocation"}).then(e=>{e.state==="granted"?this.getCurrentLocation(t):e.state==="prompt"?this.getCurrentLocation(t):console.error("Geolocation permission denied.")}):console.error("Geolocation API not supported by this browser.")},getCurrentLocation(t){navigator.geolocation.getCurrentPosition(e=>{this.currentLocation=[e.coords.longitude,e.coords.latitude],new i.Marker({color:"red"}).setLngLat(this.currentLocation).addTo(t),console.log("success")},e=>{console.error("Error getting current location:",e)},{enableHighAccuracy:!0})},addCircleLayer(t){new i.Marker({color:"blue"}).setLngLat(this.center).addTo(t),t.addControl(new i.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),t.addLayer({id:"circle-layer",type:"circle",source:{type:"geojson",data:{type:"Feature",geometry:{type:"Point",coordinates:this.center}}},paint:{"circle-radius":20,"circle-color":"blue","circle-opacity":.1,"circle-stroke-width":1}})},handleSelectChange(){this.center=[this.selectedOption.longitude,this.selectedOption.latitude],this.initializeMap()},setLocation(){this.selectedOption==null?alert("Pilih lokasi terlebih dahulu"):this.calculateDistance()},calculateDistance(){const t=u(this.center),e=u(this.currentLocation),d={units:"kilometers"};this.distance=_(t,e,d).toFixed(2),console.log(this.center),console.log(this.currentLocation),console.log(this.distance),n.setSelectedLocation(this.selectedOption),this.$router.push({name:"arrivalTime"})}}},k={class:"flex justify-center h-screen"},v={class:"md:w-1/2 w-full flex flex-col"},M={class:"flex flex-grow"},O={ref:"map",style:{height:"100%",width:"100%"}},A={class:"sticky bottom-0 flex flex-col items-center m-2 gap-y-2"},D={class:"flex flex-row items-center justify-center w-full gap-x-2"},S=s("p",{class:"text-sm font-mulish"},"Pilih Lokasi",-1),U=["value"];function z(t,e,d,I,r,a){const h=g("headerMenusComponent");return c(),l("div",k,[s("div",v,[f(h,{title:"Masuk"}),s("div",M,[s("div",O,null,512)]),s("div",A,[s("div",D,[S,y(s("select",{class:"w-full max-w-xs select select-info",onChange:e[0]||(e[0]=(...o)=>a.handleSelectChange&&a.handleSelectChange(...o)),"onUpdate:modelValue":e[1]||(e[1]=o=>r.selectedOption=o)},[(c(!0),l(x,null,C(r.selectComponent.options,o=>(c(),l("option",{key:o,value:o},w(o.lokasi),9,U))),128))],544),[[L,r.selectedOption]])]),s("button",{class:"text-white w-96 btn bg-primaryColors text-thin font-mulish",onClick:e[2]||(e[2]=(...o)=>a.setLocation&&a.setLocation(...o))},"KONFIRMASI LOKASI")])])])}const V=m(b,[["render",z]]);export{V as default};
