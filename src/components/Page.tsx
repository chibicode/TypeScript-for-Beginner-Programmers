import React from 'react'
import GlobalStyles from 'src/components/GlobalStyles'
import Container from 'src/components/Container'

const Page = ({ children }: { children: React.ReactNode }) => (
  <>
    <GlobalStyles>
      <Container>{children}</Container>
    </GlobalStyles>
  </>
)

export default Page
