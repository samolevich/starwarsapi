import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './List.module.css'

class Person extends Component {
  render() {
    return (
      <div className={styles.person}>
        <NavLink to={`/list/${this.props.route}`}>{this.props.name}</NavLink>
      </div>
    )
  }
}

class List extends Component {
  render() {
    return (
      <div>
        <Person name='John' route='1'/>
        <Person name='Rafael' route='2'/>
        <Person name='Michael' route='3'/>
        <Person name='Gabriel' route='4'/>
      </div>
    )
  }
}

export default List
