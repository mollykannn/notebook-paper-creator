<script setup>
defineProps({
  placeholder: String,
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: '',
  },
  updateValue: Function,
})
</script>

<template>
  <n-checkbox :checked="modelValue" v-bind="{ onUpdateChecked: updateValue }">
    {{ placeholder }}
  </n-checkbox>
</template>
