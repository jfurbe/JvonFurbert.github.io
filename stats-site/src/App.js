import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import MainComp from './Components/MainComp';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <MainComp/>
    </RecoilRoot>
  );
}

export default App;
