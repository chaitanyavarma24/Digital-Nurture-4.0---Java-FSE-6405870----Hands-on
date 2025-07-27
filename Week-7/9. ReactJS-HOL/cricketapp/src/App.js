import React from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = false;

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'left' }}>
      {flag ? (
        <ListofPlayers />
      ) :(
          <IndianPlayers />
      )}
    </div>
  );
}

export default App;
