import React from 'react'

const SvgUi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <title>{'UI'}</title>
    <desc>{'Created with Sketch.'}</desc>
    <g id="UI" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect
        id="Rectangle"
        fill="#009795"
        x={0}
        y={0}
        width={36}
        height={36}
        rx={4}
      />
      <text
        fontFamily="SFProDisplay-Bold, SF Pro Display"
        fontSize={24}
        fontWeight="bold"
        fill="#FFFFFF"
      >
        <tspan x={6} y={27}>
          {'UI'}
        </tspan>
      </text>
    </g>
  </svg>
)

export default SvgUi
