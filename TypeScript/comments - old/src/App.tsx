import React from 'react';
import logo from './logo.svg';
import CommentSection from './CommentSection/CommentSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="150px"/>        
        <div style= {{width:"600px"}}>
        <CommentSection/>
      </div>
      </header>
    </div>
  );
}

export default App;
