/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const Highlight = (props: JSX.IntrinsicElements['span']) => {
  const { colors } = useTheme()
  return (
    <span
      {...props}
      css={[
        css`
          background: ${colors('lightGreen')};
        `
      ]}
    />
  )
}

export default Highlight
