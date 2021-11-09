import React,{useState} from 'react';
import {Button, Label, Row, Col } from 'react-bootstrap';
import Tables from './EditTableComponent';
//import Tables  from './TableComponent';
import Ict from './IctComponent';
import FrontPage from './FrontPageComponent';
import FORMS from './formfields.js';
import formSel from './formSelection.js';
import SectionI from './SectionIComponent.js';
import SectionII from './SectionIIComponent.js';
import SectionIII from './SectionIIIComponent.js';
import SectionIV from './SectionIVComponent.js';
import SectionV from './SectionVComponent.js';
import { UserContext } from "../Util/UserProvider"

function getSection(output, form, sec){                         //Get Form headers from Form Selection
  let arr2 = [];
  output.forEach((item, index, arr)=>{

    if (form[sec].includes(item.key) ){
      arr2.push(item);
  }
  })
  return arr2
}

var formReference = {                                       //Find Form field info from 'formfields'
  "11to14": FORMS[5]
}

function Records({business}){
  const [ state, dispatch ] = React.useContext(UserContext) //Global State
  const [sec, setSec] = useState('')
  var output = Object.entries(formReference[business.IsicForm]).map(([key, value,amt = '']) => ({key,value, amt}));
  let form = formSel.filter((x)=> x.Form == business.IsicForm)[0];
  console.log(business)

  let section2 = getSection(output, form, 'SectionII')
  let section3 = getSection(output, form, 'SectionIII')

  const setSec1 = ()=> setSec(<SectionI business={business}/>)
  const setSec2 = ()=> setSec(<SectionII currentEAS={state.currentEAS} oldEAS={state.oldEAS} form={form} formRef={formReference}/>)
  
  const setSec3 = ()=> {
    setSec(<SectionIII currentEAS={state.currentEAS} oldEAS={state.oldEAS}/>)
  }
  const setSec4 = ()=> {
    setSec(<SectionIV currentEAS={state.currentEAS} oldEAS={state.oldEAS}/>)
  }
  const setSec5 = ()=> {
    setSec(<SectionV currentEAS={state.currentEAS} oldEAS={state.oldEAS}/>)
  }
  const setSec6 = () =>{
    setSec(<Ict storeIct = {state.storeIct} currentICT={ state.currentICT} ictData={state.ictData} oldICT={state.oldICT}/>)

  }




    return(
      <>
      <div className="text-light p-2 m-2 text-center">
      <Button variant="primary" onClick={setSec1}>Section I</Button>{' '}
      <Button variant="secondary" onClick={setSec2}>Section II</Button>{' '}
      <Button variant="success" onClick={setSec3}>Section III</Button>{' '}
      <Button variant="warning" onClick={setSec4}>Section IV</Button>{' '}
      <Button variant="danger" onClick={setSec5}>Section V</Button> {' '}
      <Button variant="info" onClick={setSec6}>Section VI</Button>{' '}
      <Button variant="dark" onClick={setSec6}>Submit All</Button>{' '}
      </div>

      <Row className="justify-content-md-center">

      <div className="col-9 justify-content-center">

      {/*<Tables dataIn={dataIn} nonEdit={[1]}/>*/}
      {/*<Tables dataIn={section2} nonEdit={[0,1]} />*/}
      {/*<Tables dataIn={section3} nonEdit={[0,1]} />*/}
      {/*<SectionIV/>*/}
      {/*<Ict storeIct = {props.storeIct} currentICT={ props.currentICT}/>*/}
      {sec}
      </div>

      </Row>
      </>
    )

}

  export default Records
