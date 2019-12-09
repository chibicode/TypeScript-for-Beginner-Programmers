// They booth have property x,
// but B’s x (true) is
// more specific than A’s x (boolean)
type A = { x: boolean }
type B = { x: true }

// This intersection type…
type AandB = A & B

// …is equivalent to:
type AandB = { x: true }
