import React from 'react'
import BubbleQuotes from 'src/components/BubbleQuotes'
import { P } from 'src/components/ContentTags'
import { siteTitle, siteOgImage } from 'src/lib/meta'
import Head from 'next/head'
import IndexPage from 'src/components/IndexPage'

const PageNotFound = () => {
  return (
    <IndexPage>
      <Head>
        <title key="title">Page Not Found</title>
        <meta property="og:title" content="Page Not Found" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Page Not Found" />
        <meta name="description" content="Page Not Found" />
        <meta property="og:image" content={siteOgImage} />
      </Head>
      <BubbleQuotes
        size="lg"
        quotes={[
          {
            type: 'bird',
            children: (
              <>
                <P>
                  <strong>Page not found!</strong>
                </P>
                <P>Take a look at the articles below:</P>
              </>
            )
          }
        ]}
      />
    </IndexPage>
  )
}

export default PageNotFound
