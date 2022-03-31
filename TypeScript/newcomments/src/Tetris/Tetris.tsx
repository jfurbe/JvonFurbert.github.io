import React, {useEffect} from 'react';
import Arena from './Arena';
import './Tetris.css';

const Tetris = ()=> {
   
   
   return (
   <div className="tetBox">
      <h1>Welcome to Tetris</h1>
      <div>
         <Arena/>
      </div>
      <div style={{top:'385px', border:'yellow sold 3px'}}></div>
   </div>
   )
}


export default Tetris;