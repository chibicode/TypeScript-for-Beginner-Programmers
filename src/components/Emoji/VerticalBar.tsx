import React from 'react'

const SvgVerticalBar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect fill="#806538" x={15} y={2} width={6} height={32} />
    </g>
  </svg>
)

export default SvgVerticalBar
