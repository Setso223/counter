import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handleIncrease = () => {
    this.setState({counter: this.state.counter+1});
  }
  
  handleDecrease = () => {
    this.setState({counter: this.state.counter-1});
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>

        <hr></hr>
        <button onClick={this.handleIncrease}>INCREASE</button>
        <button onClick={this.handleDecrease}>DECREASE</button>
      </div>
    );
  }
}

export default App;
