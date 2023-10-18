import{H as C}from"./HeaderMenusComponent-69f096e6.js";import{u as S}from"./dataStore-51706552.js";import{_ as v,M as g,r as f,o as a,c as l,a as s,b as d,w as c,g as h,F as u,f as _,t as p}from"./index-d249554b.js";import{u as k}from"./journalStore-3580853c.js";import"./mainRepositories-09f24805.js";import"./axios-4a70c6fc.js";const x={name:"TeachingJournalView",components:{HeaderMenusComponent:C},data(){return{dataStore:S(),journalStore:k(),listUnit:null,listClass:null,listMonth:[],selectedOptionMonth:null,selectedOptionUnit:null,selectedOptionClass:null,data:[]}},async mounted(){await this.getMajor(),await this.getMonth(),this.fetch()},methods:{async getMajor(){try{await this.dataStore.major(),this.listUnit=this.dataStore.data,this.selectedOptionUnit=this.listUnit[0],this.handleSelectChangeUnit()}catch(o){console.error(o)}},handleSelectChangeUnit(){this.getClass(this.selectedOptionUnit.id_unit)},async getClass(o){await this.dataStore.class({id_unit:o}),this.listClass=this.dataStore.data,this.selectedOptionClass=this.listClass[0],this.handleSelectChangeClass()},handleSelectChangeClass(){const o=g.getLoginResponse().kode_sekolah,t=g.getLoginResponse().id_pegawai,r=this.selectedOptionClass.id_kelas;this.Url=`https://mobile.adminsekolah.net/rest-api-new/jadwal_pelajaran_webview.php?kode_sekolah=${o}&id_pegawai=${t}&id_kelas=${r}`},async getMonth(){await this.dataStore.month(),this.listMonth=this.dataStore.data;var o=new Date().toLocaleString("id-Id",{month:"long"});let t=this.listMonth;this.selectedOptionMonth=t.find(function(r){return r.month_name===o})},async fetch(){const o=this.selectedOptionClass.id_kelas,t=this.selectedOptionMonth.month_id;await this.journalStore.getReportJournal({month:t,class_id:o}),this.data=this.journalStore.data,console.log(this.data)},handleFloatingButtonClick(){this.$router.push({name:"journal"})}}},M={class:"flex justify-center"},y={class:"md:w-1/2 lg:w-1/3 h-screen overflow-auto"},U={class:"container flex flex-row flex-wrap justify-between p-2 gap-y-3"},O={class:"flex flex-row items-center w-1/2"},j=s("p",{class:"w-10 font-mulish"},"Unit :",-1),b=["value"],V={class:"flex flex-row items-center w-1/2"},B=s("p",{class:"w-1/3 font-mulish"},"Kelas :",-1),D=["value"],J={class:"flex flex-row items-center w-1/2"},F=s("p",{class:"w-1/3 font-mulish"},"Bulan :",-1),L=["value"],H={key:0,class:"container overflow-x-auto"},N=s("p",null,"Data Ada",-1),R=[N],T={key:1,class:"flex items-center justify-center h-1/2"},K={class:"flex flex-col"},q=s("p",{class:"font-mulish text-primaryColors"},"Data Masih Kosong",-1),z={class:"fixed right-5 bottom-5 lg:right-96 md:right-60"};function A(o,t,r,E,n,i){const w=f("HeaderMenusComponent"),m=f("font-awesome-icon");return a(),l("div",M,[s("div",y,[d(w,{title:"Jurnal Mengajar"}),s("div",U,[s("div",O,[j,c(s("select",{class:"w-2/3 select select-info",onChange:t[0]||(t[0]=(...e)=>i.handleSelectChangeUnit&&i.handleSelectChangeUnit(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>n.selectedOptionUnit=e)},[(a(!0),l(u,null,_(n.listUnit,e=>(a(),l("option",{key:e,value:e},p(e.nama_unit),9,b))),128))],544),[[h,n.selectedOptionUnit]])]),s("div",V,[B,c(s("select",{class:"w-2/3 select select-info",onChange:t[2]||(t[2]=(...e)=>i.handleSelectChangeClass&&i.handleSelectChangeClass(...e)),"onUpdate:modelValue":t[3]||(t[3]=e=>n.selectedOptionClass=e)},[(a(!0),l(u,null,_(n.listClass,e=>(a(),l("option",{key:e,value:e},p(e.nama_kelas),9,D))),128))],544),[[h,n.selectedOptionClass]])]),s("div",J,[F,c(s("select",{class:"w-2/3 select select-info",onChange:t[4]||(t[4]=(...e)=>i.handleSelectChangeClass&&i.handleSelectChangeClass(...e)),"onUpdate:modelValue":t[5]||(t[5]=e=>n.selectedOptionMonth=e)},[(a(!0),l(u,null,_(n.listMonth,e=>(a(),l("option",{key:e,value:e},p(e.month_name),9,L))),128))],544),[[h,n.selectedOptionMonth]])])]),n.data.data_jurnal&&n.data.data_jurnal.length>0?(a(),l("div",H,R)):(a(),l("div",T,[s("div",K,[d(m,{icon:["far","circle-question"],size:"xl",class:"text-primaryColors"}),q])])),s("div",z,[s("button",{class:"text-white rounded-full shadow-md w-14 h-14 bg-primaryColors",onClick:t[6]||(t[6]=(...e)=>i.handleFloatingButtonClick&&i.handleFloatingButtonClick(...e))},[d(m,{icon:["fas","plus"]})])])])])}const Y=v(x,[["render",A]]);export{Y as default};
