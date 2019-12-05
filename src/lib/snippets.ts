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

export const bwyu = `// Confused by generics code like this?
function makePair<
  F extends number | string,
  S extends boolean | F
>()`

export const cbeq = `const { getState, setState } = makeState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())`

export const cqrm = `function makePair<F, S>() {
  // Usage: Pass F for A and S for B
  let pair: Pair<F, S>

  // ...
}`

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

export const gozc = `// Creates a (number, string) pair
const { getPair, setPair } = makePair<
  number,
  string
>()

// Must pass (number, string)
setPair(1, 'hello')`

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

export const jejx = `const { getPair, setPair } = makePair()

setPair(1, 2)
console.log(getPair())

setPair(3, 4)
console.log(getPair())`

export const kbld = `// Limits the type of T
function genericFunc<T extends number>()

// Success
genericFunc<number>()
// Error
genericFunc<string>()`

export const lldl = `// Extract into a generic interface
// to make it reusable
interface Pair<A, B> {
  first: A
  second: B
}`

export const llvc = `// Creates a boolean-only state
const boolState = makeState<boolean>()
boolState.setState(true)
console.log(boolState.getState())`

export const mngc = `function makeState<S extends number | string>()`

export const mroc = `class State<S> {
  state: S

  getState() {
    return this.state
  }

  setState(x: S) {
    this.state = x
  }
}`

export const mrub = `function makePair<F, S>() {
  let pair: { first: F; second: S }

  // ...
}`

export const nbvo = `function makePair<
  F extends number | string = number,
  S extends number | string = number
>()`

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

export const pjcw = `// Set the default value of x
function regularFunc(x = 2)

// x will be 2 inside the function
regularFunc()`

export const qgea = `// Extract into a generic type alias. It’s
// basically identical to using an interface
type Pair<A, B> = {
  first: A
  second: B
}`

export const qgxj = `// makeState() has 1 type parameter
function makeState<S>()

// makePair() has 2 type parameters
function makePair<F, S>()`

export const qini = `// Specify x to be number
function regularFunc(x: number)

// Success
regularFunc(1)
// Error
regularFunc('foo')`

export const qqic = `// Doesn't work because the created state…
const numAndStrState = makeState()

// Allows both numbers…
numAndStrState.setState(1)
console.log(numAndStrState.getState())

// And strings.
numAndStrState.setState('foo')
console.log(numAndStrState.getState())

// This is NOT what we want. We want to create
// a number-only state and a string-only state.`

export const rebo = `// In the function definition of makeState()
let state: S // <- number

function setState(x: S /* <- number */) {
  state = x
}`

export const rxdm = `function makePair<F, S>() {
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
}`

export const stkh = `const { getState, setState } = makeState()

// What happens if we use a string instead?
setState('foo')
console.log(getState())`

export const thxf = `// Set the default type of S as number
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

export const ugeb = `function makePair() {
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
}`

export const wpru = `// Declare a regular function
function regularFunc(x: any) {
  // You can use x here
}

// Call it: x will be 1
regularFunc(1)`

export const xeax = `const { getState, setState } = makeState()

setState('foo')
console.log(getState())`

export const xekh = `// The second parameter S must be either
// boolean or whatever was specified for F
function makePair<
  F extends number | string,
  S extends boolean | F
>()

// These will work
makePair<number, boolean>()
makePair<number, number>()
makePair<string, boolean>()
makePair<string, string>()

// This will fail because the second
// parameter must extend boolean | number,
// but instead it’s string
makePair<number, string>()`

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

export const zdbq = `// Pass a type parameter on initialization
const numState = new State<number>()

numState.setState(1)

// Prints 1
console.log(numState.getState())`

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

export const ampt = `function toggleTodo(todo: Todo): Todo {
  return {
    // This line was missing
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}`

export const bnli = `const foo: Todo = {
  id: 1,
  text: '…',
  done: true
}`

export const csum = `// todo must match the Todo type
function toggleTodo(todo: Todo) {
  // ...
}`

export const dqwb = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring
  todo.done = !todo.done
  return todo
}`

export const dxfc = `// Associated data. If we're using React, this
// would be the todo component’s props or state
[
  { id: 1, text: 'First todo', done: false },
  { id: 2, text: 'Second todo', done: false }
]`

export const lieq = `type Todo = {
  id: number
  text: string
  done: boolean
}`

export const lund = `const result = toggleTodo({
  id: 1,
  text: '…',
  done: true
})

console.log('Expected:')
console.log(\`{ id: 1, text: '…', done: false }\`)
console.log('Actual:')
console.log(result)`

export const njgr = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring is a
  // bad refactoring because it modifies
  // the original todo object
  todo.done = !todo.done
  return todo
}`

export const ntau = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s code from earlier:
  // Missing the "id" property
  return {
    text: todo.text,
    done: !todo.done
  }
}`

export const qbgu = `// Returns a new todo object
// with the opposite boolean value
// for the "done" proprty.
function toggleTodo(todo) {
  // ...
}`

export const reel = `function toggleTodo(todo) {
  return {
    text: todo.text,
    done: !todo.done
  }
}`

export const tgvw = `const bar: Todo = {
  text: '…',
  done: true
}`

export const uxlb = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring
  todo.done = !todo.done
  return todo
}`

export const vgnq = `// This will continue to work because
// original todo is not modified
function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}`

export const vpco = `// Returns a new todo object with the opposite
// boolean value for the "done" proprty.
function toggleTodo(todo) {
  // Case 1: If todo is
  // { id: …, text: '…', done: true }, return
  // { id: …, text: '…', done: false }
  //
  // Case 2: If todo is
  // { id: …, text: '…', done: false }, return
  // { id: …, text: '…', done: true }
}`

export const wymp = `const originalTodo = {
  id: 1,
  text: '…',
  done: true
}

console.log('Before toggleTodo()…')
console.log(originalTodo)

const newTodo = toggleTodo(originalTodo)

console.log('After toggleTodo()…')
console.log('Original Todo:')
console.log(originalTodo)
console.log('New Todo:')
console.log(newTodo)`

export const yhto = `type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}`

export const ywiv = `// The return value must match the Todo type
function toggleTodo(todo: Todo): Todo {
  // ...
}`

export const yxjg = `function toggleTodo(todo) {
  return {
    // This line was missing
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}`
