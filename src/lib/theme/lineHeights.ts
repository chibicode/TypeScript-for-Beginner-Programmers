export const allLineHeights = {
  1: 1,
  1.1: 1.1,
  1.3: 1.3,
  1.5: 1.5,
  1.6: 1.6
}

const lineHeights = (x: keyof typeof allLineHeights) => allLineHeights[x]

export default lineHeights
