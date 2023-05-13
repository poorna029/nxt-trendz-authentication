import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-header"
          />
        </div>

        <ul className="home-routes">
          <li>
            <Link className="ul" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="ul" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="ul" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <button type="submit">Logout</button>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
