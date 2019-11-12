import React from 'react'
import Page from 'src/components/Page'
import BubbleQuotes from 'src/components/BubbleQuotes'
import { P } from 'src/components/ContentTags'

const Index = () => (
  <Page>
    <BubbleQuotes
      size="lg"
      quotes={[
        {
          type: 'bird',
          children: (
            <>
              <P>
                Hello World! Hello World! Hello World! Hello World! Hello World!
                Hello World! Hello World! Hello World! Hello World! Hello World!{' '}
              </P>
            </>
          )
        }
      ]}
    />
  </Page>
)

export default Index
