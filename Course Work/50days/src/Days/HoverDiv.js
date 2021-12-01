import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

const boxStyle = {width:'50px',
height:'50px',
border: '1px solid black',
backgroundColor:'white',
transition: 'background-color .5s',
borderRadius: '5px'}


const HoverDiv = ({color})=> {
   const [style, setStyle] = useState(boxStyle)
   
   const handleEnter = ()=> {
      setStyle({...boxStyle, backgroundColor:color, })
      //document.getElementById("one").style.backgroundColor = color
   }
   const handleLeave = ()=> {
      setTimeout(()=> setStyle({...boxStyle, backgroundColor:'white'}) ,3000)

   }
   return (
      <>
      <div id="one" onMouseEnter={handleEnter} onMouseLeave={handleLeave}  style={style} variant="outline-success"/>
   </>
   )
}

export default HoverDiv;