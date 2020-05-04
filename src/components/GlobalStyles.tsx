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
              background: ${colors('lightYellow2')};
              line-height: ${lineHeights(1)};
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
              font-family: -apple-system, 'Helvetica Neue', 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
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

            @font-face {
              font-family: 'Iosevka Web';
              font-weight: 400;
              font-style: normal;
              font-display: fallback;
              src: url('/fonts/iosevka-regular.woff2') format('woff2'),
                url('/fonts/iosevka-regular.woff') format('woff'),
                url('/fonts/iosevka-regular.ttf') format('truetype');
            }

            @font-face {
              font-family: 'Iosevka Web';
              font-weight: 700;
              font-style: normal;
              font-display: fallback;
              src: url('/fonts/iosevka-bold.woff2') format('woff2'),
                url('/fonts/iosevka-bold.woff') format('woff'),
                url('/fonts/iosevka-bold.ttf') format('truetype');
            }

            code,
            pre {
              font-family: 'Iosevka Web', SFMono-Regular, Consolas,
                Liberation Mono, Menlo, Courier, monospace;
            }
          `
        ]}
      />
      {children}
    </>
  )
}

export default GlobalStyles
