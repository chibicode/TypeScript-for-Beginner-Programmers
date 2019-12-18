type Place = 'home' | 'work' | { custom: string }

// They all compile
const place1: Place = 'home'
const place2: Place = 'work'
const place3: Place = { custom: 'Gym' }
const place4: Place = { custom: 'Supermarket' }
