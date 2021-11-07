import React from 'react';
import {Row, Col, } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import Tables from './tableSectionV';
import FORMS from './formfields.js';
import formSel from './formSelection.js';

function getSection(output, i, sec, data, mid, oldD){
  let arr2 = [];

  output.forEach((item, index, arr)=>{
    let ref = item.item;

    if (formSel[i][sec].includes(item.item) ){
      if (mid == 'PAYMENTS') {
        arr2.push({
          item:ref,
          PAYEMNTS:item[mid],
          amt: data[ref],
          prevAmt: oldD[ref]
        });
      }
      else if (mid =='RECEIPTS'){
        arr2.push({
          item:ref,
        RECEIPTS:item[mid],
        amt: data[ref],
        prevAmt: oldD[ref]
      });
      }
      else if (mid =='ASSETS'){
        arr2.push({
          item:ref,
        RECEIPTS:item[mid],
        Dec2019: data[ref][0],
        Dec2020: data[ref][1]
      });
      }
      else if (mid =='LIABILITIES'){
        arr2.push({
          item:ref,
        RECEIPTS:item[mid],
        Dec2019: data[ref][0],
        Dec2020: data[ref][1]
      });
      }

  }
  })
  return arr2
}

const SectionV = (props) => {
  const { control, register, handleSubmit, } = useForm();  //formState: { errors }

console.log(props)
  var output = Object.entries(FORMS[0]).map(([item, PAYMENTS,Amt = '']) => ({item,PAYMENTS, Amt}));
  let sectiona = getSection(output, formSel.length - 1, 'SectionVa', props.currentEAS.dic3, 'PAYMENTS', props.oldEAS)

  var output = Object.entries(FORMS[0]).map(([item, RECEIPTS,Amt = '']) => ({item,RECEIPTS, Amt}));
  let sectionb = getSection(output, formSel.length - 1, 'SectionVb', props.currentEAS.dic3, 'RECEIPTS', props.oldEAS)

  var output = Object.entries(FORMS[0]).map(([item, ASSETS, Dec2019 = '', Dec2020 = ""]) => ({item,ASSETS, Dec2019, Dec2020}));
  let sectionc = getSection(output, formSel.length - 1, 'SectionVc', props.currentEAS.dic4, 'ASSETS', props.oldEAS)

  var output = Object.entries(FORMS[0]).map(([item, LIABILITIES, Dec2019 = '', Dec2020 = ""]) => ({item,LIABILITIES, Dec2019, Dec2020}));
  let sectiond = getSection(output, formSel.length - 1, 'SectionVd', props.currentEAS.dic4, 'LIABILITIES', props.oldEAS)


  return(
    <div>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION V – BALANCE OF PAYEMNTS</h5></div>

    <div className="bg-secondary  p-2 m-5 text-center">
    <h6 className="text-light">Organizations that responded to this years quarterly Balance of Payments Survey are not required to respond to this section of the questionnaire.  Companies with less than 7 employees are also exempt from completing this section.</h6>
      <sm> A non-resident is an individual/enterprise that lives/operates or intends to operate outside of Bermuda for one year or more (even if they are Bermudian nationals/owned). This category also includes non-Bermudians who live/work in Bermuda for less than 1 year.</sm></div>

    <Tables dataIn={sectiona} nonEdit={[0,1,3]} currentEAS={props.currentEAS} />
    <Tables dataIn={sectionb} nonEdit={[0,1,3]} currentEAS={props.currentEAS} />
    <Tables dataIn={sectionc} nonEdit={[0,1,4]} currentEAS={props.currentEAS} />
    <Tables dataIn={sectiond} nonEdit={[0,1,4]} currentEAS={props.currentEAS} />

    </div>
  )
}

export default SectionV;
