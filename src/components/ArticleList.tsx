/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { articleKeys, articlesData } from 'src/lib/articles'
import { dateString } from 'src/lib/date'
import useTheme from 'src/hooks/useTheme'
import InternalLink from 'src/components/InternalLink'

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
          cssOverrides={css`
            font-weight: bold;
            text-decoration: none;
            line-height: ${lineHeights(1.6)};
            font-size: ${fontSizes(1.6)};
            letter-spacing: ${letterSpacings('title')};
            ${ns} {
              line-height: ${lineHeights(2)};
              font-size: ${fontSizes(2)};
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

const ArticleList = ({
  ignoreArticleKey
}: {
  ignoreArticleKey?: keyof typeof articlesData
}) => {
  const { ns, spaces, fontSizes, letterSpacings, colors } = useTheme()
  const filteredArticleKeys = articleKeys.filter(
    articleKey => articleKey !== ignoreArticleKey
  )
  return filteredArticleKeys.length > 0 ? (
    <>
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
        {ignoreArticleKey ? 'More ' : ''}Article
        {filteredArticleKeys.length > 1 ? 's' : ''}
      </h4>
      <ul
        css={css`
          list-style: none;
          margin: 0;
          padding: 0;
        `}
      >
        {filteredArticleKeys.map(articleKey => (
          <ArticleLink
            key={articleKey}
            title={articlesData[articleKey]['title']}
            href={`/${articleKey}`}
            date={dateString(articlesData[articleKey]['date'])}
          />
        ))}
      </ul>
    </>
  ) : (
    <></>
  )
}

export default ArticleList
