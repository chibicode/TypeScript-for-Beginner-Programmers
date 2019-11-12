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
                <strong>Hello!</strong> I write tutorials that might help{' '}
                <em>beginner programmers</em> learn TypeScript. They might NOT
                be as useful for experienced programmers who are new to
                TypeScript.
              </P>
              <P>
                <strong>Why targeting beginner programmers?</strong> As
                TypeScript is becoming popular, I believe that more beginner
                programmers (people with only a few months of coding experience)
                will be learning it,{' '}
                <em>possibly as one of their first languages</em>. So I wanted
                to create tutorials specifically targeting beginner programmers.
              </P>
            </>
          )
        }
      ]}
    />
  </Page>
)

export default Index
