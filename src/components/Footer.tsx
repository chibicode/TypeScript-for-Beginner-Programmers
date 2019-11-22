/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from 'src/components/Container'
import useTheme from 'src/hooks/useTheme'
import { A } from 'src/components/ContentTags'

const Footer = () => {
  const { fontSizes, ns, spaces, colors } = useTheme()

  return (
    <Container
      cssOverrides={css`
        font-size: ${fontSizes(0.85)};
        text-align: center;
        margin-bottom: ${spaces(2)};
        color: ${colors('brown')};

        ${ns} {
          margin-bottom: ${spaces(3)};
        }
      `}
    >
      The source code for this site is{' '}
      <A href="https://github.com/chibicode/TypeScript-for-Beginner-Programmers">
        available on <strong>GitHub</strong>
      </A>
      .
    </Container>
  )
}

export default Footer
