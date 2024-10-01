<template>
    <button 
      @click="onClick" 
      :class="buttonClass"
      class=" h-12 text-white border-2 rounded-full"
    >
      <slot name="icon" ></slot>
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'AppButton',
    props: {
      onClick: {
        type: Function,
        default: null // Default is null if no function is passed
      },
      buttonClass: {
        type: String,
        default: 'bg-primaryColors' // Default class for button styles
      }
    }
  }
  </script>
  
  <style scoped>
  /* You can add default or additional styles here if needed */
  </style>
  