/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji, { emojiToComponent } from 'src/components/Emoji'
import useTheme from 'src/hooks/useTheme'
import { allColors } from 'src/lib/theme/colors'

interface BubbleQuoteProps {
  type?: keyof typeof emojiToComponent
  children: React.ReactNode
  backgroundColor?: keyof typeof allColors
}

type Size = 'md' | 'lg'

const BubbleQuotes = ({
  quotes,
  size = 'md'
}: {
  quotes: readonly BubbleQuoteProps[]
  size?: Size
}) => {
  const { ns, spaces, radii, colors, fontSizes, lineHeights } = useTheme()
  return (
    <div
      css={css`
        margin-top: ${spaces(1.75, true)};
        margin-bottom: ${spaces(1.75, true)};
        ${ns} {
          font-size: ${size === 'lg' ? fontSizes(1.2) : fontSizes(1)};
          line-height: ${size === 'lg' ? lineHeights(1.2) : lineHeights(1)};
        }
      `}
    >
      {quotes.map(({ type, children, backgroundColor = 'white' }, index) => (
        <div
          key={`${type}${index}`}
          css={css`
            margin: 0 0 ${spaces(1, true)};
            display: flex;
          `}
        >
          {type && (
            <div
              css={css`
                font-size: ${size === 'lg' ? fontSizes(2) : fontSizes(1.6)};
                margin-right: ${size === 'lg' ? spaces(0.5) : spaces(0.25)};
                padding-top: ${spaces(0.5)};

                ${ns} {
                  padding-top: ${size === 'lg' ? spaces(0) : spaces(0.25)};
                  margin-right: ${size === 'lg' ? spaces(1) : spaces(0.75)};
                  font-size: ${size === 'lg' ? fontSizes(4) : fontSizes(2)};
                }
              `}
            >
              <Emoji type={type} />
            </div>
          )}
          <div
            css={css`
              background: ${colors(backgroundColor)};
              padding: ${spaces(1, true)} ${spaces(1, true)} 0;
              border-radius: ${radii(0.5)};

              ${ns} {
                padding: ${spaces(1, true)} ${spaces(1, true)} 0;
              }
            `}
          >
            {children}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BubbleQuotes
