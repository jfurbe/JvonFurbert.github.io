import React from 'react';

type Piece = {
   x : number,
   y : number,
   id : string,
   color? : string,

}
const Piece = ({x,y,id,color='white'}: Piece)=> {

   return(
      <div id={id}
      className={'box1'} 
      style={{left:485+x*25+'px', top:285+y*25+'px', backgroundColor:color}}></div>
   )
}

export default Piece;