<template>
    <div class="flex justify-center">
        <div class="w-full h-screen md:w-1/3">
            <HeaderMenusComponent :title="'Jadwal Pelajaran'"/>
            <div class="container flex flex-row justify-between p-2">
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
            </div>
            <div class="w-full h-screen">
                <iframe
                    :src="Url"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allowfullscreen
                    scrolling="auto"
                ></iframe> 
            </div>
        </div>
    </div>

</template>

<script>
import HeaderMenusComponent from '@/components/HeaderMenusComponent.vue';
import { useDataStore } from '@/stores/dataStore.js';
import MainLocalStorage from '@/services/mainLocalStorage.js';


export default {
    name : 'LessonTimeTableView',
    components : {
        HeaderMenusComponent
    },
    data(){
        return {
            dataStore : useDataStore(),
            listUnit : null,
            listClass : null,
            selectedOptionUnit : null,
            selectedOptionClass : null,
            Url : null,
        }
    },
    mounted(){
        this.getMajor()
    },
    methods : {
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
        }
    }
}
</script>