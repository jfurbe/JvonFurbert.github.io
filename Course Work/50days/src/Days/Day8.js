import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import Smile from './Smile';
import Eye from './Eye';

const lineStyle = {
   borderBottom: '6px solid green',
   width: '300px',
   position: 'absolute',
   left: '10%',
   marginBottom: '-3px',
   top: '300px'
}
const Day8 = ()=> {
   const locY = 600;
   const smileSize = 0;
const circleStyle = {

      height: '300px',
      width: '300px',
      borderBottom: '6px solid #bbb',
      borderRadius: '50%', // Y + (total height/total radius) = 1%
      display: 'inline-block',
      position: 'absolute',
      left: '40%',
      //transition: 'border-radius 2s',
      visibility: 'visible',
      top:(locY-300+6).toString()+'px' //top - height + borderRadius
 
}

const circleStyle2 = {

   height: '300px',
   width: '300px',
   borderTop: '6px solid #bbb',
   borderRadius: '0%',
   display: 'inline-block',
   position: 'absolute',
   left: '40%',
   //transition: 'border-radius 2s',
   top: locY+'px',
   visibility: 'visible'
}


   const [isLine, setIsLine] = useState(true)
  
  
const movement = (a,b)=> {
   let body = document.getElementById("root")
   

   body.addEventListener('mousemove', e => {
   
      if (e.clientY < locY && e.clientY > locY -300){
         
         console.log(e.offsetX, e.offsetY, e.clientX, e.clientY)
         b.borderRadius="0%"
            b.visibility = 'hidden'
            a.visibility = 'visible'
            a.borderRadius = Math.floor(locY%e.clientY/3)+'%'
      }
      else if (e.clientY > locY && e.clientY < locY +300){
         console.log(e.offsetX, e.offsetY, Math.floor(e.offsetY%locY/3))
         a.borderRadius = '0%'
           a.visibility = 'hidden'
           b.visibility = 'visible'
            b.borderRadius= Math.floor(e.clientY%locY/3)+"%"
      }
   });
}
   useEffect(()=> {
      let a = document.getElementById('alpha').style
      let b = document.getElementById('beta').style
      movement(a,b)
   }, [isLine]);

   return (
      <>
      
      <h1>Day 8</h1>
      <Container>
      <Eye/>
      <Row id="fun">
      
      <div id='alpha' style={circleStyle}/>
      <div id='beta' style={circleStyle2}/>

      </Row>
      </Container>
      </>
   )
}

export default Day8;