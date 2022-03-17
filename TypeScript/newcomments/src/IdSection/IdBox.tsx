import React from 'react';
import {Alert, Col, Row, Button} from 'react-bootstrap';

const style = {
   cont : {top:'30px',
   right:'30px',
   position: 'absolute',
   background:'white',
   height:'300px',
   width:'300px',
   border:'1px, solid, white'},
} as const;

const IdBox = ()=> {

   const uniqSort = function(arr : any) {
      const breadcrumbs = {};
      
      return arr.sort((a :any, b:any) => a - b);
  };
  
  console.log(uniqSort([4,2,2,3,2,2,2])); // => [2,3,4]

   return (
      <Alert variant="light" style={style.cont}>
         <p>Hello</p>
      </Alert>
   )
}

export default IdBox;