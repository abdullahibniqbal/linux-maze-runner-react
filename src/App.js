import React from 'react';
import logo from './linux-maze-runner-logo.png';
import './App.css';
import maze from "./ui/layout/maze/maze";

function App() {

  const Maze = maze().draw();

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Linux maze runner</code>
        </p>
        <div>
          <Maze />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
