/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const CodeResultWrapper = ({ children }: { children: React.ReactNode }) => {
  const { spaces, ns, maxWidths } = useTheme()
  return (
    <div
      css={css`
        margin: ${spaces(2)} auto;
        max-width: ${maxWidths('sm')};
      `}
    >
      <div
        css={css`
          margin-left: ${spaces('-0.5')};
          margin-right: ${spaces('-0.5')};
          ${ns} {
            margin-left: ${spaces(0)};
            margin-right: ${spaces(0)};
          }
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default CodeResultWrapper
