/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'

const RunButtonText = ({ compile }: { compile?: boolean }) => (
  <span
    css={css`
      font-weight: bold;
    `}
  >
    {compile ? 'Compile' : 'Run'} <Emoji type="run" />
  </span>
)

export default RunButtonText
