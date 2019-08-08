import React from 'react';
import Display from './components/Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>
      <div className="scoreboard-border">
        <h4 className="scoreboard-header">Welcome to Wrigley Field!  Home of the Chicago Cubs!</h4>
        <Display />
      </div>
      
    </div>
  );
}

export default App;
