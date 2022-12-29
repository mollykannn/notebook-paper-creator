export let lineSetting = reactive({
  lineRef: true,
  line: computed({
    get: () => lineSetting.lineRef,
    set: val => {
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
        (paperSetting.height - headerSetting.height - paperSetting.top - paperSetting.bottom - headerLineSetting.height) /
          Math.round(lineSetting.number) ?? 0
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

export const lineColumn = reactive({
  basic: [
    { type: 'checkbox', label: '', name: 'line', placeholder: 'Line:' },
    { type: 'number', label: 'Height', name: 'underlineHeight', step: 0.05, disabled: computed(() => !lineSetting.lineRef) },
    { type: 'number', label: 'Number', name: 'number', step: 1 },
    { type: 'color', label: 'Color', name: 'underlineColor' },
  ],
  details: [
    { type: 'number', label: 'Left Space', name: 'left' },
    { type: 'number', label: 'Right Space', name: 'right' },
    { type: 'select', label: 'Style', options: optionLabel('borderStyle'), name: 'underlineStyle' },
  ],
})
