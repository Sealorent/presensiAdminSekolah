<template>
    <div class="flex justify-center">
        <div class="md:w-1/2 lg:w-1/3 h-screen overflow-auto">
            <HeaderMenusComponent :title="'Lap Jurnal Mengajar'" /> 
            <iframe
                :src="Url"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen
                scrolling="yes"
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