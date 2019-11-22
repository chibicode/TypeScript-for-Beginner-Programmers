class State<S> {
  state: S

  getState() {
    return this.state
  }

  setState(x: S) {
    this.state = x
  }
}
