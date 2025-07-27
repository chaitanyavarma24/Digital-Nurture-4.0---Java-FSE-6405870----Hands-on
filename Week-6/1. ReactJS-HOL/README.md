# React Hands-on 1 – Getting Started with React

This hands-on lab demonstrates setting up a basic React application and displaying a welcome message.

## Objective

- Set up a React environment using `create-react-app`
- Display a heading message on the homepage

## Folder Structure

```
React-handson-1/
│
├── 1. ReactJS-HOL/
│   └── myfirstreact/              # Contains full React project
│       └── src/
│           └── App.js             # Modified file to display message
│
└── output/                        # Screenshot(s) of localhost output
```

## Steps Performed

1. Created a new React project named `myfirstreact` using `create-react-app`
2. Replaced the default content in `App.js` with a welcome message
3. Ran the application to confirm output on browser

## How to Run the Project

```bash
cd myfirstreact
npm install
npm start
```

Then open the browser at `http://localhost:3000`

## Code Changes

### `src/App.js`

```jsx
function App() {
  return (
    <div>
      <h1>Welcome to the first session of React</h1>
    </div>
  );
}

export default App;
```

## Output

Refer to the `output/` folder for a screenshot of the local output on the browser.

