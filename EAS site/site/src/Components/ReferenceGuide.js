import React from 'react';
import json from '../Util/RefGuide.js';
import Tables from './TableComponent';
import {Container} from 'react-bootstrap';
 
// Convert the data to String and
// split it in an array

console.log(json)

const ReferenceGuide = ()=> {

return (
   <>
   <Container className="p-5">
   <Tables dataIn={json}/>
   </Container>
   
   </>
)
}

export default ReferenceGuide;