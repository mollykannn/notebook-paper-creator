import { computed, reactive } from "vue";
import { option } from '@/assets/js/setting.js'

export const bottomLineColumn = [
  { type: 'checkbox', label: 'Show', name: 'headerLine' },
  { type: 'number', label: 'Height', name: 'height' },
  { type: 'number', label: 'Underline Height', name: 'underlineHeight' },
  { type: 'selectbox', label: 'Underline Style', option: option.borderStyle, name: 'underlineStyle' },
  { type: 'color', label: 'Underline Color', name: 'underlineColor' },
]
export let headerLineSetting = reactive({
  headerLineRef: true,
  headerLine: computed({
    get: () => headerLineSetting.headerLineRef,
    set: (val) => {
      headerLineSetting.headerLineRef = val
      headerLineSetting.height = val ? 3 : 0
    },
  }),
  height: 3,
  underlineHeight: 0.08,
  underlineStyle: 'solid',
  underlineColor: '#888888',
  CSS: computed(() => {
    return {
      display: headerLineSetting.headerLine ? 'block' : 'none',
      height: `${headerLineSetting.height}rem`,
      'border-bottom': `${headerLineSetting.underlineHeight}rem`,
      'border-bottom-color': headerLineSetting.underlineColor,
      'border-bottom-style': headerLineSetting.underlineStyle,
    }
  })
})