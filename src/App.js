import Counter from "./components/Counter";
import "./App.css";
import React from "react";

export default class App extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    console.log("Increment");
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    console.log("Decrement");
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}
