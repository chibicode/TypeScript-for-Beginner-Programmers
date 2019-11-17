function simpleUseState() {
  let state: number
  const getState = () => state
  const setState = (x: number) => {
    state = x
  }
  return {
    getState,
    setState
  }
}

const {
  getState,
  setState
} = simpleUseState()
setState(1)
console.log(getState())
setState(2)
console.log(getState())
