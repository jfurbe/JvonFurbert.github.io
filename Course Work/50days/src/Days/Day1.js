import React, {useState} from 'react';
import {Button, Collapse, Card, Image,Row} from 'react-bootstrap';
import SlidingImgPanel from './SlidingImgPanel';
import img1 from '../36354.jpg';
import img2 from '../36361.jpg';
import img3 from '../7001.jpg';

const Day1 = ()=> {
   
   
   return(
      <>
 
      <h2>HEllo Day 1</h2>

      <Row>
      
      <SlidingImgPanel image={img1}/>
      <SlidingImgPanel image={img2}/>
      <SlidingImgPanel image={img3}/>
      
      </Row>
        
    </>
   )
}

export default Day1;