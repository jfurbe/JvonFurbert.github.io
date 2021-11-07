import React,{useState, useEffect} from 'react';
import {Stack} from 'react-bootstrap';
import MyDiv from './MyDiv';


const StackComponent = ()=> {
   const [id, setId] = useState(0)
   const [style, setStyle] = useState("cool-gray-800")
   const [stack, setStack] = useState([<MyDiv x={0}/>,<MyDiv x={0}/>, <MyDiv x={-1000} id={'div0'}/>])
   const [bottom, setBottom] = useState(150)
   
   console.log()
   function myFunction() {
      
      
      let sign = id%2 == 0 ? 1 : -1

      if (document.body.scrollTop >= bottom -100 || document.documentElement.scrollTop >= bottom -100) {
         console.log(stack)
         console.log(document.getElementById('div'+id))
         document.getElementById('div'+id).style.transform = "translateX(0)"
         
         
         setStack((prev)=> [...prev, <MyDiv x={sign*1500} id={'div'+(  id+1)}/>])
         setBottom(bottom+275)
         
         setId(id+1) 
      }
   }
   useEffect( ()=> {
      window.onscroll = function() {myFunction()} 
   })
   return(
      <>
      <Stack gap={2} className="col-md-5 mx-auto">
      {stack}
      </Stack>
      </>
   )
}

export default StackComponent;