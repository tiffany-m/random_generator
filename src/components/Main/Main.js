import React, { Component } from 'react'
import Fortunes from './components/Fortunes';
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Fortune Cookie Generator</h3>
        <img className='fortune-image' src='cookie.png' alt='cookie' />
        <Fortunes />
        <button className='fortune-button'>Open a cookie!</button>
      </div>
    )
  }
}

export default Main
