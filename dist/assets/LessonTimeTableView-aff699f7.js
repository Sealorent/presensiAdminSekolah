import{H as f}from"./HeaderMenusComponent-69f096e6.js";import{u as w}from"./dataStore-51706552.js";import{_ as C,M as c,r as g,o as a,c as o,a as t,b as U,w as d,g as h,F as p,f as u,t as _}from"./index-d249554b.js";import"./mainRepositories-09f24805.js";import"./axios-4a70c6fc.js";const S={name:"LessonTimeTableView",components:{HeaderMenusComponent:f},data(){return{dataStore:w(),listUnit:null,listClass:null,selectedOptionUnit:null,selectedOptionClass:null,Url:null}},mounted(){this.getMajor()},methods:{async getMajor(){try{await this.dataStore.major(),this.listUnit=this.dataStore.data,this.selectedOptionUnit=this.listUnit[0],this.handleSelectChangeUnit()}catch(n){console.error(n)}},handleSelectChangeUnit(){this.getClass(this.selectedOptionUnit.id_unit)},async getClass(n){await this.dataStore.class({id_unit:n}),this.listClass=this.dataStore.data,this.selectedOptionClass=this.listClass[0],this.handleSelectChangeClass()},handleSelectChangeClass(){const n=c.getLoginResponse().kode_sekolah,s=c.getLoginResponse().id_pegawai,r=this.selectedOptionClass.id_kelas;this.Url=`https://mobile.adminsekolah.net/rest-api-new/jadwal_pelajaran_webview.php?kode_sekolah=${n}&id_pegawai=${s}&id_kelas=${r}`}}},k={class:"flex justify-center h-screen"},v={class:"md:w-1/3 w-full flex flex-col"},x={class:"container flex flex-row justify-between p-2"},O={class:"flex flex-row items-center w-1/2"},y=t("p",{class:"w-10 font-mulish"},"Unit :",-1),j=["value"],M={class:"flex flex-row items-center w-1/2"},b=t("p",{class:"w-1/3 font-mulish"},"Kelas :",-1),L=["value"],V={class:"w-full h-screen overflow-auto"},H=["src"];function T(n,s,r,B,l,i){const m=g("HeaderMenusComponent");return a(),o("div",k,[t("div",v,[U(m,{title:"Jadwal Pelajaran"}),t("div",x,[t("div",O,[y,d(t("select",{class:"w-2/3 select select-info",onChange:s[0]||(s[0]=(...e)=>i.handleSelectChangeUnit&&i.handleSelectChangeUnit(...e)),"onUpdate:modelValue":s[1]||(s[1]=e=>l.selectedOptionUnit=e)},[(a(!0),o(p,null,u(l.listUnit,e=>(a(),o("option",{key:e,value:e},_(e.nama_unit),9,j))),128))],544),[[h,l.selectedOptionUnit]])]),t("div",M,[b,d(t("select",{class:"w-2/3 select select-info",onChange:s[2]||(s[2]=(...e)=>i.handleSelectChangeClass&&i.handleSelectChangeClass(...e)),"onUpdate:modelValue":s[3]||(s[3]=e=>l.selectedOptionClass=e)},[(a(!0),o(p,null,u(l.listClass,e=>(a(),o("option",{key:e,value:e},_(e.nama_kelas),9,L))),128))],544),[[h,l.selectedOptionClass]])])]),t("div",V,[t("iframe",{src:l.Url,width:"100%",height:"100%",frameborder:"0",allowfullscreen:"",scrolling:"yes"},null,8,H)])])])}const J=C(S,[["render",T]]);export{J as default};