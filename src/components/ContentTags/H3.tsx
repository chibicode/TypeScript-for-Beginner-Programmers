/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const H3 = (props: JSX.IntrinsicElements['h3']) => {
  const { fontSizes, lineHeights, ns, spaces } = useTheme()
  return (
    <h3
      {...props}
      css={[
        css`
          margin: 0 0 ${spaces(1, true)};
          font-size: ${fontSizes(1.2)};
          line-height: ${lineHeights(1.2)};

          ${ns} {
            line-height: ${lineHeights(1.4)};
            font-size: ${fontSizes(1.4)};
          }
        `
      ]}
    />
  )
}

export default H3
