import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.list}>
        <li>
          <NavLink to='/'>main</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.current} to='/payload'>payload</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.current} to='/post'>post</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.current} to='/profile'>profile</NavLink>
        </li>
      </nav>
    );
  }
}

export default Navbar;
