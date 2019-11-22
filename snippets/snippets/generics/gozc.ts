// Creates a (number, string) pair
const { getPair, setPair } = makePair<
  number,
  string
>()

// Must pass (number, string)
setPair(1, 'hello')
