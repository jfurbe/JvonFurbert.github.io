import React, {useState} from 'react';
import Stonk from './Chart'

const ChartView = ()=> {

   return(
      <div style={{border:'1px solid black', width:'600px', height:'400px',  padding: '5px'}}>
         <Stonk/>
      </div>
   )
}

export default ChartView;