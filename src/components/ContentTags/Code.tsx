/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import { allColors } from 'src/lib/theme/colors'

const Code = ({
  color,
  ...props
}: JSX.IntrinsicElements['code'] & { color?: keyof typeof allColors }) => {
  const { colors } = useTheme()
  return (
    <code
      {...props}
      css={[
        css`
          font-size: 0.95em;
          word-break: break-word;
          background: ${color ? colors(color) : colors('lightPink2')};
        `
      ]}
    />
  )
}

export default Code
