import React, { Component } from 'react';

class App extends Component {
  printTask() {
  console.log(this.props.store.getState())
  }
  render() {
    return (
      <div>
        <p>Hullo</p>
        { this.printTask() }

      </div>
  );
  }
}

export default App;
