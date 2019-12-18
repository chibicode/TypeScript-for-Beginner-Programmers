import React from 'react'
import useTheme from 'src/hooks/useTheme'
import { EmojiWrapper } from 'src/components/Emoji'

const TodoBlank = ({
  hovered,
  noVerticalTransform,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  hovered?: boolean
  noVerticalTransform?: boolean
}) => {
  const { colors } = useTheme()
  return (
    <EmojiWrapper noVerticalTransform={noVerticalTransform}>
      <svg viewBox="0 0 36 36" {...props}>
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect
            stroke={hovered ? '#77B255' : colors('brown')}
            strokeWidth={4}
            fill="#FFFFFF"
            x={2}
            y={2}
            width={32}
            height={32}
            rx={2.25}
          />
        </g>
      </svg>
    </EmojiWrapper>
  )
}

export default TodoBlank
