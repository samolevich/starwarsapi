import React, { Component } from 'react';
import Person from '../Person/Person';



class List extends Component {
  render() {
    return (
        this.props.usersPool.map(person => <Person name={person.name} route={person.route} />)
    );
  }
}

export default List;
