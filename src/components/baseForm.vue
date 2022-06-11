<script setup>
import baseInput from './baseInput.vue'
import baseSelectbox from './baseSelectbox.vue'
import baseRadio from './baseRadio.vue'

defineProps({
  columns: Object,
  data: [String, Number],
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  let val = event.target.value
  if (event.target.type === 'checkbox') val = event.target.checked
  emit('update:modelValue', val)
}
</script>

<template>
  <template v-if="['number', 'text', 'checkbox', 'color', 'radio', 'selectbox'].includes(columns.type)">
    <component
      :is="columns.type == 'radio' ? baseRadio : ['number', 'text', 'checkbox', 'color'].includes(columns.type) ? baseInput : baseSelectbox"
      :type="columns.type == 'selectbox' ? '' : columns.type"
      :label="columns.label"
      :class="columns.class"
      :disabled="columns?.disabled"
      :option="columns.option"
      :lastText="columns.lastText"
      :step="columns.step ?? 0.1"
      min="0"
      v-bind="{ ...$attrs, onInput: updateValue }"
      :value="data"
    />
  </template>
  <template v-else-if="columns.type == 'hr'">
    <hr class="mb-2" />
  </template>
  <template v-else-if="columns.type == 'title'">
    <h3>{{ columns.label }}</h3>
  </template>
</template>
