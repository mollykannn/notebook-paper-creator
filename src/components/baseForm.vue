<script setup>
const AsyncCheckbox = defineAsyncComponent(() => import('./baseCheckbox.vue'))
const AsyncSelectbox = defineAsyncComponent(() => import('./baseSelectbox.vue'))
const AsyncColor = defineAsyncComponent(() => import('./baseColor.vue'))
const AsyncRadio = defineAsyncComponent(() => import('./baseRadio.vue'))
const AsyncNumber = defineAsyncComponent(() => import('./baseNumber.vue'))
const AsyncText = defineAsyncComponent(() => import('./baseText.vue'))

defineProps({
  columns: Object,
  data: Object,
})
</script>

<template>
  <n-form class="basicFrom" ref="basicFrom" :model="data" label-placement="left" label-width="auto">
    <n-grid cols="1 s:12 m:12 l:12 xl:12" :x-gap="0" responsive="screen">
      <template v-for="column in columns" :key="column.name">
        <n-form-item-gi :label="column.label" :show-label="column.label != ''" :path="column.name" v-if="!column.hidden" :span="column.span ?? 12">
          <template v-if="column.type == 'text'">
            <AsyncText
              v-model="data[column.name]"
              :updateValue="val => (data[column.name] = val)"
              :disabled="column?.disabled"
            />
          </template>
          <template v-if="column.type == 'number'">
            <AsyncNumber
              v-model="data[column.name]"
              :updateValue="val => (data[column.name] = val)"
              :disabled="column?.disabled"
              :step="column.step ?? 0.1"
              :max="column.max"
            />
          </template>
          <template v-else-if="column.type == 'radio'">
            <AsyncRadio v-model="data[column.name]" :updateValue="val => (data[column.name] = val)" :option="column.option" />
          </template>
          <template v-else-if="column.type == 'color'">
            <AsyncColor v-model="data[column.name]" :updateValue="val => (data[column.name] = val)" />
          </template>
          <template v-else-if="column.type == 'selectbox'">
            <AsyncSelectbox v-model="data[column.name]" :updateValue="val => (data[column.name] = val)" :option="column.option" />
          </template>
          <template v-else-if="column.type == 'checkbox'">
            <AsyncCheckbox v-model="data[column.name]" :updateValue="val => (data[column.name] = val)" :placeholder="column.placeholder" />
          </template>
          <template v-else-if="column.type == 'title'">
            <h3>{{ column.label }}</h3>
          </template>
        </n-form-item-gi>
      </template>
    </n-grid>
  </n-form>
</template>
