/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'

const RunButtonText = () => (
  <span
    css={css`
      font-weight: bold;
    `}
  >
    Run <Emoji type="run" />
  </span>
)

export default RunButtonText
