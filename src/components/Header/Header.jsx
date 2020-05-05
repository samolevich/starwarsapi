import React, { Component } from 'react';
// import styles from './Header.module.css';

export class Header extends Component {
  render() {
    return (
      <nav>
      <div className='nav-wrapper blue-grey'>
        <a href='/' className='brand-logo right'>
          Logo
        </a>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li>
            <a href='/'>Link</a>
          </li>
          <li>
            <a href='/'>Link</a>
          </li>
          <li>
            <a href='/'>Link</a>
          </li>
        </ul>
      </div>
      </nav>
    );
  }
}

export default Header;
