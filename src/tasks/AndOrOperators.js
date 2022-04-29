import React from "react";

export class AndOrOperators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    return (
      (this.state.display && (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      )) || (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      )
    );
  }
}
