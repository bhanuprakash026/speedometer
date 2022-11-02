// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  applyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="header">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="img"
          className="image"
        />
        <h1 className="speed-header">Speed is {count}mph</h1>
        <p className="para">min Limit is 0mph, Max. Limit is 200mph</p>
        <div className="btn-container">
          <button
            type="button"
            className="increase-btn"
            onClick={this.onIncrease}
          >
            Accelerate
          </button>
          <button type="button" className="brake-btn" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
