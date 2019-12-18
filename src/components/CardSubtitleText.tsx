/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const CardSubtitleText = (props: JSX.IntrinsicElements['h4']) => {
  const { fontSizes, lineHeights, ns, spaces } = useTheme()
  return (
    <h4
      css={css`
        margin: 0 0 ${spaces(0.25, true)};
        font-size: ${fontSizes(0.85)};
        line-height: ${lineHeights(0.85)};

        ${ns} {
          line-height: ${lineHeights(1)};
          font-size: ${fontSizes(1)};
        }
      `}
      {...props}
    />
  )
}

export default CardSubtitleText
