function makePair<F, S>() {
  let pair: { first: F; second: S }

  function getPair() {
    return pair
  }

  function setPair(x: F, y: S) {
    pair = {
      first: x,
      second: y
    }
  }

  return { getPair, setPair }
}
