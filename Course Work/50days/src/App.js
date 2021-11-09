import { backgroundImage } from '@xstyled/system';
import React, {useState} from 'react';
import { Button, Alert, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Day1 from './Days/Day1';
import Day2 from './Days/Day2';
import DivRotate from './Days/Day3';
import smiley from './SNice.png';
import Day4 from './Days/Day4';
import Day5 from './Days/Day5';
import Day6 from './Days/Day6';
import Day7 from './Days/Day7';

function App() {
  const [Page, setPage] = useState();
  
  const [rotated, setRotated] = useState(0)
  let comps = {Day1, Day2, Day4, Day5, Day6, Day7}

  const style = {backgroundColor:"black", 
backgroundImage:`url(${smiley})`, 
backgroundPosition:"left bottom", 
backgroundSize:"300px 300px",
backgroundRepeat:"no-repeat"}

  const handleClick = (e)=> {
    let target = e.target.id
    setPage(React.createElement(comps['Day'+target]))
  }



  const handleClick3 = ()=> {
    rotated==0 ? setRotated(-20) : setRotated(0)
    
  }

  return (
    <div style={style}>
    <DivRotate rotate={rotated}>
   
    <Alert variant="secondary">
      <Alert.Heading><h1>Welcome to 50 days</h1></Alert.Heading>
      <p> These are my 50 days of projects
      </p>
      <hr />
      <Button variant="outline-success" onClick={handleClick} id={1}> Day 1</Button>
      <Button variant="outline-success" onClick={handleClick} id={2}> Day 2</Button>
      <Button variant="outline-success" onClick={handleClick3} id={3}> Day 3</Button>
      <Button variant="outline-success" onClick={handleClick} id={4}> Day 4</Button>
      <Button variant="outline-success" onClick={handleClick} id={5}> Day 5</Button>
      <Button variant="outline-success" onClick={handleClick} id={6}> Day 6</Button>
      <Button variant="outline-success" onClick={handleClick} id={7}> Day 7</Button>
      </Alert>
    <Container>
    
        
      
    
    {Page && Page}
    </Container>
    </DivRotate>
    </div>
  );
}

export default App;
