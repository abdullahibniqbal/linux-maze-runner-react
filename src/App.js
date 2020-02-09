import React from 'react';
import logo from './logo.svg';
import './App.css';

import { renderedHtml } from "./domain/model/composites/question";
import { consComposite } from "./domain/model/composites/composite";

function App() {

  const composite = consComposite(
      drawQuestion("How to install MySQL in CentOS7?", "I have tried this and that, etc."),
      [consComposite(
          drawAnswer("Install it using Yum."),
          [consComposite(
              drawComment("This works!")
          ),
            consComposite(
                drawComment("This does not work but could be a problem in my machine!")
            )]
      )]
  );

  function drawQuestion(title, description) {
    return function() {
      return `
            <h2>Question: ${title}</h2>
            <p>Description: ${description}</p>   
        `;
    }
  }

  function drawAnswer(description) {
    return function() {
      return `
            <p>Answer: ${description}</p>
        `;
    }
  }

  function drawComment(description) {
    return function() {
      return `
            <p>Comment: ${description}</p>
        `;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Linux maze runner</code>
        </p>
        <div>{consComposite()}</div>
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
