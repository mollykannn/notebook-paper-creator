<script setup>
defineProps({
  option: Array,
  modelValue: {
    type: [String, Number],
    default: '',
  },
  updateValue: Function,
})
</script>

<template>
  <n-select v-model="modelValue" :value="modelValue" v-bind="{ onUpdateValue: updateValue }" :options="option" />
</template>
