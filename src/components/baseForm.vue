<script setup>
import { ref } from 'vue'
import baseInput from './baseInput.vue'
import baseSelectbox from './baseSelectbox.vue'
import baseRadio from './baseRadio.vue'

const props = defineProps({
  columns: Object,
  data: Object,
})
const datas = ref(props.data)
</script>

<template>
  <template v-for="column in columns" v-bind:key="column.label">
    <template v-if="column.type == 'radio'">
      <baseRadio :label="column.label" :option="column.option" v-model="datas[column.name]" :class="column.class" />
    </template>
    <template v-else-if="column.type == 'selectbox'">
      <baseSelectbox :label="column.label" :option="column.option" v-model="datas[column.name]" :class="column.class" />
    </template>
    <template v-else-if="['text', 'checkbox', 'color'].includes(column.type)">
      <baseInput
        :type="column.type"
        :label="column.label"
        v-model="datas[column.name]"
        :class="column.class"
        :disabled="column.disabled"
        :lastText="column.lastText"
      />
    </template>
      <template v-else-if="['number'].includes(column.type)">
      <baseInput
        :type="column.type"
        :label="column.label"
        v-model.number="datas[column.name]"
        :class="column.class"
        :disabled="column.disabled"
        :lastText="column.lastText"
        :step="column.step ?? 0.1"
      />
    </template>
    <template v-else-if="column.type == 'hr'">
      <hr class="mb-2" />
    </template>
    <template v-else-if="column.type == 'title'">
      <h3>{{ column.label }}</h3>
    </template>
  </template>
</template>
