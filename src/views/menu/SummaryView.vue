<style>
.radius_bottom{
  border-bottom-left-radius: 60% 20%;
  border-bottom-right-radius: 60% 20%;
}
.bottom-sheet__content{
    width: 100% !important;
    height: 50% !important;
}
</style>
<template>
    <!-- <div class="w-full h-screen"> -->
    <div class="flex justify-center">
        <div class="w-full md:w-1/3 h-screen overflow-auto md:pb-20">
            <MenuBottomBar/> 
            <div class="flex flex-col pb-10 bg-blue-500 radius_bottom">
                <div class="flex flex-row items-center justify-center w-full py-2 gap-x-4">
                    <select class="w-2/5 text-white bg-blue-500 font-mulish"  v-model="selectedMonth">
                        <option 
                            v-for="item in listMonth"
                            :key="item"
                            :value="item"
                            > 
                            {{ item.name }}
                        </option>
                    </select>
                    <select class="w-2/5 text-white bg-blue-500 font-mulish"  v-model="selectedYear">
                        <option
                            v-for="item in listYear"
                            :key="item"
                            :value="item"
                            > 
                            {{ item }}
                        </option>
                    </select>
                </div>
                <div class="flex flex-row pt-2">
                    <div class="w-full"> 
                        <VueApexCharts
                        :options="chartOptions"
                        :series="series" 
                        class="w-full"
                        type="radialBar"    
                        ></VueApexCharts>
                    </div>
                    <div class="container flex flex-col w-full">
                        <div class="flex flex-row justify-between">
                            <p class="text-white font-mulish">Hadir</p>
                            <p class="text-white font-mulish">{{ data.hadir }}</p>
                        </div>
                        <div class="flex flex-row justify-between">
                            <p class="text-white font-mulish">Izin</p>
                            <p class="text-white font-mulish">{{ data.ijin }}</p>
                        </div>
                        <div class="flex flex-row justify-between">
                            <p class="text-white font-mulish">Sakit</p>
                            <p class="text-white font-mulish">{{ data.sakit }}</p>
                        </div>
                        <div class="flex flex-row justify-between">
                            <p class="text-white font-mulish">Lain-Lain</p>
                            <p class="text-white font-mulish">{{ data.lain }}</p>
                        </div>
                        <div class="flex flex-row justify-between">
                            <p class="text-white font-mulish">Terlambat</p>
                            <p class="text-white font-mulish">{{ data.terlambat }}</p>
                        </div>
                    </div>
                </div>
                <div class="container flex flex-row justify-between">
                    <p class="w-full text-white font-mulish">Presensi Tahun Ini</p>
                    <button class="flex flex-row items-center text-white gap-x-2" @click="toDetailYear(selectedYear)">
                        <p>{{ data.hadir_tahun_ini }}</p>
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    </button>
                </div>
            </div>
            <div v-if="data.rekap && data.rekap.length > 0" class="container overflow-x-auto">
                <table class="table table-zebra">
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
                </table>
            </div>
            <div v-else class="flex items-center justify-center h-1/2">
                <div class="flex flex-col">
                    <font-awesome-icon :icon="['far', 'circle-question']" size="xl" class="text-primaryColors"/>
                    <p class="font-mulish text-primaryColors">Data Masih Kosong</p>
                </div>
            </div>
            <vue-bottom-sheet ref="detail" >
                <div class="container"  v-if="detailItem != false">
                    <div class="flex flex-row justify-between">
                        <p class="text-lg text-black font-mulish text-bold">{{ arrDetail.hari }}</p>
                        <p class="text-primaryColors font-mulish text-bold">{{ arrDetail.status }}</p>
                    </div>
                    <div class="flex flex-row py-4 gap-x-28">
                        <div class="flex flex-col gap-y-2">
                            <p class="text-xs uppercase font-mulish">jam datang</p>
                            <p class="text-lg text-black uppercase font-mulish">{{ arrDetail.detail.jam_datang }}</p>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <p class="text-xs uppercase font-mulish">jam pulang</p>
                            <p class="text-lg text-black uppercase font-mulish">{{ arrDetail.detail.jam_pulang }}</p>
                        </div>
                    </div>
                    <div class="flex flex-row py-4 gap-x-10">
                        <div class="flex flex-col gap-y-2 w-36">
                            <p class="text-xs font-mulish">Lokasi Datang</p>
                            <p class="text-sm text-black uppercase font-mulish break-words">{{ arrDetail.detail.lokasi_datang }}</p>
                        </div>
                        <div class="flex flex-col gap-y-2 w-36">
                            <p class="text-xs uppercase font-mulish">Lokasi Pulang</p>
                            <p class="text-sm text-black uppercase font-mulish">{{ arrDetail.detail.lokasi_pulang }}</p>
                        </div>
                    </div>
                    <div class="flex flex-row py-4 gap-x-20">
                        <div class="flex flex-col gap-y-2">
                            <p class="text-xs font-mulish">Catatan Datang</p>
                            <p class="text-sm text-black uppercase font-mulish">{{ arrDetail.detail.catatan_datang }}</p>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <p class="text-xs uppercase font-mulish">Catatan Pulang</p>
                            <p class="text-sm text-black uppercase font-mulish">{{ arrDetail.detail.catatan_pulang }}</p>
                        </div>
                    </div>
                </div>
            </vue-bottom-sheet>
        </div>  
    </div>
