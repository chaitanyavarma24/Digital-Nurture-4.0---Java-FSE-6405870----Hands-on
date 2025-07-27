# React Hands‑on 4 – React Component Lifecycle Methods

This hands‑on lab demonstrates how to fetch data using `componentDidMount()` in a class component and handle errors with `componentDidCatch()`.

## Objective

- Use `componentDidMount()` to fetch data from an API  
- Handle rendering errors with `componentDidCatch()`  
- Render a list of posts using separate `Post` and `Posts` components

## Folder Structure

```
React-handson-4/
│
├── 4. ReactJS-HOL/
│   └── blogapp/
│       └── src/
│           ├── App.js        # Renders Posts component
│           ├── Post.js       # Displays an individual post
│           └── Posts.js      # Fetches posts and renders list
│
└── output/                   # Screenshot(s) of browser output
```

## Steps Performed

1. Created a new React project named **blogapp**.  
2. Added:
   - `Post.js` – basic class component to display a post  
   - `Posts.js` – class component that fetches all posts, renders a list, and handles errors  
3. Rendered the `Posts` component inside `App.js`.  

## How to Run

```bash
cd blogapp
npm install
npm start
```

Open `http://localhost:3000` in your browser.

## Code

### `src/Post.js`

```jsx
import React from 'react';

class Post extends React.Component {
  render() {
    // Receives `title` and `body` as props from the parent component
    // (still placeholder text in this version)
    return (
      <div>
        <h2>Post Title</h2>
        <p>Post body text...</p>
      </div>
    );
  }
}

export default Post;
```

### `src/Posts.js`

```jsx
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => console.error('Error fetching posts:', error));
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred in the Posts component.');
    console.error('Error caught by componentDidCatch:', error, info);
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
```

### `src/App.js`

```jsx
import React from 'react';
import './App.css';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
```

## Output

See the **output** folder for a screenshot of the rendered list of blog posts in the browser.
