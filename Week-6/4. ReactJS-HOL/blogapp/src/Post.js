import React from 'react';

class Post extends React.Component {
  render() {
    // here we will receive `title` and `body` as props later
    return (
      <div>
        <h2>Post Title</h2>
        <p>Post body text...</p>
      </div>
    );
  }
}

export default Post;
