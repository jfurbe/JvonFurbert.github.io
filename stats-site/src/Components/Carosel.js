import React from 'react';
import {Carousel, Container, Card} from 'react-bootstrap';
import caro3 from '../Resources/caro-3.jpg';
import caro2 from '../Resources/caro-2.jpg';
import caro1 from '../Resources/popStat.webp';

function Caro(){

  return (
  <Container >
    <br/>
    <h2 style={{color:'#e2e8f0', textShadow:'3px 3px 3px #000000'}}>Latest Releases</h2>
    <Card className='mx-auto p-3 m-3' style={{ opacity: '.9', width: '85%', backgroundColor:'#e2e8f0', height:'17rem'}}>
    <Card.Text className="fs-5">
      <p>January 2022 Consumer Price Index</p>
      <p>December 2021 Retail Sales Index</p>
      <p>December 2021 Consumer Price Index Report</p>
    </Card.Text>
    </Card>  
    <br/>
    <h2 style={{color:'#e2e8f0', textShadow:'3px 3px 3px #000000'}}>Surveys Currently Running</h2>
    <Card className='mx-auto p-3 m-3' style={{ opacity: '.9', width: '85%', backgroundColor:'#e2e8f0', height:'17rem'}}>
    <Card.Text className="fs-5">
      <ul>
      <a href="https://kind-turing-b32c16.netlify.app/">Economic Activity Survey</a>
      </ul>
      <ul>
      <a href="#">Labour Force Survey</a>
      </ul>
      <ul>
      <a href="#">Household Expenditure Survey</a>
      </ul>
    
    </Card.Text>
    </Card> 
  </Container>
  )
}

export default Caro;