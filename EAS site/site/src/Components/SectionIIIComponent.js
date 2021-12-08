import React,{useState} from 'react';
import { useForm} from "react-hook-form";
import Tables from './tableSectionII';
//import FORMS from './formfields.js';
//import formSel from './formSelection.js';

function getSection(output, form, sec, data, oldD){
  let arr2 = [];

  const formatter = (n)=> n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  output.forEach((item, index, arr)=>{
    let ref = item.item;

    if (form[sec].includes(ref) ){

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

const SectionIII = ({form, formRef, currentEAS, oldEAS}) => {
  console.log(form)
  console.log(formRef)
  //const { control, register, handleSubmit, } = useForm();  //formState: { errors }

  //const [sec, setSec] = useState('')
  var output = Object.entries(formRef).map(([item, description,amt = '', prevAmt='']) => ({item, description, amt, prevAmt}));


  let section2 = getSection(output, form, 'SectionIII', currentEAS.dic1, oldEAS)


  return(
    <>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION III – EXPENSES (include local and overseas expenses)</h5></div>
    <Tables dataIn={section2} nonEdit={[0,1,3]} currentEAS={currentEAS}/>
    </>
  )

}

export default SectionIII;
