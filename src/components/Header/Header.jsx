import React, { Component } from 'react'
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
export class Header extends Component {
  render() {
    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="">Shop</Link>
          <Link to="/orders">Order</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="login">Log in</Link>
        </div>
      </nav>
    )
  }
}

export default Header