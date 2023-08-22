<template>
    <div class="w-full h-screen">
        <HeaderMenusComponent :title="title" />  
        <div class="flex flex-col">
            <VueApexCharts
                :options="chartOptions"
                :series="series" 
                class="w-full"
                type="radialBar"    
                ></VueApexCharts> 
            <div class="container flex flex-col w-full">
                <div class="container flex flex-col w-full gap-y-3">
                    <div class="flex flex-row justify-between">
                        <p class="text-primaryColors font-mulish">Hadir</p>
                        <p class="text-primaryColors font-mulish">{{ data.hadir }}</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="text-primaryColors font-mulish">Izin</p>
                        <p class="text-primaryColors font-mulish">{{ data.ijin }}</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="text-primaryColors font-mulish">Sakit</p>
                        <p class="text-primaryColors font-mulish">{{ data.sakit }}</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="text-primaryColors font-mulish">Lain-Lain</p>
                        <p class="text-primaryColors font-mulish">{{ data.lain }}</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="text-primaryColors font-mulish">Terlambat</p>
                        <p class="text-primaryColors font-mulish">{{ data.terlambat }}</p>
                    </div>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
import HeaderMenusComponent from '@/components/HeaderMenusComponent.vue';
import VueApexCharts from "vue3-apexcharts";
import { useSummaryStore } from '@/stores/summaryStore.js';
import SummaryYearlyResponse from '@/models/summaryYearlyResponse.js';

export default {
    name: "SummaryYear",
    components: {
        HeaderMenusComponent,
        VueApexCharts,
    },
    data(){
        return {
            title : null,
            data : [],
            year : null,
            chartOptions: {
                chart: {
                    height: 280,
                    type: "radialBar",
                },
            },
            series : [], 
            summaryStore : useSummaryStore(),
        }
    },
    methods : {
        async fetch(){
            await this.summaryStore.getYearly({year : this.year})
            this.data = new SummaryYearlyResponse(this.summaryStore.data); 
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
                                color: "#3C8DBC",
                                fontSize: "14px",
                            },
                            value: {
                                offsetY : 5,
                                color: "#3C8DBC",
                                fontSize: "25px",
                                show: true,
                            },
                        },
                    },
                },
                stroke: {
                    lineCap: "round",
                },
                labels: [this.data.percentaseHari],
                colors: ["#3C8DBC"],
            }
            this.series = [this.data.percentase]
        }
    },
    mounted(){
        this.fetch()
    },
    created(){
        this.year = this.$route.params.year;
        this.title = `Presensi Tahun ${this.year}`;
    }   
}
</script>