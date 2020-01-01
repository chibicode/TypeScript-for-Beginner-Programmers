/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import React from 'react'
import Emoji, { emojiToComponent } from 'src/components/Emoji'
import { allFontSizes } from 'src/lib/theme/fontSizes'
import { allSpaces } from 'src/lib/theme/spaces'
import useTheme from 'src/hooks/useTheme'
import Caption from 'src/components/Caption'

interface EmojiSeparatorProps {
  emojis?: ReadonlyArray<keyof typeof emojiToComponent>
  size?: 'sm' | 'md' | 'lg'
  cssOverrides?: SerializedStyles
  description?: React.ReactNode
  customChildren?: React.ReactNode
  leftAlign?: boolean
  href?: string
}

const fontSize = (
  size: NonNullable<EmojiSeparatorProps['size']>
): ReadonlyArray<keyof typeof allFontSizes> =>
  ({
    sm: [1, 1.2] as const,
    md: [2.2, 2.5] as const,
    lg: [3, 4] as const
  }[size])

const margins = (
  size: NonNullable<EmojiSeparatorProps['size']>
): ReadonlyArray<keyof typeof allSpaces> =>
  ({
    sm: [0.75, 1] as const,
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
  description,
  customChildren,
  leftAlign,
  href
}: EmojiSeparatorProps) => {
  const { spaces, ns, fontSizes } = useTheme()
  const EmojiWrapperComponent = href ? 'a' : 'span'
  const emojiWrapperComponentAttrs = href ? { href } : {}
  return (
    <div
      css={[
        css`
          margin: ${spaces(margins(size)[0])} 0 ${spaces(margins(size)[1])};
          font-size: ${fontSizes(fontSize(size)[0])};
          ${ns} {
            font-size: ${fontSizes(fontSize(size)[1])};
          }
        `,
        cssOverrides,
        !leftAlign &&
          css`
            text-align: center;
          `
      ]}
    >
      <>
        <EmojiWrapperComponent
          {...emojiWrapperComponentAttrs}
          css={[
            css`
              display: flex;
            `,
            !leftAlign &&
              css`
                align-items: center;
                justify-content: center;
              `
          ]}
        >
          {customChildren ||
            (emojis || []).map((emoji, index) => (
              <SideSpace key={`${emoji}${index}`}>
                <Emoji type={emoji} />
              </SideSpace>
            ))}
        </EmojiWrapperComponent>
        {description && (
          <Caption
            cssOverrides={
              size === 'lg' &&
              css`
                margin-top: ${spaces('-0.5')};
              `
            }
          >
            {description}
          </Caption>
        )}
      </>
    </div>
  )
}

export default EmojiSeparator
