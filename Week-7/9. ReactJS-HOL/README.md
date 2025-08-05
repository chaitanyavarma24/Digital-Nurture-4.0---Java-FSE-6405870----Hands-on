# React Hands-on 9 – ES6 Features in React

This hands-on lab demonstrates how to use modern ES6 JavaScript features in a React application by displaying and filtering cricket player data.

## Objective

* Use the `map()` method of ES6
* Apply arrow functions
* Implement destructuring
* Merge arrays using spread operator
* Conditionally render components using a flag

## Folder Structure

```
React-handson-9/
│
├── cricketapp/
│   └── src/
│       ├── App.js
│       ├── ListofPlayers.js
│       ├── IndianPlayers.js
│       └── App.css
│
└── output/              # Screenshot or description of rendered components
```

## Steps Performed

1. Created a new React app using `create-react-app` named `cricketapp`
2. Added two components:

   * `ListofPlayers` to demonstrate `map()` and filtering using arrow functions
   * `IndianPlayers` to demonstrate merging and destructuring of arrays
3. Used a flag variable to conditionally render one of the components

## How to Run the Project

```bash
cd cricketapp
npm install
npm start
```

Visit `http://localhost:3000` to view the output.

## Code Changes

### `src/App.js`

```jsx
import React from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = false;

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'left' }}>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
```

### `src/ListofPlayers.js`

```jsx
import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Harish', score: 90 },
    { name: 'Suresh', score: 60 },
    { name: 'Vignesh', score: 80 },
    { name: 'Balaji', score: 50 },
    { name: 'Karthik', score: 75 },
    { name: 'Gokul', score: 68 },
    { name: 'Yogesh', score: 85 },
    { name: 'Santhosh', score: 65 },
    { name: 'Yuvaraj', score: 77 },
    { name: 'Mani', score: 72 },
    { name: 'Lokesh', score: 66 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h1>List of players</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h1>Players with score below 70</h1>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
```

### `src/IndianPlayers.js`

```jsx
import React from 'react';

function IndianPlayers() {
  const T20players = ['Sachin1', 'Dhoni2', 'Virat3'];
  const RanjiTrophyPlayers = ['Rohit4', 'Raina5', 'Yuvaraj6'];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];
  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h1>Odd Players</h1>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>
            {index === 0 ? 'First' : index === 1 ? 'Third' : 'Fifth'} : {player}
          </li>
        ))}
      </ul>

      <h1>Even Players</h1>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>
            {index === 0 ? 'Second' : index === 1 ? 'Fourth' : 'Sixth'} : {player}
          </li>
        ))}
      </ul>

      <h1>List of Indian Players Merged:</h1>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>Mr. {player.replace(/[0-9]/g, '')} Player</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
```

## Output

Check the `output/` folder for a screenshot of the rendered players list or merged list, depending on the flag value in `App.js`.
