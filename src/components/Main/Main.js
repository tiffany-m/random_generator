import React, { Component } from 'react';
import Fortunes from '../Fortunes';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h3>Fortune Cookie Generator</h3>
        <Fortunes />
      </div>
    );
  }
}

export default Main;
