<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: '',
  },
  updateValue: Function,
})
</script>

<template>
  <n-color-picker :value="modelValue" v-bind="{ onUpdateValue: updateValue }" :show-preview="true" :show-alpha="false" />
</template>
