export const bfka = `// We want to modify makeState() to support
// creating two different states:

// One that only allows numbers, and…
const numState = makeState()
numState.setState(1)
console.log(numState.getState()) // 1

// The other that only allows strings.
const strState = makeState()
strState.setState('foo')
console.log(strState.getState()) // foo`

export const bqvz = `// Declare a generic function
function genericFunc<T>() {
  // You can use T here
}

// Call it: T will be number
genericFunc<number>()`

export const brze = `function makeState<S>() {
  let state: S

  function getState() {
    return state
  }

  function setState(x: S) {
    state = x
  }

  return { getState, setState }
}`

export const cbeq = `const { getState, setState } = makeState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())`

export const cupt = `function makeState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}`

export const defo = `function makeState<S>() {
  let state: S

  function getState() {
    return state
  }

  function setState(x: S) {
    state = x
  }

  return { getState, setState }
}

const numState = makeState<number>()
numState.setState(1)
console.log(numState.getState())

const strState = makeState<string>()
strState.setState('foo')
console.log(strState.getState())`

export const dngl = `function makeState<
  S extends number | string
>() {
  let state: S

  function getState() {
    return state
  }

  function setState(x: S) {
    state = x
  }

  return { getState, setState }
}

// What happens if we now pass boolean to S?
const boolState = makeState<boolean>()`

export const gjgg = `// Creates a number-only state
const numState = makeState<number>()
numState.setState(1)
console.log(numState.getState())

// numState.setState('foo') will fail!`

export const gkgi = `function makeState() {
  // Change to string
  let state: string

  function getState() {
    return state
  }

  // Accepts a string
  function setState(x: string) {
    state = x
  }

  return { getState, setState }
}`

export const gzwe = `// Don’t need to use <number>
const numState = makeState()

numState.setState(1)
console.log(numState.getState())`

export const hkgv = `// Creates a string-only state
const strState = makeState<string>()
strState.setState('foo')
console.log(strState.getState())

// strState.setState(1) will fail!`

export const jdhu = `// It sets S as number
makeState<number>()`

export const kbld = `// Limits the type of T
function genericFunc<T extends number>()

// Success
genericFunc<number>()
// Error
genericFunc<string>()`

export const kiyi = `// Confused by generics code like this?
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
)`

export const llvc = `// Creates a boolean-only state
const boolState = makeState<boolean>()
boolState.setState(true)
console.log(boolState.getState())`

export const mngc = `function makeState<S extends number | string>()`

export const nnyl = `function makeState() {
  let state: number

  function getState() {
    return state
  }

  // setState() expects a number
  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}`

export const nuzz = `function makeState<
  A extends number | string,
  B extends number | string
>() {
  let state: [A, B]

  function getState() {
    return state
  }

  function setState(first: A, second: B) {
    state = [first, second]
  }

  return { getState, setState }
}

const state = makeState<number, string>()
state.setState(1, 'cat')
console.log(state.getState())`

export const nyih = `// Set the default type of T
function genericFunc<T = number>()

// T will be number inside the function
genericFunc()`

export const osaa = `function makeState() {
  // Change to string
  let state: string

  function getState() {
    return state
  }

  // Accepts a string
  function setState(x: string) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = makeState()

setState('foo')
console.log(getState())`

export const pjcw = `// Set default value of x
function regularFunc(x = 2)

// x will be 2 inside the function
regularFunc()`

export const qini = `// Specify x to be number
function regularFunc(x: number)

// Success
regularFunc(1)
// Error
regularFunc('foo')`

export const qqic = `// Doesn't work because the created state…
const numAndStrState = makeState()

// Supports both numbers…
numAndStrState.setState(1)
console.log(numAndStrState.getState())

// And strings.
numAndStrState.setState('foo')
console.log(numAndStrState.getState())

// This is NOT what we want. We want to create
// a number-only state, and a string-only state.`

export const rebo = `// In the function definition of makeState()
let state: S // <- number

function setState(x: S /* <- number */) {
  state = x
}`

export const stkh = `const { getState, setState } = makeState()

// What happens if we use a string instead?
setState('foo')
console.log(getState())`

export const thxf = `// Set default type of S as number
function makeState<
  S extends number | string = number
>()`

export const udpv = `function makeState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = makeState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())`

export const wpru = `// Declare a regular function
function regularFunc(x: any) {
  // You can use x here
}

// Call it: x will be 1
regularFunc(1)`

export const xeax = `const { getState, setState } = makeState()

setState('foo')
console.log(getState())`

export const xfwf = `// Can we make it so that, <number> is the
// default type paramter of makeState()?

// We want these two statements to be equivalent
const numState1 = makeState()
const numState2 = makeState<number>()`

export const ystu = `function makeState() {
  let state: number | string

  function getState() {
    return state
  }

  function setState(x: number | string) {
    state = x
  }

  return { getState, setState }
}`

export const zhql = `function makeState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = makeState()

setState('foo')
console.log(getState())`
