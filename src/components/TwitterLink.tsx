import React from 'react'
import Emoji from 'src/components/Emoji'

const TwitterLink = ({
  title,
  url,
  children,
  ...props
}: JSX.IntrinsicElements['a'] & {
  title: string
  url: string
}) => {
  const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&via=chibicode&text=${encodeURIComponent(title)}`
  return (
    <a {...props} href={tweetUrl}>
      <Emoji type="twitter" /> {children}
    </a>
  )
}

export default TwitterLink
