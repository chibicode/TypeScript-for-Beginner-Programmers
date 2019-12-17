import React from 'react'
import BubbleQuotes from 'src/components/BubbleQuotes'
import { P } from 'src/components/ContentTags'
import { siteTitle, baseUrl, siteDescription, siteOgImage } from 'src/lib/meta'
import Head from 'next/head'
import Page from 'src/components/Page'
import ArticleList from 'src/components/ArticleList'

export const FirstParagraph = () => (
  <>
    <P>
      <strong>Hello!</strong> I write tutorials to help{' '}
      <em>beginner programmers</em> learn TypeScript. My tutorials might NOT be
      as useful for experienced programmers learning TypeScript.
    </P>
    <P>
      <strong>Why target beginner programmers?</strong> As TypeScript is
      becoming popular, I believe that more beginner programmers will be
      learning it. However, I noticed that many existing TypeScript tutorials
      are too challenging for beginner programmers. I wanted to offer a
      beginner-friendly alternative here.
    </P>
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
                <FirstParagraph />
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
