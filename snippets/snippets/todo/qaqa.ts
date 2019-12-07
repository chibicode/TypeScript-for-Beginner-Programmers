type Foo = {
  bar: number
}

type ReadonlyFoo = Readonly<Foo>

// ReadonlyFoo is { readonly bar: number }
