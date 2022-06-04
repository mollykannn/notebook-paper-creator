<script setup>
import { ref } from 'vue'
import baseForm from '@/components/baseForm.vue'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

import useMode from '@/assets/js/isDark.js'
import { paperSize } from '@/assets/js/setting.js'
import { paperColumn, paperSetting } from '@/assets/js/form/paper.js'
import { headerColumn, headerContentColumn, headerSetting } from '@/assets/js/form/header.js'
import { bottomLineColumn, headerLineSetting } from '@/assets/js/form/headerLine.js'
import { lineColumn, lineSetting } from '@/assets/js/form/line.js'
import { dotColumn, dotSetting } from '@/assets/js/form/dot.js'

const isDark = ref(useMode())
const paper = ref(null)
const exportImage = (action) => {
  html2canvas(paper.value, {
    scale: 4,
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png', 1)
    if (action === 'png') {
      var a = document.createElement('a')
      a.href = imgData
      a.download = 'paper.png'
      a.click()
    } else {
      let paperDetails = paperSize.find((e) => e.name === paperSetting.size)
      const pdf = new jsPDF({
        orientation: paperDetails.inchWidth >= paperDetails.inchHeight ? 'l' : 'p',
        unit: 'in',
        format: [paperDetails.inchWidth, paperDetails.inchHeight],
      })
      pdf.addImage(imgData, 'PNG', 0, 0, paperDetails.inchWidth, paperDetails.inchHeight)
      pdf.save('paper.pdf')
    }
  })
}
</script>
<template>
  <div class="container">
    <div class="switch-column">
      <label class="switch">
        <input type="checkbox" v-on:click="isDark = !isDark" :checked="isDark" />
        <span class="slider"></span>
      </label>
    </div>
    <h1 class="title mb-4">Notebook Paper Creator</h1>
    <div class="content">
      <div class="flex-1">
        <div class="settingColumn" title="paper">
          <baseForm :columns="paperColumn" :data="paperSetting" />
        </div>
        <div class="settingColumn" title="Content">
          <h3>Line:</h3>
          <baseForm :columns="lineColumn" :data="lineSetting" />
          <h3>Dot / Straight:</h3>
          <baseForm :columns="dotColumn" :data="dotSetting" />
        </div>
      </div>

      <div class="flex-2 settingColumn" title="Header">
        <span class="description">* 0.1 = 1px (eg: 4 = 40px)</span>
        <baseForm :columns="headerColumn" :data="headerSetting" />
        <div class="headerColumn">
          <h3 class="title">Column:</h3>
          <div v-for="(data, index) in headerSetting.column" class="details" v-bind:key="data.title">
            <h4 :class="index == 0 ? 'firstTitle' : ''">{{ data.title }}</h4>
            <baseForm :columns="headerContentColumn(index)" :data="data" />
          </div>
        </div>
        <h3>Bottom Line:</h3>
        <baseForm :columns="bottomLineColumn" :data="headerLineSetting" />
      </div>
      <div class="submitColumn mb-4">
        <button @click="exportImage('png')" class="flex-1">Export to PNG</button>
        <button @click="exportImage('pdf')" class="flex-1">Export to PDF</button>
      </div>
    </div>
    <hr class="mb-6" />
    <div class="paperColumn mb-6">
      <div class="paperBorder" v-bind:style="paperSetting.borderCSS">
        <div class="paper" ref="paper" v-bind:style="paperSetting.CSS">
          <div class="header" :style="headerSetting.CSS">
            <div v-for="data in headerSetting.column" class="headerColumn" v-bind:style="headerSetting.headerColumnCSS(data)" v-bind:key="data.text">
              {{ data.text }}
              <span :style="headerSetting.headerSpanCSS(data)"></span>
            </div>
          </div>
          <div class="header-line" :style="headerLineSetting.CSS"></div>
          <div v-bind:style="lineSetting.SpaceCSS">
            <div v-for="index in Math.round(lineSetting.number)" v-bind:key="index" class="line" :style="lineSetting.CSS">
              <span v-for="dotIndex in Math.round(dotSetting.number)" v-bind:key="dotIndex" :style="dotSetting.CSS"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      Created by <a href="https://github.com/mollykannn">Molly Kan</a>
      <br />
      Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </footer>
  </div>
</template>
