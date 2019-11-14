import React from 'react'
import Head from 'next/head'
import Page from 'src/components/Page'
import { P } from 'src/components/ContentTags'
import { siteTitle, baseUrl } from 'src/lib/meta'
import { articlesData } from 'src/lib/articles'
import { dateSchemaString } from 'src/lib/date'

const PostPage = ({
  articleKey
}: {
  articleKey: keyof typeof articlesData
}) => {
  const url = `${baseUrl}/${articleKey}`
  const description = articlesData[articleKey]['description']
  const title = articlesData[articleKey]['title']
  const ogImage = `${baseUrl}/images/og-${articlesData[articleKey]['ogImage']}.png`

  return (
    <Page index={false}>
      <Head>
        <meta property="og:type" content="article" />
        <title key="title">{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta
          property="article:published_time"
          content={dateSchemaString(articlesData[articleKey]['date'])}
        />
      </Head>
      <P>Sorry, this page is under construction.</P>
    </Page>
  )
}

export default PostPage
