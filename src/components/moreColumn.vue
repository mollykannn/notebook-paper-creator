<script setup>
const selected = ref('')
const more = () => {
  selected.value = selected.value == '' ? 'more' : ''
}
</script>

<template>
  <n-collapse :expanded-names="selected">
    <n-collapse-item title="" name="more">
      <template #arrow> </template>
      <slot></slot>
    </n-collapse-item>
  </n-collapse>
  <p @click="more()" class="arrowColumn">More<span :class="['arrow', { active: selected === 'more' }]"></span></p>
</template>
<style>
.arrowColumn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-left: .5rem;
  transition: .3s;
  background-color: var(--title);
  -webkit-mask: url('@/assets/images/ChevronDownOutline.svg') no-repeat center;
  mask: url('@/assets/images/ChevronDownOutline.svg') no-repeat center;
}

.arrow.active {
  rotate: 180deg;
}
</style>