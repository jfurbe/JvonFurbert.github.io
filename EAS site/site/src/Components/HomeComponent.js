import React, {useState, useEffect} from 'react';
import { UserContext } from "../Util/UserProvider"
import Records from './RecordComponent';
//import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
//import { Loading } from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';


function Home(){
  const [ state, dispatch ] = React.useContext(UserContext)
  const [businessName, setBusinessName] = useState('');

  useEffect(()=> {
    console.log(state.businesses)
    state.businesses && setBusinessName(state.businesses[0].BusinessName)
  }, [state.businesses])

  switch(state.userType){
    case 'Admin' :
      return(
        <div className="container">
          
          <div className="row">
          <div  className="col-4 col-md-5 m-1">
          <h1 > Good Day Stats Admin</h1>
          </div>
          <div  className="col-4 col-md-5 m-1">
            
          </div>
          </div>
        </div>
      )
    break;
    case 'User' :
      return(
        <div className="container">
          
          <div className="row">
          <h1 > Good Day, {businessName}</h1>
          <Records/>
          </div>
        </div>
      )

    break;
    default:
      return(
        <div className="container">
          
          <div className="row">
          <div  className="col-4 col-md-5 m-1">
          <h1 > Good Day Please Login</h1>
          </div>
          <div  className="col-4 col-md-5 m-1">
            
          </div>
          </div>
        </div>
      )
  }
}

export default Home;
