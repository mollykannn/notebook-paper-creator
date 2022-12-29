<script setup>
defineProps({
  option: Object,
  modelValue: {
    type: [String, Number],
    default: '',
  },
  updateValue: Function,
})
</script>

<template>
  <n-radio-group :value="modelValue" v-bind="{ onUpdateValue: updateValue }">
    <n-radio v-for="(data, index) in option" :value="index" v-bind:key="index" :label="data"> </n-radio>
  </n-radio-group>
</template>
