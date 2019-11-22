// Extract into a generic interface
// to make it reusable
interface Pair<A, B> {
  first: A
  second: B
}

function makePair<F, S>() {
  // Usage: Pass F for A and S for B
  let pair: Pair<F, S>

  // ...
}
