import React, { Component } from 'react';

class Main extends Component {
  render() {
    return(
      <div className="container">
        <h3>Fortune Cookie Generator</h3>
        <img src="cookie.png" alt="cookie"/>
        <div className="fortune">
          fortune goes here
        </div>
        <button className="btn">Open a cookie!</button>
      </div>
    )
  }
}

export default Main;