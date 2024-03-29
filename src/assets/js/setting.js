export const optionLabel = action => {
  return Object.entries(option[action]).map(([value, label]) => ({ label: label, value: value }))
}
export const option = {
  borderStyle: {
    dotted: 'Dotted',
    dashed: 'Dashed',
    solid: 'Solid',
    double: 'Double',
  },
  align: { left: 'Left', center: 'Center', right: 'Right' },
  style: { dot: 'Dot', straight: 'Straight' },
}
export const paperSize = [
  {
    name: 'GoodNotes Standard',
    width: 45.504,
    height: 58.845,
    inchWidth: 6.32,
    inchHeight: 8.17,
    paperTop: 2,
    paperBottom: 2,
    headerLeft: 2,
    headerRight: 2,
    headerHeight: 4,
    headerLine: true,
    headerLineHeight: 3,
    lineLeft: 2,
    lineRight: 2,
    lineNumber: 23,
    dotNumber: 15,
  },
  {
    name: 'GoodNotes Standard (landscape)	',
    width: 65.088,
    height: 40.68,
    inchWidth: 9.04,
    inchHeight: 5.65,
    paperTop: 2,
    paperBottom: 2,
    headerLeft: 2,
    headerRight: 2,
    headerHeight: 4,
    headerLine: true,
    headerLineHeight: 3,
    lineLeft: 2,
    lineRight: 2,
    lineNumber: 13,
    dotNumber: 25,
  },
  {
    name: 'A7',
    width: 20.976,
    height: 29.764,
    inchWidth: 2.91,
    inchHeight: 4.13,
    paperTop: 1,
    paperBottom: 1,
    headerLeft: 1,
    headerRight: 1,
    headerHeight: 2,
    headerLine: false,
    headerLineHeight: 0,
    lineLeft: 1,
    lineRight: 1,
    lineNumber: 0,
    dotNumber: 0,
  },
  {
    name: 'A6',
    width: 29.764,
    height: 41.953,
    inchWidth: 4.13,
    inchHeight: 5.83,
    paperTop: 3,
    paperBottom: 1,
    headerLeft: 1,
    headerRight: 1,
    headerHeight: 2,
    headerLine: false,
    headerLineHeight: 0,
    lineLeft: 1,
    lineRight: 1,
    lineNumber: 17,
    dotNumber: 12,
  },
  {
    name: 'A5',
    width: 41.953,
    height: 59.528,
    inchWidth: 5.83,
    inchHeight: 8.27,
    paperTop: 2,
    paperBottom: 2,
    headerLeft: 2,
    headerRight: 2,
    headerHeight: 4,
    headerLine: true,
    headerLineHeight: 3,
    lineLeft: 2,
    lineRight: 2,
    lineNumber: 20,
    dotNumber: 15,
  },
  {
    name: 'A4',
    width: 59.528,
    height: 84.189,
    inchWidth: 8.27,
    inchHeight: 11.69,
    paperTop: 2,
    paperBottom: 2,
    headerLeft: 2,
    headerRight: 2,
    headerHeight: 6,
    headerLine: true,
    headerLineHeight: 4,
    lineLeft: 2,
    lineRight: 2,
    lineNumber: 27,
    dotNumber: 15,
  },
  {
    name: 'A3',
    width: 84.189,
    height: 119.055,
    inchWidth: 11.69,
    inchHeight: 16.54,
    paperTop: 4,
    paperBottom: 4,
    headerLeft: 4,
    headerRight: 4,
    headerHeight: 6,
    headerLine: true,
    headerLineHeight: 5,
    lineLeft: 4,
    lineRight: 4,
    lineNumber: 30,
    dotNumber: 20,
  },
  {
    name: 'Letter',
    width: 61.2,
    height: 79.2,
    inchWidth: 8.5,
    inchHeight: 11,
    paperTop: 3,
    paperBottom: 3,
    headerLeft: 3,
    headerRight: 3,
    headerHeight: 5,
    headerLine: true,
    headerLineHeight: 4,
    lineLeft: 4,
    lineRight: 4,
    lineNumber: 23,
    dotNumber: 17,
  },
  {
    name: 'Tabloid',
    width: 79.2,
    height: 122.4,
    inchWidth: 11,
    inchHeight: 17,
    paperTop: 3,
    paperBottom: 3,
    headerLeft: 3,
    headerRight: 3,
    headerHeight: 5,
    headerLine: true,
    headerLineHeight: 4,
    lineLeft: 4,
    lineRight: 4,
    lineNumber: 35,
    dotNumber: 20,
  },
]
