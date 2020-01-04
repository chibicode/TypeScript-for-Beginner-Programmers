/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { allColors } from 'src/lib/theme/colors'
import useTheme from 'src/hooks/useTheme'
import CardTitleText from 'src/components/CardTitleText'
import CardSubtitleText from 'src/components/CardSubtitleText'
import CardHeadingText from 'src/components/CardHeadingText'

export interface CardProps {
  children: React.ReactNode
  color?: 'default' | 'pink' | 'green' | 'darkGreen'
  slideNumber?: number
  slideCount?: number
  isFirst?: boolean
  title?: React.ReactNode
  heading?: React.ReactNode
  subtitle?: React.ReactNode
  anchor?: string
  footer?: {
    content: React.ReactNode
    color?: CardProps['color']
  }
}

export interface CardState {
  overrideColor?: CardProps['color']
}

export const backgroundColor = (
  color: NonNullable<CardProps['color']>
): keyof typeof allColors =>
  ({
    default: 'lightYellow1' as const,
    pink: 'lightPink2' as const,
    green: 'lightGreen' as const,
    darkGreen: 'darkGreen' as const
  }[color])

const Card = ({
  title,
  color = 'default',
  children,
  slideNumber,
  slideCount,
  isFirst,
  footer,
  heading,
  subtitle,
  anchor
}: CardProps) => {
  const {
    ns,
    colors,
    fontSizes,
    spaces,
    radii,
    lineHeights,
    letterSpacings
  } = useTheme()
  return (
    <>
      {!isFirst && (
        <div
          id={anchor}
          css={css`
            width: 1.25rem;
            height: 2rem;
            margin: 0 auto;
            background: ${colors('paleGreen')};
          `}
        />
      )}
      <div
        css={css`
          position: relative;
          margin-left: -0.6rem;
          margin-right: -0.6rem;

          ${ns} {
            margin-left: ${spaces('-1.5')};
            margin-right: ${spaces('-1.5')};
          }
        `}
      >
        {slideNumber && slideCount && (
          <div
            css={css`
              position: absolute;
              bottom: -0.5rem;
              right: 1rem;
              font-size: ${fontSizes(0.75)};
              line-height: 1;
              color: ${colors('white')};
              background: ${colors('brown')};
              padding: ${spaces(0.25)} ${spaces(0.5)};
              border-radius: 9999px;
              user-select: none;
            `}
          >
            <>
              <span
                css={css`
                  color: ${colors('white75')};
                `}
              >
                Slide{' '}
              </span>
              <span
                css={css`
                  font-weight: bold;
                `}
              >
                {slideNumber}
              </span>{' '}
              <span
                css={css`
                  color: ${colors('white75')};
                  font-weight: bold;
                `}
              >
                / {slideCount}
              </span>
            </>
          </div>
        )}
        <div>
          <div
            css={css`
              padding-top: ${spaces(1)};
              padding-left: ${spaces(0.75)};
              padding-right: ${spaces(0.75)};
              padding-bottom: ${spaces(0.5)};

              ${ns} {
                padding-top: ${spaces(1.5)};
                padding-left: ${spaces(1.5)};
                padding-right: ${spaces(1.5)};
                padding-bottom: ${spaces(1)};
              }
              border-top-right-radius: ${radii(0.5)};
              border-top-left-radius: ${radii(0.5)};
              border-bottom-right-radius: ${footer ? 0 : radii(0.5)};
              border-bottom-left-radius: ${footer ? 0 : radii(0.5)};
              background: ${colors(backgroundColor(color))};
            `}
          >
            {subtitle && (
              <CardSubtitleText
                css={css`
                  text-align: center;
                  margin-left: ${spaces('-0.25')};
                  margin-right: ${spaces('-0.25')};
                `}
              >
                {subtitle}
              </CardSubtitleText>
            )}
            {title && (
              <CardTitleText
                css={[
                  css`
                    text-align: center;
                    margin-left: ${spaces('-0.25')};
                    margin-right: ${spaces('-0.25')};
                  `,
                  color === 'darkGreen' &&
                    css`
                      color: ${colors('white')};
                    `,
                  heading &&
                    css`
                      font-weight: normal;
                      font-size: ${fontSizes(1)};
                      line-height: ${lineHeights(1)};
                      margin: 0 0 ${spaces(0.5, true)};
                      ${ns} {
                        line-height: ${lineHeights(1.2)};
                        font-size: ${fontSizes(1.2)};
                      }
                    `
                ]}
              >
                {title}
              </CardTitleText>
            )}
            {heading && (
              <CardHeadingText
                css={[
                  css`
                    text-align: center;
                    margin-left: ${spaces('-0.25')};
                    margin-right: ${spaces('-0.25')};
                  `,
                  color === 'darkGreen' &&
                    css`
                      color: ${colors('white')};
                    `
                ]}
              >
                {heading}
              </CardHeadingText>
            )}
            {children}
          </div>
          {footer && (
            <div
              css={css`
                margin-top: ${spaces('-0.5')};
                padding: ${spaces(0.75)};

                ${ns} {
                  padding-top: ${spaces(1)};
                  padding-left: ${spaces(1.5)};
                  padding-right: ${spaces(1.5)};
                  padding-bottom: ${spaces(1)};
                }
                background: ${colors(backgroundColor(footer.color || 'pink'))};
                border-bottom-right-radius: ${radii(0.5)};
                border-bottom-left-radius: ${radii(0.5)};
              `}
            >
              <h4
                css={css`
                  text-align: center;

                  margin: ${spaces(0.25)} 0 ${spaces(0.75)};
                  line-height: ${lineHeights(0.85)};
                  font-size: ${fontSizes(0.85)};

                  letter-spacing: ${letterSpacings('wide')};
                  text-transform: uppercase;
                  color: ${colors('brown')};
                `}
              >
                Side Note
              </h4>
              {footer.content}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Card
