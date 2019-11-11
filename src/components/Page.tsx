import React from 'react'
import GlobalStyles from 'src/components/GlobalStyles'
import Container from 'src/components/Container'
import Header from 'src/components/Header'

const Page = ({
  children,
  index
}: {
  children: React.ReactNode
  index?: boolean
}) => (
  <>
    <GlobalStyles>
      <Header useH1={index} />
      <Container>{children}</Container>
    </GlobalStyles>
  </>
)

export default Page
