import React from 'react';
import {Formik, Field, Form} from 'formik';


const FormComp = ()=> {

   function validateEmail(value) {
      let error;
      if (!value) {
        error = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Username should be an email';
      }
      return error;
    }
    
    function validatePassword(value) {
      let error;
      if (!value){
         error ="Field required";
      }
      return error;
    }

   return (
      <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={()=> alert('Login Successful')}
    >
       {({ errors, touched, isValidating })=> (
      <Form>
        <label htmlFor="email">Username: </label>
        <Field id="emailField" name="email" 
        type="email" placeholder="joe@gmail.com" 
        validate={validateEmail}/>
      {errors.email && touched.email && <div id="emailError">{errors.email}</div>}
         <p></p>
        <label htmlFor="password">Password: </label>
        <Field id="pswField" name="password" type="password" 
        validate={validatePassword}/>
       {errors.password && touched.password && <div id="pswError">{errors.password}</div>}
         <p></p>
        <button type="submit" id="submitBtn">Submit</button>
      </Form>
       )}
    </Formik>
    </div>
   )
}

export default FormComp;