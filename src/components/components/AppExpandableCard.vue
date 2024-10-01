<template>
  <div class="border border-gray-200 rounded-lg mb-4 overflow-hidden">
    <div 
      @click="toggleContent" 
      class="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
    >
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <span class="text-sm transition-transform duration-200" :class="{ 'transform rotate-180': isExpanded }">
        ▼
      </span>
    </div>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isExpanded" class="p-4">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppExpandableCard',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleContent() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>