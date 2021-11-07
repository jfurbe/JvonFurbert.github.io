import React,{useSate} from 'react';
import {Button, Row, Col, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';


const forms = {
  A: {
    Agr:{
      type:"AGRICULTURE",
      header:"This form covers establishments engaged in all types of agricultural activity: the growing of crops – fruits and vegetables, flowers and nursery products; rearing of livestock; agricultural services such as landscaping and landscape gardening; and, animal breeding, care and boarding.",
    },
    Fish:{},
  },
  B: {
    B:{},
    F:{},
  },
  C: {},
  D: {},
  misc:{
    top:"The purpose of the survey is to obtain information for the compilation of estimates of Gross Domestic Product.  Respondents are selected using statistical techniques that ensure optimal coverage of industries within Bermuda's economy. As you have been selected, the survey is <u className='text-alert'>MANDATORY</u> and COMPLETION OF THIS QUESTIONNAIRE IS A LEGAL REQUIREMENT UNDER Section 11 of the Statistics Act 2002. All information taken from this questionnaire will be kept strictly CONFIDENTIAL, used for statistical purposes only, and published only in aggregate form.",
  }
}

const FrontPage = (props) => {
  let form = forms.A.Agr

  return(
    <div>
    <div className="bg-dark text-light text-center">
    <h5 className="p-2"> ANNUAL ECONOMIC ACTIVITY SURVEY</h5>

    <h6>{forms.A.Agr.type}</h6>
    <p className="m-3 p-5 dark">{forms.A.Agr.header} </p>
    <p className="m-3 p-5 dark"> {forms.misc.top}</p>
    
    </div>
    </div>
  )
}

export default FrontPage;
