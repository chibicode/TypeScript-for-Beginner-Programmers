export const allColors = {
  black: '#260808',
  lightYellow1: '#FEF6E1'
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
