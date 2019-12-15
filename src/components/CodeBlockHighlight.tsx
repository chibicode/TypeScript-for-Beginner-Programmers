/** @jsx jsx */
import { css, jsx, Interpolation } from '@emotion/core'
import PrismHighlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'src/lib/prismTheme'
import useTheme from 'src/hooks/useTheme'
import { useSpring } from 'react-spring'
import AnimatedSpan from 'src/components/AnimatedSpan'

const CodeBlockHighlight = ({
  snippet,
  cssOverrides,
  lineCssOverrides,
  lineCssOverridesAnimation,
  language,
  tokenIndexIndentWorkaround = 0
}: {
  snippet: string
  cssOverrides?: Interpolation
  lineCssOverrides?: (lineIndex: number, tokenIndex: number) => Interpolation
  lineCssOverridesAnimation?: (
    lineIndex: number,
    tokenIndex: number
  ) => ReturnType<Parameters<typeof useSpring>[0]> | undefined
  language: Language
  tokenIndexIndentWorkaround?: number
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
              line-height: 1.4;
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
                    const {
                      key: spanKey,
                      children,
                      ...tokenProps
                    } = getTokenProps({
                      token,
                      key
                    })
                    let updatedChildren: React.ReactNode = children
                    const hasIndent =
                      key === tokenIndexIndentWorkaround &&
                      /^\s+/.exec(children)
                    if (hasIndent) {
                      updatedChildren = (
                        <>
                          <span
                            css={css`
                              background: none;
                              border: none;
                            `}
                          >
                            {(/^\s+/.exec(children) || [])[0]}
                          </span>
                          <span
                            css={lineCssOverrides && lineCssOverrides(i, key)}
                          >
                            {children.split(/^\s+/)[1]}
                          </span>
                        </>
                      )
                    }
                    if (!hasIndent && lineCssOverridesAnimation) {
                      const springProps = lineCssOverridesAnimation(i, key)
                      if (springProps !== undefined) {
                        updatedChildren = (
                          <AnimatedSpan springProps={springProps}>
                            {updatedChildren}
                          </AnimatedSpan>
                        )
                      }
                    }
                    return (
                      <span
                        key={spanKey}
                        {...tokenProps}
                        css={[
                          css`
                            font-style: normal !important;
                          `,
                          !hasIndent &&
                            lineCssOverrides &&
                            lineCssOverrides(i, key),
                          token.types[0] === 'comment' &&
                            css`
                              color: #8a8c93 !important;
                            `
                        ]}
                      >
                        {updatedChildren}
                      </span>
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
