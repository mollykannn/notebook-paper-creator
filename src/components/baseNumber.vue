<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  updateValue: Function,
  step: Number,
  disabled: Boolean,
})
</script>

<template>
  <NInputNumber
    v-bind="{ onUpdateValue: updateValue }"
    v-model="modelValue"
    :value="modelValue"
    :style="{ flex: '0 0 100%' }"
    min="0"
    :step="step"
    :disabled="disabled"
  />
</template>
