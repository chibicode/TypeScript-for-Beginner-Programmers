/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import colors from 'src/lib/theme/colors'

export const baseLinkCss = (themeColors: typeof colors) => css`
  &:hover {
    background: ${themeColors('white75')};
  }
`

const A = (props: JSX.IntrinsicElements['a']) => {
  const { colors } = useTheme()
  return <a {...props} css={baseLinkCss(colors)} />
}

export default A
