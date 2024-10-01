<template>
    <div class="flex justify-center">
        <div class="flex flex-col w-full md:w-1/3 h-screen">
            <main class="flex items-center justify-center">
                <div class="container pt-2">
                    <div class="flex flex-row justify-center w-full">
                        <img src="@/assets/images/forgot-password.png" alt="" class="w-22 h-22">
                    </div>
                    <div class="container flex flex-col pt-10 w-full gap-y-5">
                        <AppInputField
                            v-model="kodeSekolah"
                            type="text"
                            placeholder="Kode Sekolah"
                        />
                        <AppInputField
                            v-model="nip"
                            type="text"
                            placeholder="NIP"
                        />
                        <AppButton @click="getOtp">
                            Kirim Kode OTP
                        </AppButton>
                    </div>  
                </div>
            </main>
        </div>  
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import MainLocalStorage from '@/services/mainLocalStorage.js';
import { useAuthStore } from '@/stores/authStore.js';
import AppInputField from '@/components/components/AppInputField.vue';
import AppButton from '@/components/components/AppButton.vue';
import { useRouter } from 'vue-router';


const authStore = useAuthStore();
const router = useRouter();

const kodeSekolah = ref('');
const nip = ref('');

const getOtp = async () => {
    await authStore.getOtp({ kode_sekolah: kodeSekolah.value, nip: nip.value });
    console.log('authStore.forgotPasswordData', authStore.forgotPasswordData);
    if(authStore.forgotPasswordData.is_correct === true){
        router.push('/input-otp');
    }
}

const setSession = () => {
    const data = MainLocalStorage.getDataLogin();
    if (data) {
        kodeSekolah.value = data.kode_sekolah;
        nip.value = data.nip;
    }
}

onMounted(() => {
    setSession();
}); //



</script>