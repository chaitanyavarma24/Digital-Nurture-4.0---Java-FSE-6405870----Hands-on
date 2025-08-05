Based on your React code and the instructions from **11. ReactJS-HOL (Event Handling)**, here is a complete `README.md` file in the same style as earlier hands-on labs.

---

```markdown
# React Hands-on 11 – Event Handling and Synthetic Events

This hands-on lab demonstrates how to handle events in React using event handlers, synthetic events, and functional components with state.

## Objective

- Implement event handling in React applications
- Use `this` keyword and synthetic events
- Trigger multiple functions on a single event
- Convert currency using input and a button click

## Folder Structure

```

React-handson-11/
│
├── 11. ReactJS-HOL/
│   └── eventexamplesapp/
│       └── src/
│           ├── App.js                    # Root component rendering all event examples
│           ├── CounterAlert.js           # Increments and decrements with alert
│           ├── WelcomeAlert.js           # Displays a welcome alert
│           ├── ClickAlert.js             # Demonstrates synthetic event
│           └── CurrencyConvertorAlert.js # Handles currency conversion
│
└── output/                               # Screenshot of final output in browser

````

## Steps Performed

1. Created a React app named `eventexamplesapp`
2. Built the following components:
   - `CounterAlert` for increment/decrement with multiple function triggers
   - `ClickAlert` to demonstrate React synthetic event handling
   - `WelcomeAlert` to show alert messages with arguments
   - `CurrencyConvertorAlert` to convert Indian Rupees to EUR or USD with validation
3. Used React `useState()` for state management
4. Used event handlers like `onClick`, `onChange`, and synthetic `event.preventDefault()`

## How to Run the Project

```bash
cd eventexamplesapp
npm install
npm start
````

Visit `http://localhost:3000` to view the output.

## Code Changes

### `src/App.js`

```jsx
import React from 'react';
import CounterAlert from './CounterAlert';
import WelcomeAlert from './WelcomeAlert';
import ClickAlert from './ClickAlert';
import CurrencyConvertorAlert from './CurrencyConvertorAlert';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <CounterAlert />
      <ClickAlert />
      <WelcomeAlert />
      <CurrencyConvertorAlert />
    </div>
  );
}

export default App;
```

---

### `src/CounterAlert.js`

```jsx
import React, { useState } from 'react';

function CounterAlert() {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    alert('Hello! This is a static message');
  };

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button><br/>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterAlert;
```

---

### `src/ClickAlert.js`

```jsx
import React from 'react';

function ClickAlert() {
  const handleClick = (event) => {
    event.preventDefault();
    alert('I was clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickAlert;
```

---

### `src/WelcomeAlert.js`

```jsx
import React from 'react';

function WelcomeAlert() {
  const sayMessage = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <button onClick={() => sayMessage('Welcome')}>Say Welcome</button>
    </div>
  );
}

export default WelcomeAlert;
```

---

### `src/CurrencyConvertorAlert.js`

```jsx
import React, { useState } from 'react';

function CurrencyConvertorAlert() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount');
      return;
    }

    const rates = {
      EUR: 91,
      USD: 80,
    };

    const upperCurrency = currency.toUpperCase();

    if (!rates[upperCurrency]) {
      alert('Unsupported currency. Please enter EUR or USD.');
      return;
    }

    const result = (parseFloat(amount) * rates[upperCurrency]).toFixed(2);
    alert(`Converting to ${upperCurrency}: ₹${result}`);
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>

      <div style={{ textAlign: 'left', marginBottom: '10px' }}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div style={{ textAlign: 'left', marginBottom: '10px' }}>
        <label>Currency:</label>
        <textarea
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CurrencyConvertorAlert;
```

---

## Output

The application demonstrates:

* **Counter with alert**: Increments with a hello message and decrements normally
* **Click button**: Triggers a synthetic event and shows alert
* **Welcome button**: Triggers alert with "Welcome" using argument
* **Currency converter**: Converts INR to EUR/USD with validation and inline alerts

Check the `output/` folder for screenshots or run the app to see it live.

```

---

Would you like this saved as a `.md` file for download?
```
