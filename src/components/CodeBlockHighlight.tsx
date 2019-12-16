/** @jsx jsx */
import { css, jsx, Interpolation } from '@emotion/core'
import PrismHighlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'src/lib/prismTheme'
import { useSpring } from 'react-spring'
import AnimatedSpan from 'src/components/AnimatedSpan'
import CodeBlockPre from 'src/components/CodeBlockPre'
import Emoji from 'src/components/Emoji'

const StringHighlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      css={css`
        color: rgb(80, 161, 79);
        font-weight: bold;
        background: #fff;
      `}
    >
      {children}
    </span>
  )
}

const CodeBlockHighlight = ({
  snippet,
  cssOverrides,
  lineCssOverrides,
  lineCssOverridesAnimation,
  language,
  tokenIndexIndentWorkaround = 0
}: {
  snippet: string
  cssOverrides?: Interpolation
  lineCssOverrides?: (lineIndex: number, tokenIndex: number) => Interpolation
  lineCssOverridesAnimation?: (
    lineIndex: number,
    tokenIndex: number
  ) => ReturnType<Parameters<typeof useSpring>[0]> | undefined
  language: Language
  tokenIndexIndentWorkaround?: number
}) => {
  return (
    <PrismHighlight
      {...defaultProps}
      code={snippet}
      theme={theme}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <CodeBlockPre cssOverrides={cssOverrides}>
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
                  let updatedChildren: React.ReactNode = children
                  const hasIndent =
                    key === tokenIndexIndentWorkaround && /^\s+/.exec(children)
                  if (hasIndent) {
                    updatedChildren = (
                      <>
                        <span
                          css={css`
                            background: none;
                            border: none;
                          `}
                        >
                          {(/^\s+/.exec(children) || [])[0]}
                        </span>
                        <span
                          css={lineCssOverrides && lineCssOverrides(i, key)}
                        >
                          {children.split(/^\s+/)[1]}
                        </span>
                      </>
                    )
                  }
                  if (!hasIndent && lineCssOverridesAnimation) {
                    const springProps = lineCssOverridesAnimation(i, key)
                    if (springProps !== undefined) {
                      updatedChildren = (
                        <AnimatedSpan springProps={springProps}>
                          {updatedChildren}
                        </AnimatedSpan>
                      )
                    }
                  }
                  if (children === '// __home__') {
                    updatedChildren = (
                      <>
                        // -> returns{' '}
                        <StringHighlight>
                          '<Emoji type="home" /> Home'
                        </StringHighlight>
                      </>
                    )
                  }
                  if (children === '// __work__') {
                    updatedChildren = (
                      <>
                        // -> returns{' '}
                        <StringHighlight>
                          '<Emoji type="work" /> Work'
                        </StringHighlight>
                      </>
                    )
                  }
                  if (children === '// __gym__') {
                    updatedChildren = (
                      <>
                        // -> returns{' '}
                        <StringHighlight>
                          '<Emoji type="pin" /> Gym'
                        </StringHighlight>
                      </>
                    )
                  }
                  if (children === '// __supermarket__') {
                    updatedChildren = (
                      <>
                        // -> returns{' '}
                        <StringHighlight>
                          '<Emoji type="pin" /> Supermarket'
                        </StringHighlight>
                      </>
                    )
                  }
                  if (/homeEmoji/.exec(children)) {
                    const splitChildren = children.split('homeEmoji')
                    updatedChildren = (
                      <>
                        {splitChildren[0]}
                        <Emoji type="home" />
                        {splitChildren[1]}
                      </>
                    )
                  }
                  if (/workEmoji/.exec(children)) {
                    const splitChildren = children.split('workEmoji')
                    updatedChildren = (
                      <>
                        {splitChildren[0]}
                        <Emoji type="work" />
                        {splitChildren[1]}
                      </>
                    )
                  }
                  if (/pinEmoji/.exec(children)) {
                    const splitChildren = children.split('pinEmoji')
                    updatedChildren = (
                      <>
                        {splitChildren[0]}
                        <Emoji type="pin" />
                        {splitChildren[1]}
                      </>
                    )
                  }
                  return (
                    <span
                      key={spanKey}
                      {...tokenProps}
                      css={[
                        css`
                          font-style: normal !important;
                        `,
                        !hasIndent &&
                          lineCssOverrides &&
                          lineCssOverrides(i, key),
                        token.types[0] === 'comment' &&
                          css`
                            color: #8a8c93 !important;
                          `
                      ]}
                    >
                      {updatedChildren}
                    </span>
                  )
                })}
              </div>
            )
          })}
        </CodeBlockPre>
      )}
    </PrismHighlight>
  )
}

export default CodeBlockHighlight
