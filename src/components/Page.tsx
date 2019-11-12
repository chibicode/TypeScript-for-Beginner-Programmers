/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import GlobalStyles from 'src/components/GlobalStyles'
import Container from 'src/components/Container'
import Header from 'src/components/Header'
import useTheme from 'src/hooks/useTheme'

const Page = ({
  children,
  index
}: {
  children: React.ReactNode
  index?: boolean
}) => {
  const { spaces } = useTheme()
  return (
    <>
      <GlobalStyles>
        <Header useH1={index} />
        <Container
          cssOverrides={css`
            margin-bottom: ${spaces(8)};
          `}
        >
          {children}
        </Container>
      </GlobalStyles>
    </>
  )
}

export default Page
