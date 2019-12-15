type Foo = {
  // bar is an optional property because of "?"
  bar?: number
}

// These will both compile:
// bar can be present or missing
const a: Foo = {}
const b: Foo = { bar: 1 }
