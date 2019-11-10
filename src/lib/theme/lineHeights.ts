export const allLineHeights = {
  1.55: 1.55
}

const lineHeights = (x: keyof typeof allLineHeights) => allLineHeights[x]

export default lineHeights
