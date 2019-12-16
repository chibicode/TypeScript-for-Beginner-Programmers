export const allLetterSpacings = {
  title: '-0.02em',
  wide: '0.15em',
  smallCode: '-0.035em'
}

const letterSpacings = (x: keyof typeof allLetterSpacings) =>
  allLetterSpacings[x]

export default letterSpacings
