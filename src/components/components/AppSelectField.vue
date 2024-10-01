<template>
  <select 
    class="select border-gray-500 ring-0 focus:ring-0 focus:outline-none" 
    v-model="selectedValue" 
    @change="handleChange"
    :required="required"
  >
    <option disabled value="">{{ placeholder }}</option>
    <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'AppDropdownField',
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Pilih opsi'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedValue: this.value
    }
  },
  methods: {
    handleChange() {
      this.$emit('input', this.selectedValue)
    }
  }
}
</script>