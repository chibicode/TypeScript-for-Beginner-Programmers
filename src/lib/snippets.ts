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

export const bxzx = `// It could have been useful if you could pass
// both number AND string, and have it repeat
// the string the specified number of times
padLeft('Hello world', 4, '#')
// → "####Hello world"`

export const crgn = `// If the second parameter is string, then
// that string is appended to the left side
padLeft('Hello world', 'Jim: ')
// → "Jim: Hello world"

// Ask yourself: Would you EVER do this?`

export const hfdq = `function paddingLeftCss(val: number | string) {
  if (typeof val === 'number') {
    return \`padding-left: \${val * 0.25}rem;\`
  } else {
    return \`padding-left: \${val};\`
  }
}

// padding-left: 0.25rem;
paddingLeftCss(1)

// padding-left: 0.5rem;
paddingLeftCss(2)

// padding-left: 10%;
paddingLeftCss('10%')`

export const mvsz = `function makePair<F extends number | string, S extends boolean | F>() {}`

export const zgvn = `type Todo = Readonly<{ id: number; text: string; done: boolean; place: Place }>`

export const lcfe = `// If the second parameter is number, then that
// number of spaces is added to the left side
padLeft('Hello world', 4)
// → "    Hello world"

// If the second parameter is string, then
// that string is appended to the left side
padLeft('Hello world', 'Jim: ')
// → "Jim: Hello world"`

export const riis = `/**
 * Takes a string and adds "padding" to the left.
 *
 * If 'padding' is a number, then that number of
 * spaces is added to the left side.
 *
 * If 'padding' is a string, then 'padding' is
 * appended to the left side.
 */
function padLeft(
  value: string,
  padding: number | string
) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  } else {
    return padding + value
  }
}`

export const lplh = `console.log(1 + 2)`

export const onux = `function extend<First, Second>(
  first: First,
  second: Second
): First & Second {
  const result: Partial<First & Second> = {}
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      ;(result as First)[prop] = first[prop]
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      ;(result as Second)[prop] = second[prop]
    }
  }
  return result as First & Second
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void
}

class ConsoleLogger implements Loggable {
  log(name) {
    console.log(\`Hello, I'm \${name}.\`)
  }
}

const jim = extend(
  new Person('Jim'),
  ConsoleLogger.prototype
)
jim.log(jim.name)`

export const vnfq = `type Person = { name: string }
type Loggable = { log: (name: string) => void }

// Use & to make jim BOTH Person AND Loggable
const jim: Person & Loggable = {
  name: 'Jim',
  log: name => {
    console.log(\`Hello, I'm \${name}.\`)
  }
}

// "Hello, I’m Jim."
jim.log(jim.name)`

export const xwbz = `function makePair<
  F extends number | string,
  S extends boolean | F
>() {}`

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

export const bpmz = `type CompletedTodo = Readonly<{
  id: number
  text: string
  done: true
}>`

export const csum = `// Parameter "todo" must match the Todo type
function toggleTodo(todo: Todo) {
  // ...
}`

export const dqwb = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring
  todo.done = !todo.done
  return todo
}`

export const dxfc = `// Associated data. If we're using React, this
// would be the component’s props or state
[
  { id: 1, text: 'First todo', done: false },
  { id: 2, text: 'Second todo', done: false }
]`

export const eega = `else {
  // place = 'work' or { custom: string }, and
  // place.custom is invalid if place = 'work'
  return 'pinEmoji ' + place.custom
}`

export const frtm = `type Todo = {
  id: number
  text: string
  done: boolean
}

// Make sure that the input and the output
// are of the correct type (both must be Todo)
function toggleTodo(todo: Todo): Todo {
  // ...
}`

export const hquv = `[
  // ...
  // ...
  // ...
  // ...
  // No place property
  { id: 5, text: 'Read a book', done: false }
]`

export const hszk = `function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    done: true
  }))
}`

export const kuzw = `function completeAll(todos: Todo[]): Todo[] {
  // We want it to return a new array
  // instead of modifying the original array
}`

export const lgci = `// Input is an array of Todo items: Todo[]
function completeAll(todos: Todo[]) {
  // ...
}`

export const lieq = `type Todo = {
  id: number
  text: string
  done: boolean
}`

export const dhor = `type Place = 'home' | 'work' | { custom: string }

// TypeScript knows what the type of "place"
// would be at each point inside the function
function placeToString(place: Place): string {
  // In here, place = 'home', 'work' or { custom:… }

  if (place === 'home') {
    // In here, place = 'home'

    return 'homeEmoji Home'
  } else {
    // In here, place = 'work' or { custom: string }

    return 'pinEmoji ' + place.custom
  }
}`

export const fawy = `type Place = 'home' | 'work' | { custom: string }

// They all compile
const place1: Place = 'home'
const place2: Place = 'work'
const place3: Place = { custom: 'Gym' }
const place4: Place = { custom: 'Supermarket' }`

export const ntup = `// If we have a variable that’s a union type…
type Place = 'home' | 'work' | { custom: string }

function placeToString(place: Place): string {
  // TypeScript is smart about what the variable’s
  // possible values are for each branch of if/else

  if (place === 'home') {
    // TypeScript knows place = 'home' here
    // (So it won’t compile if you do place.custom)
  } else if (place === 'work') {
    // TypeScript knows place = 'work' here
    // (So it won’t compile if you do place.custom)
  } else {
    // TypeScript knows place = { custom: … } here
    // (So you can do place.custom)
  }
}`

export const rvyq = `type Place = 'home' | 'work' | { custom: string }

