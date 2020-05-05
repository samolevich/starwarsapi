import React, { Component } from 'react';
// import styles from './Post.module.css';

class Post extends Component {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}

export default Post;
