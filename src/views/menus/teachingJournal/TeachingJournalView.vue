<style>
.floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>
<template>
    <div class="w-full h-screen">
        <HeaderMenusComponent :title="'Jurnal Mengajar'"/>
        <div class="container flex flex-row flex-wrap justify-between p-2 gap-y-3">
            <div class="flex flex-row items-center w-1/2">
                <p class="w-10 font-mulish">Unit :</p>
                <select class="w-2/3 select select-info" @change="handleSelectChangeUnit"  v-model="selectedOptionUnit" >
                    <option
                        v-for="item in listUnit"
                        :key="item"
                        :value="item"
                        > 
                        {{ item.nama_unit }}
                    </option>
                </select>
            </div>
            <div class="flex flex-row items-center w-1/2">
                <p class="w-1/3 font-mulish">Kelas :</p>
                <select class="w-2/3 select select-info" @change="handleSelectChangeClass"  v-model="selectedOptionClass" >
                    <option
                        v-for="item in listClass"
                        :key="item"
                        :value="item"
                        > 
                        {{ item.nama_kelas }}
                    </option>
                </select>
            </div>
            <div class="flex flex-row items-center w-1/2">
                <p class="w-1/3 font-mulish">Bulan :</p>
                <select class="w-2/3 select select-info" @change="handleSelectChangeClass"  v-model="selectedOptionMonth" >
                    <option
                        v-for="item in listMonth"
                        :key="item"
                        :value="item"
                        > 
                        {{ item.month_name }}
                    </option>
                </select>
            </div>
        </div>
        <div v-if="data.data_jurnal && data.data_jurnal.length > 0" class="container overflow-x-auto">
            <!-- <table class="table table-zebra">
                <thead>
                    <tr>
                        <th class="text-sm text-black font-mulish text-bold">Tanggal</th>
                        <th class="text-sm text-black font-mulish text-bold">Datang</th>
                        <th class="text-sm text-black font-mulish text-bold">Pulang</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data.rekap" :key="item">
                        <th>{{ item.hari }}</th>
                        <td>{{ item.detail.jam_datang }}</td>
                        <td>{{ item.detail.jam_pulang }}</td>
                        <td>
                            <button class="text-primaryColors" @click="detail(item)">
                                Detail
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table> -->
            <p>Data Ada</p>
        </div>
        <div v-else class="flex items-center justify-center h-1/2">
            <div class="flex flex-col">
                <font-awesome-icon :icon="['far', 'circle-question']" size="xl" class="text-primaryColors"/>
                <p class="font-mulish text-primaryColors">Data Masih Kosong</p>
            </div>
        </div>
        <div class="fixed right-5 bottom-5">
            <button class="text-white rounded-full shadow-md w-14 h-14 bg-primaryColors" @click="handleFloatingButtonClick">
                <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
        </div>
    </div>
</template>


<script>
import HeaderMenusComponent from '@/components/HeaderMenusComponent.vue';
import { useDataStore } from '@/stores/dataStore.js';
import MainLocalStorage from '@/services/mainLocalStorage.js';
import { useJournalStore } from '@/stores/journalStore.js';

export default {
    name : 'TeachingJournalView',
    components : {
        HeaderMenusComponent
    },
    data(){
        return {
            dataStore : useDataStore(),
            journalStore : useJournalStore(),
            listUnit : null,
            listClass : null,
            listMonth : [],
            selectedOptionMonth : null,
            selectedOptionUnit : null,
            selectedOptionClass : null,
            data : []
        }
    },
    async mounted() {
        await this.getMajor();
        await this.getMonth();
        this.fetch();
    },
    methods:{
        async getMajor(){
            try {
                await this.dataStore.major();
                this.listUnit = this.dataStore.data 
                this.selectedOptionUnit = this.listUnit[0]
                this.handleSelectChangeUnit()
            } catch (error) {
                console.error(error);
            }
        },
        handleSelectChangeUnit(){
            this.getClass(this.selectedOptionUnit.id_unit)
        },
        async getClass(id_unit){
            await this.dataStore.class({id_unit : id_unit})
            this.listClass = this.dataStore.data 
            this.selectedOptionClass = this.listClass[0]
            this.handleSelectChangeClass()
        },
        handleSelectChangeClass(){
            const kode_sekolah = MainLocalStorage.getLoginResponse().kode_sekolah
            const id_pegawai = MainLocalStorage.getLoginResponse().id_pegawai
            const id_kelas = this.selectedOptionClass.id_kelas
            this.Url = `${import.meta.env.VITE_BASE_URL_API}/jadwal_pelajaran_webview.php?kode_sekolah=${kode_sekolah}&id_pegawai=${id_pegawai}&id_kelas=${id_kelas}`
        },
        async getMonth(){
            await this.dataStore.month();
            this.listMonth = this.dataStore.data;
            var currentMonthName = new Date().toLocaleString('id-Id', { month: 'long' });
            let arrMonth = this.listMonth
            this.selectedOptionMonth = arrMonth.find(function(month) {
                return month.month_name === currentMonthName;
            });
        },
        async fetch(){
            const class_id = this.selectedOptionClass.id_kelas;
            const bulan_id = this.selectedOptionMonth.month_id;
            await this.journalStore.getReportJournal({month: bulan_id, class_id : class_id})
            this.data = this.journalStore.data;
            console.log(this.data);
        },
        handleFloatingButtonClick(){
            this.$router.push({name : "journal"})
        }
    }
}
</script>