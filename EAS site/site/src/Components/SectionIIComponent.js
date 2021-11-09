import React,{useState} from 'react';
import { useForm, Controller } from "react-hook-form";
import Tables from './tableSectionII';
import FORMS from './formfields.js';
import formSel from './formSelection.js';

function getSection(output, i, sec, data, oldD){
  let arr2 = [];

  const formatter = (n)=> n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  output.forEach((item, index, arr)=>{
    let ref = item.item;

    if (formSel[i][sec].includes(ref) ){

      arr2.push({
        item:ref,
        description:item.description,
        amt: data[ref],
        prevAmt: formatter(oldD[ref])
      });
  }
  })
  return arr2
}

const SectionII = (props) => {
  const { control, register, handleSubmit, } = useForm();  //formState: { errors }

  var output = Object.entries(FORMS[2]).map(([item, description,amt = '', prevAmt]) => ({item, description, amt, prevAmt}));
  let section2 = getSection(output, 2, 'SectionII', props.currentEAS.dic1, props.oldEAS)


  return(
    <>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION II – SALES & OTHER RECEIPTS (include local and overseas income)</h5></div>
    <Tables dataIn={section2} nonEdit={[0,1,3]} currentEAS={props.currentEAS}/>
    </>
  )

}

export default SectionII;
