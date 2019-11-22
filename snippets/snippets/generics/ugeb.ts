function makePair() {
  let pair: { first: number; second: number }

  function getPair() {
    return pair
  }

  function setPair(x: number, y: number) {
    pair = {
      first: x,
      second: y
    }
  }

  return { getPair, setPair }
}
