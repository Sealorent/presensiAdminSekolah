<template>
    <div class="w-full h-screen">
        <HeaderMenusComponent :title="'Lap Jurnal Mengajar'" /> 
        <iframe
            :src="Url"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
            scrolling="no"
        ></iframe>  
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