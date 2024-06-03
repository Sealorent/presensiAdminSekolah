<template>
    <div class="flex justify-center">
        <div class="flex flex-col items-center justify-center md:w-1/3 w-full h-screen">
            <HeaderMenusComponent :title="title" />  
            <div class="flex flex-col flex-grow pt-2">
                <p class="text-center">Batas Waktu Absen 60 Detik</p>
                <p class="text-center">Setelah itu Halaman akan Tertutup otomatis</p>
                <div class="flex flex-row items-center pt-2 mx-4 gap-x-2">
                    <font-awesome-icon :icon="['far', 'clock']" class="text-[20px]" />
                    <p>{{ currentTime }}</p>
                </div>
                <div class="flex flex-row items-center pt-2 mx-4 gap-x-2">
                    <font-awesome-icon :icon="['fas', 'street-view']" class="text-[20px]" />
                    <p>{{ selectedLocation.lokasi }}</p>
                </div>
                <div class="pt-2 text-center">
                    <div  class="container flex flex-col items-center justify-center w-40 h-40 bg-primaryColors rounded-xl">
                        
                        <!-- <input
                        ref="fileInput"
                        type="file"
                        accept="image/*"
                        @change="handleFileInputChange"
                        hidden
                        /> -->
                        <!-- <font-awesome-icon :icon="['fas', 'camera']" class="text-[40px] text-white" v-if="selectedImage == null" />
                        <p class="text-white font-mulish" v-if="selectedImage == null">Ambil Foto !</p> -->
                        <img :src="selectedImage" alt="" v-if="selectedImage !== null" style="height: 100%; width: 100%;">
                        <video v-else ref="video"  class="w-full h-full" autoplay></video>    
                    </div>
                    <button @click="captureFrameFromVideo" class="mt-2 text-white btn bg-primaryColors">
                        Ambil Foto
                    </button>
                </div>
                <div class="flex flex-col items-center justify-center pt-2 gap-y-2">
                    <input type="text" placeholder="Catatan" v-model="keterangan" class="w-full max-w-xs input input-bordered" />
                    <button @click="submit" class="text-white btn bg-primaryColors">Kirim Absen <span><Timer/></span></button>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';
import { useAbsentStore } from '@/stores/absentStore.js'
import HeaderMenusComponent from '@/components/HeaderMenusComponent.vue';
import MainLocalStorage from '@/services/mainLocalStorage.js';
import Timer from "@/components/TimerComponent.vue";

export default {
    name: 'ArrivalTimeView',
    components: {
        HeaderMenusComponent,
        Timer
    },
    data() {
        return {
            state : inject('state'),
            absentSore : useAbsentStore(),
            title: 'Absen Datang',
            selectedLocation : MainLocalStorage.getSelectedLocation(),
            currentTime: '',
            selectedImage: null,
            fileImage : null,
            keterangan : '',
        }
    },
    created() {
        this.updateTime();
        setInterval(this.updateTime, 1000);
        this.setCamera();
    },
    methods : {
        setCamera(){
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    this.$refs.video.srcObject = stream;
                })
                .catch(error => {
                    console.error('Error accessing webcam:', error);
                });
        },
        async captureFrameFromVideo() {
            const videoElement = this.$refs.video;
            
            if (!videoElement) {
                return;
            }
            
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;

            const context = canvas.getContext('2d');
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
       
            const capturedImageBlob = await new Promise((resolve) => {
                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/jpeg'); // Change to 'image/png' if needed
            });

            // Set the captured image as the fileImage property 
            this.fileImage = new File([capturedImageBlob], 'captured_image.jpg', { type: 'image/jpeg' }); // Adjust the filename and type

            // Optionally, set the selectedImage to display the captured image
            this.selectedImage = URL.createObjectURL(capturedImageBlob);
        },
        updateTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");

            this.currentTime = `${hours}:${minutes}:${seconds}`;
        },
        handleFileInputClick() {
            // Trigger the click event on the file input
            this.$refs.fileInput.click();
        },
        handleFileInputChange(event) {
            const file = event.target.files[0];
            this.fileImage = file;
            if (file) {
                this.selectedImage = URL.createObjectURL(file);
            }
            // Do something with the file (e.g., upload it, display it, etc.)
        },
        async submit(){
            if(this.fileImage == null){
                this.$alertStore.showAlert('danger', 'Lengkapi Data Absen !');
            }else{
                this.keterangan = 'Hadir';
                this.state.Loading()
                await this.absentSore.present({router: this.$router, image : this.fileImage, keterangan: this.keterangan, lokasi : this.selectedLocation });
            }
        }

    }
}
</script>