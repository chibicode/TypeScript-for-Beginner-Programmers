import React from 'react'
import Emoji from 'src/components/Emoji'
import { A } from 'src/components/ContentTags'

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
    <A {...props} href={tweetUrl}>
      <Emoji type="twitter" /> {children}
    </A>
  )
}

export default TwitterLink
