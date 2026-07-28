import React from 'react';

export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <h3>Odd Team Players</h3>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

function IndianPlayers() {
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const indianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>
      <OddPlayers players={indianPlayers} />
      <h3>Merged Player Lists</h3>
      <ul>
        {indianPlayers.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
