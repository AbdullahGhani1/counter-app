import React, { Component } from 'react';

export class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <a href='#' className='navbar-brand'>
          NavBar{' '}
          <span className='badge badge-pill badge-secondary'>
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
