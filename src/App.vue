<script setup>
import html2canvas from 'html2canvas'
import useMode from '@/assets/js/isDark.js'
import { paperColumn, paperSetting } from '@/assets/js/form/paper.js'
import { headerColumn, headerContentColumn, headerSetting } from '@/assets/js/form/header.js'
import { bottomLineColumn, headerLineSetting } from '@/assets/js/form/headerLine.js'
import { lineColumn, lineSetting } from '@/assets/js/form/line.js'
import { dotColumn, dotSetting } from '@/assets/js/form/dot.js'

const isDark = ref(useMode())
const paper = ref(null)
const exportImage = async action => {
  let canvas = await html2canvas(paper.value, {
    scale: paperSetting.quality,
  })
  const imgData = canvas.toDataURL('image/png', 1)
  if (action === 'png') {
    var a = document.createElement('a')
    a.href = imgData
    a.download = 'paper.png'
    a.click()
  } else {
    let paperDetails = paperSize.find(e => e.name === paperSetting.size)
    exportPDF(imgData, paperDetails.inchWidth, paperDetails.inchHeight)
  }
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
      <div class="leftColumn">
        <div class="settingColumn" title="Paper">
          <baseForm :columns="paperColumn.basic" :data="paperSetting" />
          <moreColumn>
            <baseForm :columns="paperColumn.details" :data="paperSetting" />
          </moreColumn>
        </div>
        <div class="settingColumn" title="Content">
          <div class="gridColumn">
            <baseForm :columns="lineColumn.basic" :data="lineSetting" />
            <moreColumn>
              <baseForm :columns="lineColumn.details" :data="lineSetting" />
            </moreColumn>
          </div>
          <div class="gridColumn">
            <baseForm :columns="dotColumn.basic" :data="dotSetting" />
            <moreColumn>
              <baseForm :columns="dotColumn.details" :data="dotSetting" />
            </moreColumn>
          </div>
        </div>
        <div class="settingColumn" title="Header">
          <span class="description">* 0.1 = 1px (eg: 4 = 40px)</span>
          <div class="flexColumn flex-100">
            <div class="gridColumn">
              <baseForm :columns="headerColumn.basic" :data="headerSetting" />
              <moreColumn>
                <baseForm :columns="headerColumn.details" :data="headerSetting" />
              </moreColumn>
            </div>
            <div class="gridColumn">
              <baseForm :columns="bottomLineColumn.basic" :data="headerLineSetting" />
              <moreColumn>
                <baseForm :columns="bottomLineColumn.details" :data="headerLineSetting" />
              </moreColumn>
            </div>
          </div>
          <div class="headerColumn flex-100">
            <h3 class="title">Column:</h3>
            <div v-for="(data, index) in headerSetting.column" class="details" v-bind:key="data.title">
              <baseForm :columns="headerContentColumn(index).basic" :data="data" />
              <moreColumn>
                <baseForm :columns="headerContentColumn(index).details" :data="data" />
              </moreColumn>
            </div>
          </div>
        </div>
        <div class="submitColumn mb-4">
          <button @click="exportImage('png')" class="flex-1">Export to PNG</button>
          <button @click="exportImage('pdf')" class="flex-1">Export to PDF</button>
        </div>
      </div>
      <div class="rightColumn" :style="{ overflow: 'auto' }">
        <div class="paperColumn">
          <div class="paperBorder" v-bind:style="paperSetting.borderCSS">
            <div class="paper" ref="paper" v-bind:style="paperSetting.CSS">
              <div class="header" :style="headerSetting.CSS">
                <div
                  v-for="data in headerSetting.column"
                  class="headerColumn"
                  v-bind:style="headerSetting.headerColumnCSS(data)"
                  v-bind:key="data.text"
                >
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
