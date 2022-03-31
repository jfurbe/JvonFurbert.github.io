import React, {useState, useEffect} from 'react';
import Piece from './Piece'; 
import './Tetris.css';
import {keys} from './keys';

const Block  = ()=> {
   const [pos, setPos] = useState<[number,number]>([2,0]);
   const [loop, setLoop] = useState<any>(null);
   const [loop2, setLoop2] = useState<any>(null);
   let type = '';
   const game = document.getElementById('1');
   const keyApi = keys();
   console.log(pos);
   
   //handleBoundary()

   useEffect(()=> {
      let newPos :[number,number];
   setLoop(
      window.addEventListener('keydown', (event) => {
      newPos=[0,0]
      event.preventDefault();
      event.code.match('Arrow' ) && //available moves
      (newPos = keyApi.getKeyAndMove(event));
      setPos(pos=> (pos[0]+newPos[0]>=0 && pos[0]+newPos[0]<=6 && pos[1]+newPos[1]<=14) ? 
                     [pos[0]+newPos[0], pos[1]+newPos[1]] : pos)
   })
   )
   return ()=> {window.removeEventListener('keydown', loop)}
   }, []);
   //is boundary or take square
  useEffect(()=> {
      setLoop(
      setInterval(()=> {
            setPos(pos=> (pos[1]+1 <= 14) ?
             [pos[0],pos[1]+1] : pos);
      }
         , 1500) );
      return ()=>{
         clearInterval(loop);
      }
   }, [])

   return (
      <>
         <Piece x={pos[0]} y={pos[1]} id={'1'} color='red'/>
         <Piece x={pos[0]+1} y={pos[1]} id={'1'} color='red'/>
         <Piece x={pos[0]} y={pos[1]+1} id={'1'} color='red'/>
         <Piece x={pos[0]+1} y={pos[1]+1} id={'1'} color='red'/>
      </>
      
   )
}

export default Block;

