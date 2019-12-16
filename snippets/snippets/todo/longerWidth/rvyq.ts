type Place = 'home' | 'work' | { custom: string }

type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  // place is optional
  place?: Place
}>
