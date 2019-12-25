import { allFontSizes } from 'src/lib/theme/fontSizes'

export const allLineHeights = {
  0.75: 1.6,
  0.8: 1.6,
  0.85: 1.6,
  1: 1.6,
  1.2: 1.5,
  1.4: 1.4,
  1.6: 1.3,
  2: 1.25,
  2.2: 1.25,
  2.5: 1.2,
  3: 1.1,
  4: 1,
  5: 1
}

const lineHeights = (x: keyof typeof allFontSizes) => allLineHeights[x]

export default lineHeights
