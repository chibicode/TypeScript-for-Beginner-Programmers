export const allLetterSpacings = {
  title: '-0.025em'
}

const letterSpacings = (x: keyof typeof allLetterSpacings) =>
  allLetterSpacings[x]

export default letterSpacings
