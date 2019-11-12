export const allFontSizes = {
  0.75: 0.75,
  0.85: 0.85,
  1: 1,
  1.2: 1.2,
  1.4: 1.4,
  1.6: 1.6,
  2: 2,
  2.5: 2.5,
  3: 3,
  4: 4,
  5: 5
}

const fontSizes = (x: keyof typeof allFontSizes) => `${allFontSizes[x]}rem`

export default fontSizes
