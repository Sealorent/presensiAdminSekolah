<style>
.bg_home{
  border-bottom-left-radius: 60% 20%;
  border-bottom-right-radius: 60% 20%;
}
</style>
<template>
    <div class="flex justify-center ">
        <div class="md:w-1/3 lg:w-1/4 w-full flex flex-col h-screen overflow-auto ">
            <header class="top-0 flex flex-col items-center justify-center w-full py-4 gap-y-2 bg-primaryColors bg_home">
                <p class="text-sm font-thin text-white font-mulish">Demo Admin Sekolah</p>
                <div class="container flex items-center justify-center w-full">
                    <div class="w-20 h-20 overflow-hidden border-2 rounded-full" >
                        <img alt="profile-image" class="object-cover w-full h-full" :src="imageUser"/>
                    </div>
                </div>
                <p class="text-lg text-white font-mulish">{{ nameUser }}</p>
                <p class="text-sm text-white font-mulish">{{ jabatanUser }}</p>
            </header>
            <main class="items-center justify-center flex-grow mb-20 md:mb-0 lg:mb:0">
                <div class="container flex flex-col items-center justify-center py-2">
                    <p class="text-[16px] text-black font-mulish">{{ formattedDate }}</p>
                    <p class="text-[16px] font-mulish">{{ formattedTime }} <span class="font-mulish text-[12px]">{{ localTime }}</span></p>
                </div>
                <div class="container flex flex-col justify-center ">
                    <hr class="w-1/2 mx-auto">
                    <div class="flex flex-row justify-between w-1/2 mx-auto">
                        <div class="flex flex-col">
                            <p class="text-[10px] text-gray-400">DATANG</p>
                            <p>{{ startTime }}</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-[10px] text-gray-400">PULANG</p>
                            <p>{{ endTime }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex w-full pt-5">
                <!-- menu Button -->
                    <div class="container flex flex-col items-center pt-2 text-center">
                        <!-- Centered section with menu items -->
                        <div class="flex flex-wrap justify-center">
                            <div v-for="item in menu" :key="item.route" class="flex items-center justify-center w-1/3 pt-4">
                                <div class="flex flex-col items-center justify-center" @click="navigateTo(item.route)">
                                    <div class="flex items-center justify-center mx-auto bg-opacity-50 rounded-full w-14 h-14" :class="item.bg_color">
                                        <font-awesome-icon :icon="item.icon" class="text-2xl " :class="item.color" />
                                    </div>
                                    <div class="flex items-center justify-center pt-3">
                                        <p class="text-sm font-bold text-black whitespace-normal max-w-[5rem] truncate  font-mulish">{{ item.name }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuBottomBar/>
            </main>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';
import MainLocalStorage from '@/services/mainLocalStorage.js';
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';
import { DateTime } from 'luxon';
import axios from 'axios';
import MenuBottomBar from '@/components/MenuBottomBar.vue';

export default {
    name: 'HomeView',
    components : {
        MenuBottomBar
    },
    data(){
        return {    
            state: inject('state'),
            imageUser : MainLocalStorage.getDataUser().data.photo,
            nameUser : MainLocalStorage.getDataUser().data.nama,
            jabatanUser : MainLocalStorage.getDataUser().data.jabatan,
            ipAddress : '',
            informationIp : null,
            formattedTime : '',
            localTime : '',
            currentDate: new Date(),
            menu : [
                {icon : 'right-to-bracket', name : 'Masuk', route : 'arrival' ,  bg_color : 'bg-gradient-to-r from-blue-600 to-blue-400' , color : 'text-white'},
                {icon : 'door-open', name : 'Pulang', route : 'backHome' ,  bg_color : 'bg-gradient-to-r from-blue-600 to-blue-400' , color : 'text-white'},
                {icon : 'business-time', name : 'Izin / Sakit', route : 'permission' ,  bg_color : 'bg-gradient-to-r from-blue-600 to-blue-400' , color : 'text-white'},
                {icon : 'calendar-week', name : 'Jadwal Pelajaran', route : 'lessonTimeTable' ,  bg_color : 'bg-gradient-to-r from-blue-600 to-blue-400' , color : 'text-white'},
                {icon : 'person-chalkboard', name : 'Jurnal Mengajar', route : 'teachingJournal' ,  bg_color : 'bg-gradient-to-r from-blue-600 to-blue-400' , color : 'text-white'},
            ]
        }
    },
    methods : {
        async getIp(){
            this.state.Loading()
            await axios.get('https://api.ipify.org?format=json')
                .then(response => {
                    this.state.showSuccess()
                    const data = response.data;
                    this.ipAddress = data.ip;
                })
                .catch(error => {
                    this.state.Loading(error.message)
                });
        },
        async getDataIp(){
            this.state.Loading()
                await axios.get(`http://ip-api.com/json/${this.ipAddress}`).then(response => {
                    this.state.Success()
                    this.informationIp = response.data;
                    console.log(this.informationIp);
                    this.displayTimeInDifferentZones(this.informationIp.timezone);
                }).catch(error => {
                    // this.state.Error(error.message)
                });
        },
        updateTime() {
            const localTime = DateTime.utc().setZone(this.informationIp.timezone);
            const updatedTime = localTime.plus({ seconds: 1 });
            this.formattedTime = updatedTime.toFormat('HH:mm:ss');
        },
        navigateTo(route){
            if(route == 'arrival'){
                if(this.startTime == null){
                    this.$router.push({name : 'arrival'})
                }else{
                    this.$alertStore.showAlert('danger', 'Sudah Absen Datang !');
                }
            }else if(route == 'backHome'){
                if(this.endTime == null){
                    this.$router.push({name : 'backHome'})
                }else{
                    this.$alertStore.showAlert('danger', 'Sudah Absen Pulang !');
                }
            }else{
                this.$router.push({name : route})
            }
        },
        displayTimeInDifferentZones(timeZone) {
            if(timeZone == 'Asia/Jakarta'){
                this.localTime = "WIB";
            }else if(timeZone == 'Asia/Makassar'){
                this.localTime = "WITA";
            }else if(timeZone == 'Asia/Jayapura'){
                this.localTime = "WIT";
            }else{
                this.localTime = "WIB";
            }
        }
    },
    async mounted(){
        await this.getIp();
        await this.getDataIp();
        await setInterval(this.updateTime, 1000);
    },
    computed: {
        formattedDate() {
            return format(this.currentDate, 'EEEE, d MMMM yyyy', { locale: idLocale });
        },
        startTime(){
            return MainLocalStorage.getTimeArrival() || null;
        },
        endTime(){
            return MainLocalStorage.getTimeBack() || null;
        }
  },
};

</script>