<script setup>
defineProps({
  option: Object,
  label: String,
  id: String,
  modelValue: {
    type: [String, Number],
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="inputColumn">
    <label v-if="label" :for="id">{{ label }}:</label>
    <select v-bind="{ ...$attrs, onInput: updateValue }" :value="modelValue">
      <option v-for="(data, index) in option" :value="index" v-bind:key="index">{{ data }}</option>
    </select>
  </div>
</template>
