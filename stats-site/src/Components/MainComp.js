import React from 'react';
import {Alert,Container} from 'react-bootstrap';
import Header from './Header.js';
import Caro from './Carosel.js';
import MainGrid from './MainGrid';
import KeyIndicators from './KeyIndicators.js';
import Footer from './Footer.js';
import caro3 from '../Resources/caro-3.jpg';
import bdaBg from '../Resources/bda-bg2.jpg';

function MainComp() {

  return(
    <div id="Home">
      <div id="main-bg-div" className="text-center" style={{backgroundImage:`url(${bdaBg})`}}>
        <div className="text-center" style={{maxWidth: '1400px', margin:'auto'}}>
        <div className="d-inline-block align-middle" style={{width:'40%'}}><KeyIndicators/></div>
        <div className="d-inline-block align-middle" style={{width:'10%'}}></div>
        <div className="d-inline-block align-middle" style={{ width:'40%'}}><Caro/></div>
        </div>
      </div>
      <MainGrid/>
    
    
    </div>
    
  )
}

export default MainComp;