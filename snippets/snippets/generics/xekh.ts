// The second parameter S must be either
// boolean or whatever was specified for F
function makePair<
  F extends number | string,
  S extends boolean | F
>()

// These will work
makePair<number, boolean>()
makePair<number, number>()
makePair<string, boolean>()
makePair<string, string>()

// This will fail because the second
// parameter must be boolean | boolean
makePair<number, string>()
