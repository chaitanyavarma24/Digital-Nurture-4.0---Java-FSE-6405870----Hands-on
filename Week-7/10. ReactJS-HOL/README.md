# React Hands-on 10 – JSX and Inline CSS

This hands-on lab demonstrates how to build a React application using JSX syntax and apply conditional inline styling based on JavaScript expressions.

## Objective

- Use JSX syntax in React applications
- Use JavaScript expressions in JSX
- Apply inline CSS styles conditionally
- Render lists of data using `map()`

## Folder Structure

```

React-handson-10/
│
├── 10. ReactJS-HOL/
│   └── officespacerentalapp/
│       └── src/
│           ├── App.js              # Main component with JSX, list rendering, and inline styles
│           └── App.css             # Optional for base styling
│
└── output/                         # Screenshot of rendered office space cards

````

## Steps Performed

1. Created a new React app named `officespacerentalapp` using `create-react-app`
2. Used JSX to:
   - Display a heading using a JSX element
   - Render images and office details using object properties
   - Loop through an array of office listings using `map()`
3. Applied **inline CSS styling** for rent:
   - Green if rent ≥ ₹60000
   - Red if rent < ₹60000

## How to Run the Project

```bash
cd officespacerentalapp
npm install
npm start
````

Visit `http://localhost:3000` to view the output.

## Code Changes

### `src/App.js`

```jsx
import React from 'react';
import './App.css';

function App() {
  const offices = [
    {
      name: 'Varma Spaces',
      rent: 62000,
      address: 'Governorpet, Vijayawada',
      image: 'https://wallpapers.com/images/hd/office-pictures-l1uenky9l8d29djp.jpg'
    },
    {
      name: 'Bhanu Towers',
      rent: 45000,
      address: 'Benz Circle, Vijayawada',
      image: 'https://virtualbackgrounds.site/wp-content/uploads/2020/08/office-with-a-garden-view.jpg'
    },
    {
      name: 'Chaitanya Elite',
      rent: 70000,
      address: 'Moghalrajpuram, Vijayawada',
      image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'left' }}>
      <h1>Office Space , at Affordable range</h1>

      {offices.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <img src={item.image} alt={item.name} width="300" />
          <p><strong>Name:</strong> {item.name}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
              ₹{item.rent}
            </span>
          </p>
          <p><strong>Address:</strong> {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

## Output

Check the `output/` folder to see how JSX was used to display a styled list of office spaces with rent values conditionally highlighted in red or green.

```