type Place = 'home' | 'work' | { custom: string }

// TypeScript knows what the type of "place"
// would be at each point inside the function
function placeToString(place: Place): string {
  // In here, place = 'home', 'work' or { custom:… }

  if (place === 'home') {
    // In here, place = 'home'

    return 'homeEmoji Home'
  } else {
    // In here, place = 'work' or { custom: string }

    return 'pinEmoji ' + place.custom
  }
}
