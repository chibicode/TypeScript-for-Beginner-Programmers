/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
import React from 'react'
import modernNormalize from 'src/lib/modernNormalize'
import useTheme from 'src/hooks/useTheme'

const GlobalStyles = ({ children }: { children: React.ReactNode }) => {
  const { ns, colors, lineHeights } = useTheme()
  return (
    <>
      <Global
        styles={[
          modernNormalize,
          css`
            html {
              font-size: 18px;
              color: ${colors('black')};
              background: ${colors('lightYellow1')};
              line-height: ${lineHeights(1.55)};
            }

            body {
              margin: 0;
            }

            html,
            body,
            input,
            textarea,
            select,
            button {
              font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
                'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo,
                sans-serif;
            }

            ${ns} {
              html {
                font-size: 21px;
              }
            }

            a {
              color: inherit;
            }

            strong {
              font-weight: bold; /* Instead of bolder */
            }

            svg {
              height: 100%;
              width: auto;
            }

            button {
              -webkit-user-select: none;
              -webkit-tap-highlight-color: transparent;
              font-size: inherit;
              line-height: inherit;
            }
          `
        ]}
      />
      {children}
    </>
  )
}

export default GlobalStyles
