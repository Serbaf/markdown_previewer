import logo from './logo.svg';
import './App.css';
import React from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import HtmlDisplay from './components/HtmlDisplay';

function App() {
  return (
    <div className="App">
      <div className="container-fluid min-vh-100 p-5">
        <div className="row d-flex align-items-stretch">
          <div className="col-6">
            <MarkdownEditor />
          </div>
          <div className="col-6">
            <HtmlDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
