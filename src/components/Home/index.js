import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  changeStatus = () => {
    const {isLoggedIn} = this.state
    this.setState({isLoggedIn: !isLoggedIn})
  }

  render() {
    const {isLoggedIn} = this.state

    let btnEl
    let msgEl

    if (isLoggedIn === true) {
      btnEl = <Login changeStatus={this.changeStatus} />
      msgEl = <Message greeting="Please Login" />
    } else {
      btnEl = <Logout changeStatus={this.changeStatus} />
      msgEl = <Message greeting="Welcome User" />
    }

    return (
      <div className="home-container">
        <div className="card-container">
          {msgEl}
          {btnEl}
        </div>
      </div>
    )
  }
}
export default Home
