/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const Caption = ({
  children,
  skipPaddingBottom,
  Component = 'div',
  cssOverrides
}: {
  children: React.ReactNode
  skipPaddingBottom?: boolean
  Component?: React.ComponentType | string
  cssOverrides?: SerializedStyles
}) => {
  const { spaces, fontSizes, colors } = useTheme()
  return (
    <Component
      css={[
        css`
          font-size: ${fontSizes(0.85)};
          color: ${colors('brown')};
          padding-bottom: ${skipPaddingBottom ? 0 : spaces(0.5)};
          max-width: 18rem;
          margin: 0 auto;
          text-align: center;
        `,
        cssOverrides
      ]}
    >
      {children}
    </Component>
  )
}

export default Caption
