/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import TodoBlank from 'src/components/TodoBlank'
import Emoji from 'src/components/Emoji'
import useTheme from 'src/hooks/useTheme'
import { useState } from 'react'

const Todo = ({ done, text }: { text: string; done: boolean }) => {
  const { spaces, colors } = useTheme()
  const [todoDone, setTodoDone] = useState(done)
  const [todoHovered, setTodoHovered] = useState(false)
  return (
    <div
      css={css`
        padding: ${spaces(0.25)} ${spaces(0.5)};
        display: flex;
      `}
    >
      <span
        css={css`
          margin: ${spaces('-0.25')} ${spaces(0.25)} ${spaces('-0.25')}
            ${spaces('-0.25')};
          padding: ${spaces(0.25)};
          cursor: pointer;
          display: inline-block;
          outline: none;
        `}
        role="button"
        tabIndex={0}
        onClick={() => setTodoDone(!todoDone)}
        onMouseOver={() => setTodoHovered(true)}
        onMouseOut={() => setTodoHovered(false)}
        onTouchStart={() => setTodoHovered(true)}
        onTouchEnd={() => setTodoHovered(false)}
        onTouchCancel={() => setTodoHovered(false)}
        onFocus={() => setTodoHovered(true)}
        onBlur={() => setTodoHovered(false)}
      >
        {todoDone ? (
          <Emoji type="check" />
        ) : (
          <TodoBlank hovered={todoHovered} />
        )}
      </span>
      <span
        css={
          todoDone &&
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
