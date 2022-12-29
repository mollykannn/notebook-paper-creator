export let headerSetting = reactive({
  headerRef: true,
  header: computed({
    get: () => headerSetting.headerRef,
    set: val => {
      headerSetting.headerRef = val
      headerSetting.height = val ? 3 : 0
    },
  }),
  height: 4,
  underlineHeight: 0.08,
  underlineStyle: 'solid',
  underlineColor: '#888888',
  bottom: 0.3,
  left: 2,
  right: 2,
  columnClass: index => (index == 0 ? 'firstLabel' : ''),
  column: [
    {
      title: 'Left',
      visibility: false,
      width: 60,
      align: 'left',
      text: 'Title:',
      fontSize: 1.2,
      fontColor: '#888888',
      textLine: 20,
      borderColor: '#888888',
      borderStyle: 'solid',
      borderHeight: 0.08,
    },
    {
      title: 'Right',
      visibility: false,
      width: 40,
      align: 'right',
      text: 'Date:',
      fontSize: 1.2,
      fontColor: '#888888',
      textLine: 12,
      borderColor: '#888888',
      borderStyle: 'solid',
      borderHeight: 0.08,
    },
  ],
  headerColumnCSS: data => {
    return {
      visibility: data.visibility ? 'visible' : 'hidden',
      width: `${data.width}%`,
      color: data.fontColor,
      'font-size': `${data.fontSize}rem`,
      'text-align': data.align,
    }
  },
  headerSpanCSS: data => {
    return {
      width: `${data.textLine}rem`,
      'border-bottom': `${data.borderHeight}rem`,
      'border-bottom-color': data.borderColor,
      'border-bottom-style': data.borderStyle,
    }
  },
  CSS: computed(() => {
    return {
      display: headerSetting.header ? 'flex' : 'none',
      height: `${headerSetting.height}rem`,
      'padding-left': `${headerSetting.left}rem`,
      'padding-right': `${headerSetting.right}rem`,
      'padding-bottom': `${headerSetting.bottom}rem`,
      'border-bottom': `${headerSetting.underlineHeight}rem`,
      'border-bottom-color': headerSetting.underlineColor,
      'border-bottom-style': headerSetting.underlineStyle,
    }
  }),
})

export const headerContentColumn = index => ({
  basic: [
    { type: 'checkbox', label: '', name: 'visibility', placeholder: headerSetting.column[index].title, class: headerSetting.columnClass(index) },
    { type: 'number', label: 'Width', name: 'width', class: headerSetting.columnClass(index), lastText: '%' },
    { type: 'text', label: 'Text', name: 'text', class: headerSetting.columnClass(index) },
  ],
  details: [
    { type: 'select', label: 'Align', options: optionLabel('align'), name: 'align', class: headerSetting.columnClass(index) },
    { type: 'number', label: 'Size', name: 'fontSize', class: headerSetting.columnClass(index) },
    { type: 'color', label: 'Color', name: 'fontColor', class: headerSetting.columnClass(index) },
    { type: 'number', label: 'Line Width', name: 'textLine', class: headerSetting.columnClass(index) },
    { type: 'number', label: 'Line Height', name: 'borderHeight', class: headerSetting.columnClass(index), step: 0.01 },
  ],
})

export const headerColumn = reactive({
  basic: [
    { type: 'checkbox', label: '', name: 'header', placeholder: 'Header:' },
    { type: 'number', label: 'Height', name: 'height', disabled: computed(() => !headerSetting.headerRef) },
    { type: 'color', label: 'Color', name: 'underlineColor' },
  ],
  details: [
    { type: 'number', label: 'Bottom Space', name: 'bottom' },
    { type: 'number', label: 'Left Space', name: 'left' },
    { type: 'number', label: 'Right Space', name: 'right' },
    { type: 'number', label: 'Line Height', name: 'underlineHeight', step: 0.01 },
    { type: 'select', label: 'Style', options: optionLabel('borderStyle'), name: 'underlineStyle' },
  ],
})
