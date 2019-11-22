// You can make type S to be related to type F.
// Whatever type you specify for F determines
// the possible types of S.
function makePair<
  F extends number | string,
  S extends { foo: F }
>()

// Example usage: We’ll pass in number for F, so
// for S, we must pass in a type that extends
// or is equal to { foo: number }.
const { getPair, setPair } = makePair<
  number,
  { foo: number }
>()

// Now, setPair takes number and
// an object containing { foo: number } pair
setPair(1, { foo: 5 })
