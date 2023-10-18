

<template>
            

    <div class="flex justify-center h-screen" v-if="datePicker == false">
        <div class="lg:w-1/2 md:w-1/2 w-full flex flex-col">
            <HeaderMenusComponent :title="'Pengajuan izin'"/>
            <div class="flex flex-col flex-grow pt-2 gap-y-6">
                <div class="container flex flex-col gap-y-2">
                    <p class="text-[16px] font-mulish">Pilih Keperluan</p>
                    <div class="flex flex-row items-center gap-x-2">
                        <input type="radio" name="radio-10" class="radio radio-info" value="IJIN" v-model="selectedPurpose"  checked/>
                        <span class="">Izin</span> 
                    </div>
                    <div class="flex flex-row items-center gap-x-2">
                        <input type="radio" name="radio-10" class="radio radio-info" value="SAKIT" v-model="selectedPurpose" />
                        <span class="">Sakit</span> 
                    </div>
                    <div class="flex flex-row items-center gap-x-2">
                        <input type="radio" name="radio-10" class="radio radio-info" value="LAIN-LAIN" v-model="selectedPurpose" />
                        <span class="">Lain Lain</span> 
                    </div>
                </div>
                <div class="container flex flex-col items-center w-full gap-y-2 form-control">
                    <div class="input-group">
                        <input type="text" placeholder="Pilih Tanggal" :value="selectedDate" class="w-full input input-bordered" />
                        <button class="btn btn-square" @click="datePicker = true">
                            <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        </button>
                    </div>
                    <button @click="uploadDocument" class="w-full text-blue-400 bg-white border-2 border-blue-400 btn">
                        <font-awesome-icon :icon="['fas', 'upload']"  class="text-blue-400"/>
                        <span>Unggah Dokumen</span>
                    </button>
                    <input type="file" class="hidden" ref="document" @change="handleFileChange" />
                    <input type="text" v-model="desc" placeholder="Keterangan" class="w-full input input-bordered" />
                    <button @click="submit" class="w-full text-white btn bg-primaryColors">
                        <span>Kirim</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- datepicker -->
    <div class="flex justify-center " v-if="datePicker">
        <div class="md:w-1/3 w-full flex flex-col">
            <header class="bg-primaryColors ">
                <div class="flex flex-row items-center justify-between p-3">
                    <font-awesome-icon :icon="['fas', 'xmark']" class="text-white " @click="close" />
                    <p class="text-center text-white font-[500px] font-montserrat " @click="setDate">Simpan</p>
                </div>
                <div class="container flex flex-col p-2 gap-y-2 ">
                    <p class="text-white text-[14px] font-mulish">Pilih Tanggal</p>
                    <div class="flex flex-row items-center justify-between">
                        <p class="text-white ms-4 font-montserrat">{{ startDate  }}</p>
                        <p class="text-white">-</p>
                        <p class="text-white ms-4 font-montserrat">{{ endDate  }}</p>
                    </div>
                </div>
            </header>
            <main class="flex-grow w-full h-screen overflow-auto">
                <DatePicker v-model.range="range" mode="date"  :rows="10" expanded />
            </main>
        </div>
    </div>
</template>

<script>
import HeaderMenusComponent from '@/components/HeaderMenusComponent.vue';
import ConvertDate from '@/utils/convertDate.js';
import {  DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import { usePermissionStore } from '@/stores/permissionStore.js'


export default {
    name : 'PermissionView',
    components : {
        HeaderMenusComponent,
        DatePicker
    },
    data(){
        return {
            datePicker : false,
            selectedPurpose : "IJIN",
            selectedDate : "Pilih Tanggal",
            permissionStore : usePermissionStore(),
            document : null,
            range : {
                start : null,
                end : null
            }, 
            desc : null
        }
    },
    mounted(){
        
    }, 
    methods : {
        close(){
            this.datePicker = false
            this.range = {
                start : null,
                end : null
            }
        },
        setDate(){
            if(this.range.start == null || this.range.end == null){
                this.$alertStore.showAlert('warning', 'Pilih Tanggal');
            }else{
                this.datePicker = false
                this.selectedDate = this.startDate + " - " + this.endDate
            }
        },
        uploadDocument(){
            this.$refs.document.click()
        },
        handleFileChange(event) {
            this.document = event.target.files[0]; // Store the selected file in the data property
        },
        check() {
            if(this.range.start == null && this.range.end == null){
                return false
            }else if(this.desc == null){
                return false
            }else if(this.selectedPurpose == null){
                return false
            }else{
                return true
            }
        },
        async submit(){
            if(this.check() == true){
                await this.permissionStore.permit({router: this.$router, file : this.document, range: this.range, jenis : this.selectedPurpose , keterangan : this.desc });
            }else{
                this.$alertStore.showAlert('warning', "Mohon Lengkapi Data")
            }            
        },
    },
    computed: {
        startDate(){
            return this.range.start != null ?  ConvertDate.fullYearInd(this.range.start) : "Tanggal Mulai"; 
        },
        endDate(){
            return this.range.end != null ?  ConvertDate.fullYearInd(this.range.end) : "Tanggal Berakhir"; 
        }
    }
}
</script>