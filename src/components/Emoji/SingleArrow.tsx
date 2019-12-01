import * as React from 'react'

const SingleArrowSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g
        transform="translate(4.000000, 9.000000)"
        fill="#A39797"
        fillRule="nonzero"
      >
        <polygon points="29 9 19 0 19 18" />
        <polygon points="0 5 20 5 20 13 0 13" />
      </g>
    </g>
  </svg>
)

export default SingleArrowSvg
