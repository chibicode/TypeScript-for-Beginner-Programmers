/** @jsx jsx */
import { jsx, Interpolation } from '@emotion/core'
import Link from 'next/link'
import useTheme from 'src/hooks/useTheme'
import { baseLinkCss } from 'src/components/ContentTags/A'

const InternalLink = ({
  href,
  cssOverrides,
  ...props
}: JSX.IntrinsicElements['a'] & {
  href: string
  cssOverrides?: Interpolation
}) => {
  const { colors } = useTheme()
  return (
    <Link href={href} passHref>
      <a {...props} css={[baseLinkCss(colors), cssOverrides]} />
    </Link>
  )
}

export default InternalLink
