import React from 'react'

const SvgPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <ellipse fill="#292F33" cx={18} cy={34.5} rx={4} ry={1.5} />
    <path
      fill="#99AAB5"
      d="M14.339 10.725S16.894 34.998 18.001 35c1.106.001 3.66-24.275 3.66-24.275h-7.322z"
    />
    <circle fill="#DD2E44" cx={18} cy={8} r={8} />
  </svg>
)

export default SvgPin
