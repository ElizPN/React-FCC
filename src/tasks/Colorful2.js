import React from "react";

const styles = { color: "purple", fontSize: 40, border: "2px solid purple" };

export class Colorful2 extends React.Component {
  render() {
    return <div style={styles}>Style Me!</div>;
  }
}
