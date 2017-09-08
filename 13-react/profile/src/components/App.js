import React, { Component } from 'react';
import './App.css';

import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile name="Groucho Marx" age="deceased" bio="Once I shot an elephant in my pyjamas" pic="http://fillmurray.com/201/299" />
        <Profile name="Bill Murray" age="67" bio="No gods no master" pic="http://fillmurray.com/200/300" />
      </div>
    );
  }
}

export default App;
