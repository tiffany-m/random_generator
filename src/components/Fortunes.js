import React, { Component } from 'react';
import { FORTUNES } from '../shared/fortunesData';


class Fortunes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fortune: null,
    };
  }

  newFortune() {
    const randomNum = Math.floor(Math.random() * fortune.length);
    console.log(fortune[randomNum]);

    let randomFortune = fortunes[randomNum];

    return this.setState({
      fortune: randomFortune['fortune'],
    });
  }

  render() {
    return <div className="fortune-text">{state.fortune}</div>;
  }
}

export default Fortunes;
