/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Bird from 'src/components/Emoji/Bird'

export const emojiToComponent = {
  bird: Bird
}

const Emoji = ({
  type,
  noVerticalTransform
}: {
  type: keyof typeof emojiToComponent
  noVerticalTransform?: boolean
}) => {
  const Component = emojiToComponent[type]
  return (
    <span
      css={[
        css`
          display: inline-flex;
          vertical-align: middle;
          height: 1em;
        `,
        !noVerticalTransform &&
          css`
            transform: translateY(-0.125em);
          `
      ]}
    >
      <Component />
    </span>
  )
}

export default Emoji
