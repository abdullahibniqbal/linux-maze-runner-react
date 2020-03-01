import React from 'react';
import logo from './logo.svg';
import './App.css';

import { widgetJsx } from "./ui/widgets/widget-jsx";
import { glyphs } from "./domain/model/composites/glyphs/glyph";
import { glyphConstants } from "./domain/model/composites/glyphs/glyph-constants";

function App() {

  const glyphsFactory = glyphs(widgetJsx);
  let questionGlyph = glyphsFactory.consGlyph(glyphConstants.QUESTION, {
    text: "How to install MySQL in CentOS 7?",
      isClosed: true,
      author: "Mustehssun Iqbal"
  });

  console.log(questionGlyph);

  questionGlyph = questionGlyph.addChild(questionGlyph, glyphsFactory.consGlyph(glyphConstants.ANSWER, {
    text: "Install it using Yum.",
    isClosed: false,
    author: "Yum Guru"
  }));

  questionGlyph = questionGlyph.addChild(questionGlyph, glyphsFactory.consGlyph(glyphConstants.ANSWER, {
    text: "Install it using RPM",
    isClosed: false,
    author: "RPM Guru"
  }));

  const QuestionWidget = questionGlyph.draw(questionGlyph.state);
  const YumAnswerWidget = questionGlyph.children[0].draw(questionGlyph.children[0].state);
  const RPMAnswerWidget = questionGlyph.children[1].draw(questionGlyph.children[1].state);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Linux maze runner</code>
        </p>
        <div>
          <QuestionWidget />
          <br />
          <YumAnswerWidget />
          <br />
          <RPMAnswerWidget />
          <br />
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
