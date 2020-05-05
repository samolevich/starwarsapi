import React, { Component } from 'react';
// import styles from './Post.module.css';

export class Post extends Component {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}

export default Post
