import logo from './logo.svg';
import './App.css';
import React from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import HtmlDisplay from './components/HtmlDisplay';

function App() {
  return (
    <div className="App">
      <div className="container ">
        <MarkdownEditor />
        <HtmlDisplay />
      </div>
    </div>
  );
}

export default App;
