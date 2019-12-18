type Place = 'home' | 'work' | { custom: string }

// Little Duckling’s implementation
function placeToString(place: Place): string {
  if (place === 'home') {
    return 'homeEmoji Home'
  } else {
    return 'pinEmoji ' + place.custom
  }
}
