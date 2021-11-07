import React, {useState} from 'react';
import {Button, ProgressBar, Container, Row, Col} from 'react-bootstrap'

const ProgressBard = ()=> {
   const [pos1, setPos1] = useState(0)
   const [pos2, setPos2] = useState(0)
   const [pos3, setPos3] = useState(0)
   const handleNext = ()=> (
      pos1 < 33 ? setPos1((prev)=> prev+11) : 
      pos2 < 33 ? setPos2((prev)=> prev+11) : 
      pos3 < 33 ? setPos3((prev)=> prev+11) :
      'test')

   const handlePrev = ()=> (
      pos3 > 0 ? setPos3((prev)=> prev-11) : 
      pos2 > 0 ? setPos2((prev)=> prev-11) : 
      pos1 > 0 ? setPos1((prev)=> prev-11) :
      'test')
   
   return (
      <>
      
      <Container>
         <Row className="justify-content-md-center" >
            <ProgressBar>
            <ProgressBar striped variant="success" now={pos1} key={1} />
            <ProgressBar variant="warning" now={pos2} key={2} />
            <ProgressBar striped variant="danger" now={pos3} key={3} />
            </ProgressBar>
         </Row>
      <Row className="justify-content-md-center">
         <Col md="auto">
         <Button disabled={pos1==0} onClick={handlePrev}>Previous</Button>
         </Col>
         <Col md="auto">
         <Button disabled={pos3==33} onClick={handleNext}>Next</Button>
         </Col>
      </Row>
      </Container>
      

      </>
   )
   
}  

export default ProgressBard;