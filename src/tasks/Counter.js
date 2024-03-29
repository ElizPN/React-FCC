import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    //bining handels with "this"
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  // set new state through handlers
  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      //call handlers in onClick
      <div>
        <button onClick={this.increment}>Increment!</button>
        <button onClick={this.decrement}>Decrement!</button>
        <button onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}
