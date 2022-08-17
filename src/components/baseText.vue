<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  updateValue: Function,
  disabled: Boolean
})
</script>

<template>
  <NInput
    v-bind="{ onInput: updateValue }"
    v-model="modelValue"
    :value="modelValue"
    :style="{ flex: '0 0 100%' }"
    :disabled="disabled"
  />
</template>
