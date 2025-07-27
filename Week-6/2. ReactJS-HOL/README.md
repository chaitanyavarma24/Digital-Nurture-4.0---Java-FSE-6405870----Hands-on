# React Hands-on 2 – Creating Multiple Components

This hands-on lab demonstrates how to create and render multiple class-based components in a React application.

## Objective

- Create and render multiple React components
- Understand how to organize and structure components in a single-page application

## Folder Structure

```
React-handson-2/
│
├── 2. ReactJS-HOL/
│   └── StudentApp/                # Full React project
│       └── src/
│           ├── App.js            # Main file rendering all components
│           ├── Home.js           # Displays home page message
│           ├── About.js          # Displays about page message
│           └── Contact.js        # Displays contact page message
│
└── output/                        # Screenshot(s) of localhost output
```

## Steps Performed

1. Created a React app named `StudentApp`
2. Created three separate class components: `Home`, `About`, and `Contact`
3. Rendered all three components in `App.js`

## How to Run the Project

```bash
cd StudentApp
npm install
npm start
```

Then open the browser at `http://localhost:3000`

## Code Changes

### `src/Home.js`

```jsx
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return <h2>Welcome to the Home page of Student Management Portal</h2>;
  }
}

export default Home;
```

### `src/About.js`

```jsx
import React, { Component } from 'react';

class About extends Component {
  render() {
    return <h2>Welcome to the About page of the Student Management Portal</h2>;
  }
}

export default About;
```

### `src/Contact.js`

```jsx
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return <h2>Welcome to the Contact page of the Student Management Portal</h2>;
  }
}

export default Contact;
```

### `src/App.js`

```jsx
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
```

## Output

Refer to the `output/` folder for the browser screenshot showing all three components rendered on the page.
