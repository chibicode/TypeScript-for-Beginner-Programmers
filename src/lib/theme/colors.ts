export const allColors = {
  black: '#260808',
  lightYellow1: '#FEF5DD',
  lightYellow2: '#FFE8BF',
  lightPink: '#FFF2E4',
  lightGreen: '#DFE9CE',
  brown: '#806538',
  pink: '#FCCFC0',
  white: '#FFFFFF',
  white75: 'rgba(255, 255, 255, 0.75)',
  paleGreen: '#C8DCC7',
  red: '#DB4003'
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
