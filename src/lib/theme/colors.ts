export const allColors = {
  black: '#260808',
  lightYellow1: '#FEF5DD',
  lightYellow2: '#FFE8BF',
  lightPink1: '#FFF2E4',
  lightPink2: '#FFE7DD',
  lightGreen: '#DFE9CE',
  brown: '#806538',
  lightBrown: '#E9D1AC',
  darkOrange: '#EC9602',
  pink: '#FFD9CC',
  white: '#FFFFFF',
  white75: 'rgba(255, 255, 255, 0.75)',
  paleGreen: '#C8DCC7',
  red: '#DB4003',
  yellowHighlight: '#FFFF00'
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
