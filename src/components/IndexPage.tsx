/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Page from 'src/components/Page'
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
  const {
    colors,
    ns,
    fontSizes,
    spaces,
    lineHeights,
    letterSpacings
  } = useTheme()
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
            line-height: ${lineHeights(1.6)};
            font-size: ${fontSizes(1.6)};
            letter-spacing: ${letterSpacings('title')};
            ${ns} {
              line-height: ${lineHeights(2.5)};
              font-size: ${fontSizes(2.5)};
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

const IndexPage = ({ children }: { children: React.ReactNode }) => {
  const { ns, spaces, fontSizes, letterSpacings, colors } = useTheme()
  return (
    <Page index>
      {children}
      <h4
        css={css`
          font-size: ${fontSizes(0.85)};
          letter-spacing: ${letterSpacings('wide')};
          text-transform: uppercase;
          margin-bottom: ${spaces(1)};
          margin-top: ${spaces(2)};
          color: ${colors('brown')};

          ${ns} {
            margin-top: ${spaces(3)};
          }
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

export default IndexPage
