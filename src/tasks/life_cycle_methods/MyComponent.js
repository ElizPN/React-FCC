import React from "react";

// To place API call in componentDidMount() method.
export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  // There is a mock API call in componentDidMount().
  //It sets state after 2.5 seconds to simulate calling a server to retrieve data.
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users:{this.state.activeUsers} </h1>
      </div>
    );
  }
}
