type Person = { name: string }
type Loggable = { log: () => void }

const jim: Person & Loggable = {
  name: 'Jim',
  log: function() {
    console.log(`Hello, I’m ${this.name}.`)
  }
}

jim.log()
