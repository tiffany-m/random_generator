import React, { Component } from 'react'
import Fortunes from '../Fortunes'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Fortune Cookie Generator</h3>
        <img className='fortune-image' src='cookie1.png' alt='cookie' />
        <Fortunes />
      </div>
    )
  }
}

export default Main