<template>
    <div class="flex justify-center">
        <div class="flex flex-col w-full md:w-1/3 h-screen">
            <main class="flex items-center justify-center">
                <div class="container pt-2">
                    <div class="flex flex-row justify-center w-full">
                        <img src="@/assets/images/forgot-password.png" alt="" class="w-18 h-18">
                    </div>
                    <form @submit.prevent="submitPassword">
                        <div class="container flex flex-col pt-10 w-full gap-y-5">
                            <PasswordContainer 
                                v-model:value="password" 
                                title="Password" 
                            />
                            
                            <PasswordContainer
                                v-model:value="confirmPassword"
                                title="Konfirmasi Password"
                            />
                            
                            <AppButton>
                                Ganti Password
                            </AppButton>
                        </div>  
                    </form>
                </div>
            </main>
        </div>  
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/authStore.js';
import { useRouter } from 'vue-router';
import AppInputField from '../../components/components/AppInputField.vue';
import AppButton from '../../components/components/AppButton.vue';
import PasswordContainer from '@/components/PasswordContainer.vue';

export default {
    name: 'ResetPasswordView',
    components: {
        AppInputField,
        AppButton,
        PasswordContainer
    },
    data(){
        return {
            password: '',
            confirmPassword: '',
            authStore: useAuthStore(),
            forgotPasswordData: useAuthStore().forgotPasswordData,
            router: useRouter()
        }
    },
    methods: {
        submitPassword() {
            if (this.password !== this.confirmPassword) {
                this.$toast.error('Password tidak sama');
                return;
            }

            

            // Call the resetPassword method from the authStore
            this.authStore.resetPassword({ 
                router: this.router,
                kode_sekolah: this.forgotPasswordData.kode_sekolah, 
                nip: this.forgotPasswordData.nis, 
                password: this.password,
            })
        }
    }
}
</script>
