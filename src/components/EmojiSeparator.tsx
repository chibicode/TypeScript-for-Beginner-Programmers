/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import React from 'react'
import Emoji, { emojiToComponent } from 'src/components/Emoji'
import { allFontSizes } from 'src/lib/theme/fontSizes'
import { allSpaces } from 'src/lib/theme/spaces'
import useTheme from 'src/hooks/useTheme'
import Caption from 'src/components/Caption'

interface EmojiSeparatorProps {
  emojis: ReadonlyArray<keyof typeof emojiToComponent>
  size?: 'md' | 'lg'
  cssOverrides?: SerializedStyles
  description?: React.ReactNode
}

const fontSize = (
  size: NonNullable<EmojiSeparatorProps['size']>
): ReadonlyArray<keyof typeof allFontSizes> =>
  ({
    md: [2, 2.5] as const,
    lg: [3, 4] as const
  }[size])

const margins = (
  size: NonNullable<EmojiSeparatorProps['size']>
): ReadonlyArray<keyof typeof allSpaces> =>
  ({
    md: [1.25, 1.5] as const,
    lg: [0, 2] as const
  }[size])

const SideSpace = ({ children }: { children: React.ReactNode }) => (
  <span
    css={css`
      margin-left: 0.1em;
      margin-right: 0.1em;
    `}
  >
    {children}
  </span>
)

const EmojiSeparator = ({
  emojis,
  size = 'md',
  cssOverrides,
  description
}: EmojiSeparatorProps) => {
  const { spaces, ns, fontSizes } = useTheme()
  return (
    <div
      css={[
        css`
          text-align: center;
          margin: ${spaces(margins(size)[0])} 0 ${spaces(margins(size)[1])};
          font-size: ${fontSizes(fontSize(size)[0])};
          ${ns} {
            font-size: ${fontSizes(fontSize(size)[1])};
          }
        `,
        cssOverrides
      ]}
    >
      <>
        <span
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          {emojis.map((emoji, index) => (
            <SideSpace key={`${emoji}${index}`}>
              <Emoji type={emoji} />
            </SideSpace>
          ))}
        </span>
        {description && <Caption>{description}</Caption>}
      </>
    </div>
  )
}

export default EmojiSeparator
