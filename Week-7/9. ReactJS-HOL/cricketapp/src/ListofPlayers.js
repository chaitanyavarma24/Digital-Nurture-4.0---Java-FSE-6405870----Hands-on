import React from 'react';

function ListofPlayers() {
  // Array of 11 players with scores
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

  // Filter players with score below 70
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h1>List of players</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h1>Players with score below 70 </h1>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
