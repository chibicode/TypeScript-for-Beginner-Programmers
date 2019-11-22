/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const A = (props: JSX.IntrinsicElements['a']) => {
  const { colors } = useTheme()
  return (
    <a
      {...props}
      css={[
        css`
          &:hover {
            background: ${colors('white85')};
          }
        `
      ]}
    />
  )
}

export default A
