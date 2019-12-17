/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { A } from 'src/components/ContentTags'
import useTheme from 'src/hooks/useTheme'

export const SourceAvailableText = () => (
  <>
    The source code for this site is on{' '}
    <A href="https://github.com/chibicode/TypeScript-for-Beginner-Programmers">
      GitHub
    </A>
    : <GitHubButton />
  </>
)

const GitHubButton = () => {
  const { spaces } = useTheme()
  return (
    <iframe
      css={css`
        vertical-align: middle;
        transform: translateY(-0.1em);
        margin: ${spaces(0.25)} 0;
      `}
      src="https://ghbtns.com/github-btn.html?user=chibicode&repo=TypeScript-for-Beginner-Programmers&type=star&count=true&size=large"
      frameBorder="0"
      scrolling="0"
      width="160px"
      height="30px"
    ></iframe>
  )
}

export default GitHubButton
