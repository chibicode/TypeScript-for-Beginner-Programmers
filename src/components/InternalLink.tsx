import React from 'react'
import Link from 'next/link'

const InternalLink = ({
  href,
  ...props
}: JSX.IntrinsicElements['a'] & {
  href: string
}) => (
  <Link href={href} passHref>
    <a {...props} />
  </Link>
)

export default InternalLink
