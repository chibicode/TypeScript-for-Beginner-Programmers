/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from 'src/components/Container'
import useTheme from 'src/hooks/useTheme'
import { siteTitle } from 'src/lib/meta'
import InternalLink from 'src/components/InternalLink'

const LogoLink = ({ children, ...props }: JSX.IntrinsicElements['h2']) => {
  const { colors } = useTheme()
  return (
    <h2 {...props}>
      <InternalLink
        css={css`
          text-decoration: none;
          &:hover {
            background: ${colors('lightYellow1')};
          }
        `}
        href="/"
      >
        {children}
      </InternalLink>
    </h2>
  )
}

const Header = ({ useH1 }: { useH1?: boolean }) => {
  const Component = useH1 ? 'h1' : LogoLink
  const { fontSizes, ns, spaces, lineHeights, letterSpacings } = useTheme()

  return (
    <Container
      cssOverrides={css`
        margin-top: ${spaces(2)};
        margin-bottom: ${spaces(2)};
        ${ns} {
          margin-top: ${spaces(4)};
          margin-bottom: ${spaces(3)};
        }
      `}
    >
      <Component
        css={css`
          margin: 0;
          line-height: ${useH1 ? lineHeights(1.1) : 'inherit'};
          font-size: ${fontSizes(useH1 ? 3 : 1)};
          letter-spacing: ${useH1 ? letterSpacings('title') : 0};

          ${ns} {
            line-height: ${useH1 ? lineHeights(1) : 'inherit'};
            font-size: ${fontSizes(useH1 ? 5 : 1)};
          }
        `}
      >
        {siteTitle}
      </Component>
    </Container>
  )
}

export default Header
