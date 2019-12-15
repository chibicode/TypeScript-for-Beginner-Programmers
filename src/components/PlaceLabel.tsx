/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import useTheme from 'src/hooks/useTheme'
import { Todo } from 'src/components/TodoWithData'

const PlaceLabel = ({ place }: { place: NonNullable<Todo['place']> }) => {
  const { colors, spaces, fontSizes, radii } = useTheme()
  return (
    <span
      css={css`
        font-weight: bold;
        display: inline-block;
        background: ${colors('white')};
        padding: ${spaces(0.125)} ${spaces(0.5)};
        font-size: ${fontSizes(0.8, true)};
        border: 2px solid ${colors('paleGreen')};
        border-radius: ${radii(0.25)};
        color: ${colors('darkGreen')};
      `}
    >
      <span
        css={css`
          margin-right: ${spaces(0.125)};
        `}
      >
        <Emoji type={place === 'home' || place === 'work' ? place : 'pin'} />
      </span>{' '}
      {place === 'home' ? 'Home' : place === 'work' ? 'Work' : place.custom}
    </span>
  )
}

export default PlaceLabel
