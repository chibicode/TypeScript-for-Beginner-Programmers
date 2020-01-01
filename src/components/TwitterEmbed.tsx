/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useRef, useState } from 'react'
import useTheme from 'src/hooks/useTheme'
import useInterval from 'src/hooks/useInterval'

declare global {
  interface Window {
    twttr: any
    __twttr: any
  }
}

const EMBED_DELAY = 500

const TwitterEmbed = ({ id, hideCard }: { id: string; hideCard?: boolean }) => {
  const wrapperEl = useRef<HTMLDivElement>(null)
  const [twitterLoaded, setTwitterLoaded] = useState(false)
  const { spaces } = useTheme()
  useInterval(
    () => {
      if (
        window.twttr &&
        window.twttr.widgets &&
        window.twttr.widgets.createTweet &&
        wrapperEl.current
      ) {
        wrapperEl.current.innerHTML = ''
        window.twttr.widgets
          .createTweet(id, wrapperEl.current, {
            dnt: true,
            cards: hideCard ? 'hidden' : undefined,
            align: 'center',
            conversation: 'none'
          })
          .then(() => {
            setTwitterLoaded(true)
          })
      }
    },
    twitterLoaded ? null : EMBED_DELAY
  )
  return (
    <div
      css={[
        twitterLoaded &&
          css`
            margin: ${spaces(2)} 0;
          `
      ]}
      ref={wrapperEl}
    />
  )
}

export default TwitterEmbed
