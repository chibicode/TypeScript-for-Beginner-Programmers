/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const Caption = ({ children }: { children: React.ReactNode }) => {
  const { spaces, fontSizes, colors } = useTheme()
  return (
    <div
      css={[
        css`
          font-size: ${fontSizes(0.85)};
          color: ${colors('brown')};
          padding-bottom: ${spaces(0.5)};
          max-width: 18rem;
          margin: 0 auto;
        `
      ]}
    >
      {children}
    </div>
  )
}

export default Caption