</template>

<script>
import MenuBottomBar from '@/components/MenuBottomBar.vue';
import VueApexCharts from "vue3-apexcharts";
import DateUtils from "@/utils/dateUtils.js";
import { useSummaryStore } from '@/stores/summaryStore.js';
import SummaryMonthlyResponse from '@/models/summaryMonthlyResponse.js';
import { inject } from 'vue';

import  VueBottomSheet  from "@webzlodimir/vue-bottom-sheet";
import  "@webzlodimir/vue-bottom-sheet/dist/style.css";

export default {
    name : 'SummaryView',
    components : {
        MenuBottomBar,
        VueApexCharts,
        VueBottomSheet
    },
    data(){
        return {
            state : inject('state'),
            data : [],
            chartOptions: {
                chart: {
                    height: 280,
                    type: "radialBar",
                },
            },
            series : [],
            listMonth : DateUtils.listMonth(),
            listYear : DateUtils.listYear(),
            selectedMonth : null,
            selectedYear : null,
            summaryStore : useSummaryStore(),
            arrDetail : [],
            detailItem : false,
        };
    },
    mounted(){
        this.state.Loading()
        this.setNowMonth()
        this.setNowYear()
        this.fetch()
    },
    methods : {
        setNowMonth(){
            const now = new Date();
            const currentMonth = now.getMonth();
            this.currentDate = now.toLocaleDateString();
            this.selectedMonth = this.listMonth.find(month => month.index === currentMonth + 1);    
        },
        setNowYear(){
            const now = new Date();
            const currentYear = now.getFullYear()
            this.selectedYear =  currentYear
        },
        detail(item){
            this.$refs.detail.open();
            this.detailItem = true;
            this.arrDetail = item;
        },
        toDetailYear(selectedYear){
            this.$router.push({name: 'summaryYearly', params: { year: selectedYear } })
        },
        async fetch(){
            await this.summaryStore.getMonthly({month : this.selectedMonth.index , year : this.selectedYear})
            this.data = new SummaryMonthlyResponse(this.summaryStore.data) 
            // set chart
            this.chartOptions = {
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "60%",
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                offsetY: -10,
                                show: true,
                                color: "#ffffff",
                                fontSize: "10px",
                            },
                            value: {
                                offsetY : -5,
                                color: "#ffffff",
                                fontSize: "15px",
                                show: true,
                            },
                        },
                    },
                },
                stroke: {
                    lineCap: "round",
                },
                labels: [this.data.percentase_hari],
                colors: ["#ffffff"],
            }
            this.series = [parseFloat(this.data.percentase)]
        }
        
    }
}
</script>