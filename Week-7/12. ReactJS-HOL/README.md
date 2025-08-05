# React Hands-on 12 – Conditional Rendering

This hands-on lab demonstrates how to implement conditional rendering in a React application using state, logic-based rendering, and component composition.

## Objective

- Implement conditional rendering in React applications
- Use element variables to switch components dynamically
- Prevent components from rendering based on login state

## Folder Structure

```

React-handson-12/
│
├── 12. ReactJS-HOL/
│   └── ticketbookingapp/
│       └── src/
│           └── App.js            # Root component with login/logout logic and greetings
│
└── output/                       # Screenshot of guest/user greeting and button states

````

## Steps Performed

1. Created a React app named `ticketbookingapp` using `create-react-app`
2. Built the following components:
   - `Greeting` – decides which greeting component to show based on login state
   - `UserGreeting` – shown when user is logged in
   - `GuestGreeting` – shown when user is not logged in
   - `LoginButton` and `LogoutButton` – conditionally rendered
3. Used React `useState()` to manage login status
4. Implemented conditional rendering using a ternary operator and logical checks

## How to Run the Project

```bash
cd ticketbookingapp
npm install
npm start
````

Visit `http://localhost:3000` to view the output.

## Code Changes

### `src/App.js`

```jsx
import React, { useState } from 'react';

// Login Button Component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout Button Component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Greeting Component
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// User Greeting Component
function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
    </div>
  );
}

// Guest Greeting Component
function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
    </div>
  );
}

// App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div style={{ margin: '150px 150px' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}

export default App;
```

## Output

The app demonstrates:

* When **logged out**: shows **"Please sign up"** message and **Login** button
* When **logged in**: shows **"Welcome back"** message and **Logout** button

Check the `output/` folder for a screenshot showing both states in the browser.

