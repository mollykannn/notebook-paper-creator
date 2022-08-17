export const exportPDF = (imgData, width, height) => {
  const pdf = new jsPDF({
    orientation: width >= height ? 'l' : 'p',
    unit: 'in',
    format: [width, height],
  })
  pdf.addImage(imgData, 'PNG', 0, 0, width, height)
  pdf.save('paper.pdf')
}