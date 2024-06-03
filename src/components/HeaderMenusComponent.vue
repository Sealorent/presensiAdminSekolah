<template>
    <header class="sticky top-0 w-full bg-primaryColors ">
        <div class="container flex flex-row items-center justify-between py-4">
            <font-awesome-icon class="text-white" icon="arrow-left" @click="this.$router.push({name :'home'})"/>
            <p class="text-center text-white font-[20px] font-mulish ">{{ title }}</p>
            <p></p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderMenusComponent',
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    }
}

</script>