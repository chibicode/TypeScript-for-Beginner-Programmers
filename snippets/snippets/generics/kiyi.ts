// Confused by generics code like this?
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
)
