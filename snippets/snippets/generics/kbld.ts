// Limits the type of T
function genericFunc<T extends number>()

// Success
genericFunc<number>()
// Error
genericFunc<string>()
