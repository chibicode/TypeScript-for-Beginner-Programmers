// Converted from Yi light theme
// https://github.com/FormidableLabs/prism-react-renderer/tree/master/tools/themeFromVsCode
import { PrismTheme } from 'prism-react-renderer'

const theme: PrismTheme = {
  plain: {
    color: '#383a42',
    backgroundColor: '#fafafa'
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(160, 161, 167)',
        fontStyle: 'italic'
      }
    },
    {
      types: ['keyword', 'selector', 'changed'],
      style: {
        color: 'rgb(166, 38, 164)'
      }
    },
    {
      types: ['operator'],
      style: {
        color: 'rgb(56, 58, 66)'
      }
    },
    {
      types: ['constant', 'builtin', 'attr-name'],
      style: {
        color: 'rgb(152, 104, 1)'
      }
    },
    {
      types: ['char', 'symbol'],
      style: {
        color: 'rgb(1, 132, 188)'
      }
    },
    {
      types: ['variable', 'tag', 'deleted'],
      style: {
        color: 'rgb(228, 86, 73)'
      }
    },
    {
      types: ['string', 'inserted'],
      style: {
        color: 'rgb(80, 161, 79)'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(160, 161, 167)'
      }
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(64, 120, 242)'
      }
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(193, 132, 1)'
      }
    }
  ]
}

export default theme
