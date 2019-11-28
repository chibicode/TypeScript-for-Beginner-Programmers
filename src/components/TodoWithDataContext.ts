import { createContext, Dispatch } from 'react'
import { TodoAction } from 'src/components/TodoWithData'

export interface TodoWithDataContextProps {
  dispatch: Dispatch<TodoAction>
  disabled?: boolean
}

export const todoWithDataContextDefault: TodoWithDataContextProps = {
  dispatch: () => {}
}

export default createContext<TodoWithDataContextProps>(
  todoWithDataContextDefault
)
