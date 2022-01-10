import React, {useEffect, useState} from 'react';
import { UserContext } from "../Util/UserProvider";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Submissions = ({data})=> {
const [ state, dispatch ] = React.useContext(UserContext)
const [print, setPrint] = useState(state)
//const [dataKeys, setDataKeys] = useState({})
let dataKeys= {};
console.log(data)

data[0] && (dataKeys = Object.keys(data[0]))


 
   return (
      <>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={240}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeys[0]} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKeys[1]} fill="#8884d8" />
          
        </BarChart>
      </ResponsiveContainer>
      </>
   )
}

export default Submissions;