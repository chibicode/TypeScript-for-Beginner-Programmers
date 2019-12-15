type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  // Union Type: Can be either 'home' or 'work'
  place: 'home' | 'work'
}>
