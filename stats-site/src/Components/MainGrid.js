import React from 'react';
import {Container, Row, Col, Alert, Image} from 'react-bootstrap';
import ecoDiv from '../Resources/ecoDiv.jpg';
import busDiv from '../Resources/busDiv.jpg';
import resDiv from '../Resources/resDiv.jpg';
import socDiv from '../Resources/socDiv.jpg';
import ImageEffect from './ImageEffect';

function MainGrid() {
  const picArr = [ecoDiv, busDiv, resDiv, socDiv]
  return (
    
    <Container className="d-block">
      <Alert variant="success" className="w-80 m-5">
        <Alert.Heading>Bermuda Statistics</Alert.Heading>
        <p>
        The Department of Statistics is Bermuda's official national statistics agency, crunching the numbers that define Bermuda. 
        </p>
        <hr />
        <p className="mb-0">
        <b>What do we do?</b>
      The Department of Statistics collects statistics and produces reports that paint a picture of Bermuda’s economy and society. In addition to conducting the Bermuda Census, the department regularly produces publically available reports about:
        </p>
        <b>Explore below the statistics from our various divisions.</b>
      </Alert>

        <Row className="w-80 justify-content-md-center" style={{minHeight:'10em'}}>
        {picArr.map(p=> 
          <Col className='' md={{ span: 3, offset: 0}} >
          <ImageEffect image={p}/>
          </Col>
        )}

        </Row>
        
      
  </Container>
 
  )
}

export default MainGrid;