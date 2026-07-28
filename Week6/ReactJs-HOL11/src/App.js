import React, { useState } from 'react';
import './App.css';

function LoginButton({ onClick }) {
  return (
    <button className="action-button" onClick={onClick}>
      Login
    </button>
  );
}

function LogoutButton({ onClick }) {
  return (
    <button className="action-button" onClick={onClick}>
      Logout
    </button>
  );
}

function GuestGreeting() {
  return (
    <div className="message-card">
      <h1>Please sign up.</h1>
      <p>Browse available flight details below.</p>
    </div>
  );
}

function UserGreeting() {
  return (
    <div className="message-card">
      <h1>Welcome back</h1>
      <p>You can book tickets now.</p>
    </div>
  );
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function FlightDetails({ isLoggedIn }) {
  return (
    <section className="flights-card">
      <h2>Available Flights</h2>
      <ul>
        <li>
          <strong>NYC → LAX</strong> | 10:00 AM | $199 {isLoggedIn ? <button>Book Ticket</button> : null}
        </li>
        <li>
          <strong>SEA → SFO</strong> | 1:30 PM | $129 {isLoggedIn ? <button>Book Ticket</button> : null}
        </li>
        <li>
          <strong>DAL → MIA</strong> | 6:45 PM | $179 {isLoggedIn ? <button>Book Ticket</button> : null}
        </li>
      </ul>
    </section>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div className="app-shell">
      <div className="topbar">
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogoutClick} />
        ) : (
          <LoginButton onClick={handleLoginClick} />
        )}
      </div>
      <FlightDetails isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
