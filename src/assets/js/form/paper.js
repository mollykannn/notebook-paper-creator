import { computed, reactive } from "vue";
import { paperSize, option } from '@/assets/js/setting.js'
import { headerSetting } from '@/assets/js/form/header.js'
import { headerLineSetting } from '@/assets/js/form/headerLine.js'
import { lineSetting } from '@/assets/js/form/line.js'
import { dotSetting } from '@/assets/js/form/dot.js'

export const paperColumn = [
  { type: 'radio', label: 'Fast Select', option: option.fastStyle, name: 'style' },
  { type: 'hr' },
  {
    type: 'selectbox',
    label: 'Size',
    name: 'size',
    option: paperSize.reduce((oldVar, newVar) => ((oldVar[newVar.name] = newVar.name), oldVar), {}),
  },
  { type: 'number', label: 'Top Space', name: 'top' },
  { type: 'number', label: 'Bottom Space', name: 'bottom' },
]
export let paperSetting = reactive({
  styleRef: 'lineAndDot',
  style: computed({
    get: () => paperSetting.styleRef,
    set: (val) => {
      paperSetting.styleRef = val
      dotSetting.style = option.paper.find((e) => e.type == val).style
      lineSetting.line = option.paper.find((e) => e.type == val).line
    },
  }),
  top: 2,
  bottom: 2,
  sizeRef: 'GoodNotes Standard',
  size: computed({
    get: () => paperSetting.sizeRef,
    set: (val) => {
      let data = paperSize.find((e) => e.name == val)
      paperSetting.sizeRef = val
      paperSetting.top = data['paperTop']
      paperSetting.bottom = data['paperBottom']
      headerSetting.left = data['headerLeft']
      headerSetting.right = data['headerRight']
      headerSetting.height = data['headerHeight']
      headerLineSetting.height = data['headerLineHeight']
      headerLineSetting.headerLine = data['headerLine']
      lineSetting.left = data['lineLeft']
      lineSetting.right = data['lineRight']
      lineSetting.number = data['lineNumber']
      dotSetting.number = data['dotNumber']
    },
  }),
  width: computed(() => paperSize.find((e) => e.name === paperSetting.size).width),
  height: computed(() => paperSize.find((e) => e.name === paperSetting.size).height),
  BorderCSS: computed(() => {
    return {
      width: `${paperSetting.width + 0.2}rem`,
    }
  }),
  CSS: computed(() => {
    return {
      width: `${paperSetting.width}rem`,
      height: `${paperSetting.height}rem`,
      'padding-top': `${paperSetting.top}rem`,
      'padding-bottom': `${paperSetting.bottom}rem`,
    }
  })
})