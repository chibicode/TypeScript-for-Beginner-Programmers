/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PrismHighlight, { defaultProps } from 'prism-react-renderer'
import theme from 'src/lib/prismTheme'

const ResultHighlight = ({ children }: { children: string }) => {
  return (
    <PrismHighlight
      {...defaultProps}
      code={children}
      theme={theme}
      language="javascript"
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => {
            const { key: divKey, ...lineProps } = getLineProps({
              line,
              key: i
            })
            return (
              <div key={divKey} {...lineProps}>
                {line.map((token, key) => {
                  const {
                    key: spanKey,
                    children,
                    ...tokenProps
                  } = getTokenProps({
                    token,
                    key
                  })
                  return (
                    <span
                      key={spanKey}
                      {...tokenProps}
                      css={css`
                        font-style: normal !important;
                        white-space: pre-wrap;
                      `}
                    >
                      {children}
                    </span>
                  )
                })}
              </div>
            )
          })}
        </>
      )}
    </PrismHighlight>
  )
}

export default ResultHighlight
