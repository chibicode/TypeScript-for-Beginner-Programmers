type Person = { name: string }
type Loggable = { log: (name: string) => void }

const jim: Person & Loggable = {
  name: 'Jim',
  log: name => {
    console.log(`Hello, I'm ${name}.`)
  }
}

jim.log(jim.name)
