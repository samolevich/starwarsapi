import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Person.module.css';

class Person extends Component {
  render() {
    return (
      <div className={styles.person}>
        <NavLink to={`/list/${this.props.route}`}>{this.props.name}</NavLink>
      </div>
    );
  }
}

export default Person;
