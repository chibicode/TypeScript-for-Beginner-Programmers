// Creates a union type of number and string
type Foo = number | string

// You can assign either a number or a string
// variable to Foo. So these will both compile:
const a: Foo = 1
const b: Foo = 'hello'
