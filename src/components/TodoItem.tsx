/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import TodoBlank from 'src/components/TodoBlank'
import useTheme from 'src/hooks/useTheme'

const Todo = ({ text }: { text: string }) => {
  const { spaces } = useTheme()
  return (
    <div
      css={css`
        padding: ${spaces(0.25)} ${spaces(0.5)};
        display: flex;
      `}
    >
      <span
        css={css`
          margin-right: ${spaces(0.5)};
        `}
      >
        <TodoBlank />
      </span>
      {text}
    </div>
  )
}

export default Todo
