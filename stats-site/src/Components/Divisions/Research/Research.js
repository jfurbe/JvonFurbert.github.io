import React from 'react';
import {Outlet} from 'react-router-dom';
import Bg from '../../../Resources/bg.jpg';

function Research() {

  return(
    <div id="business-main"> 
    <div id="main-bg-div" className="text-center" style={{backgroundImage:`url(${Bg})`}}>
      <div className="container">
      <h1>Research</h1>
      
      
      <Outlet/>
      </div>  
    </div>
  </div>
  )
}

export default Research;