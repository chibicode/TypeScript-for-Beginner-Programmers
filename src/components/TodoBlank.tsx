import React from 'react'
import useTheme from 'src/hooks/useTheme'

const TodoBlank = ({
  on,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  on?: boolean
}) => {
  const { colors } = useTheme()
  return (
    <svg viewBox="0 0 36 36" {...props}>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <rect
          stroke={on ? '#77B255' : colors('brown')}
          strokeWidth={5}
          fill="#FFFFFF"
          x={2.5}
          y={2.5}
          width={31}
          height={31}
          rx={4}
        />
      </g>
    </svg>
  )
}

export default TodoBlank
