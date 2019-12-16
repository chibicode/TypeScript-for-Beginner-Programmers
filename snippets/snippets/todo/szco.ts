// Correct implementation
function placeToString(place: Place): string {
  if (place === 'home') {
    return 'homeEmoji Home'
  } else if (place === 'work') {
    return 'workEmoji Work'
  } else {
    // place is guaranteed to be { custom: string }
    return 'pinEmoji ' + place.custom
  }
}
