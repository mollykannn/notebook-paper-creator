export let dotSetting = reactive({
  styleRef: 'dot',
  style: computed({
    get: () => dotSetting.styleRef,
    set: val => {
      dotSetting.styleRef = val
      dotSetting.width = dotSetting.style == 'straight' ? 0.1 : 0.2
      dotSetting.firstDot = dotSetting.style == 'straight'
      dotSetting.lastDot = dotSetting.style == 'straight'
    },
  }),
  checkboxDot: computed({
    get: () => dotSetting.number !== 0,
    set: val => {
      dotSetting.number = !val ? 0 : 15
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
        dotSetting.style == 'straight' ? 0 : (parseFloat(dotSetting.height) + parseFloat(lineSetting.underlineHeight)) / 2 ?? 0
      }rem`,
      '--dotRightPosition': `-${dotSetting.width / 2 ?? 0}rem`,
      '--firstDot': dotSetting.firstDot ? 'block' : 'none',
      '--lastDot': dotSetting.lastDot ? 'block' : 'none',
      '--dotRadius': dotSetting.style == 'straight' ? '0%' : '50%',
    }
  }),
})

export const dotColumn = reactive({
  basic: [
    { type: 'checkbox', label: '', name: 'checkboxDot', placeholder: 'Dot / Straight:' },
    { type: 'selectbox', label: 'Style', option: optionLabel('style'), name: 'style' },
    { type: 'number', label: 'Number', name: 'number', step: 1, disabled: computed(() => !dotSetting.checkboxDot) },
    { type: 'color', label: 'Color', name: 'color' },
  ],
  details: [
    { type: 'checkbox', label: 'Show first', name: 'firstDot' },
    { type: 'checkbox', label: 'Show last', name: 'lastDot' },
    { type: 'number', label: 'Width', name: 'width' },
    { type: 'number', label: 'Height', name: 'height', disabled: dotSetting.style === 'straight' },
  ],
})
