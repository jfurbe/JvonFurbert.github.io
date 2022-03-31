import React, { useState,useEffect } from 'react'; 
import Piece from './Piece';
import Block from './Block';
import './Tetris.css';

const Arena = ()=> {
   const aHeight = 8;
   const aWidth = 16;
   const [botBoundary, setBotBoundary] = useState([]);
   var arena = Array(aHeight);
  
   for (let i=0;i<aHeight;i++){
      arena[i] = [];
      for (let j=0;j<aWidth;j++){
         arena[i].push([i,j]);
      } 
   }

   const handleBoundary = ()=> {

   };

   console.log(arena)
   //left 935, bot 835, left 335, top 135
   return (
      <div>
         {arena.map(x=>
         x.map((y : any)=>
         <Piece x={y[0]} y={y[1]} id={y[0]+'-'+y[1]} />
         ))}
         
         <Block/>
      </div>
   )
}

export default Arena;