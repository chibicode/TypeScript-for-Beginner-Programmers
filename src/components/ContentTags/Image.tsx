/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import Caption from 'src/components/Caption'

const Image = ({
  caption,
  ...props
}: JSX.IntrinsicElements['img'] & {
  caption?: React.ReactNode
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
          width: ${maxWidths('sm')};
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
