import React from 'react';
import Bg from '../../../Resources/bg.jpg';
import {useQuery, useMutation } from "@apollo/client";
import queries from '../../helpers/gqlQueries.js';
import LineChart from '../../helpers/LineChart';

function Cpi() {
  const {loading, error, data} = useQuery(queries.cpiYears, {variables: {start: '2010', end: '2020'}});
  let d =[];
  !loading && (data.cpis.map(x=>
    d.push({'date':x.Year,
    'value': parseInt(x.Average)
  })
));
  
  console.log(d)
  return (
    <div id="cpi">
      <h1>Consumer Price Index</h1>
      <div id="main-bg-div" className="text-center" style={{backgroundImage:`url(${Bg})`}}>
      
      
      {!loading && 
      <LineChart data={[d]}/>
      }
      
    </div>
    
    </div>
  )
}

export default Cpi;