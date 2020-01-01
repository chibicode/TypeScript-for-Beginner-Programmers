/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import useTheme from 'src/hooks/useTheme'
import Caption from 'src/components/Caption'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import RunButtonText from 'src/components/RunButtonText'
import CodeResult from 'src/components/CodeResult'
import PromptArrowText from 'src/components/PromptArrowText'
import CodeBlockHighlight from 'src/components/CodeBlockHighlight'

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
  resultError,
  tokenIndexIndentWorkaround,
  defaultErrorHighlight,
  narrowText,
  smallText,
  semiTransparentTextExceptHighlight
}: {
  snippet: string
  shouldHighlight?: (lineIndex: number, tokenIndex: number) => boolean
  result?: React.ReactNode
  pointToRunButton?: boolean
  defaultResultVisible?: boolean
  caption?: React.ReactNode
  noHighlight?: boolean
  compile?: boolean
  shouldHighlightResult?: (lineIndex: number, tokenIndex: number) => boolean
  resultError?: boolean
  tokenIndexIndentWorkaround?: number
  defaultErrorHighlight?: boolean
  narrowText?: boolean
  smallText?: boolean
  semiTransparentTextExceptHighlight?: boolean
}) => {
  const [resultVisible, setResultVisible] = useState(defaultResultVisible)
  const {
    radii,
    colors,
    ns,
    maxWidths,
    spaces,
    fontSizes,
    letterSpacings,
    nt
  } = useTheme()
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
      <CodeBlockHighlight
        snippet={snippet}
        tokenIndexIndentWorkaround={tokenIndexIndentWorkaround}
        cssOverrides={[
          css`
            margin-top: ${caption ? 0 : spaces(1.75)};
            margin-bottom: ${result ? 0 : spaces(1.75)};
            margin-left: ${spaces('-0.5')};
            margin-right: ${spaces('-0.5')};
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
            `,
          narrowText &&
            css`
              letter-spacing: ${letterSpacings('smallCode')};
            `,
          smallText &&
            css`
              font-size: ${fontSizes(0.75)};

              ${nt} {
                font-size: ${fontSizes(0.75)};
              }
            `
        ]}
        lineCssOverrides={(lineIndex, tokenIndex) => [
          semiTransparentTextExceptHighlight &&
            css`
              opacity: 0.5;
            `,
          ((!!shouldHighlight &&
            !resultVisible &&
            shouldHighlight(lineIndex, tokenIndex)) ||
            (!!shouldHighlightResult &&
              resultVisible &&
              shouldHighlightResult(lineIndex, tokenIndex))) &&
            css`
              opacity: 1;
              font-weight: bold;
              background: ${((shouldHighlightResult && resultVisible) ||
                defaultErrorHighlight) &&
              resultError
                ? colors('white')
                : colors('yellowHighlight')};
              border-bottom: ${((shouldHighlightResult && resultVisible) ||
                defaultErrorHighlight) &&
              resultError
                ? `3px solid ${colors('red')}`
                : `2px solid ${colors('darkOrange')}`};
            `
        ]}
        language={noHighlight ? 'diff' : 'typescript'}
      />
      {result && (
        <>
          <div
            css={css`
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
              <CodeResult
                resultText={result}
                resultError={resultError}
                resultType="bottom"
              />
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
                    <PromptArrowText>↑ Press this button!</PromptArrowText>
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
