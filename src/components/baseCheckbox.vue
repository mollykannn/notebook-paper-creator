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
  <n-checkbox v-model="modelValue" :checked="modelValue" v-bind="{ onUpdateChecked: updateValue }">
    {{ placeholder }}
  </n-checkbox>
</template>
