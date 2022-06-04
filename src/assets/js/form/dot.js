import { computed, reactive } from "vue";
import { option } from '@/assets/js/setting.js'
import { lineSetting } from '@/assets/js/form/line.js'
import { paperSetting } from '@/assets/js/form/paper.js'

export const dotColumn = computed(() => [
  { type: 'selectbox', label: 'Style', option: option.style, name: 'style' },
  { type: 'checkbox', label: 'First Dot / Straight', name: 'firstDot' },
  { type: 'checkbox', label: 'Last Dot / Straight', name: 'lastDot' },
  { type: 'number', label: 'Width', name: 'width' },
  { type: 'number', label: 'Height', name: 'height', disabled: dotSetting.style === 'straight' },
  { type: 'number', label: 'Number of Dot / Straight', name: 'number', step: 1 },
  { type: 'color', label: 'Color', name: 'color' },
])
export let dotSetting = reactive({
  styleRef: 'dot',
  style: computed({
    get: () => dotSetting.styleRef,
    set: (val) => {
      dotSetting.styleRef = val
      dotSetting.width = dotSetting.style == 'none' ? 0 : dotSetting.style == 'straight' ? 0.1 : 0.2
      dotSetting.firstDot = dotSetting.style == 'straight'
      dotSetting.lastDot = dotSetting.style == 'straight'
    },
  }),
  width: 0.2,
  height: 0.2,
  number: 15,
  color: '#bfbfbf',
  firstDot: false,
  lastDot: false,
  CSS: computed(() => {
    return {
      flex: `0 0 ${(paperSetting.width - lineSetting.left - lineSetting.right) / dotSetting.number ?? 0}rem`,
      '--color': dotSetting.color,
      '--dotWidth': `${dotSetting.width}rem`,
      '--dotHeight': dotSetting.style == 'straight' ? '100%' : `${dotSetting.height}rem`,
      '--dotBottomPosition': `-${
        dotSetting.style == 'straight' ? 0 : ((dotSetting.height + lineSetting.underlineHeight) / 2) ?? 0
      }rem`,
      '--dotRightPosition': `-${(dotSetting.width / 2) ?? 0}rem`,
      '--firstDot': dotSetting.firstDot ? 'block' : 'none',
      '--lastDot': dotSetting.lastDot ? 'block' : 'none',
      '--dotRadius': dotSetting.style == 'straight' ? '0%' : '50%',
    }
  })

})