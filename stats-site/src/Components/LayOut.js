import React, {useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Routes, Route, Outlet} from 'react-router-dom';
import Business from './Divisions/Business/Business';
import MainComp from './MainComp';

function LayOut(){

  return (
    <>
    <Routes>
      <Route path='/' element={<LayOut2 />}>
        <Route index element={<MainComp />}/>
        <Route path='/business' element={<Business />}/>
        
      </Route>
      </Routes>
    </>
  )
}

function LayOut2(){
  const [heigh, setHeight] = useState('150px');
  
  console.log(heigh)
  useEffect(()=> {let head = document.getElementById('header')
   setHeight(head.clientHeight-10)})
 
  return (
    <>
    <Header/>
    <div style={{height:heigh}}></div>
    <Outlet/>
    
    <div style={{height:heigh}}></div>
    <Footer/>
    </>
  )
}

export default LayOut;