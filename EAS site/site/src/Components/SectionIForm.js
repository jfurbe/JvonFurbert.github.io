import React from 'react';
import {Col, Row, Stack} from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";

const SectionIForm = ({section1, business})=> {
   const { control, register, handleSubmit, getValues } = useForm({defaultValues:section1});  //formState: { errors }
   const OnChange = ''

   const companies = ['a) Sole propretorship', 'b) Local Partnership', 'c) Limited Company/ Incorporated', 'd) Other']
  const companyRef = ['soleProp', 'localPart', 'limitedCo', 'localOther']
  const companies2 = ['2) Governemnt Enterprise', '3) Overseas company/partnership', '4) Exempt/permit company/partnership', '5) Non-profit institution/charitable organization', '6) Other']
  const companyRef2 = ['govEnt', 'overseasComp', 'exempt', 'nonProfit', 'foreignOther' ]

   const handleChange = (data)=> {
      let target = data.target.name
      if (document.getElementById(target).type == 'checkbox'){
         companyRef.filter((x) => x!= target).map((x)=> {
                                          document.getElementById(x).checked = false
                                          section1[x] = false});
         companyRef2.filter((x) => x!= target).map((x)=> {
                                             document.getElementById(x).checked = false
                                             section1[x] = false});
         section1[target] = true;
      }
      section1[target] = data.target.value;
      console.log(getValues());
      console.log(section1);
   }

   return (
      <form>
    <Row className="mb-3 form-group">
      <label className="mb-1"> <strong>Which of the following best describes the ownership of your establishment?  </strong></label>
        <Col md={6}>
          <Stack gap={3}>
            
         { companies.map((x,i)=> (
            <Row>
            <Col className="mb-1" md={{offset:1, span:2}}>
              <input id={companyRef[i]} type="checkbox" name="owner" 
                {...register(companyRef[i])} onChange={handleChange}/>
            </Col>
            <Col md={8}>
            <label htmlFor={companyRef.i} > {x}</label> 
            {i==3&&<input placeholder="% of foreign ownership" {...register("foreignOwned")}/>}
            </Col>
            </Row>
          ))}         
          </Stack>
        </Col>
        <Col md={6}>
          <Stack gap={3}>
          { companies2.map((x,i)=> (
            <Row>
            <Col className="mb-1" md={{offset:0, span:2}}>
              <input id={companyRef2[i]} type="checkbox" name="owner" 
                {...register(companyRef2[i])} onChange={handleChange}/>
            </Col>
            <Col md={10}>
            <label htmlFor={companyRef2.i} > {x}</label>
            {i==4 && <input placeholder="Please specify" {...register("otherCompany")} onChange={handleChange}/>}
            </Col>
            </Row>
          ))}         
          </Stack>
        </Col>
      </Row>
  <p></p>  
  <strong>Pricipal Business Activity</strong>  
    <input placeholder={business.BussActivity} {...register('BusActivity')} onChange={handleChange}></input>
  <p></p>
  <Row>
    <strong>Data in this form refer to the period: </strong>
    <Col md={6}><strong>From </strong><input type="date" {...register("yearStart")} onChange={handleChange}/> </Col>
    <Col md={6}><strong>To </strong><input type="date" {...register("yearEnd")} onChange={handleChange}/> </Col>
  </Row>
  <p></p>
  <Row>
    <strong> Ceased Operation: </strong>
    <Col md={6}><strong>Temporary</strong><input type="date" {...register("ceasedT")} onChange={handleChange}/> </Col>
    <Col md={6}><strong>Permanent</strong><input type="date" {...register("ceasedP")} onChange={handleChange}/> </Col>
  </Row>
  <p></p>
  </form>
   )
}

export default SectionIForm;