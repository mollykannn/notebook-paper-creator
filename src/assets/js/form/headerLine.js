export const bottomLineColumn = reactive({
  basic: [
    { type: 'checkbox', label: '', name: 'headerLine', placeholder: 'Bottom Line:' },
    { type: 'number', label: 'Height', name: 'height', disabled: computed(() => !headerLineSetting.headerLineRef) },
    { type: 'color', label: 'Color', name: 'underlineColor' },
  ],
  details: [
    { type: 'number', label: 'Line Height', name: 'underlineHeight', step: 0.01 },
    { type: 'select', label: 'Style', options: optionLabel('borderStyle'), name: 'underlineStyle' },
  ],
})

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