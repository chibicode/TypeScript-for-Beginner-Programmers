/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const Blockquote = (props: JSX.IntrinsicElements['blockquote']) => {
  const { colors, spaces } = useTheme()
  return (
    <blockquote
      {...props}
      css={css`
        border-left: ${spaces(0.25)} solid ${colors('lightBrown')};
        padding-left: ${spaces(0.75)};
        margin: ${spaces(1, true)} 0;
        color: ${colors('brown')};
      `}
    />
  )
}

export default Blockquote
