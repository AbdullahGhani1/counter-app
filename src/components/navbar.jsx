import React, { Component } from 'react';
// stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Render');
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <a href='#' className='navbar-brand'>
        NavBar{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
