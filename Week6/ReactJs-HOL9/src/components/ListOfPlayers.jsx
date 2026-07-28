import React from 'react';

function ListOfPlayers({ players }) {
  const below70 = players.filter((item) => item.score <= 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((item) => (
          <li key={item.name}>
            Mr. {item.name} <span>({item.score})</span>
          </li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {below70.map((item) => (
          <li key={item.name}>
            {item.name} - {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfPlayers;
