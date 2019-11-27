/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'
import CodeResult from 'src/components/CodeResult'
import Caption from 'src/components/Caption'
import TodoList from 'src/components/TodoList'
import PromptArrowText from 'src/components/PromptArrowText'

export type TodoType = {
  id: number
  text: string
  done: boolean
}

const TodoWithData = ({
  defaultData,
  caption,
  promptArrowText
}: {
  defaultData: TodoType[]
  caption?: React.ReactNode
  promptArrowText?: React.ReactNode
}) => {
  const { spaces, ns, maxWidths } = useTheme()
  return (
    <div
      css={css`
        margin: ${spaces(2)} auto;
        max-width: ${maxWidths('sm')};
      `}
    >
      <div
        css={css`
          margin-left: ${spaces('-0.5')};
          margin-right: ${spaces('-0.5')};
          ${ns} {
            margin-left: ${spaces(0)};
            margin-right: ${spaces(0)};
          }
        `}
      >
        <Caption>{caption}</Caption>
        <CodeResult
          resultType="default"
          resultComponent={<TodoList todos={defaultData} />}
        />
        {promptArrowText && (
          <PromptArrowText>{promptArrowText}</PromptArrowText>
        )}
      </div>
    </div>
  )
}

export default TodoWithData
