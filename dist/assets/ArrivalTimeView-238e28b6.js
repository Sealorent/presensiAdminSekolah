import{_ as f,i as x,M as _,r as c,o as m,c as d,a as s,b as r,t as p,w,v,e as b}from"./index-d249554b.js";import{T as k,u as y}from"./TimerComponent-4839e867.js";import{H as I}from"./HeaderMenusComponent-69f096e6.js";import"./mainRepositories-09f24805.js";import"./axios-4a70c6fc.js";import"./setFormDataUtils-e6455cf7.js";const C={name:"ArrivalTimeView",components:{HeaderMenusComponent:I,Timer:k},data(){return{state:x("state"),absentSore:y(),title:"Absen Datang",selectedLocation:_.getSelectedLocation(),currentTime:"",selectedImage:null,fileImage:null,keterangan:""}},created(){this.updateTime(),setInterval(this.updateTime,1e3),this.setCamera()},methods:{setCamera(){navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{this.$refs.video.srcObject=t}).catch(t=>{console.error("Error accessing webcam:",t)})},async captureFrameFromVideo(){const t=this.$refs.video;if(!t)return;const e=document.createElement("canvas");e.width=t.videoWidth,e.height=t.videoHeight,e.getContext("2d").drawImage(t,0,0,e.width,e.height);const n=await new Promise(i=>{e.toBlob(a=>{i(a)},"image/jpeg")});this.fileImage=new File([n],"captured_image.jpg",{type:"image/jpeg"}),this.selectedImage=URL.createObjectURL(n)},updateTime(){const t=new Date,e=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),n=String(t.getSeconds()).padStart(2,"0");this.currentTime=`${e}:${l}:${n}`},handleFileInputClick(){this.$refs.fileInput.click()},handleFileInputChange(t){const e=t.target.files[0];this.fileImage=e,e&&(this.selectedImage=URL.createObjectURL(e))},async submit(){this.fileImage==null?this.$alertStore.showAlert("danger","Lengkapi Data Absen !"):(this.keterangan="Hadir",this.state.Loading(),await this.absentSore.present({router:this.$router,image:this.fileImage,keterangan:this.keterangan,lokasi:this.selectedLocation}))}}},S={class:"flex justify-center h-screen"},T={class:"md:w-1/2 w-full flex flex-col"},L={class:"flex flex-col flex-grow pt-2"},j=s("p",{class:"text-center"},"Batas Waktu Absen 60 Detik",-1),F=s("p",{class:"text-center"},"Setelah itu Halaman akan Tertutup otomatis",-1),A={class:"flex flex-row items-center pt-2 mx-4 gap-x-2"},V={class:"flex flex-row items-center pt-2 mx-4 gap-x-2"},H={class:"pt-2 text-center"},M={class:"container flex flex-col items-center justify-center w-40 h-40 bg-primaryColors rounded-xl"},D=["src"],B={key:1,ref:"video",class:"w-full h-full",autoplay:""},U={class:"flex flex-col items-center justify-center pt-2 gap-y-2"};function E(t,e,l,n,i,a){const g=c("HeaderMenusComponent"),u=c("font-awesome-icon"),h=c("Timer");return m(),d("div",S,[s("div",T,[r(g,{title:i.title},null,8,["title"]),s("div",L,[j,F,s("div",A,[r(u,{icon:["far","clock"],class:"text-[20px]"}),s("p",null,p(i.currentTime),1)]),s("div",V,[r(u,{icon:["fas","street-view"],class:"text-[20px]"}),s("p",null,p(i.selectedLocation.lokasi),1)]),s("div",H,[s("div",M,[i.selectedImage!==null?(m(),d("img",{key:0,src:i.selectedImage,alt:"",style:{height:"100%",width:"100%"}},null,8,D)):(m(),d("video",B,null,512))]),s("button",{onClick:e[0]||(e[0]=(...o)=>a.captureFrameFromVideo&&a.captureFrameFromVideo(...o)),class:"mt-2 text-white btn bg-primaryColors"}," Ambil Foto ")]),s("div",U,[w(s("input",{type:"text",placeholder:"Catatan","onUpdate:modelValue":e[1]||(e[1]=o=>i.keterangan=o),class:"w-full max-w-xs input input-bordered"},null,512),[[v,i.keterangan]]),s("button",{onClick:e[2]||(e[2]=(...o)=>a.submit&&a.submit(...o)),class:"text-white btn bg-primaryColors"},[b("Kirim Absen "),s("span",null,[r(h)])])])])])])}const $=f(C,[["render",E]]);export{$ as default};
