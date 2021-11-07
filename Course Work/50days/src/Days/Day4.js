import React, {useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Collapse, InputGroup, FormControl, Button} from 'react-bootstrap';

const Day4 = ()=> {
   const [open, setOpen] = useState(false)
   const element = <FontAwesomeIcon icon={faSearch} size="lg"/>
   
   const handleClick = ()=> {
      setOpen(!open)
   }
   return (
      <>
      <h1>Day 4</h1>
      <InputGroup size="sm" >
      <Button onClick={handleClick}
      aria-controls="example-collapse-text"
      aria-expanded={open}>{element}</Button>
      <Collapse in={open} timeout={3000}>
      <FormControl 
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    />
    </Collapse>
      </InputGroup>
      
   </>
   )
}

export default Day4;