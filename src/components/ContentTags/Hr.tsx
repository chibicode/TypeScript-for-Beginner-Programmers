/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import { allColors } from 'src/lib/theme/colors'

const Hr = ({
  color,
  ...props
}: JSX.IntrinsicElements['hr'] & { color?: keyof typeof allColors }) => {
  const { colors, spaces } = useTheme()
  return (
    <hr
      {...props}
      css={css`
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 5px solid ${colors(color || 'white')};
        margin: ${spaces(2)} auto ${spaces(2)};
        max-width: 8rem;
      `}
    />
  )
}

export default Hr
