<template>
    <div class="flex flex-col w-full h-screen">
        <div class="container flex justify-center pt-2">
            <img :src="image" alt="" srcset="" class="w-40">
        </div>
        <div class="container px-4 py-2 mx-auto">
            <div class="flex flex-col gap-y-5 md:gap-y-8 lg:gap-y-10 md:flex-row md:flex-wrap">
                <div class="flex flex-col w-full md:w-1/2 lg:w-1/3">
                <div class="mb-2">
                    <p class="uppercase font-mulish">Sekolah</p>
                    <p class="font-mulish">{{dataUser.nama_sekolah}}</p>
                </div>
                <div class="mb-2">
                    <p class="uppercase font-mulish">Nama</p>
                    <p class="font-mulish">{{dataUser.nama}}</p>
                </div>
                <div class="mb-2">
                    <p class="uppercase font-mulish">Jabatan</p>
                    <p class="font-mulish">{{dataUser.jabatan}}</p>
                </div>
                </div>
                <div class="flex flex-col w-full md:w-1/2 lg:w-1/3">
                <div class="mb-2">
                    <p class="uppercase font-mulish">NIP</p>
                    <p class="font-mulish">{{loginResponse.nip}}</p>
                </div>
                <div class="mb-2">
                    <p class="uppercase font-mulish">Email</p>
                    <p class="font-mulish">{{dataUser.email || '-'}}</p>
                </div>
                <div class="mb-2">
                    <p class="uppercase font-mulish">No. Ponsel</p>
                    <p class="font-mulish">{{dataUser.phone || '-'}}</p>
                </div>
                </div>
            </div>
            <div class="mt-4 md:mt-6 lg:mt-8">
                <button @click="logOut" class="flex items-center justify-center w-full h-10 text-red-500 border-2 border-red-500 btn md:h-12">
                    <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" class="mr-2 text-red-500"/>
                    <p class="font-mulish">Keluar</p>
                </button>
            </div>
        </div>
        <MenuBottomBar/>  
    </div>
</template>

<script>
import MenuBottomBar from '@/components/MenuBottomBar.vue';
import MainLocalStorage from '@/services/mainLocalStorage.js';
import ImageNotFound from '@/assets/images/imageNotFound.png';
import { inject } from 'vue';



export default {
    name : 'ProfilView',
    components : {
        MenuBottomBar
    },
    data(){
        return {
            state : inject('state'),
            dataUser : MainLocalStorage.getDataUser().data,
            loginResponse : MainLocalStorage.getLoginResponse(),
            image : '',
        }
    },
    methods : {
        async initializeLogo(logoUrl) {
            if (typeof logoUrl === 'string' && logoUrl.trim() !== '') {
                try {
                    const res = await fetch(logoUrl, { method: 'HEAD' })
                    if (res.status != 200) {
                        this.image = ImageNotFound // Set default image URL when not accessible
                    } else {
                        this.image = logoUrl // Set the provided URL if it's valid
                    }
                } catch (error) {
                    this.image = ImageNotFound // Set default image URL when not accessible
                }
            } else {
                this.image = ImageNotFound // Set default image URL if no URL is provided
            }
        },
        logOut(){
            this.state.Loading()
            MainLocalStorage.logOut()
            this.state.Success()
            this.$router.push({name:"login"})
        }
    },
    mounted(){
        this.initializeLogo(this.dataUser.logo)
    }
}
</script>