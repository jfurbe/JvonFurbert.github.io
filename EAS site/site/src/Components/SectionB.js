import React from 'react';
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

const SectionIII = ({form, formRef, oldEAS, currentEAS}) => {
   console.log(form)
   console.log(formRef)
   
  var output = Object.entries(formRef).map(([item, description,amt = '', prevAmt='']) => ({item, description, amt, prevAmt}));


  let section2b = getSection(output, form, 'SectionIIB', currentEAS.dic1, oldEAS) ;
  let section3b = getSection(output, form, 'SectionIIIB', currentEAS.dic1, oldEAS) ;

  console.log(section3b)
  return(
    <>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION B – FINANCIAL MANAGEMENT SERVICES</h5></div>
    <h6>SECTION II (B) – RECEIPTS (include local and overseas income)</h6>
    <Tables dataIn={section2b} nonEdit={[0,1,3]} currentEAS={currentEAS}/>
    <h6>SECTION III (B) – EXPENSES (include local and overseas expenses)</h6>
    <Tables dataIn={section3b} nonEdit={[0,1,3]} currentEAS={currentEAS}/>
    </>
  )

}

export default SectionIII;
