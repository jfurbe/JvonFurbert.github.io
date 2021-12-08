
import React, {useState} from 'react';

const axios = require('axios');


const Day2 = ()=> {
   const [report, setReport] = useState();
   

   axios
   .get('https://www.google.com')
   .then((response)=> {
      setReport(response)
   })
   .catch((error)=> {
      setReport(error)
   })
   
   return (
      <>
      <h1>Day 2</h1>
      <p>{JSON.stringify(report)}</p>
   </>
   )
}

export default Day2;