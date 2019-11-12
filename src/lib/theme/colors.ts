export const allColors = {
  black: '#260808',
  lightYellow1: '#FEF5DD',
  lightYellow2: '#FFE8BF'
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
