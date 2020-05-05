import React, { Component } from 'react';
// import styles from './Navigation.module.css';

export class Navigation extends Component {
  render() {
    return (
      <div className="row">
        <div className='collection col s12'>
          <a href='/' className='collection-item'>
            Main
          </a>
          <a href='/profile' className='collection-item active'>
            Profile
          </a>
          <a href='/messages' className='collection-item'>
            Messages
          </a>
          <a href='/posts' className='collection-item'>
            Posts
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;
