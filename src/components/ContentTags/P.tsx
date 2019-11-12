/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

export const P = (props: JSX.IntrinsicElements['p']) => {
  const { spaces } = useTheme()
  return (
    <p
      {...props}
      css={[
        css`
          margin: 0 0 ${spaces(1, true)};
        `
      ]}
    />
  )
}
