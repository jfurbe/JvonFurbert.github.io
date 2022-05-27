import React, {useState} from 'react';
import {Container, Row, Col,Card} from 'react-bootstrap';
import KeyStats from './KeyStats.js';

function KeyIndicators() {
  const arr=[1,2,3,4,5,6]
  
  const [hovered, setHovered] = useState(false);
  const style1 = {opacity:'.9', 
                  width: '100%', 
                  margin:'1rem', 
                  backgroundColor:'#e2e8f0', 
                  color:'black', minHeight:'14rem',
                  transition: 'transform .2s'}


  function onEnter(e){
    //console.log(e)
    let ele = e.target.parentElement.id
      setHovered(e.target.parentElement.id);
      console.log(hovered);
      document.getElementById(ele).style.backgroundColor = 'white';
      document.getElementById(ele).style.transform = 'scale(1.2)';
      document.getElementById(ele).style.transition = 'transform .3s';
    }

    function onLeave(e){
      document.getElementById(hovered).style.backgroundColor = '#e2e8f0';
      document.getElementById(hovered).style.transform = 'scale(1)';
      document.getElementById(hovered).style.transition = 'transform .3s';
      setHovered('')
    }
    

  return (
      <Container>
          <h2 style={{color:'#e2e8f0', textShadow:'3px 3px 3px #000000'}}>Core Statistics and Trends</h2>
        <KeyStats onLeave={onLeave} onEnter={onEnter} style={style1}/>  
    </Container>
  )
}

export default KeyIndicators;