import React from 'react'
import { A, P } from 'src/components/ContentTags'

const AboutMe = () => (
  <>
    <P>
      <strong>About the author:</strong> I’m Shu Uesugi, a software engineer.
      The most recent TypeScript project I worked on is an{' '}
      <em>interactive computer science course</em> called{' '}
      <A href="https://ycombinator.chibicode.com/">
        <strong>“Y Combinator for Non-programmers”</strong>
      </A>
      .
    </P>
    <P>
      You can learn more about me on{' '}
      <A href="https://chibicode.com/">my personal website</A>. My email is{' '}
      <A href="mailto:shu.chibicode@gmail.com">shu.chibicode@gmail.com</A>.
    </P>
  </>
)

export default AboutMe
