import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './List.module.css';

const pullOfUsers = [
  { name: 'Rafael', route: 1 },
  { name: 'Michael', route: 2 },
  { name: 'Gabriel', route: 3 },
  { name: 'Asrael', route: 4 },
  { name: 'Asasel', route: 5 },
  { name: 'Sentiel', route: 6 },
  { name: 'Uriel', route: 7 },
  { name: 'Selaphiel', route: 8 },
  { name: 'Jegudiel', route: 9 },
];

class Person extends Component {
  render() {
    return (
      <div className={styles.person}>
        <NavLink to={`/list/${this.props.route}`}>{this.props.name}</NavLink>
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
        pullOfUsers.map(person => <Person name={person.name} route={person.route} />)
    );
  }
}

export default List;
