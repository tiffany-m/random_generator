import React, { Component } from 'react'
import { FORTUNES } from '../shared/fortunesData'

const randomNum = Math.floor(Math.random() * FORTUNES.length)
class Fortunes extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fortune: null,
  //   };
  // }

  state = {
    fortune: FORTUNES[randomNum].fortune,
  }

  componentDidMount() {
    console.log('fortunes', FORTUNES)
  }

  newFortune() {
    //const randomNum = Math.floor(Math.random() * fortune.length)
    const randomNumber = Math.floor(Math.random() * FORTUNES.length)

    //console.log(fortune[randomNum])

    //let randomFortune = fortunes[randomNum]
    const randomFortune = FORTUNES[randomNumber].fortune

    // return this.setState({
    //   fortune: randomFortune['fortune'],
    // })
    this.setState({ fortune: randomFortune })
  }

  render() {
    return (
      <>
        <div className='fortune-text'>{this.state.fortune}</div>
        <button className='fortune-button' onClick={() => this.newFortune()}>
          Open a cookie!
        </button>
      </>
    )
  }
}

export default Fortunes
