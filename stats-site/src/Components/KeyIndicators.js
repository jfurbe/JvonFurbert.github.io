import React, {useState} from 'react';
import {Container, Row, Col,Card} from 'react-bootstrap';
import stats from './helpers/keyStats.js';

function KeyIndicators() {
  const arr=[1,2,3,4,5,6]
  
  const [hovered, setHovered] = useState(false);
  const style1 = {opacity:'.9', 
                  width: '100%', 
                  margin:'20px', 
                  backgroundColor:'#e2e8f0', 
                  color:'black', height:'14rem'}
  const style2 = {opacity:'.9', 
                  width: '100%', 
                  margin:'20px', 
                  backgroundColor:'black', 
                  color:'#e2e8f0', height:'14rem'}

  const [style, setStyle] = useState(style1) 

  function onEnter(e){
      let ele = e.target.parentElement.id;
      document.getElementById(ele).style.backgroundColor = 'black';
    }

    function onLeave(e){
      let ele = e.target.parentElement.id;
      document.getElementById(ele).style.backgroundColor = 'white';

    }
    

  return (
      <Container>
          <h2 style={{color:'#e2e8f0', textShadow:'3px 3px 3px #000000'}}>Core Statistics and Trends</h2>
      <Row>
        {stats.map((x,i)=>
        <Col lg={4} sm={6}>
          <Card 
          id={'keyStat-'+i}
          style={style}
          >
          <Card.Body onMouseEnter={(e)=>onEnter(e)}
          onMouseLeave={(e)=>onLeave(e)}>
          <div>{x.icon}</div>
          <Card.Text className="mb-1">
            <b>{x.title}</b>
          </Card.Text>
            <h4
            style={{textShadow:'0px 4px 3px rgba(0,0,0,0.4),0px 6px 13px rgba(0,0,0,0.1),0px 18px 20spx rgba(0,0,0,0.1)', margin:'0 0 0 0' }}>{x.high}</h4>
            
            <Card.Text >
              {x.text}
            </Card.Text>
            
          </Card.Body>
        </Card>
        </Col>)}
      </Row>  
    </Container>
  )
}

export default KeyIndicators;