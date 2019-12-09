/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Bird from 'src/components/Emoji/Bird'
import CryingCat from 'src/components/Emoji/CryingCat'
import Question from 'src/components/Emoji/Question'
import Run from 'src/components/Emoji/Run'
import ChickEgg from 'src/components/Emoji/ChickEgg'
import Twitter from 'src/components/Emoji/Twitter'
import Sparkles from 'src/components/Emoji/Sparkles'
import SmilingCat from 'src/components/Emoji/SmilingCat'
import Check from 'src/components/Emoji/Check'
import SingleArrow from 'src/components/Emoji/SingleArrow'
import Data from 'src/components/Emoji/Data'
import UI from 'src/components/Emoji/Ui'
import UpdatedData from 'src/components/Emoji/UpdatedData'
import UpdatedUI from 'src/components/Emoji/UpdatedUi'
import Sweat from 'src/components/Emoji/Sweat'
import TransformTypechecked from 'src/components/Emoji/TransformTypechecked'
import Readonly from 'src/components/Emoji/Readonly'
import A from 'src/components/Emoji/A'
import B from 'src/components/Emoji/B'
import Ampersand from 'src/components/Emoji/Ampersand'

export const emojiToComponent = {
  bird: Bird,
  cryingCat: CryingCat,
  question: Question,
  run: Run,
  chickEgg: ChickEgg,
  twitter: Twitter,
  sparkles: Sparkles,
  smilingCat: SmilingCat,
  check: Check,
  data: Data,
  singleArrow: SingleArrow,
  ui: UI,
  updatedUi: UpdatedUI,
  updatedData: UpdatedData,
  sweat: Sweat,
  transformTypechecked: TransformTypechecked,
  readonly: Readonly,
  a: A,
  b: B,
  ampersand: Ampersand
}

export const EmojiWrapper = ({
  children,
  noVerticalTransform
}: {
  children: React.ReactNode
  noVerticalTransform?: boolean
}) => (
  <span
    css={[
      css`
        display: inline-flex;
        vertical-align: middle;
        height: 1em;
      `,
      !noVerticalTransform &&
        css`
          transform: translateY(-0.1em);
        `
    ]}
  >
    {children}
  </span>
)

const Emoji = ({
  type,
  noVerticalTransform
}: {
  type: keyof typeof emojiToComponent
  noVerticalTransform?: boolean
}) => {
  const Component = emojiToComponent[type]
  return (
    <EmojiWrapper noVerticalTransform={noVerticalTransform}>
      <Component />
    </EmojiWrapper>
  )
}

export default Emoji
