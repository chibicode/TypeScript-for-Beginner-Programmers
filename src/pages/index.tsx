/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Page from 'src/components/Page'
import BubbleQuotes from 'src/components/BubbleQuotes'
import { P } from 'src/components/ContentTags'
import InternalLink from 'src/components/InternalLink'
import useTheme from 'src/hooks/useTheme'
import { articlesList, articlesData } from 'src/lib/articles'
import { dateString } from 'src/lib/date'

const ArticleLink = ({
  title,
  href,
  date
}: {
  title: string
  href: string
  date: string
}) => {
  const { colors, ns, fontSizes, spaces, lineHeights } = useTheme()
  return (
    <li
      css={css`
        padding: 0;
        margin-bottom: ${spaces(2)};
      `}
    >
      <p
        css={css`
          margin: 0 0 ${spaces(0.5)};
        `}
      >
        <InternalLink
          href={href}
          css={css`
            font-weight: bold;
            text-decoration: none;
            line-height: ${lineHeights(1.3)};
            font-size: ${fontSizes(1.4)};
            ${ns} {
              font-size: ${fontSizes(1.6)};
            }

            &:hover {
              background: ${colors('lightYellow1')};
            }
          `}
        >
          {title}
        </InternalLink>
      </p>
      <p
        css={css`
          margin: 0;
          font-size: ${fontSizes(0.85)};
          color: ${colors('brown')};
        `}
      >
        {date}
      </p>
    </li>
  )
}

const Index = () => {
  const { spaces, fontSizes, letterSpacings, colors } = useTheme()
  return (
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
                  programmers (people with only a few months of coding
                  experience) will be learning it,{' '}
                  <em>possibly as one of their first languages</em>. So I wanted
                  to create tutorials specifically targeting beginner
                  programmers.
                </P>
              </>
            )
          }
        ]}
      />
      <h4
        css={css`
          font-size: ${fontSizes(0.85)};
          letter-spacing: ${letterSpacings('wide')};
          text-transform: uppercase;
          margin: 0 0 ${spaces(1)};
          color: ${colors('brown')};
        `}
      >
        Articles
      </h4>
      <ul
        css={css`
          list-style: none;
          margin: 0;
          padding: 0;
        `}
      >
        {articlesList.map(articleKey => (
          <ArticleLink
            key={articleKey}
            title={articlesData[articleKey]['title']}
            href={`/${articleKey}`}
            date={dateString(articlesData[articleKey]['date'])}
          />
        ))}
      </ul>
    </Page>
  )
}

export default Index
