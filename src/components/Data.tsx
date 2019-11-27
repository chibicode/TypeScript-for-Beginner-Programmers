import React from 'react'

const SvgData = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect fill="#DB4003" x={0} y={0} width={48} height={36} rx={4} />
      <text
        fontFamily="Iosevka-Heavy, Iosevka"
        fontSize={24}
        fontWeight={600}
        letterSpacing={-1.2}
        fill="#FFFFFF"
      >
        <tspan x={2} y={27}>
          {'DATA'}
        </tspan>
      </text>
    </g>
  </svg>
)

export default SvgData
