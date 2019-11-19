/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const Code = (props: JSX.IntrinsicElements['code']) => {
  const { colors } = useTheme()
  return (
    <code
      {...props}
      css={[
        css`
          font-size: 0.9em;
          word-break: break-word;
          background: ${colors('lightPink2')};
        `
      ]}
    />
  )
}

export default Code
