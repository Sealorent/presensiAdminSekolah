import{H as p}from"./HeaderMenusComponent-6f140510.js";import{_ as m,M as n,r as g,o as c,c as l,b as f,a as s,w as y,g as L,F as x,f as C,t as b}from"./index-a2324071.js";import{m as i,p as u,d as w}from"./index-147b3e89.js";import"./_commonjsHelpers-de833af9.js";const k={name:"ArrivalView",components:{headerMenusComponent:p},data(){return{mapboxAccessToken:"pk.eyJ1Ijoic2VhbG9yZW50IiwiYSI6ImNrejlzb2pldTF4amkyb28yMm84NDZmcjEifQ.rUUuGYxWEaFL6lDNl5i8zA",center:[n.getDataUser().data.area[0].longitude,n.getDataUser().data.area[0].latitude],zoom:10,currentLocation:[0,0],distance:0,selectedOption:n.getDataUser().data.area[0],selectComponent:{selectedOption:null,options:n.getDataUser().data.area}}},mounted(){i.accessToken=this.mapboxAccessToken,this.initializeMap()},methods:{initializeMap(){const t=new i.Map({container:this.$refs.map,style:"mapbox://styles/mapbox/streets-v11",center:this.center,zoom:this.zoom});t.on("load",()=>{this.addCurrentLocation(t),this.addCircleLayer(t)})},addCurrentLocation(t){navigator.permissions?navigator.permissions.query({name:"geolocation"}).then(e=>{e.state==="granted"?this.getCurrentLocation(t):e.state==="prompt"?this.getCurrentLocation(t):console.error("Geolocation permission denied.")}):console.error("Geolocation API not supported by this browser.")},getCurrentLocation(t){navigator.geolocation.getCurrentPosition(e=>{this.currentLocation=[e.coords.longitude,e.coords.latitude],new i.Marker({color:"red"}).setLngLat(this.currentLocation).addTo(t),console.log("success")},e=>{console.error("Error getting current location:",e)},{enableHighAccuracy:!0})},addCircleLayer(t){new i.Marker({color:"blue"}).setLngLat(this.center).addTo(t),t.addControl(new i.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),t.addLayer({id:"circle-layer",type:"circle",source:{type:"geojson",data:{type:"Feature",geometry:{type:"Point",coordinates:this.center}}},paint:{"circle-radius":20,"circle-color":"blue","circle-opacity":.1,"circle-stroke-width":1}})},handleSelectChange(){this.center=[this.selectedOption.longitude,this.selectedOption.latitude],this.initializeMap()},setLocation(){this.selectedOption==null?alert("Pilih lokasi terlebih dahulu"):this.calculateDistance()},calculateDistance(){const t=u(this.center),e=u(this.currentLocation),d={units:"kilometers"};this.distance=w(t,e,d).toFixed(2),console.log(this.center),console.log(this.currentLocation),console.log(this.distance),n.setSelectedLocation(this.selectedOption),this.$router.push({name:"backHomeTime"})}}},_={class:"flex flex-col w-full h-screen"},v={class:"flex flex-grow"},M={ref:"map",style:{height:"100%",width:"100%"}},O={class:"sticky bottom-0 flex flex-col items-center m-2 gap-y-2"},D={class:"flex flex-row items-center justify-center w-full gap-x-2"},A=s("p",{class:"text-sm font-mulish"},"Pilih Lokasi",-1),S=["value"];function U(t,e,d,z,r,a){const h=g("headerMenusComponent");return c(),l("div",_,[f(h,{title:"Pulang"}),s("div",v,[s("div",M,null,512)]),s("div",O,[s("div",D,[A,y(s("select",{class:"w-full max-w-xs select select-info",onChange:e[0]||(e[0]=(...o)=>a.handleSelectChange&&a.handleSelectChange(...o)),"onUpdate:modelValue":e[1]||(e[1]=o=>r.selectedOption=o)},[(c(!0),l(x,null,C(r.selectComponent.options,o=>(c(),l("option",{key:o,value:o},b(o.lokasi),9,S))),128))],544),[[L,r.selectedOption]])]),s("button",{class:"text-white w-96 btn bg-primaryColors text-thin font-mulish",onClick:e[2]||(e[2]=(...o)=>a.setLocation&&a.setLocation(...o))},"KONFIRMASI LOKASI")])])}const N=m(k,[["render",U]]);export{N as default};
