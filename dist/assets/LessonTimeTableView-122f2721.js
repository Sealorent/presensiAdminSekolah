import{H as C}from"./HeaderMenusComponent-4483b349.js";import{u as w}from"./dataStore-b1aba2cf.js";import{_ as g,M as d,r as f,o as a,c as o,b as U,a as t,w as c,g as h,F as p,f as u,t as _}from"./index-ce235531.js";import"./mainRepositories-9a31e8d8.js";import"./axios-28bc18a3.js";const S={name:"LessonTimeTableView",components:{HeaderMenusComponent:C},data(){return{dataStore:w(),listUnit:null,listClass:null,selectedOptionUnit:null,selectedOptionClass:null,Url:null}},mounted(){this.getMajor()},methods:{async getMajor(){try{await this.dataStore.major(),this.listUnit=this.dataStore.data,this.selectedOptionUnit=this.listUnit[0],this.handleSelectChangeUnit()}catch(n){console.error(n)}},handleSelectChangeUnit(){this.getClass(this.selectedOptionUnit.id_unit)},async getClass(n){await this.dataStore.class({id_unit:n}),this.listClass=this.dataStore.data,this.selectedOptionClass=this.listClass[0],this.handleSelectChangeClass()},handleSelectChangeClass(){const n=d.getLoginResponse().kode_sekolah,s=d.getLoginResponse().id_pegawai,r=this.selectedOptionClass.id_kelas;this.Url=`https://mobile.adminsekolah.net/rest-api-new/jadwal_pelajaran_webview.php?kode_sekolah=${n}&id_pegawai=${s}&id_kelas=${r}`}}},k={class:"w-full h-screen"},v={class:"container flex flex-row justify-between p-2"},O={class:"flex flex-row items-center w-1/2"},x=t("p",{class:"w-10 font-mulish"},"Unit :",-1),M=["value"],b={class:"flex flex-row items-center w-1/2"},j=t("p",{class:"w-1/3 font-mulish"},"Kelas :",-1),y=["value"],L={class:"w-full h-screen"},V=["src"];function H(n,s,r,T,l,i){const m=f("HeaderMenusComponent");return a(),o("div",k,[U(m,{title:"Jadwal Pelajaran"}),t("div",v,[t("div",O,[x,c(t("select",{class:"w-2/3 select select-info",onChange:s[0]||(s[0]=(...e)=>i.handleSelectChangeUnit&&i.handleSelectChangeUnit(...e)),"onUpdate:modelValue":s[1]||(s[1]=e=>l.selectedOptionUnit=e)},[(a(!0),o(p,null,u(l.listUnit,e=>(a(),o("option",{key:e,value:e},_(e.nama_unit),9,M))),128))],544),[[h,l.selectedOptionUnit]])]),t("div",b,[j,c(t("select",{class:"w-2/3 select select-info",onChange:s[2]||(s[2]=(...e)=>i.handleSelectChangeClass&&i.handleSelectChangeClass(...e)),"onUpdate:modelValue":s[3]||(s[3]=e=>l.selectedOptionClass=e)},[(a(!0),o(p,null,u(l.listClass,e=>(a(),o("option",{key:e,value:e},_(e.nama_kelas),9,y))),128))],544),[[h,l.selectedOptionClass]])])]),t("div",L,[t("iframe",{src:l.Url,width:"100%",height:"100%",frameborder:"0",allowfullscreen:"",scrolling:"no"},null,8,V)])])}const E=g(S,[["render",H]]);export{E as default};