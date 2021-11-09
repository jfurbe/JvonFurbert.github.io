import React, {useState} from 'react';
import {Card, CloseButton, Badge} from 'react-bootstrap';

const FAQButton = ({question, answer})=> {
   const [open, setOpen] = useState(false)
   
   const handleClick = ()=> { 
      setOpen(!open)
   }

   return (
      <Card
      bg="light"
      key=""
      text="dark"
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header onClick={handleClick}>
         <Card.Title>{question}  
         {open ? <CloseButton style={{float:'right'}}/> : <Badge style={{float:'right'}} pill bg="dark">v</Badge>}</Card.Title> 
      </Card.Header>
      { open && 
      <Card.Body>
        <Card.Text>
          {answer}
        </Card.Text>
      </Card.Body> }
    </Card>
   )
}

export default FAQButton;