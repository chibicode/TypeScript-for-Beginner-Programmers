/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const CardHeadingText = (props: JSX.IntrinsicElements['h4']) => {
  const { fontSizes, maxWidths, lineHeights, ns, spaces } = useTheme()
  return (
    <div
      css={css`
        max-width: ${maxWidths('sm')};
        margin: 0 auto;
      `}
    >
      <h4
        {...props}
        css={[
          css`
            margin: 0 0 ${spaces(1, true)};
            font-size: ${fontSizes(1.4)};
            line-height: ${lineHeights(1.4)};

            ${ns} {
              line-height: ${lineHeights(1.6)};
              font-size: ${fontSizes(1.6)};
            }
          `
        ]}
      />
    </div>
  )
}

export default CardHeadingText
