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
          font-style: normal;
          word-break: break-word;
          background: ${color ? colors(color) : colors('white50')};
        `
      ]}
    />
  )
}

export default Code
