import React, {useState, useEffect} from 'react';
import { UserContext } from "../Util/UserProvider"
import Records from './RecordComponent';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import formSel from './formSelection';
//import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
//import { Loading } from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';


function Home(){
  const [ state, dispatch ] = React.useContext(UserContext)
  const [business, setBusiness] = useState('');
  const [form, setForm] = useState('');

  useEffect(()=> {
    console.log(state.businesses)
    state.businesses && setBusiness(state.businesses[0])
    business && setForm(formSel.filter((x)=>x.Form==business.IsicForm)[0])
  }, [state.businesses, business])

console.log(form)
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
          <h1 style={{textAlign:"center"}}> {business.BusinessName}</h1>
          {business && <Records business={business}/>}
          <Card border="dark" style={{ }}>
            <Card.Header>
            <Card.Title style={{textAlign:"center"}}>ANNUAL ECONOMIC ACTIVITY SURVEY, {new Date().getFullYear()}</Card.Title>
            </Card.Header>
            <Card.Body>
              <h3>{form.FormTitle}</h3>
              <Card.Text>
                {form.FormInfo}
                <p></p>
                <p>The purpose of the survey is to obtain information for the compilation of estimates of Gross Domestic Product.  Respondents are selected using statistical techniques that ensure optimal coverage of industries within Bermuda's economy. As you have been selected, the survey is <strong className="text-danger">MANDATORY</strong> and <strong>COMPLETION OF THIS QUESTIONNAIRE IS A LEGAL REQUIREMENT UNDER Section 11 of the Statistics Act 2002.</strong> All information taken from this questionnaire will be kept strictly <strong className="text-info">CONFIDENTIAL</strong>, used for statistical purposes only, and published only in aggregate form.</p>
                <p></p>
                <p> If you encounter problems completing this questionnaire or find it difficult to meet the due date, please <Link to="/contactUs">contact us.</Link></p>
              </Card.Text>
            </Card.Body>
          </Card>
  <br />
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
