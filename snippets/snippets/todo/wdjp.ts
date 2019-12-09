type A = { a: number }
type B = { b: string }

// This intersection type…
type AandB = A & B

// …is equivalent to:
type AandB = {
  a: number
  b: string
}
