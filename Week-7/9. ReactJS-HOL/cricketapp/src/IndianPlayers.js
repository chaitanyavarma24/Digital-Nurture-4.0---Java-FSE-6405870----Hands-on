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
