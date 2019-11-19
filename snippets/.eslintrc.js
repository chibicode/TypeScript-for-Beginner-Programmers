const config = require('../.eslintrc')

module.exports = {
  ...config,
  parserOptions: {
    project: './snippets/tsconfig.json'
  },
  root: true
}
