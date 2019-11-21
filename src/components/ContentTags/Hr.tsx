/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const Hr = (props: JSX.IntrinsicElements['hr']) => {
  const { colors, spaces } = useTheme()
  return (
    <hr
      {...props}
      css={css`
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 5px solid ${colors('white85')};
        margin: ${spaces(2)} auto ${spaces(2)};
        max-width: 8rem;
      `}
    />
  )
}

export default Hr
