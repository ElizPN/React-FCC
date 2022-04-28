// Example pass call back function from parent component to two child components

import React from "react";

export class MyApp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <GetInput
          input={this.state.inputValue} // pass prop (state) to child component
          handleChange={this.handleChange} // pass prop( hanler function Callback) to child component
        />
        {/*  pass same state to another child component */}
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        {/*  get two props from parent componenet  */}
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p> {/* get props from parent componenet  */}
      </div>
    );
  }
}
