export const paperColumn = {
  basic: [
  {
    type: 'select',
    label: 'Size',
    name: 'size',
    options: paperSize.map(e => ({ label: e.name, value: e.name })),
  },
  { type: 'number', label: 'Quality', name: 'quality', step: 1, max: 8}],
  details: [
    { type: 'number', label: 'Top Space', name: 'top' },
    { type: 'number', label: 'Bottom Space', name: 'bottom' },
  ]
}
export let paperSetting = reactive({
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
      headerLineSetting.headerLine = data['headerLine']
      headerLineSetting.height = data['headerLineHeight']

      lineSetting.left = data['lineLeft']
      lineSetting.right = data['lineRight']
      lineSetting.number = data['lineNumber']
      dotSetting.number = data['dotNumber']
    },
  }),
  quality: 6,
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