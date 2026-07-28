import React, { useState } from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

const players = [
  { name: 'Sachin Tendulkar', score: 98 },
  { name: 'Virat Kohli', score: 75 },
  { name: 'Rohit Sharma', score: 82 },
  { name: 'Sourav Ganguly', score: 64 },
  { name: 'MS Dhoni', score: 67 },
  { name: 'Rahul Dravid', score: 92 },
  { name: 'Anil Kumble', score: 55 },
  { name: 'VVS Laxman', score: 73 },
  { name: 'Yuvraj Singh', score: 71 },
  { name: 'Jasprit Bumrah', score: 48 },
  { name: 'Hardik Pandya', score: 69 },
];

function App() {
  const [showIndianPlayers] = useState(true);

  return (
    <div className="app-shell">
      <div className="card">
        <h1>CricketApp ES6 Lab</h1>
        <p>This lab uses ES6 features: <strong>map</strong>, <strong>arrow functions</strong>, <strong>destructuring</strong>, and <strong>spread merge</strong>.</p>
      </div>

      <div className="card">
        <ListOfPlayers players={players} />
      </div>

      {showIndianPlayers && (
        <div className="card">
          <IndianPlayers />
        </div>
      )}
    </div>
  );
}

export default App;
