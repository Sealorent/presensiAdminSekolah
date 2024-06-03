<template>
    <div class="flex justify-center">
        <div class="w-full h-screen md:w-1/3">
        <HeaderMenusComponent :title="'Lap Jurnal Mengajar'" /> 
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
</template>

<script>
import HeaderMenusComponent from '@/components/HeaderMenusComponent.vue';
import { useJournalStore } from '@/stores/journalStore.js';


export default{
    name : "JournalComponent",
    components : {
        HeaderMenusComponent
    },
    data(){
        return {
            journalStore : useJournalStore(),
            Url : null
        }
    },
    mounted(){
        this.fetch()
    },
    methods : {
        async fetch(){
            await this.journalStore.journal();
            this.Url = this.journalStore.data;
        }
    }
}
</script>