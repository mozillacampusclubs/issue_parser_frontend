import React, { Component } from 'react';

import { APIBase } from '../../constraints';
import './NavBar.css'
import logo from '../../static/images/mozilla-logo.png'

// Use named export for unconnected component (for tests)
export class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <img src={logo} alt="" className="mozilla-logo"/>
          <span className="navbar-admin-login"><a href={APIBase() + '/admin'}>Admin Login</a></span>
        </div>
      </nav>
    );
  }
}

// Use default export for the connected component (for app)
export default NavBar;
