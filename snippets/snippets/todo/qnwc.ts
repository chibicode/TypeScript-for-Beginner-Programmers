// They booth have a property foo,
// but B’s foo (true) is
// more specific than A’s foo (boolean)
type A = { foo: boolean }
type B = { foo: true }

// This intersection type…
type AandB = A & B

// …is equivalent to:
type AandB = { foo: true }
