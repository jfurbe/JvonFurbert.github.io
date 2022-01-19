import React from "react";
import { isExpressionWithTypeArguments } from "typescript";
// TODO: import useFormik from formik library
import FormComp from './components/FormComp';

function App() {
  // TODO: add a const called formik assigned to useFormik()

  return (
    <div style={{backgroundColor:"#072827", width:'300px',height:'300px', color:'white'}}>
      <div style= {{ margin:'3px'}}>
      <FormComp />
      </div>
    </div>
  );
}

export default App;
