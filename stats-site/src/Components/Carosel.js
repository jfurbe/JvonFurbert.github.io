import React, { useEffect, useState } from 'react';
import {Carousel, Container, Card, ListGroup} from 'react-bootstrap';
import caro3 from '../Resources/caro-3.jpg';
import caro2 from '../Resources/caro-2.jpg';
import caro1 from '../Resources/popStat.webp';


const styleC = {
  opacity: '.9',
  width: '85%',
  backgroundColor:'#e2e8f0',
  height:'17rem',
  overflowY: 'auto',
}

function Caro(){
  const [style, setStyle] = useState({opacity:'.1',  width:'30px', transition:'width .4s, opacity .4s'})
  
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('55').style.width= '90%';
      document.getElementById('55').style.opacity = '1';
      document.getElementById('56').style.width= '90%';
      document.getElementById('56').style.opacity = '1';
    }, 500);
    return () => clearTimeout(timer);
  }, []);
 return (
  <Container >
    <br/>
    <h2 style={{color:'#e2e8f0', textShadow:'3px 3px 3px #000000'}}>Latest Releases</h2>
    <Card className='mx-auto p-3 m-3' style={styleC}>
    <Card.Text id="55" className="fs-5" style={style}>
      <ul>
      <p>January 2022 Consumer Price Index</p>
      <p>December 2021 Retail Sales Index</p>
      <p>December 2021 Consumer Price Index Report</p>
      </ul>
      
    </Card.Text>
    </Card>  
    <br/>
    <h2 style={{color:'#e2e8f0', textShadow:'3px 3px 3px #000000'}}>Surveys Currently Running</h2>
    <Card className='mx-auto p-3 m-3' style={styleC}>
    <Card.Text id="56" className="fs-5" style={style}>
      
      <ul>
      <li><a href="https://kind-turing-b32c16.netlify.app/">Economic Activity Survey</a></li>
      <li><a href="#">Labour Force Survey</a> </li>
      <li><a href="#">Household Expenditure Survey</a> </li>
      </ul>
 
    </Card.Text>
    </Card> 
  </Container>
  )
}

export default Caro;