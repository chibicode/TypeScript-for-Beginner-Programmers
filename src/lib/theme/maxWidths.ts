export const allMaxWidths = {
  sm: (1140 / 12) * 5,
  smmd: (1140 / 12) * 7,
  md: (1140 / 12) * 8,
  lg: 1140
}

const maxWidths = (x: keyof typeof allMaxWidths) => `${allMaxWidths[x]}px`

export default maxWidths
