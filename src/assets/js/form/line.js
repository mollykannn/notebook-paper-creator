import { computed, reactive } from 'vue'
import { option } from '@/assets/js/setting.js'
import { paperSetting } from '@/assets/js/form/paper.js'
import { headerSetting } from '@/assets/js/form/header.js'
import { headerLineSetting } from '@/assets/js/form/headerLine.js'

export const lineColumn = computed(() => [
  { type: 'checkbox', label: 'Show', name: 'line' },
  { type: 'number', label: 'Left Space', name: 'left' },
  { type: 'number', label: 'Right Space', name: 'right' },
  { type: 'number', label: 'Number of Line', name: 'number' },
  { type: 'number', label: 'Line Height', name: 'underlineHeight', disabled: !lineSetting.line },
  { type: 'selectbox', label: 'Line Style', option: option.borderStyle, name: 'underlineStyle' },
  { type: 'color', label: 'Line Color', name: 'underlineColor' },
])

export let lineSetting = reactive({
  lineRef: true,
  line: computed({
    get: () => lineSetting.lineRef,
    set: (val) => {
      lineSetting.lineRef = val
      lineSetting.underlineHeight = val ? 0.05 : 0
    },
  }),
  number: 23,
  underlineHeight: 0.05,
  underlineStyle: 'solid',
  underlineColor: '#a4a4a4',
  left: 2,
  right: 2,
  CSS: computed(() => {
    return {
      display: 'flex',
      height: `${
        ((paperSetting.height -
          headerSetting.height -
          paperSetting.top -
          paperSetting.bottom -
          headerLineSetting.height) /
        Math.round(lineSetting.number)) ?? 0
      }rem`,
      'border-bottom': `${lineSetting.underlineHeight}rem`,
      'border-bottom-color': lineSetting.underlineColor,
      'border-bottom-style': lineSetting.underlineStyle,
    }
  }),
  SpaceCSS: computed(() => {
    return {
      'margin-left': `${lineSetting.left}rem`,
      'margin-right': `${lineSetting.right}rem`,
    }
  }),
})
