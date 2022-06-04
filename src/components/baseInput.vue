<script setup>
defineProps({
  label: String,
  id: String,
  placeholder: String,
  lastText: String,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  let val = event.target.value
  if (event.target.type === 'checkbox') val = event.target.checked
  emit('update:modelValue', val)
}
</script>

<template>
  <div class="inputColumn">
    <label v-if="label" :for="id">{{ label }}:</label>
    <input v-bind="{ ...$attrs, onInput: updateValue }" :id="id" :placeholder="placeholder" :value="modelValue" :checked="modelValue" />{{ lastText }}
  </div>
</template>
