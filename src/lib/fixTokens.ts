type Token = {
  types: string[]
  content: string
  empty?: boolean
}

const fixTokens = (tokens: Token[][]) =>
  tokens.map(lines => lines.map(token => token))

export default fixTokens
