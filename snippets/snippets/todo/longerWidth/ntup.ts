// If we have a variable that’s a union type…
type Place = 'home' | 'work' | { custom: string }

function placeToString(place: Place): string {
  // TypeScript is smart about what the variable’s
  // possible values are for each branch of if/else

  if (place === 'home') {
    // TypeScript knows place = 'home' here
    // (So it won’t compile if you do place.custom)
  } else if (place === 'work') {
    // TypeScript knows place = 'work' here
    // (So it won’t compile if you do place.custom)
  } else {
    // TypeScript knows place = { custom: … } here
    // (So you can do place.custom)
  }
}
