// Without this, page transition causes an error like:
//  __twttr.callbacks.cb0 is not a function
const reloadTwitterScript = () => {
  window.twttr = window.__twttr = {}
  const scriptTag = document.createElement('script')
  const firstScriptTag = document.getElementsByTagName('script')[0]
  scriptTag.src = 'https://platform.twitter.com/widgets.js'
  scriptTag.async = true
  firstScriptTag.parentNode!.insertBefore(scriptTag, firstScriptTag)
}

export default reloadTwitterScript
