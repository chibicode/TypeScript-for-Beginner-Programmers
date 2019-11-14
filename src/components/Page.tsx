/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import GlobalStyles from 'src/components/GlobalStyles'
import Head from 'next/head'
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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GlobalStyles>
        <Header useH1={index} />
        <Container
          cssOverrides={css`
            margin-bottom: ${spaces(12)};
          `}
        >
          {children}
        </Container>
      </GlobalStyles>
    </>
  )
}

export default Page
