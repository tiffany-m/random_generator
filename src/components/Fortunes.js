import React, { Component } from 'react';
import { FORTUNES } from '../shared/fortunesData';

const randomNum = Math.floor(Math.random() * FORTUNES.length);
class Fortunes extends Component {
  // state = {
  //   fortune: FORTUNES[randomNum].fortune,
  // }

  state = {
    fortune: '',
    cookieOpened: false,
  };

  newFortune() {
    const { cookieOpened } = this.state;

    // const cookieOpened = this.state.cookieOpened;  above is destructured version

    const randomNumber = Math.floor(Math.random() * FORTUNES.length);

    const randomFortune = FORTUNES[randomNumber].fortune;

    this.setState({
      fortune: randomFortune,
      cookieOpened: !cookieOpened,
    });
  }

  render() {
    const { cookieOpened, fortune } = this.state;
    return (
      <>
        <div className="fortune-text">{cookieOpened ? fortune : ''}</div>
        <button className="fortune-button" onClick={() => this.newFortune()}>
          {cookieOpened
            ? 'Do you want to open a new cookie?'
            : 'Open a cookie'}
        </button>
      </>
    );
  }
}

export default Fortunes;
