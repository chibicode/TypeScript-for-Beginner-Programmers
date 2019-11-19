/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'

type ButtonWithTouchActiveStatesProps<
  T = JSX.IntrinsicElements['button']
> = T & {
  activeBackgroundColor: string
}

const ButtonWithTouchActiveStates = ({
  activeBackgroundColor,
  ...props
}: ButtonWithTouchActiveStatesProps) => {
  const [isActive, setIsActive] = useState(false)
  const activate = () => {
    if (!props.disabled) {
      // NOTE: Originally tried to call the callback here and do e.preventDefault()
      // to prevent mouse click event from happening, so that callback fires
      // on tap start instead of on tap end, but that was buggy so ended up removing.
      setIsActive(true)
    }
  }
  const deactivate = () => {
    setIsActive(false)
  }
  return (
    <button
      {...props}
      css={
        isActive &&
        css`
          background: ${activeBackgroundColor} !important;
        `
      }
      onTouchStart={activate}
      onTouchEnd={deactivate}
      onTouchCancel={deactivate}
    />
  )
}

export default ButtonWithTouchActiveStates
