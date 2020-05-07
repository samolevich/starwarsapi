import React, { Component } from 'react';
import styles from './Post.module.css';

class Post extends Component {

  postArea = React.createRef();

  alerting = () => {
    this.props.addPost(this.postArea.current.value);
  }

  render() {
    return (
      <div className={styles.post}>
        <h2>Posts</h2>
        <textarea ref={this.postArea} cols='40' rows='5'></textarea>
        <br />
        <button onClick={this.alerting}>Add post</button>
        <div>{this.props.state.posts}</div>
      </div>
    );
  }
}

export default Post;
