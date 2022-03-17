import React, {useEffect} from 'react';
import Block from './Block';
import Arena from './Arena';
import './Tetris.css';

const Tetris = ()=> {
   
   useEffect(()=> {
      <Block/>
      console.log(123)
   })

   return (
      
   <div className="tetBox">
   <h1>Welcome to Tetris</h1>
   <div>
   <Arena/>
   
   </div>
   
   </div>
   
   )
}


export default Tetris;