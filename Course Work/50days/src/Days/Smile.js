import React, {useState} from 'react';
import {Row, Button} from 'react-bootstrap';

const lineStyle = {
   borderBottom: '6px solid green',
   width: '300px',
   position: 'absolute',
   left: '10%',
   marginBottom: '-3px',
   top: '300px'
}

const circleStyle = {

      height: '300px',
      width: '300px',
      borderBottom: '6px solid #bbb',
      borderRadius: '50%',
      display: 'inline-block',
      position: 'absolute',
      left: '10%',
      transition: 'border-radius 2s',
      visibility: 'visible'
 
}

const circleStyle2 = {

   height: '300px',
   width: '300px',
   borderTop: '6px solid #bbb',
   borderRadius: '0%',
   display: 'inline-block',
   position: 'absolute',
   left: '10%',
   transition: 'border-radius 2s',
   top: '462px',
   visibility: 'hidden'
}

const Smile = ()=> {
   const [isLine, setIsLine] = useState(true)
   
   const handleClick = (e)=> {
      let a = document.getElementById('alpha').style
     let b = document.getElementById('beta').style
      if(e.target.outerText == 'isSmile'){
         document.getElementById('beta').style.borderRadius="0%"
         setTimeout(()=> {
            b.visibility = 'hidden'
            a.visibility = 'visible'
            a.borderRadius = '50%'
         
      }, 2000)
         
         
      // b = '50%'
      }
      else {
         
         document.getElementById('alpha').style.borderRadius = '0%'
         setTimeout(()=> {
           a.visibility = 'hidden'
           b.visibility = 'visible'
            b.borderRadius="50%"
         }, 2000)
      //   b = '0%'
      }
      setIsLine(!isLine)
      console.log(e)
}
   return (
      <>
      <h1>Day 8</h1>
      
      
      <div id='alpha' style={circleStyle}/>
      <div id='beta' style={circleStyle2}/>
      <Row>
      <Button onClick={handleClick}>isSmile</Button>
      <Button onClick={handleClick}>isFrown</Button>
      </Row>
      
      </>
   )
}

export default Smile;