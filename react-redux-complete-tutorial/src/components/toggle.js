import React, { Component } from "react";

class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      toggle: true,
    };
  }
  render() {
    return (
      <div>
        <h1>Toggle Me</h1>
      </div>
    );
  }
}

export default Toggle;
