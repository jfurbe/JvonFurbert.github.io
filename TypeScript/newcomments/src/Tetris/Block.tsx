import React, {useState, useEffect} from 'react'; 
import './Tetris.css';

const Block  = ()=> {
   let [pos, setPos] = useState([4,0]);
   let type = '';

  
   const game = document.getElementById(pos[0]+'-'+pos[1]);
   
   useEffect(()=> {
      console.log(game)
      game &&
      setInterval(()=> {
         console.log(game)
            game.style.backgroundColor = 'white';
            setPos([pos[0],pos[1]+1]);
            console.log(pos)
            game.style.backgroundColor = 'red';
         
      }
         , 3000)
   })

   return (
      <>
      
      </>
      
   )
}

export default Block;

