/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const CodeResult = ({
  resultText,
  resultComponent,
  resultError,
  resultType = 'default'
}: {
  resultText?: React.ReactNode
  resultError?: boolean
  resultComponent?: React.ReactNode
  resultType?: 'default' | 'top' | 'bottom'
  caption?: React.ReactNode
  belowResult?: React.ReactNode
}) => {
  const { colors, radii, spaces, fontSizes, nt, ns } = useTheme()
  return (
    <div
      css={[
        css`
          border-top-left-radius: ${resultType !== 'bottom' ? radii(0.5) : 0};
          border-top-right-radius: ${resultType !== 'bottom' ? radii(0.5) : 0};
          border-bottom-left-radius: ${resultType !== 'top' ? radii(0.5) : 0};
          border-bottom-right-radius: ${resultType !== 'top' ? radii(0.5) : 0};
          background: #fff;
          border-top: ${resultType !== 'bottom'
            ? `2px solid ${colors('lightBrown')}`
            : 'none'};
          border-left: 2px solid ${colors('lightBrown')};
          border-bottom: ${resultType !== 'top'
            ? `2px solid ${colors('lightBrown')}`
            : 'none'};
          border-right: 2px solid ${colors('lightBrown')};
          padding: ${spaces(0.5)} ${spaces(0.5)};

          ${ns} {
            padding: ${spaces(0.75)} ${spaces(1)};
          }
        `,
        resultText &&
          css`
            font-size: ${fontSizes(0.8)};
            word-break: break-all;
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
  )
}

export default CodeResult
