import React from 'react'
import { useSpring, animated } from 'react-spring'

const AnimatedSpan = ({
  springProps,
  children
}: {
  springProps: ReturnType<Parameters<typeof useSpring>[0]>
  children: React.ReactNode
}) => {
  const props = useSpring(springProps)
  return <animated.span style={props}>{children}</animated.span>
}

export default AnimatedSpan
