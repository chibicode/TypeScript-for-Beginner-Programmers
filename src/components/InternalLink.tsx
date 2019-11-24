import React from 'react'
import Link from 'next/link'
import useTheme from 'src/hooks/useTheme'
import { baseLinkCss } from 'src/components/ContentTags/A'

const InternalLink = ({
  href,
  ...props
}: JSX.IntrinsicElements['a'] & {
  href: string
}) => {
  const { colors } = useTheme()
  return (
    <Link href={href} passHref>
      <a {...props} css={baseLinkCss(colors)} />
    </Link>
  )
}

export default InternalLink
