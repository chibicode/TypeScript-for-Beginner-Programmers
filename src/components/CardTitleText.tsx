/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const CardTitleText = (props: JSX.IntrinsicElements['h3']) => {
  const { fontSizes, lineHeights, ns, spaces, letterSpacings } = useTheme()
  return (
    <h3
      css={css`
        margin: 0 0 ${spaces(1, true)};
        font-size: ${fontSizes(1.2)};
        line-height: ${lineHeights(1.2)};
        letter-spacing: ${letterSpacings('titleSmall')};
        ${ns} {
          line-height: ${lineHeights(1.4)};
          font-size: ${fontSizes(1.4)};
        }
      `}
      {...props}
    />
  )
}

export default CardTitleText
