import React,{useState} from 'react';
import Tables from './tableSectionII';


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

const SectionII = ({form, formRef, currentEAS, oldEAS}) => {

  var output = Object.entries(formRef).map(([item, description,amt = '', prevAmt]) => ({item, description, amt, prevAmt}));
  

  let section2a = getSection(output, form, 'SectionIIA', currentEAS.dic1, oldEAS) ;
  let section3a = getSection(output, form, 'SectionIIIA', currentEAS.dic1, oldEAS) ;

  console.log(form)
  return(
    <>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION A – INSURANCE AND PENSION FUNDING ACTIVITIES</h5></div>
    <h6 variant="lite">SECTION II(A) – SALES & OTHER RECEIPTS (include local and overseas income)</h6>
    <Tables dataIn={section2a} nonEdit={[0,1,3]} currentEAS={currentEAS}/>
    <h6>SECTION III(A) – EXPENSES (include local and overseas expenses)</h6>
    <Tables dataIn={section3a} nonEdit={[0,1,3]} currentEAS={currentEAS}/>
    </>
  )

}

export default SectionII;
