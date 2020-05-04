import React, { Component } from 'react';

export class Navigation extends Component {
  render() {
    return (
      <div className="row">
        <div className='collection col s12'>
          <a href='/' className='collection-item'>
            Link
          </a>
          <a href='/' className='collection-item active'>
            Link
          </a>
          <a href='/' className='collection-item'>
            Link
          </a>
          <a href='/' className='collection-item'>
            Link
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;
