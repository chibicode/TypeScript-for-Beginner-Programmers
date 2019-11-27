/** @jsx jsx */
import { css, jsx, Interpolation } from '@emotion/core'
import PrismHighlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'src/lib/prismTheme'
import useTheme from 'src/hooks/useTheme'

const CodeBlockHighlight = ({
  snippet,
  cssOverrides,
  lineCssOverrides,
  language
}: {
  snippet: string
  cssOverrides?: Interpolation
  lineCssOverrides?: (i: number, key: number) => Interpolation
  language: Language
}) => {
  const { colors, ns, nt, spaces, fontSizes } = useTheme()
  return (
    <PrismHighlight
      {...defaultProps}
      code={snippet}
      theme={theme}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
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
            {tokens.map((line, i) => {
              const { key: divKey, ...lineProps } = getLineProps({
                line,
                key: i
              })
              return (
                <div key={divKey} {...lineProps}>
                  {line.map((token, key) => {
                    const { key: spanKey, ...tokenProps } = getTokenProps({
                      token,
                      key
                    })
                    return (
                      <span
                        key={spanKey}
                        {...tokenProps}
                        css={[
                          css`
                            font-style: normal !important;
                          `,
                          lineCssOverrides && lineCssOverrides(i, key)
                        ]}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </pre>
      )}
    </PrismHighlight>
  )
}

export default CodeBlockHighlight
