import {Component} from 'react'
// import {Link} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', userDetails: {}}

  fetchData = async d => {
    const {userDetails} = this.state
    console.log(userDetails)

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(d),
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (res.ok){
        const {history}=this.props 
        history.replace("/")
    }
  }

  takeUsername = e => {
    const username = e.target.value
    this.setState({username})
  }

  takePassword = e => {
    const password = e.target.value
    this.setState({password})
  }

  onsubmit = e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    this.fetchData(userDetails)
    this.setState({userDetails, username: '', password: ''})
  }

  renderUserNameInputField = () => 
    (
      <div className="username-container">
        <label htmlFor="name" className="username-style">
          UserName
        </label>
        <input
          id="name"
          type="text"
          placeholder="Username"
          className="user-input-style"
          onChange={this.takeUsername}
          value={this.state.username}
        />
      </div>,
    )
  

  renderUserPasswordInputField = () => 
    (
      <div className="password-container">
        <label htmlFor="name" className="userpassword-style">
          UserPassword
        </label>
        <input
          id="name"
          type="password"
          placeholder="Password"
          className="user-input-style"
          onChange={this.takePassword}
          value={password}
        />
      </div>,
    )
  

  render() {
    const {userDetails} = this.state

    return (
      <form className="login-form">
        <div className="website-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-img"
          />
        </div>
        <div className="input-fields-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div>{this.renderUserNameInputField()}</div>
          <div>{this.renderUserPasswordInputField()}</div>
          <button type="submit" className="but" onClick={this.onsubmit}>
            Login
          </button>
        </div>
      </form>
    )
  }
}

export default LoginForm
