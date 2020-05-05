import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={`${styles.list} ${styles.list.active}`}>
        <li>
          <NavLink to='/'>main</NavLink>
        </li>
        <li>
          <NavLink to='/payload'>payload</NavLink>
        </li>
        <li>
          <NavLink to='/post'>post</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>profile</NavLink>
        </li>
      </nav>
    );
  }
}

export default Navbar;
