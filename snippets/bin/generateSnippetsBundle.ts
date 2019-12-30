const glob = require('glob')
const fs = require('fs')
const chokidar = require('chokidar')

const filePathToKey = (file: string) =>
  file
    .replace(/\.\/snippets\/snippets\/\w+\//, '')
    .replace(/longerWidth\//, '')
    .replace(/ignoreWidth\//, '')
    .replace(/\.ts/, '')

const regenerate = () => {
  glob('./snippets/snippets/**/*.ts', (_: any, files: readonly string[]) => {
    if (
      new Set(files.map(filePathToKey)).size !== files.map(filePathToKey).length
    ) {
      throw new Error('Duplicate file name')
    }

    const result = files
      .map(file => {
        const contents = fs.readFileSync(file, 'utf8')
        return `export const ${filePathToKey(file)} = \`${contents
          .trim()
          .replace(/^;/m, '')
          .replace(/`/g, '\\`')
          .replace(/\$/g, '\\$')}\``
      })
      .join('\n\n')

    fs.writeFile('./src/lib/snippets.ts', `${result}\n`, (err: any) => {
      if (err) {
        throw err
      }
      console.log('snippets generated')
    })
  })
}

regenerate()
chokidar.watch('./snippets/snippets/**/*.ts').on('change', () => {
  regenerate()
})
