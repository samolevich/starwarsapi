import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img src='/img/avatar.svg' alt='avatar' />
      </header>
    );
  }
}

export default Header;
