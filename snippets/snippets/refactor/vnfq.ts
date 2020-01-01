type Person = { name: string }
type Loggable = { log: (name: string) => void }

// Use & to make jim BOTH Person AND Loggable
const jim: Person & Loggable = {
  name: 'Jim',
  log: name => {
    console.log(`Hello, I'm ${name}.`)
  }
}

// "Hello, I’m Jim."
jim.log(jim.name)
