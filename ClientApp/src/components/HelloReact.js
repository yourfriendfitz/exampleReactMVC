import React, { Component } from "react";

const Title = () => {
    return <h1>Hello from React</h1>
}

export class HelloReact extends Component {
  static displayName = HelloReact.name;
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <Title />
      </div>
    );
  }
}
