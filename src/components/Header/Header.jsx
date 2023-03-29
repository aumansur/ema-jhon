import React, { Component } from 'react'
import './Header.css'
import logo from '../../images/Logo.svg'
export class Header extends Component {
  render() {
    return (
     <nav className="header">
        <img src={logo} alt="" />
       <div>
            <a href="shop">shop</a>
            <a href="order">order</a>
            <a href="Inventory">Inventory</a>
            <a href="Log in">Log in</a>
       </div>
     </nav>
    )
  }
}

export default Header