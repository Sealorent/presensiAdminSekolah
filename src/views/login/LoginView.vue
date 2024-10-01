<template>
  <div class="flex justify-center">
    <div class="flex flex-col w-full md:w-1/3 h-screen">
        <main class="flex items-center justify-center flex-grow">
            <div class="container pt-2 mb-20">
                <div class="flex flex-row justify-center w-full">
                    <img src="@/assets/images/adminsekolah.png" alt="" class="w-20 h-20">
                </div>
                <p class="text-center text-[15px] font-mulish font-[600] pt-6">Assalamu'alaikum Selamat Datang Di</p>
                <p class="text-center text-[20px] font-mulish font-bold">Admin Sekolah</p>
                <div class="container flex flex-col pt-10 item-center gap-y-5">
                    <input v-model="kode_sekolah" type="text" class="px-2 py-3 mb-3 border-2 border-gray-400 rounded-lg font-mulish focus:outline-none focus:border-primaryColors" placeholder="Kode Sekolah" />
                    <input v-model="nip" type="text" class="px-2 py-3 border-2 border-gray-400 rounded-lg font-mulish focus:outline-none focus:border-primaryColors" placeholder="NIP" />
                    <PasswordContainer v-model:value="password" title="Password" />
                    <small class="text-end text-primaryColors"><button @click="this.$router.push('/forgot-password')"> Lupa Password ?</button></small>
                    <button @click="login" class="w-full h-12 text-white border-2 rounded-full bg-primaryColors" >Lanjut</button>
                    <button @click="clearSession" class="text-center font-mulish text-primaryColors text-md">Hapus Riwayat</button>
                </div>
            </div>
        </main>
        <footer class=" bottom-0 flex flex-col h-20 pb-6 gap-y-3">
            <p class="text-center text-[13px] font-mulish ">Butuh Bantuan ?</p>
            <p class="text-center text-[15px] font-mulish text-primaryColors ">Hubungi Admin</p>
        </footer>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/authStore.js';
import PasswordContainer from '@/components/PasswordContainer.vue';
import MainLocalStorage from '@/services/mainLocalStorage.js';
import { inject } from 'vue';

export default {
  name: 'LoginView',
  components: {
    PasswordContainer,
  },
  data(){
    return {
      state : inject('state'),
      kode_sekolah: null,
      password: null, 
      nip: null,
      // kode_sekolah: '2020123',
      // nip: '00040031',
      // password: '123456', 
      authStore: useAuthStore(),
    }
  },
  mounted(){
    this.setSession()
  },
  methods : {
    async login() {
      await this.authStore.login({router: this.$router, kode_sekolah : this.kode_sekolah, password: this.password, nip : this.nip });
    },
    setSession(){
        const data = MainLocalStorage.getDataLogin()
        if(data != null){
          this.kode_sekolah = data.kode_sekolah 
          this.password = data.password 
          this.nip = data.nip
        }else{
          this.kode_sekolah = null
          this.password = null,
          this.nip = null
        }
    },
    clearSession(){
        this.state.Loading()
        MainLocalStorage.clear()
        this.setSession()
        setTimeout(() => {
          this.state.Success()
        }, 1000);
    }
  },
};
</script>