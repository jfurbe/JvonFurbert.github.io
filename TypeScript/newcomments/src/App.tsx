import React, {useState} from 'react';
import logo from './logo.svg';
import CommentSection from './CommentSection/CommentSection';
import IdBox from './IdSection/IdBox';
import Tetris from './Tetris/Tetris';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';

function App() {
  const [play, setPlay] = useState(false);
  return (
    <RecoilRoot>
    <div className="App">
      <div className="App-header">
      <button onClick={()=> setPlay(!play)}>Play?</button>
      <IdBox/> 
        <img src={logo} className="App-logo" alt="logo" width="150px"/>   
           
        <div style= {{width:"600px"}}>
        {play ? 
        <Tetris/> :
        <CommentSection/> }
      </div>
      </div>
    </div>
    </RecoilRoot>
  );
}

export default App;
