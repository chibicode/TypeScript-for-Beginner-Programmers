import React from 'react'
import BubbleQuotes from 'src/components/BubbleQuotes'
import { P } from 'src/components/ContentTags'
import { siteTitle, baseUrl, siteDescription, siteOgImage } from 'src/lib/meta'
import Head from 'next/head'
import Page from 'src/components/Page'
import ReadMore from 'src/components/ReadMore'
import ArticleList from 'src/components/ArticleList'

export const FirstParagraph = ({
  defaultVisible
}: {
  defaultVisible?: boolean
}) => (
  <>
    <ReadMore
      rest={
        <P>
          <strong>Why target beginner programmers?</strong> As TypeScript is
          becoming popular, I believe that more beginner programmers (people
          with only a few months of coding experience) will be learning it,{' '}
          <em>possibly as one of their first languages</em>. So I wanted to
          create tutorials specifically targeting beginner programmers.
        </P>
      }
      readMoreText="Read more…"
      preview={readMore => (
        <P>
          <strong>Hello!</strong> I write tutorials to help{' '}
          <em>beginner programmers</em> learn TypeScript. My tutorials might NOT
          be as useful for experienced programmers learning TypeScript.
          {readMore}
        </P>
      )}
      defaultVisible={defaultVisible}
    />
  </>
)

const Index = () => {
  return (
    <Page index>
      <Head>
        <title key="title">{siteTitle}</title>
        <meta property="og:title" content={siteTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={baseUrl} />
        <meta property="og:description" content={siteDescription} />
        <meta name="description" content={siteDescription} />
        <meta property="og:image" content={siteOgImage} />
      </Head>
      <BubbleQuotes
        size="lg"
        quotes={[
          {
            type: 'bird',
            backgroundColor: 'lightYellow1',
            children: (
              <>
                <FirstParagraph defaultVisible />
              </>
            )
          }
        ]}
      />
      <ArticleList />
    </Page>
  )
}

export default Index
