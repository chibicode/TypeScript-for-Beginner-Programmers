/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import useTheme from 'src/hooks/useTheme'

const PlaceLabel = ({ place }: { place: 'home' | 'work' }) => {
  const { colors, spaces, fontSizes, radii } = useTheme()
  return (
    <span
      css={css`
        font-weight: bold;
        display: inline-block;
        background: ${colors('white')};
        padding: ${spaces(0.125)} ${spaces(0.5)};
        font-size: ${fontSizes(0.85, true)};
        border: 2px solid ${colors('paleGreen')};
        border-radius: ${radii(0.25)};
      `}
    >
      <span
        css={css`
          margin-right: ${spaces(0.125)};
        `}
      >
        <Emoji type={place} />
      </span>{' '}
      {place === 'home' ? 'Home' : 'Work'}
    </span>
  )
}

export default PlaceLabel
