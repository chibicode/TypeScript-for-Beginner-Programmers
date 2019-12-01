/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import TodoBlank from 'src/components/TodoBlank'
import Emoji from 'src/components/Emoji'
import useTheme from 'src/hooks/useTheme'
import { useState, useContext } from 'react'
import TodoWithDataContext from 'src/components/TodoWithDataContext'

const Todo = ({
  index,
  done,
  text
}: {
  index: number
  text: string
  done: boolean
}) => {
  const { spaces, colors } = useTheme()
  const { dispatch, disabled } = useContext(TodoWithDataContext)
  const [todoHovered, setTodoHovered] = useState(false)
  const hoverOn = () => (disabled ? undefined : setTodoHovered(true))
  const hoverOff = () => (disabled ? undefined : setTodoHovered(false))
  return (
    <div
      css={css`
        padding: ${spaces(0.25)} ${spaces(0.5)};
        display: flex;
      `}
    >
      <span
        css={[
          css`
            margin: ${spaces('-0.25')} ${spaces(0.25)} ${spaces('-0.25')}
              ${spaces('-0.25')};
            padding: ${spaces(0.25)};

            display: inline-block;
            outline: none;
          `,
          !disabled &&
            css`
              cursor: pointer;
            `
        ]}
        role="button"
        tabIndex={0}
        onClick={() =>
          disabled ? undefined : dispatch({ type: 'toggle', index })
        }
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
        css={
          done &&
          css`
            color: ${colors('gray')};
          `
        }
      >
        {text}
      </span>
    </div>
  )
}

export default Todo
