import React, {useState} from 'react';
import {Accordion, Row, Col} from 'react-bootstrap';

const FAQButton = ({question, answer})=> {
   const [open, setOpen] = useState(false)
   
   const handleClick = ()=> { 
      setOpen(!open)
   }

   return (
     <Row className="p-2">
    <Col md={{ span: 3, offset: 3 }}>
    <Accordion >
    <Accordion.Item eventKey="0">
      <Accordion.Header>{question}</Accordion.Header>
      <Accordion.Body>
        {answer}
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </Col>
    </Row>
   )
}

export default FAQButton;