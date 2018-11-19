export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

// if we don't supply any reducers just get empty object
  constructor(reducers = {}, initialState = {}) {
    // creating new instance of the store!!
    this.state = initialState
  }

  get value() {
    return this.state
  }

  dispatch(action) {
    this.state = {
      ...this.state, todos: [...this.state.todos, action.payload],
    };
    console.log(this.state)
  }

}
