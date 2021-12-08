import React, {useState, useEffect} from 'react';
import { UserContext } from "../Util/UserProvider"
import Records from './RecordComponent';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import formSel from './formSelection';
import {Button} from 'react-bootstrap';
//import { Loading } from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';
import ReactHtmlParser from "react-html-parser";
import { saveRecord} from '../Util/ActionCreators';


function Home(){
  const [ state, dispatch ] = React.useContext(UserContext)
  const [business, setBusiness] = useState('');
  const [form, setForm] = useState('');
  const [showRecords, setShowRecords] = useState(true);

  useEffect(()=> {
    console.log(state.businesses)
    state.businesses && setBusiness(state.businesses[0])
    business && setForm(formSel.filter((x)=>x.Form==business.IsicForm)[0])
  }, [ business])

  const hasStarted = ()=> (
     //Records Component start after button clicked
      showRecords ? <Button onClick={()=>setShowRecords(false)}>START SURVEY</Button> : <Records business={business} saveRecord={saveRecord}/>

  )
  
  switch(state.userType){  //Switch for stats admin display or regular user
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
          <h1 style={{textAlign:"center"}}> {business.BusinessName}</h1>
          <Card>
          {business && hasStarted()}
                              
          </Card>
          
          <Card border="dark" style={{ }}>
            <Card.Header>
            <Card.Title style={{textAlign:"center"}}>ANNUAL ECONOMIC ACTIVITY SURVEY, {new Date().getFullYear()}</Card.Title>
            </Card.Header>
            <Card.Body>
              <h3>{form.FormTitle}</h3>
              <Card.Text as='div'>
              {ReactHtmlParser(form.FormInfo)}
                
                <div className="py-4">
                The purpose of the survey is to obtain information for the compilation of estimates of Gross Domestic Product.  Respondents are selected using statistical techniques that ensure optimal coverage of industries within Bermuda's economy. As you have been selected, the survey is <strong className="text-danger">MANDATORY</strong> and <strong>COMPLETION OF THIS QUESTIONNAIRE IS A LEGAL REQUIREMENT UNDER Section 11 of the Statistics Act 2002.</strong> All information taken from this questionnaire will be kept strictly <strong className="text-info">CONFIDENTIAL</strong>, used for statistical purposes only, and published only in aggregate form.
                </div>
                
                <div>
                If you encounter problems completing this questionnaire or find it difficult to meet the due date, please <Link to="/contactUs">contact us.</Link>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
  <br />
          </div>
        </div>
      )

    break;
    default: //Default Display
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
