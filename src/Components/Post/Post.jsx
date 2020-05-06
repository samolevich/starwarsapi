import React, { Component } from 'react';
import styles from './Post.module.css';

class Post extends Component {
  alerting() {
    alert('Yo!');
  };

  render() {
    return (
      <div className={styles.post}>
        <h2>Posts</h2>
        <textarea cols='40' rows='5'></textarea>
        <br />
        <button onClick={this.alerting}>Add post</button>
      </div>
    );
  }
}

export default Post;
