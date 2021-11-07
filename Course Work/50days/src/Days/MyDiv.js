import React from 'react';
import { x } from '@xstyled/styled-components'

function MyDiv(props) {

   return <x.div 
   transform translateX={props.x}
   transition
   transitionProperty="transform"
   transitionDuration={3000}
   w="300px"
   h="300px"
   bg={"cool-gray-800"}
   {...props} />
}

export default MyDiv;