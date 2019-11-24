import React from 'react'
import Link from 'next/link'
import { A } from 'src/components/ContentTags'

const InternalLink = ({
  href,
  ...props
}: JSX.IntrinsicElements['a'] & {
  href: string
}) => (
  <Link href={href} passHref>
    <A {...props} />
  </Link>
)

export default InternalLink
