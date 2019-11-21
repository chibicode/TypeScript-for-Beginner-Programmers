/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import { allColors } from 'src/lib/theme/colors'

const Highlight = ({
  color,
  ...props
}: JSX.IntrinsicElements['span'] & { color?: keyof typeof allColors }) => {
  const { colors } = useTheme()
  return (
    <span
      {...props}
      css={[
        css`
          background: ${color ? colors(color) : colors('white')};
        `
      ]}
    />
  )
}

export default Highlight
