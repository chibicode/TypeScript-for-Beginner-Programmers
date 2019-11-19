/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import useTheme from 'src/hooks/useTheme'
import Caption from 'src/components/Caption'
import PrismHighlight, { defaultProps } from 'prism-react-renderer'
import theme from 'src/lib/prismTheme'

const CodeBlock = ({
  snippet,
  shouldHighlight,
  result,
  // pointToRunButton,
  defaultResultVisible,
  caption,
  noHighlight
}: {
  snippet: string
  shouldHighlight?: (lineNumber: number, tokenNumber: number) => boolean
  result?: string
  // pointToRunButton?: boolean
  defaultResultVisible?: boolean
  caption?: React.ReactNode
  noHighlight?: boolean
}) => {
  const [resultVisible] = useState(defaultResultVisible)
  const { radii, colors, ns, maxWidths, spaces, fontSizes } = useTheme()
  // const buttonOnClick = () => setResultVisible(true)
  return (
    <div
      css={css`
        margin-left: auto;
        margin-right: auto;
        max-width: ${maxWidths('sm')};
      `}
    >
      {caption && (
        <div
          css={css`
            margin-top: ${spaces(1.75)};
          `}
        >
          <Caption>{caption}</Caption>
        </div>
      )}
      <PrismHighlight
        {...defaultProps}
        code={snippet}
        theme={theme}
        language={noHighlight ? 'diff' : 'typescript'}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            css={[
              css`
                padding: ${spaces(0.75)} ${spaces(0.75)};
                line-height: 1.45;

                ${ns} {
                }
                border: 2px solid ${colors('pink')};
                background-color: ${colors('lightPink')};
                margin-top: ${caption ? 0 : spaces(1.75)};
                margin-bottom: ${result ? 0 : spaces(1.75)};
                font-size: ${fontSizes(0.8)};

                ${ns} {
                  font-size: ${fontSizes(0.85)};
                  padding: ${spaces(1)} ${spaces(1.25)};
                  margin-left: 0;
                  margin-right: 0;
                }
              `,
              result
                ? css`
                    border-top-left-radius: ${radii(0.5)};
                    border-top-right-radius: ${radii(0.5)};
                  `
                : css`
                    border-radius: ${radii(0.5)};
                  `,
              (!(result && resultVisible) || !result) &&
                css`
                  border-bottom-right-radius: ${radii(0.5)};
                `
            ]}
          >
            <div
              css={css`
                overflow-x: auto;
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
                            !!shouldHighlight &&
                              shouldHighlight(i, key) &&
                              css`
                                background: ${colors('white')};
                                border-bottom: 2px solid ${colors('red')};
                              `
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
      {/* result && (
        <>
          <div
            css={css`
              max-width: ${maxWidths('xs')};
              margin-bottom: ${spaces(1.75)};
              margin-left: ${spaces('-0.25')};
              margin-right: ${spaces('-0.25')};
              ${ns} {
                margin-left: 0;
                margin-right: 0;
              }
            `}
          >
            {resultVisible ? (
              <div
                css={[
                  alertSpacing,
                  css`
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: ${radii(0.5)};
                    border-bottom-right-radius: ${radii(0.5)};
                    background: #fff;
                    border-left: 0.25rem solid ${colors('lightPink')};
                    border-bottom: 0.25rem solid ${colors('lightPink')};
                    border-right: 0.25rem solid ${colors('lightPink')};
                    padding-top: 0.425rem;
                    padding-bottom: 0.425rem;
                    margin-top: 0;

                    ${ns} {
                      padding-top: 0.65rem;
                      padding-bottom: 0.65rem;
                    }
                  `
                ]}
              >
                <strong
                  css={css`
                    color: ${colors('indigo400')};
                    font-size: ${fontSizes(0.85)};
                    margin-left: -0.25rem;
                  `}
                >
                  Result:{' '}
                </strong>
                <span
                  css={css`
                    color: ${colors('indigo500')};
                  `}
                >
                  <InlineCode highlighted>{result}</InlineCode>
                </span>
              </div>
            ) : (
              <>
                <ButtonWithTouchActiveStates
                  onClick={buttonOnClick}
                  activeBackgroundColor={colors('indigo50')}
                  css={[
                    alertSpacing,
                    css`
                      border-top-left-radius: 0;
                      border-top-right-radius: 0;
                      border-bottom-left-radius: ${radii(0.5)};
                      border-bottom-right-radius: ${radii(0.5)};
                      line-height: 1.1rem;
                      border: none;
                      margin-top: 0;
                      margin-bottom: 0;
                      font-weight: bold;
                      font-size: ${fontSizes(0.85)};
                      background: ${colors('codeButtonBg')};
                      color: ${colors('indigo500')};
                      padding-left: ${spaces(1.25)};
                      padding-right: ${spaces(1.25)};

                      &:enabled {
                        cursor: pointer;
                      }

                      @media (hover: hover) {
                        &:hover:enabled {
                          background: ${colors('indigo50')};
                        }
                        &:focus {
                          box-shadow: inset 0 0 0 1px ${colors('lightPink')};
                          outline: none;
                        }
                      }
                      &:active:enabled {
                        background: ${colors('indigo50')};
                      }
                    `
                  ]}
                >
                  Run <Emoji type="run" />
                </ButtonWithTouchActiveStates>
                {pointToRunButton && (
                  <span
                    css={[
                      alertSpacing,
                      css`
                        font-size: ${fontSizes(0.85)};
                        animation: pointToCodeRunButton 1s infinite;
                        color: ${colors('brown')};

                        @keyframes pointToCodeRunButton {
                          0% {
                            margin-left: 0px;
                          }
                          50% {
                            margin-left: -5px;
                          }
                          100% {
                            margin-left: 0px;
                          }
                        }
                      `
                    ]}
                  >
                    ← Press this button!
                  </span>
                )}
              </>
            )}
          </div>
        </>
                  )*/}
    </div>
  )
}

export default CodeBlock
