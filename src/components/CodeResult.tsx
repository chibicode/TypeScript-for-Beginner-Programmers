/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import Caption from 'src/components/Caption'

const CodeResult = ({
  resultText,
  resultComponent,
  resultError,
  resultOnly,
  caption,
  belowResult
}: {
  resultText?: React.ReactNode
  resultError?: boolean
  resultComponent?: React.ReactNode
  resultOnly?: boolean
  caption?: React.ReactNode
  belowResult?: React.ReactNode
}) => {
  const { colors, radii, spaces, fontSizes, nt, ns, maxWidths } = useTheme()
  return (
    <div
      css={
        resultOnly &&
        css`
          margin: ${spaces(2)} auto;
          max-width: ${maxWidths('sm')};
        `
      }
    >
      <div
        css={
          resultOnly &&
          css`
            margin-left: ${spaces('-0.5')};
            margin-right: ${spaces('-0.5')};
            ${ns} {
              margin-left: ${spaces(0)};
              margin-right: ${spaces(0)};
            }
          `
        }
      >
        <Caption>{caption}</Caption>
        <div
          css={[
            css`
              border-top-left-radius: ${resultOnly ? radii(0.5) : 0};
              border-top-right-radius: ${resultOnly ? radii(0.5) : 0};
              border-bottom-left-radius: ${radii(0.5)};
              border-bottom-right-radius: ${radii(0.5)};
              background: #fff;
              border-top: ${resultOnly
                ? `2px solid ${colors('lightBrown')}`
                : 'none'};
              border-left: 2px solid ${colors('lightBrown')};
              border-bottom: 2px solid ${colors('lightBrown')};
              border-right: 2px solid ${colors('lightBrown')};
              padding: ${spaces(0.5)} ${spaces(0.5)};

              ${ns} {
                padding: ${spaces(0.75)} ${spaces(1)};
              }
            `,
            resultText &&
              css`
                font-size: ${fontSizes(0.8)};
                line-height: 1.45;
                ${nt} {
                  font-size: ${fontSizes(0.85)};
                }
              `
          ]}
        >
          {resultText ? (
            <code
              css={
                resultError &&
                css`
                  color: ${colors('red')};
                `
              }
            >
              {resultText}
            </code>
          ) : (
            resultComponent
          )}
        </div>
      </div>
      {belowResult}
    </div>
  )
}

export default CodeResult
