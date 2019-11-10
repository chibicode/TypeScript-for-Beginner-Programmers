import { createContext } from 'react'
import lineHeights from 'src/lib/theme/lineHeights'
import colors from 'src/lib/theme/colors'
import ns from 'src/lib/theme/ns'

export interface ThemeProps {
  lineHeights: typeof lineHeights
  colors: typeof colors
  ns: typeof ns
}

export const themeContextDefault: ThemeProps = {
  lineHeights,
  colors,
  ns
}

export default createContext<ThemeProps>(themeContextDefault)
