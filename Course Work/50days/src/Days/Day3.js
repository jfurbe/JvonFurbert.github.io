import React from 'react';
import { x } from '@xstyled/styled-components'

function DivRotate(props) {
   console.log(props.rotate)
  return <x.div transform rotate={props.rotate} 
               transformOrigin="top left" 
               transition 
               transitionProperty='transform' 
               transitionDuration={500}
               h="100vh"
               bg="white"
               {...props} />
}


export default DivRotate;