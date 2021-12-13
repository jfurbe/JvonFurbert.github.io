import React, {useState, useEffect} from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import { UserContext } from "../Util/UserProvider"

import { useForm } from "react-hook-form";
//import { Loading } from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';



const BusinessReg = (props)=> {
  const {register, handleSubmit} = useForm(); //control,watch, formState: { errors }
  const [ state, dispatch ] = React.useContext(UserContext)
  const [defaultValues, setdefaultValues] = useState({})

  const onSubmit = (values) => {
    console.log(props);
      console.log("Current State is: "+JSON.stringify(values));
      alert("Current State is: "+JSON.stringify(values));
      //postFeedback
    //  props.postFeedback(values);
    //  props.resetFeedbackForm();
  }


  useEffect(()=> {
   state.businesses && setdefaultValues(state.businesses[0])
  }, [state.businesses])



  return(
    <div className="container">
      <h1> Business Reg</h1>
      <div className="row">

      <form model="feedback" onSubmit={(values) => handleSubmit(values)}>
              <Row className="mb-3 form-group">

                <Col md={3} >
                <label htmlFor="ReferenceNumber" className="mb-1" >Reference Number</label>
                <input
                defaultValue={defaultValues.ReferenceNumber}
                {...register("ReferenceNumber")}
                />
                </Col>


                <Col md={5} >
                <label htmlFor="BussinessName" className="mb-1" >Business Name</label>
                <input
                defaultValue={defaultValues.BusinessName}
                {...register("BusinessName")}
                />
                </Col>

                <Col md={3} className="">
                <label htmlFor="NumberEmp" className="mb-1" >Employee #</label>
                <input
                defaultValue={defaultValues.NumberEmp}
                {...register("NumberEmp")}
                />
                </Col>
              </Row>

              <Row className="mb-3 form-group">

                <Col md={4} >
                <label htmlFor="ContactName" className="mb-1" >Contact Name</label>
                <input
                defaultValue={defaultValues.ContactName}
                {...register("ContactName")}
                />

                </Col>


                <Col md={2} className="">
                <label htmlFor="InstSect" className="mb-1" >Institutional Sector</label>
                <input
                defaultValue={defaultValues.InstSect}
                {...register("InstSect")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="OpStatus" className="mb-1" >Operational Status</label>
                <input
                defaultValue={defaultValues.OpStatus}
                {...register("OpStatus")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="ISIC" className="mb-1" >ISIC Number</label>
                <input
                defaultValue={defaultValues.ISIC}
                {...register("ISIC")}
                />
                </Col>
              </Row>

              <Row className="mb-3 form-group">

                <Col md={3} >
                <label htmlFor="Ownership" className="mb-1" >Ownership Equity</label>
                <input
                defaultValue={defaultValues.Ownership}
                {...register("Ownership")}
                />

                </Col>


                <Col md={3} className="">
                <label htmlFor="ForeignPercentOwn" className="mb-1" >% Foreign Ownership</label>
                <input
                defaultValue={defaultValues.ForeignPercentOwn}
                {...register("ForeignPercentOwn")}
                />
                </Col>

                <Col md={3} className="">
                <label htmlFor="Turnover" className="mb-1" >Turnover</label>
                <input
                defaultValue={defaultValues.Turnover}
                {...register("Turnover")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="Wages" className="mb-1" >Wages</label>
                <input
                defaultValue={defaultValues.Wages}
                {...register("Wages")}
                />
                </Col>
              </Row>

              <Row className="mb-3 form-group">

                <Col md={5} >
                <label htmlFor="Address" className="mb-1" >Physical Address</label>
                <textarea
                rows="3"
                cols="50"
                defaultValue={defaultValues.Address}
                {...register("Address")}
                />

                </Col>
                <Col md={1}/>

                <Col md={5} className="">
                <label htmlFor="mAddress" className="mb-1" >Mailing Address</label>
                <textarea
                rows="3"
                cols="50"
                defaultValue={defaultValues.mAddress}
                {...register("mAddress")}
                />
                </Col>

              </Row>

              <Row className="mb-3 form-group">

                <Col md={2} >
                <label htmlFor="Parish" className="mb-1" >Parish</label>
                <input
                defaultValue={defaultValues.Parish}
                {...register("Parish")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="PostalCode" className="mb-1" >Postal Code</label>
                <input
                defaultValue={defaultValues.PostalCode}
                {...register("PostalCode")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="LocationCode" className="mb-1" >Location Code</label>
                <input
                defaultValue={defaultValues.LocationCode}
                {...register("LocationCode")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="mParish" className="mb-1" >Parish</label>
                <input
                defaultValue={defaultValues.mParish}
                {...register("mParish")}
                />
                </Col>
                <Col md={2} className="">
                <label htmlFor="mPostalCode" className="mb-1" >Postal Code</label>
                <input
                defaultValue={defaultValues.mPostalCode}
                {...register("mPostalCode")}
                />
                </Col>
              </Row>

              <Row className="mb-3 form-group">

                <Col md={2} >
                <label htmlFor="Work#" className="mb-1" >Work Phone</label>
                <input
                defaultValue={defaultValues['Work#']}
                {...register("Work#")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="Alt#" className="mb-1" >Alternate Phone</label>
                <input
                defaultValue={defaultValues['Alt#']}
                {...register("Alt#")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="Fax#" className="mb-1" >Fax Number</label>
                <input
                defaultValue={defaultValues['Fax#']}
                {...register("Fax#")}
                />
                </Col>

                <Col md={3} className="">
                <label htmlFor="Email" className="mb-1" >Email Address</label>
                <input
                defaultValue={defaultValues.Email}
                {...register("Email")}
                />
                </Col>

              </Row>

              <Row className="mb-3 form-group">

                <Col md={2} >
                <label htmlFor="Stratum" className="mb-1" >ISIC Stratum Level</label>
                <input
                defaultValue={defaultValues.Stratum}
                {...register("Stratum")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="YearEnd" className="mb-1" >Year End</label>
                <input
                defaultValue={defaultValues.YearEnd}
                {...register("YearEnd")}
                />
                </Col>

                <Col md={2} className="">
                <label htmlFor="Birthdate" className="mb-1" >Birthdate</label>
                <input
                defaultValue={defaultValues.Birthdate}
                {...register("Birthdate")}
                />
                </Col>

                <Col md={3} className="">
                <label htmlFor="Deathdate" className="mb-1" >Death Date</label>
                <input
                defaultValue={defaultValues.Deathdate}
                {...register("Deathdate")}
                />
                </Col>

              </Row>

              <Row className="form-group">
                <Col md={{size: 10, offset: 2}}>
                  <Button type="submit" color="primary">
                  Update
                  </Button>
                </Col>
              </Row>
        </form>

      </div>
    </div>
  )

}



export default BusinessReg;
