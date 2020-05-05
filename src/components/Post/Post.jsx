import React, { Component } from 'react';
// import styles from './Post.module.css';

class Post extends Component {
  render() {
    return (
      <ul class='collection'>
        <li class='collection-item avatar'>
          <img src='avatar.svg' alt='' class='circle' />
          <span class='title'>Title</span>
          <p>
            First Line <br />
            {this.props.message}
          </p>
          <a href='/' class='secondary-content'>
            <img src="like.svg" alt="like" />like
          </a>
        </li>
      </ul>
    );
  }
}

export default Post;
