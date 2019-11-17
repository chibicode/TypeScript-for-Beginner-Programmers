export const cupt = `function simpleUseState() {
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
console.log(getState())`

export const kiyi = `// Confused by generics code like this?
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
)`
