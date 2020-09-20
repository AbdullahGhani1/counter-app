import React, { Component } from 'react';
// stateless Functional Component
const NavBar = (props) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <a href='#' className='navbar-brand'>
        NavBar{' '}
        <span className='badge badge-pill badge-secondary'>
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
