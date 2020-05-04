import React, { Component } from 'react';
import Payload from './Payload';
import Navigation from './Navigation';

export class Content extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s2 "><Navigation /></div>
        <div className="col s10"><Payload /></div>
      </div>
    );
  }
}

export default Content;
