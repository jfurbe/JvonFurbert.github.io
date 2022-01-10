import React, {useState, useEffect} from 'react';
import Submissions from './Submissions';
import {Container, Row, Col} from 'react-bootstrap';
import {adminData, getRecord, saveRecord, getBusinessISIC} from '../Util/ActionCreators';
import { UserContext } from "../Util/UserProvider"
import useDidMountEffect from '../Util/useDidMountEffect';

const AdminDashboard = ()=> {
   const [ state, dispatch ] = React.useContext(UserContext)
   const [data, setData] = useState({})
   const [tracker, setTracker] = useState(false)
  // adminData("all/")

const getData = ()=> {
   getRecord('refs',dispatch)
   getBusinessISIC(dispatch)

}
useEffect(()=> state.busData && setTracker(!tracker), [])

const makeData = ()=> {
   let refs = state.data.map((x)=> x.ReferenceNumber)
   let lesData = state.busData.filter((x)=> refs.includes(parseInt(x.ReferenceNumber)))
   let isics = lesData.map((x)=> x.IsicClass).sort()
   let isicGroups = []
   let start = 0  
   let current = isics[0]  

   for (let i=0; i<isics.length;i++){
      if (i!=0){
         if (isics[i] != current){
            isicGroups.push({'ISIC':current, 'Submitted':i-start})
            start = i
            current = isics[i]
         }
      }
   }
   setData(isicGroups)
}

useDidMountEffect(()=> {
   console.log(state.data)
   makeData()}, [tracker]);         

   return (
   <Container className="container bg-dark" style={{  height:"800px",width:"1600px",}}>
          
   <Row className="row p-3" style={{ }}>
      <Col md={7} className="m-2" style={{backgroundColor:"yellow", height:"750px",}}>
        <h1 style={{ }}> Good Day Stats Admin</h1>
        <Submissions data={data}/>
        <button onClick={()=> setTracker(!tracker)}>click me </button>
        <button onClick={makeData}> Data me</button>
      </Col>
      <Col md={4} className="m-2" style={{backgroundColor:"yellow", height:"750px",}}>
        <h1 style={{   }}> Good Day Stats Admin</h1>
        
      </Col>
   </Row>
   </Container>
   )
}

export default AdminDashboard;