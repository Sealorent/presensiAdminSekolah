<template>
    <div class="flex justify-center">
        <div class="flex flex-col w-full md:w-1/3 h-screen">
            <main class="flex items-center justify-center">
                <div class="container pt-2">
                    <div class="flex flex-row justify-center w-full">
                        <img src="@/assets/images/input-otp.webp" alt="" class="w-22 h-22">
                    </div>
                    <div class="container flex flex-col pt-10 w-full gap-y-5">
                        <p class="font-mulish text-center">Masukkan  {{ data.message }} </p>
                        <VOtpInput
                            input-classes="otp-input"
                            :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
                            separator="-"
                            inputType="letter-numeric"
                            :num-inputs="6"
                            v-model:value="otpCode"
                            :should-auto-focus="true"
                            :should-focus-order="true"
                            @on-change="handleOnChange"
                            @on-complete="handleOnComplete"
                            :placeholder="['*', '*', '*', '*', '*', '*']"
                        />
                        <!-- <AppButton @click="submitOtp">
                            Verifikasi Otp
                        </AppButton> -->
                    </div>  
                </div>
            </main>
        </div>  
    </div>
</template>

<style>
.otp-input {
  width: 100%;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>

<script>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore.js';
import { useRouter } from 'vue-router'; // Import useRouter
import VOtpInput from "vue3-otp-input";

export default {
  name: 'InputOtpView',
  components: {
    VOtpInput,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const otpCode = ref('');
    const data = ref(authStore.forgotPasswordData);

    // Mounting to check if data exists
    onMounted(() => {
      if (!data.value.secret) {
        router.push('/forgot-password');
      }
    });

    const handleOnChange = (value) => {
      otpCode.value = value;
    };

    const handleOnComplete = (value) => {
        authStore.submitOtp({ 
            router : router,
            kode_sekolah : data.value.kode_sekolah, 
            nip : data.value.nis, 
            codeOtp : value,
         });
    };

    return {
      otpCode,
      data,
      handleOnChange,
      handleOnComplete,
    };
  },
};
</script>
