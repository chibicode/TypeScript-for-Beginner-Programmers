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
import DoneTrue from 'src/components/Emoji/DoneTrue'
import Type from 'src/components/Emoji/Type'
import VerticalBar from 'src/components/Emoji/VerticalBar'
import Work from 'src/components/Emoji/Work'
import Home from 'src/components/Emoji/Home'
import Pin from 'src/components/Emoji/Pin'
import CleanCode from 'src/components/Emoji/CleanCode'
import UglyCode from 'src/components/Emoji/UglyCode'
import RefactorArrow from 'src/components/Emoji/RefactorArrow'
import UglyTutorial from 'src/components/Emoji/UglyTutorial'
import CleanTutorial from 'src/components/Emoji/CleanTutorial'
import Smartphone from 'src/components/Emoji/Smartphone'
import Cross from 'src/components/Emoji/Cross'
import Rhino from 'src/components/Emoji/Rhino'
import Prettier from 'src/components/Emoji/Prettier'
import ScaryCat from 'src/components/Emoji/ScaryCat'
import Running from 'src/components/Emoji/Running'
import Dash from 'src/components/Emoji/Dash'
import HeartCat from 'src/components/Emoji/HeartCat'
import HeartLetter from 'src/components/Emoji/HeartLetter'
import DoubleArrow from 'src/components/Emoji/DoubleArrow'
import Brain from 'src/components/Emoji/Brain'
import Plane from 'src/components/Emoji/Plane'
import Rocket from 'src/components/Emoji/Rocket'
import StringText from 'src/components/Emoji/StringText'
import NumberText from 'src/components/Emoji/NumberText'
import LetterC from 'src/components/Emoji/LetterC'
import FastForward from 'src/components/Emoji/FastForward'
import One from 'src/components/Emoji/One'
import OneTwoThreeFour from 'src/components/Emoji/OneTwoThreeFour'
import Ghost from 'src/components/Emoji/Ghost'

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
  ampersand: Ampersand,
  doneTrue: DoneTrue,
  type: Type,
  verticalBar: VerticalBar,
  work: Work,
  home: Home,
  pin: Pin,
  cleanCode: CleanCode,
  uglyCode: UglyCode,
  refactorArrow: RefactorArrow,
  uglyTutorial: UglyTutorial,
  cleanTutorial: CleanTutorial,
  smartphone: Smartphone,
  cross: Cross,
  rhino: Rhino,
  prettier: Prettier,
  scaryCat: ScaryCat,
  running: Running,
  dash: Dash,
  heartCat: HeartCat,
  heartLetter: HeartLetter,
  brain: Brain,
  doubleArrow: DoubleArrow,
  rocket: Rocket,
  plane: Plane,
  stringText: StringText,
  numberText: NumberText,
  letterC: LetterC,
  fastForward: FastForward,
  one: One,
  oneTwoThreeFour: OneTwoThreeFour,
  ghost: Ghost
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
