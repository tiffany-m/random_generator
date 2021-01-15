import React, { Component } from 'react'
import Fortunes from '../Fortunes'
import './Main.css'

class Main extends Component {
  state = {
    fortune: '',
    cookieOpened: false,
  };

  newCookiePic() {
    const { cookieOpened } = this.state;

    this.setState({
      cookieOpened: !cookieOpened,
    });
  }

  render() {
    const { cookieOpened } = this.state;

    return (
      <div className="container">
        <h3>Fortune Cookie Generator</h3>
        {cookieOpened
          ? <img className="fortune-image" src="cookie1.png" alt="cookie" />
          : <img className="fortune-image" src="cookie2.png" alt="cookie" />}
        <Fortunes />
      </div>
    );
  }
}

export default Main