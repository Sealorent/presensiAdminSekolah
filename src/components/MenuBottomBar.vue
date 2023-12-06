<template>
    <!-- <div class="grid grid-cols-3 btm-nav"> -->
    <div class="flex justify-center">
        <div class="md:w-1/2 lg:w-1/3 lg:m-auto md:m-auto w-full flex flex-row btm-nav">

            <button class="text-info" v-for="item in menu" :key="item" @click="this.$router.push({name:item.route})" :class="routeName == item.route ? 'active' : ' ' ">
                <font-awesome-icon :icon="['fas', item.icon]" class="text-lg" />
                <p class="text-[10px] uppercase">{{ item.name }}</p>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuBottomBar',
    data() {
        return {
            routeName : null,
            menu : [
                { route : 'home', icon : 'house', name : 'Beranda' },
                { route : 'summary', icon : 'calendar-check' , name : 'Presensi' },
                { route : 'profil', icon : 'circle-user' , name : 'Profil' },
            ],
        }
    },
    methods: {
        setActive(index) {
            this.active = index;
        }
    },
    mounted(){
        this.routeName = this.$route.name
    }
}
</script>