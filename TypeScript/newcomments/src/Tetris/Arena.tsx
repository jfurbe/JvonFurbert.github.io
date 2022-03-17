import React, { useEffect } from 'react'; 
import Piece from './Piece';
import Block from './Block';
import './Tetris.css';

const Arena = ()=> {
   const aHeight = 8;
   const aWidth = 12;
   var arena = Array(aHeight);
  
   for (let i=0;i<aHeight;i++){
      arena[i] = [];
      for (let j=0;j<aWidth;j++){
         arena[i].push([i,j]);
      } 
   }

   useEffect(()=> {
      <Block/>
   })

   return (
      <>
      {arena.map(x=> 
      x.map((y:any)=> 
      <Piece key={y[0]+'-'+y[1]} id={y[0]+'-'+y[1]} x={y[0]} y={y[1]}/>))
      }
      
      </>
   )
}

export default Arena;