// Write your code here
import {Component} from 'react'

import './index.css'

class CoinsToss extends Component {
  state = {num: 0, heads: 0, tails: 0}

  onChangeImage = () => {
    const imageU = Math.floor(Math.random() * 2)
    this.setState({num: imageU})
    if (imageU === 0) {
      this.setState(preValu => ({heads: preValu.heads + 1}))
    }
    if (imageU === 1) {
      this.setState(preValu => ({tails: preValu.tails + 1}))
    }
  }

  render() {
    const {num, heads, tails} = this.state
    const array = [
      'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    ]

    return (
      <div className="container">
        <div className="bg-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={array[num]} alt="toss result" className="image" />
          <button type="button" onClick={this.onChangeImage}>
            Toss coin
          </button>
          <div className="toss-container">
            <p>total:{heads + tails}</p>

            <p>heads:{heads}</p>

            <p>tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinsToss
