import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld.js';
import HelloUser from './HelloUser.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloUser name="Groucho" />
        <HelloUser name="Harpo" />
        <HelloUser name="Chico" />
      </div>
    );
  }
}

export default App;
