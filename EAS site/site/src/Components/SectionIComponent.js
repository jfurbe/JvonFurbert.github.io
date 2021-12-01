import React,{useState} from 'react';

import {Row, Col,Stack, Card} from 'react-bootstrap';
import { UserContext } from "../Util/UserProvider"
import SectionIForm from './SectionIForm';

const SectionI = ({business, section1}) => {

  
    
  return(
   <>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION I – GENERAL INFORMATION</h5></div>
    <p></p>
    <h3>Reference Number: {business.ReferenceNumber}</h3>
    <p></p>
    <SectionIForm section1={section1} business={business} />
   
  </>
  )

}

export default SectionI;
