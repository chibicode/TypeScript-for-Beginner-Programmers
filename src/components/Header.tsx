/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from 'src/components/Container'
import useTheme from 'src/hooks/useTheme'

const Header = ({ useH1 }: { useH1?: boolean }) => {
  const Component = useH1 ? 'h1' : 'h2'
  const { fontSizes, ns, spaces, lineHeights, letterSpacings } = useTheme()

  return (
    <Container
      cssOverrides={css`
        margin-top: ${spaces(2)};
        margin-bottom: ${spaces(2)};
        ${ns} {
          margin-top: ${spaces(4)};
        }
      `}
    >
      <Component
        css={css`
          margin: 0;
          line-height: ${lineHeights(1.1)};
          font-size: ${fontSizes(3)};
          letter-spacing: ${letterSpacings('title')};

          ${ns} {
            line-height: ${lineHeights(1)};
            font-size: ${fontSizes(5)};
          }
        `}
      >
        TypeScript for Beginner Programmers
      </Component>
    </Container>
  )
}

export default Header
