<script setup>
defineProps({
  option: Object,
  modelValue: {
    type: [String, Number],
    default: '',
  },
  value: {
    type: [String, Number],
  },
  id: String,
  label: String,
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="inputColumn radio">
    <label>{{ label }}:</label>
    <div class="display-flex flex-wrap">
      <span v-for="(data, index) in option" :value="index" v-bind:key="index" class="display-flex">
        <input type="radio" v-bind="{ ...$attrs, onInput: updateValue }" :name="id" :value="index" :checked="modelValue === index" />
        <span :for="data">{{ data }}</span>
      </span>
    </div>
  </div>
</template>
