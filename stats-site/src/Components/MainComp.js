import React from 'react';
import {Alert,Container} from 'react-bootstrap';
import Header from './Header.js';
import Caro from './Carosel.js';
import MainGrid from './MainGrid';
import KeyIndicators from './KeyIndicators.js';
import Footer from './Footer.js';
import caro3 from '../Resources/caro-3.jpg';
import bdaBg from '../Resources/bda-bg1.jpg';

function MainComp() {

  return(
    <div>
      <Header/>
      <div style={{height:'137px'}}></div>
      <div className="text-center p-2 " style={{backgroundImage:`url(${bdaBg})`, backgroundSize:'cover', backgroundPosition:'center', height:'100vh'}}>
      <div className="d-inline-block align-middle" style={{width:'35%'}}><KeyIndicators/></div>
      <div className="d-inline-block align-middle" style={{width:'10%'}}></div>
      <div className="d-inline-block align-middle" style={{ width:'35%'}}><Caro/></div>
      </div>
      <MainGrid/>
    
      <div style={{height:'140px'}}></div>
      <Footer/>
    </div>
    
  )
}

export default MainComp;