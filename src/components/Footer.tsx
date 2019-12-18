/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from 'src/components/Container'
import useTheme from 'src/hooks/useTheme'
import { A } from 'src/components/ContentTags'
import GitHubButton from 'src/components/GitHubButton'

const Footer = () => {
  const { fontSizes, ns, spaces, colors } = useTheme()

  return (
    <Container
      cssOverrides={css`
        font-size: ${fontSizes(0.85)};
        margin-bottom: ${spaces(2)};
        color: ${colors('brown')};

        ${ns} {
          margin-bottom: ${spaces(3)};
        }
      `}
    >
      Source available on{' '}
      <A href="https://github.com/chibicode/TypeScript-for-Beginner-Programmers">
        <strong>GitHub</strong>
      </A>
      : <GitHubButton />
    </Container>
  )
}

export default Footer
