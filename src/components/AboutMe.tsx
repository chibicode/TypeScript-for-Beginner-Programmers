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
      <strong>I’m currently looking for a full-time opportunity:</strong>{' '}
      Looking for a remote (PST timezone) position in full-stack engineering,
      product management, or DevRel. You can email me at{' '}
      <A href="mailto:shu@chibicode.com">shu@chibicode.com</A>.
    </P>
  </>
)

export default AboutMe
