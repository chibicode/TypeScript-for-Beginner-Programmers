/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const PromptArrowText = ({ children }: { children: React.ReactNode }) => {
  const { fontSizes, colors, spaces } = useTheme()
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
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
        {children}
      </span>
    </div>
  )
}

export default PromptArrowText
