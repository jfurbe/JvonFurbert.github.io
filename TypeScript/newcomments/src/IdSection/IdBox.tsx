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



   return (
      <Alert variant="light" style={style.cont}>
         <p>Hello</p>
      </Alert>
   )
}

export default IdBox;