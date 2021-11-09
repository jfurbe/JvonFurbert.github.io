import React from 'react';
import FAQButton from './FAQButton'

const Day7 = ()=> {
   let dict = {"Why?" : "Who Knows.",
               "When?" : "Does it matter.",
               "Who?" : "Everyone.",
               "What?" : "What ever you choose."}
   return (
      <>
      <h1>Day 7</h1>
      <h3 style={{textAlign:'center'}}>Frequently Asked Questions</h3>
      {Object.keys(dict).map((key) => (<FAQButton question={key} answer={dict[key]}/>))
}
         
      
   </>
   )
}

export default Day7;