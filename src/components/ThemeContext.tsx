import { createContext } from 'react'
import lineHeights from 'src/lib/theme/lineHeights'
import colors from 'src/lib/theme/colors'
import ns, { nt } from 'src/lib/theme/ns'
import maxWidths from 'src/lib/theme/maxWidths'
import spaces from 'src/lib/theme/spaces'
import fontSizes from 'src/lib/theme/fontSizes'
import letterSpacings from 'src/lib/theme/letterSpacings'
import radii from 'src/lib/theme/radii'

export interface ThemeProps {
  lineHeights: typeof lineHeights
  colors: typeof colors
  ns: typeof ns
  nt: typeof nt
  maxWidths: typeof maxWidths
  spaces: typeof spaces
  fontSizes: typeof fontSizes
  letterSpacings: typeof letterSpacings
  radii: typeof radii
}

export const themeContextDefault: ThemeProps = {
  lineHeights,
  colors,
  ns,
  nt,
  maxWidths,
  spaces,
  fontSizes,
  letterSpacings,
  radii
}

export default createContext<ThemeProps>(themeContextDefault)
