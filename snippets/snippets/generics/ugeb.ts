function makePair() {
  // Stores a pair of values
  let pair: { first: number; second: number }

  function getPair() {
    return pair
  }

  // Stores x as first and y as second
  function setPair(x: number, y: number) {
    pair = {
      first: x,
      second: y
    }
  }

  return { getPair, setPair }
}
