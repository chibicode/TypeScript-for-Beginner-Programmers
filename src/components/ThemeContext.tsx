import { createContext } from 'react'
import lineHeights from 'src/lib/theme/lineHeights'
import colors from 'src/lib/theme/colors'
import ns from 'src/lib/theme/ns'
import maxWidths from 'src/lib/theme/maxWidths'
import spaces from 'src/lib/theme/spaces'

export interface ThemeProps {
  lineHeights: typeof lineHeights
  colors: typeof colors
  ns: typeof ns
  maxWidths: typeof maxWidths
  spaces: typeof spaces
}

export const themeContextDefault: ThemeProps = {
  lineHeights,
  colors,
  ns,
  maxWidths,
  spaces
}

export default createContext<ThemeProps>(themeContextDefault)
