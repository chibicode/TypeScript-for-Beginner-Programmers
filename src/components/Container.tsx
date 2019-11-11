/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { allMaxWidths } from 'src/lib/theme/maxWidths'
import { allSpaces } from 'src/lib/theme/spaces'
import useTheme from 'src/hooks/useTheme'

export interface ContainerProps {
  children: React.ReactNode
  Component: React.ComponentType | string
  size: keyof typeof allMaxWidths
  horizontalPadding: keyof typeof allSpaces
  cssOverrides?: SerializedStyles
}

const Container = ({
  children,
  Component,
  size,
  horizontalPadding,
  cssOverrides
}: ContainerProps) => {
  const { maxWidths, spaces } = useTheme()
  return (
    <Component
      css={[
        css`
          max-width: ${maxWidths(size)};
          margin: 0 auto;
          padding: 0 ${spaces(horizontalPadding)};
        `,
        cssOverrides
      ]}
    >
      {children}
    </Component>
  )
}

Container.defaultProps = {
  Component: 'div',
  size: 'md',
  horizontalPadding: 0.75
}

export default Container
