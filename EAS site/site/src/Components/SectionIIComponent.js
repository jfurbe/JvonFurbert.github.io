import React,{useState} from 'react';
import Tables from './tableSectionII';


function getSection(output, form, sec, data, oldD){
  let arr2 = [];
  
  const formatter = (n)=> n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  output.forEach((item, index, arr)=>{
    
    let ref = item.item;
    
    //console.log(oldD)
    if (form[sec].includes(ref) ){
      if (['G','H','M'].includes(ref.slice(ref.length-1))){
        ref = ref.substr(0,ref.length-1)+ref.slice(ref.length-1).toLowerCase()
      }
      //console.log(ref.substr(0,ref.length-1))
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
  

  let section2 = ['91','92'].includes(form.Form) ?
                getSection(output, form, 'SectionIIA', currentEAS.dic1, oldEAS) :
                getSection(output, form, 'SectionII', currentEAS.dic1, oldEAS) ;

  console.log(form)
  return(
    <>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION II – SALES & OTHER RECEIPTS (include local and overseas income)</h5></div>
    <Tables dataIn={section2} nonEdit={[0,1,3]} currentEAS={currentEAS}/>
    </>
  )

}

export default SectionII;
