import React, { Component } from 'react';

import Aux from './hoc/Aux/Aux';
import Landing from './containers/Landing/Landing';

import './App.css';

class App extends Component {
  render() {
    return (
      <Aux>
        <Landing /> 
      </Aux>
    );
  }
}

export default App;
