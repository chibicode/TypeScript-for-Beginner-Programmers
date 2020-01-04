export const allColors = {
  black: '#260808',
  gray: '#A39797',
  lightYellow1: '#FEF5DD',
  lightYellow2: '#FFE8BF',
  lightPink1: '#FFF2E4',
  lightPink2: '#FFE7DD',
  lightGreen: '#E4EDD5',
  brown: '#806538',
  lightBrown: '#E9D1AC',
  darkOrange: '#EC9602',
  darkOrangeTransparent: 'rgba(236, 150, 2, 0)',
  pink: '#FFD9CC',
  white: '#FFFFFF',
  white75: 'rgba(255, 255, 255, 0.75)',
  white50: 'rgba(255, 232, 191, 0.50)',
  paleGreen: '#C8DCC7',
  darkGreen: '#009795',
  red: '#DB4003',
  yellowHighlight: '#FFFF00',
  yellowHighlightTransparent: 'rgba(255, 255, 0, 0)'
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
