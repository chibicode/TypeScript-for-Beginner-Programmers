import App from 'next/app'
import Router from 'next/router'
import reloadTwitterScript from 'src/lib/reloadTwitterScript'

Router.events.on('routeChangeStart', () => {
  reloadTwitterScript()
})

export default App
