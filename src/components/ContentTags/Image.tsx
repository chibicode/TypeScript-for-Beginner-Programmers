/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import Caption from 'src/components/Caption'
import { allMaxWidths } from 'src/lib/theme/maxWidths'

const Image = ({
  caption,
  customWidth,
  ...props
}: JSX.IntrinsicElements['img'] & {
  caption?: React.ReactNode
  customWidth?: keyof typeof allMaxWidths
}) => {
  const { spaces, maxWidths } = useTheme()
  return (
    <figure
      css={css`
        margin: ${spaces(2)} 0;
      `}
    >
      <img
        src=""
        css={css`
          display: block;
          margin: 0 auto;
          max-width: 100%;
          width: ${maxWidths(customWidth || 'sm')};
        `}
        {...props}
      />
      {caption && (
        <Caption
          skipPaddingBottom
          cssOverrides={css`
            margin-top: ${spaces(0.5)};
          `}
          Component={'figcaption'}
        >
          {caption}
        </Caption>
      )}
    </figure>
  )
}

export default Image
