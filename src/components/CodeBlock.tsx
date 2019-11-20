/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import useTheme from 'src/hooks/useTheme'
import Caption from 'src/components/Caption'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import RunButtonText from 'src/components/RunButtonText'
import PrismHighlight, { defaultProps } from 'prism-react-renderer'
import theme from 'src/lib/prismTheme'

const CodeBlock = ({
  snippet,
  shouldHighlight,
  result,
  pointToRunButton,
  defaultResultVisible,
  caption,
  noHighlight,
  compile,
  shouldHighlightResult,
  resultError
}: {
  snippet: string
  shouldHighlight?: (lineNumber: number, tokenNumber: number) => boolean
  result?: React.ReactNode
  pointToRunButton?: boolean
  defaultResultVisible?: boolean
  caption?: React.ReactNode
  noHighlight?: boolean
  compile?: boolean
  shouldHighlightResult?: (lineNumber: number, tokenNumber: number) => boolean
  resultError?: boolean
}) => {
  const [resultVisible, setResultVisible] = useState(defaultResultVisible)
  const { radii, colors, ns, maxWidths, spaces, fontSizes } = useTheme()
  const buttonOnClick = () => setResultVisible(true)
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
                padding: ${spaces(0.75)} ${spaces(0.5)};
                line-height: 1.45;

                border: 2px solid ${colors('lightBrown')};
                background-color: ${colors('lightPink1')};
                margin-top: ${caption ? 0 : spaces(1.75)};
                margin-bottom: ${result ? 0 : spaces(1.75)};
                font-size: ${fontSizes(0.8)};
                margin-left: ${spaces('-0.5')};
                margin-right: ${spaces('-0.5')};

                ${ns} {
                  font-size: ${fontSizes(0.85)};
                  padding: ${spaces(1)} ${spaces(1)};
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
                  border-bottom-left-radius: ${radii(0.5)};
                `
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
                            ((!!shouldHighlight &&
                              !resultVisible &&
                              shouldHighlight(i, key)) ||
                              (!!shouldHighlightResult &&
                                resultVisible &&
                                shouldHighlightResult(i, key))) &&
                              css`
                                background: ${shouldHighlightResult &&
                                resultVisible &&
                                resultError
                                  ? colors('white')
                                  : colors('yellowHighlight')};
                                border-bottom: ${shouldHighlightResult &&
                                resultVisible &&
                                resultError
                                  ? 'none'
                                  : `3px solid ${colors('darkOrange')}`};
                                text-decoration: ${shouldHighlightResult &&
                                resultVisible &&
                                resultError
                                  ? 'underline'
                                  : 'none'};
                                text-decoration-style: wavy;
                                text-decoration-color: ${colors('red')};
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
      {result && (
        <>
          <div
            css={css`
              max-width: ${maxWidths('sm')};
              margin-bottom: ${spaces(1.75)};
              margin-left: ${spaces('-0.5')};
              margin-right: ${spaces('-0.5')};

              ${ns} {
                margin-left: ${spaces(0)};
                margin-right: ${spaces(0)};
              }
            `}
          >
            {resultVisible ? (
              <div
                css={[
                  css`
                    line-height: 1.45;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: ${radii(0.5)};
                    border-bottom-right-radius: ${radii(0.5)};
                    background: #fff;
                    border-left: 2px solid ${colors('lightBrown')};
                    border-bottom: 2px solid ${colors('lightBrown')};
                    border-right: 2px solid ${colors('lightBrown')};
                    padding: ${spaces(0.5)} ${spaces(0.5)};
                    font-size: ${fontSizes(0.8)};

                    ${ns} {
                      padding: ${spaces(0.75)} ${spaces(1)};
                      font-size: ${fontSizes(0.85)};
                    }
                  `
                ]}
              >
                <code
                  css={
                    resultError &&
                    css`
                      color: ${colors('red')};
                    `
                  }
                >
                  {result}
                </code>
              </div>
            ) : (
              <div
                css={css`
                  text-align: center;
                `}
              >
                <ButtonWithTouchActiveStates
                  onClick={buttonOnClick}
                  activeBackgroundColor={colors('lightPink1')}
                  css={[
                    css`
                      margin-top: ${spaces(0.5)};
                      border-radius: ${radii(0.5)};
                      line-height: 1.1rem;
                      border: none;
                      margin-bottom: 0;
                      font-size: ${fontSizes(0.85)};
                      background: ${colors('white')};
                      border: 2px solid ${colors('lightBrown')};
                      color: ${colors('black')};
                      padding: ${spaces(0.75)} ${spaces(1.25)};

                      &:enabled {
                        cursor: pointer;
                      }

                      @media (hover: hover) {
                        &:hover:enabled {
                          background: ${colors('lightPink1')};
                        }
                        &:focus {
                          box-shadow: inset 0 0 0 1px ${colors('lightBrown')};
                          outline: none;
                        }
                      }
                      &:active:enabled {
                        background: ${colors('lightPink1')};
                      }
                    `
                  ]}
                >
                  <RunButtonText compile={compile} />
                </ButtonWithTouchActiveStates>
                {pointToRunButton && (
                  <>
                    <br />
                    <span
                      css={[
                        css`
                          display: inline-block;
                          font-size: ${fontSizes(0.85)};
                          animation: pointToCodeRunButton 1s infinite;
                          color: ${colors('brown')};
                          margin-top: ${spaces(1)};

                          @keyframes pointToCodeRunButton {
                            0% {
                              transform: translateY(0);
                            }
                            50% {
                              transform: translateY(-5px);
                            }
                            100% {
                              transform: translateY(0px);
                            }
                          }
                        `
                      ]}
                    >
                      ↑ Press this button!
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default CodeBlock
