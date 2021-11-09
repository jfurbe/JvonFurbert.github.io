import React,{useState} from 'react';
import { useForm, Controller } from "react-hook-form";
import {Row, Col,Stack} from 'react-bootstrap';


const SectionI = ({business}) => {
  const { control, register, handleSubmit, getValues } = useForm();  //formState: { errors }

  
  return(
    <>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION I – GENERAL INFORMATION</h5></div>
    <p></p>
    <h3>Reference Number: {business.ReferenceNumber}</h3>

    <Row className="mb-3 form-group">
      <label className="mb-1" >Which of the following best describes the ownership of your establishment?  </label>
        <Col md={6}>
          <Stack gap={3}>
            <Row>
            <label htmlFor="ownershipType"> 1) Local company</label>
            <Col className="mb-1" md={{offset:1, span:1}}>
              <input type="checkbox"
                {...register("ownershipType")} onChange={(e)=>console.log(getValues())}/>
            </Col>
            <Col md={8}>
            <label htmlFor="ownershipType" > a) Sole proprietorship</label>
            </Col>
            </Row>
            <Row>
            <Col className="mb-1" md={{offset:1, span:1}}>
              <input type="checkbox"
                {...register("ownershipType")} />
            </Col>
            <Col md={8}>
            <label htmlFor="ownershipType"> b) Local Partnership</label>
            </Col>
            </Row>
            
            
              
              
              <label htmlFor="ownershipType"> </label>
              <label htmlFor="ownershipType"> c) Limited Company/Incorporated</label>
           
          </Stack>
              </Col>
              <Col md={6}>
              <Col className="mb-1" md={6}>
    
              </Col>

              <Col  className="mb-1" md={{offset:1, span:2}}>

                <input type="checkbox"
                  {...register("internetTelephony")} />
              </Col>
              </Col>
      </Row>
    </>
  )

}

export default SectionI;
