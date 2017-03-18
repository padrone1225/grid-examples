import React, { Component } from 'react';
import { Link } from 'react-router'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Link to='/' className="navigation__link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175" width="50" height="50"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z" fill="#FFF"/></svg>
        </Link>
      </div>
    )
  }
}

export default Navigation