import React from 'react';
import logo from './logo.svg';
import CommentSection from './CommentSection/CommentSection';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="150px"/>        
        <div style= {{width:"600px"}}>
        <CommentSection/>
      </div>
      </header>
    </div>
    </RecoilRoot>
  );
}

export default App;
