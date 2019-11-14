export const allColors = {
  black: '#260808',
  lightYellow1: '#FEF5DD',
  lightYellow2: '#FFE8BF',
  brown: '#917340',
  pink: '#FCCFC0'
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
