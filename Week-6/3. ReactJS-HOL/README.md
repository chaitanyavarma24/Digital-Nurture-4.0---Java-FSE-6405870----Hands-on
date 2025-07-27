# React Hands-on 3 – Functional Component and Styling with Props

This hands-on lab demonstrates how to create a functional component in React, pass data using props, and style it with an external CSS file.

## Objective

- Create a functional component
- Pass props to display student information
- Use helper functions to calculate percentage
- Apply styles using a separate CSS file

## Folder Structure

```
React-handson-3/
│
├── 3. ReactJS-HOL/
│   └── scorecalculatorapp/                 # Full React project
│       └── src/
│           ├── App.js                      # Main file
│           ├── Components/
│           │   └── CalculatorScore.js      # Functional component using props
│           └── Stylesheets/
│               └── mystyle.css             # External CSS styles
│
└── output/                                 # Screenshot(s) of browser output
```

## Steps Performed

1. Created a new React app named `scorecalculatorapp`
2. Created a functional component `CalculatorScore`
3. Passed props: `Name`, `School`, `total`, `goal`
4. Calculated percentage using helper function
5. Applied styling using external CSS file

## How to Run the Project

```bash
cd scorecalculatorapp
npm install
npm start
```

Open your browser at `http://localhost:3000`

## Code Changes

### `src/Components/CalculatorScore.js`

```jsx
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal.toFixed(2) + '%');
}

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
}

export const CalculateScore = ({ Name, School, total, goal }) => (
  <div className="formatstyle">
    <h1 style={{ color: 'brown' }}>Student Details:</h1>

    <div className="Name">
      <b><span>Name: </span></b>
      <span>{Name}</span>
    </div>

    <div className="School">
      <b><span>School: </span></b>
      <span>{School}</span>
    </div>

    <div className="Total">
      <b><span>Total: </span></b>
      <span>{total}</span> <span>Marks</span>
    </div>

    <div className="Score">
      <b>Score: </b>
      <span>{calcScore(total, goal)}%</span>
    </div>
  </div>
);
```

### `src/Stylesheets/mystyle.css`

```css
.Name {
  font-weight: 300;
  color: blue;
}

.School {
  color: crimson;
}

.Total {
  color: darkmagenta;
}

.formatstyle {
  text-align: center;
  font-size: large;
}

.Score {
  color: forestgreen;
}
```

### `src/App.js`

```jsx
import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculatorScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name={"Chaitanya"}
        School={"Bala Vignan School"}
        total={283}
        goal={3}
      />
    </div>
  );
}

export default App;
```

## Output

Refer to the `output/` folder for a screenshot showing the styled student details and the calculated percentage.