type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  // place is optional
  place?: Place
}>`

export const szco = `// Correct implementation
function placeToString(place: Place): string {
  if (place === 'home') {
    return 'homeEmoji Home'
  } else if (place === 'work') {
    return 'workEmoji Work'
  } else {
    // place is guaranteed to be { custom: string }
    return 'pinEmoji ' + place.custom
  }
}`

export const umjt = `type Place = 'home' | 'work' | { custom: string }`

export const vgja = `type Place = 'home' | 'work' | { custom: string }

// Little Duckling’s implementation
function placeToString(place: Place): string {
  if (place === 'home') {
    return 'homeEmoji Home'
  } else {
    return 'pinEmoji ' + place.custom
  }
}`

export const wymp = `const argument = {
  id: 1,
  text: '…',
  done: true
}

console.log('Before toggleTodo(), argument is:')
console.log(argument)

toggleTodo(argument)

console.log('After toggleTodo(), argument is:')
console.log(argument)`

export const lund = `const result = toggleTodo({
  id: 1,
  text: '…',
  done: true
})

console.log('Expected:')
console.log(\`{ id: 1, text: '…', done: false }\`)
console.log('Actual:')
console.log(result)`

export const mnmy = `// Output is an array of Todo items: Todo[]
function completeAll(todos: Todo[]): Todo[] {
  // ...
}`

export const mwrj = `// After declaring todos as readonly Todo[],
// the following code WILL NOT compile:

// Compile error - modifies the array
todos[0] = { id: 1, text: '…', done: true }

// Compile error - push() modifies the array
todos.push({ id: 1, text: '…', done: true })`

export const mxqy = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>`

export const mzyn = `// Creates a union type of number and string
type Foo = number | string

// You can assign either a number or a string
// variable to Foo. So these will both compile:
const a: Foo = 1
const b: Foo = 'hello'`

export const njgr = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring is a
  // bad refactoring because it modifies
  // the argument (input) todo object
  todo.done = !todo.done
  return todo
}`

export const npah = `type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}

function toggleTodo(todo: Todo): Todo {
  // This won’t compile
  todo.done = !todo.done
  return todo
}`

export const npgx = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  place: Place
}>`

export const npog = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  // place is optional
  place?: Place
}>`

export const ntau = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s code from earlier:
  // Missing the "id" property
  return {
    text: todo.text,
    done: !todo.done
  }
}`

export const nxyl = `// Readonly<...> makes each property readonly
type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>`

export const okva = `console.log(
  completeAll([
    { id: 1, text: '…', done: false },
    { id: 2, text: '…', done: true }
  ])
)`

export const oone = `// Returns an array where "done" is all true
function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  // ...
}`

export const qaqa = `type Foo = {
  bar: number
}

type ReadonlyFoo = Readonly<Foo>

// ReadonlyFoo is { readonly bar: number }`

export const qbgu = `// We said earlier that
// toggleTodo must return a new todo object.
function toggleTodo(todo) {
  // ...
}`

export const qnrh = `placeToString('home')
// __home__

placeToString('work')
// __work__

placeToString({ custom: 'Gym' })
// __gym__

placeToString({ custom: 'Supermarket' })
// __supermarket__`

export const qnwc = `// They booth have a property foo,
// but B’s foo (true) is
// more specific than A’s foo (boolean)
type A = { foo: boolean }
type B = { foo: true }

// This intersection type…
type AandB = A & B

// …is equivalent to:
type AandB = { foo: true }`

export const reel = `function toggleTodo(todo) {
  return {
    text: todo.text,
    done: !todo.done
  }
}`

export const rlya = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>

type CompletedTodo = Readonly<{
  id: number
  text: string
  done: true
}>`

export const rmuo = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>

// Override the done property of Todo
type CompletedTodo = Todo & {
  readonly done: true
}`

export const ruga = `function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  // ...
}`

export const szan = `// Make input todos as readonly array
function completeAll(
  todos: readonly Todo[]
): Todo[] {
  // ...
}`

export const tdbp = `// Takes an array of todo items and returns
// a new array where "done" is all true
function completeAll(todos) {
  // ...
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

export const vgnq = `type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}

// Earlier implementation: it will continue to
// work because the input todo is not modified
function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}`

export const vpco = `// Takes a single todo object and returns
// a new todo object containing the opposite
// boolean value for the "done" proprty.
function toggleTodo(todo) {
  // ...
}

// Example usage:

toggleTodo({ id: …, text: '…', done: true })
// -> returns { id: …, text: '…', done: false }

toggleTodo({ id: …, text: '…', done: false })
// -> returns { id: …, text: '…', done: true }`

export const wdjp = `type A = { a: number }
type B = { b: string }

// This intersection type…
type AandB = A & B

// …is equivalent to:
type AandB = {
  a: number
  b: string
}`

export const whae = `function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    // What if we set done to false?
    done: false
  }))
}`

export const xrwn = `type Todo = Readonly<{
  // id and text are the same as CompletedTodo
  id: number
  text: string
  done: boolean
}>

type CompletedTodo = Readonly<{
  // id and text are the same as Todo
  id: number
  text: string
  done: true
}>`

export const ybhj = `function placeToString(place: Place): string {
  // Takes a Place and returns a string
  // that can be used for the place label UI
}`

export const yhto = `type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}`

export const yvpp = `type Foo = {
  // bar is an optional property because of "?"
  bar?: number
}

// These will both compile:
// bar can be present or missing
const a: Foo = {}
const b: Foo = { bar: 1 }`

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

export const yztr = `// How to update this to support place labels?
type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>`

export const zswn = `// Will this compile?
const testTodo: CompletedTodo = {
  id: 1,
  text: '…',
  done: false
}`
