type Variable = 'a' | 'b' | 'c'
type Function = {
  arg: Variable
  body: Expression
}
type Call = {
  arg: Expression
  func: Expression
}
type Expression = Variable | Function | Call

type Replace<
  V extends Variable,
  E extends Expression,
  M extends Expression
> = M extends Variable
  ? ReplaceVariable<V, E, M>
  : M extends Function
  ? { arg: M['arg']; body: Replace<V, E, M['body']> }
  : M extends Call
  ? { arg: Replace<V, E, M['arg']>; func: Replace<V, E, M['func']> }
  : never

type Eval<E extends Expression> = E extends Variable
  ? E
  : E extends Function
  ? E
  : E extends Call
  ? EvalCall<E>
  : never

type EvalCall<C extends Call> = C['func'] extends Variable
  ? C
  : C['func'] extends Function
  ? Replace<C['func']['arg'], C['arg'], C['func']['body']>
  : C['func'] extends Call
  ? C['arg'] extends Call
    ? { func: EvalCall<C['func']>; arg: EvalCall<C['arg']> }
    : { func: EvalCall<C['func']>; arg: C['arg'] }
  : C['arg'] extends Call
  ? { func: C; arg: EvalCall<C['arg']> }
  : C

type ReplaceVariable<
  V extends Variable,
  E extends Expression,
  M extends Variable
> = M extends V ? E : M

type Z = Eval<{ func: { arg: 'a'; body: 'a' }; arg: 'b' }>

type Foo = (v: Variable) => Expression
const zoo: Foo = (a: Variable) => a
export const too = zoo('b')

const x: Z = 'b'
export default x
