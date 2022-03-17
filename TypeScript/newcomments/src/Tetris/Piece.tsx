import React from 'react';

type Piece = {
   x : number,
   y : number,
   id : string,

}
const Piece = ({x,y,id}: Piece)=> {

   return(
      <div id={id}
      className={'box1'} 
      style={{left:450+x*50+'px', top:250+y*50+'px'}}></div>
   )
}

export default Piece;