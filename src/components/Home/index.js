import {Component} from 'react'
// import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-subs-container">
          <div className="home-sub-container">
            <h1>Clothes That Get YOU Noticed</h1>
            <p>
              “Fashion is part of the daily air and it changes all the time,
              with all the events. You can even see the approaching of a
              revolution in clothes. You can see and feel everything in
              clothes.”
            </p>
            <button type="buton">Shop Now</button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
