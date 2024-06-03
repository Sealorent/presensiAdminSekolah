<script setup>
import { RouterView } from 'vue-router'
import StateComponent from '@/components/StateComponent.vue';
import AlertComponent from '@/components/GlobalAlertComponent.vue';
</script>

<template>
  <div id="app">
    <StateComponent />
    <AlertComponent />
    <div class="relative z-0">
      <RouterView />
    </div>
  </div>
</template>


