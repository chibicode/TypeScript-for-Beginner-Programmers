/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import Page from 'src/components/Page'
import { siteTitle, baseUrl } from 'src/lib/meta'
import { articlesData } from 'src/lib/articles'
import { dateString, dateSchemaString } from 'src/lib/date'
import BubbleQuotes from 'src/components/BubbleQuotes'
import useTheme from 'src/hooks/useTheme'
import { FirstParagraph } from 'src/pages/index'

const PostPage = ({
  articleKey
}: {
  articleKey: keyof typeof articlesData
}) => {
  const url = `${baseUrl}/${articleKey}`
  const description = articlesData[articleKey]['description']
  const title = articlesData[articleKey]['title']
  const ogImage = `${baseUrl}/images/og-${articlesData[articleKey]['ogImage']}.png`
  const {
    colors,
    fontSizes,
    ns,
    lineHeights,
    letterSpacings,
    spaces
  } = useTheme()

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
      <div
        css={css`
          font-size: ${fontSizes(0.85)};
          font-weight: bold;
          letter-spacing: ${letterSpacings('wide')};
          text-transform: uppercase;
          color: ${colors('brown')};
          font-size: ${fontSizes(0.85)};
          margin-bottom: ${spaces(0.25)};
        `}
      >
        <time dateTime={dateSchemaString(articlesData[articleKey]['date'])}>
          {dateString(articlesData[articleKey]['date'])}
        </time>
      </div>
      <h1
        css={css`
          margin: 0;
          line-height: ${lineHeights(2)};
          font-size: ${fontSizes(2)};
          letter-spacing: ${letterSpacings('title')};

          ${ns} {
            line-height: ${lineHeights(3)};
            font-size: ${fontSizes(3)};
          }
        `}
      >
        {title}
      </h1>
      <BubbleQuotes
        quotes={[
          {
            type: 'bird',
            backgroundColor: 'pink',
            children: (
              <>
                <FirstParagraph defaultVisible={false} />
              </>
            )
          }
        ]}
      ></BubbleQuotes>
    </Page>
  )
}

export default PostPage
