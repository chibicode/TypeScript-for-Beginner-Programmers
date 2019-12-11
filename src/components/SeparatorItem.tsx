/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const SeparatorItem = ({ text }: { text?: string }) => {
  const { spaces, colors } = useTheme()
  return (
    <div
      css={css`
        margin: ${spaces(0.75)} ${spaces(0.5)};
        padding: ${spaces(0.125)};
        background: ${colors('paleGreen')};
        border-radius: 9999px;
        display: flex;
      `}
    >
      {text}
    </div>
  )
}

export default SeparatorItem
