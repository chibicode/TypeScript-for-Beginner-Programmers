// Confused by generics code like this?
function makePair<
  F extends number | string,
  S extends { foo: F }
>()
