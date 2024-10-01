<template>
  <div class="flex flex-col">
    <!-- Display label if provided -->
    <label v-if="label" class="mb-1 text-gray-600 font-semibold font-mulish">{{ label }}</label>
    
    <input 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      :type="type" 
      :placeholder="placeholder"
      :required="required"
      class="px-2 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:border-green-600 font-mulish"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInputField',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text' // Default to text input
    },
    label: {
      type: String,
      default: '' // Label is optional
    },
    required: {
      type: Boolean,
      default: false // Control whether the input is required
    }
  }
}
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
