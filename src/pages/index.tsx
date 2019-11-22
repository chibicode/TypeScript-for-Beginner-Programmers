/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import BubbleQuotes from 'src/components/BubbleQuotes'
import { P } from 'src/components/ContentTags'
import useTheme from 'src/hooks/useTheme'
import { siteTitle, baseUrl, siteDescription, siteOgImage } from 'src/lib/meta'
import Head from 'next/head'
import { useState } from 'react'
import IndexPage from 'src/components/IndexPage'

export const FirstParagraph = ({
  defaultVisible = true
}: {
  defaultVisible?: boolean
}) => {
  const [visible, setVisible] = useState(defaultVisible)
  const { colors } = useTheme()
  return (
    <>
      <P>
        <strong>Hello!</strong> I write tutorials to help{' '}
        <em>beginner programmers</em> learn TypeScript. My tutorials might NOT
        be as useful for experienced programmers learning TypeScript.
        {!visible && (
          <>
            {' '}
            (
            <span
              css={css`
                text-decoration: underline;
                cursor: pointer;
                &:hover {
                  background: ${colors('white85')};
                }
              `}
              tabIndex={0}
              role="button"
              aria-pressed="false"
              onClick={() => setVisible(true)}
            >
              Read more…
            </span>
            )
          </>
        )}
      </P>
      {visible && (
        <P>
          <strong>Why target beginner programmers?</strong> As TypeScript is
          becoming popular, I believe that more beginner programmers (people
          with only a few months of coding experience) will be learning it,{' '}
          <em>possibly as one of their first languages</em>. So I wanted to
          create tutorials specifically targeting beginner programmers.
        </P>
      )}
    </>
  )
}

const Index = () => {
  return (
    <IndexPage>
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
            children: (
              <>
                <FirstParagraph />
              </>
            )
          }
        ]}
      />
    </IndexPage>
  )
}

export default Index
