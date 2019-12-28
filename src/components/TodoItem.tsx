/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import TodoBlank from 'src/components/TodoBlank'
import Emoji from 'src/components/Emoji'
import useTheme from 'src/hooks/useTheme'
import { useState, useContext } from 'react'
import TodoWithDataContext from 'src/components/TodoWithDataContext'
import { Todo } from 'src/components/TodoWithData'
import PlaceLabel from 'src/components/PlaceLabel'

const TodoItem = ({
  index,
  done,
  text,
  place
}: {
  index: number
  text: Todo['text']
  done: Todo['done']
  place: Todo['place']
}) => {
  const { spaces, colors } = useTheme()
  const { dispatch } = useContext(TodoWithDataContext)
  const [todoHovered, setTodoHovered] = useState(false)
  const hoverOn = () => setTodoHovered(true)
  const hoverOff = () => setTodoHovered(false)
  return (
    <div
      css={css`
        padding: ${spaces(0.25)} ${spaces(0.5)};
        display: flex;
        align-items: center;
      `}
    >
      <span
        css={[
          css`
            margin: ${spaces('-0.25')} 0 ${spaces('-0.25')} ${spaces('-0.25')};
            padding: ${spaces(0.25)} ${spaces(0.5)} ${spaces(0.25)}
              ${spaces(0.25)};

            display: inline-block;
            outline: none;
            cursor: pointer;
          `
        ]}
        role="button"
        tabIndex={0}
        onClick={() => dispatch({ type: 'toggle', index })}
        onMouseOver={hoverOn}
        onMouseOut={hoverOff}
        onTouchStart={hoverOn}
        onTouchEnd={hoverOff}
        onTouchCancel={hoverOff}
        onFocus={hoverOn}
        onBlur={hoverOff}
      >
        {done ? <Emoji type="check" /> : <TodoBlank hovered={todoHovered} />}
      </span>
      <span
        css={css`
          flex: 1;
        `}
      >
        <span
          css={[
            css`
              cursor: pointer;
            `,
            done &&
              css`
                color: ${colors('gray')};
              `
          ]}
          onClick={() => dispatch({ type: 'toggle', index })}
          onMouseOver={hoverOn}
          onMouseOut={hoverOff}
          onTouchStart={hoverOn}
          onTouchEnd={hoverOff}
          onTouchCancel={hoverOff}
          onFocus={hoverOn}
          onBlur={hoverOff}
        >
          {text}
        </span>
      </span>
      {place && <PlaceLabel place={place} />}
    </div>
  )
}

export default TodoItem
