/** @jsx jsx */
import { css, jsx, Interpolation } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const CodeBlockPre = ({
  cssOverrides,
  children
}: {
  cssOverrides?: Interpolation
  children: React.ReactNode
}) => {
  const { colors, ns, nt, spaces, fontSizes } = useTheme()
  return (
    <pre
      css={[
        css`
          padding: ${spaces(0.75)} ${spaces(0.5)};
          line-height: 1.45;
          border: 2px solid ${colors('lightBrown')};
          background-color: ${colors('lightPink1')};
          font-size: ${fontSizes(0.8)};

          ${nt} {
            font-size: ${fontSizes(0.85)};
          }

          ${ns} {
            padding: ${spaces(1)} ${spaces(1)};
            margin-left: 0;
            margin-right: 0;
          }
        `,
        cssOverrides
      ]}
    >
      <div
        css={css`
          overflow-x: auto;
          overflow-y: hidden;
        `}
      >
        {children}
      </div>
    </pre>
  )
}

export default CodeBlockPre
