import React,{useState, useCallback} from 'react';
import {Button, Row, Col, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';

const Ict = ({currentICT, ictData, oldICT}) => {


  const { control, register,  handleSubmit, setValue, getValues, formState: { errors } } = useForm( {defaultValues:currentICT});
  const onSubmit = (data) => processData(data);
  

  console.log(oldICT)
  console.log(currentICT)

  const processData = (data) => {
    //Filter data into True/False values for the database
    console.log(data)
    for (let [key,value] of Object.entries(data)){
      //console.log(Number.isInteger(parseInt(value)))
      currentICT[key] = value;
      if (value){
        if (typeof value === "object"){
          if ('value' in value){
            if (value.value === 'yes'){
              ictData[key] = true;
            }
            if (key === "ICTOutsourceLocation"){
              ictData[key] = value.value +" " + data['OtherLocations'];
            }
          }
        }
        if (Array.isArray(value)){
          value.forEach(i =>{
            if (i.value in ictData){
              ictData[i.value] = true;
            }
          })
          if (key === "InternetEnabledDevices"){
            ictData["InternetEnabledDevice"]=true;
          }
          if (key === "InternalNetworks"){
            ictData["InternalNetwork"]=true;
          }
        }
        if (value === "yes"){
          ictData[key] = true;
        }
        if (Number.isInteger(parseInt(value))){
          ictData[key] = parseInt(value);

        }
      }
    }
console.log(ictData)
console.log(currentICT)
  }




  return(
    <>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION VI – ICT INDICATORS</h5></div>



    <form >
            <Row className="mb-3 form-group">
              <Col md={9}>
              <label ><strong>1.</strong> Did your establishment use a computer(s) <small className="text-info">(Desktop, Laptop , Ultrabook, etc.)</small> during the course of business? </label>
              </Col>
            </Row>
            <Row className="mb-3">

              <Col md={{offset:7, span:5}} >
                <Controller
                name="Computers"
                control={control}
                render={({ field :{onChange, onBlur} }) =>
                  (<Select

                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No - Skip question 2" },
                    ]}
                    defaultValue={currentICT.Computers}
                    onChange={onChange}
                    onBlur={handleSubmit(onSubmit)}

                    />
                  )}


                  />
              </Col>

            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>2.</strong> How many persons employed in your business used a computer as part of their normal work routine? </label>
              </Col>

              <Col  md={{offset:8, span:5}}>
                <Controller
                  render={({ field : {onChange, onBlur} }) => (
                    <input
                    placeholder="Persons"
                    {...register("NumberComputerUsers")}
                    defaultValue={currentICT.NumberComputerUsers}
                    onChange={onChange}
                    onBlur={handleSubmit(onSubmit)}
                  />
                )}
                name="NumberComputerUsers"
                control={control}
                />
              </Col>

            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label htmlFor="InternetEnabledDevices" className="mb-1" ><strong>3.</strong> Did your establishment use a smartphone and/or tablet during the course of business?  <small className="text-info">Select all that apply.</small></label>
              </Col>
              <Col md={{offset:4, span:8}}>
              <Controller
                name="InternetEnabledDevices"
                render= {({ field :{onChange, onBlur}}) =>(
                  <Select
                  defaultValue={currentICT.InternetEnabledDevices}
                  isMulti
                  className="basic-multi-select"
                  options={[
                    {value: "InternetEnabledDevicePhone", label: "Yes - Smartphone"},
                    {value: "InternetEnabledDeviceTablet", label: "Yes - Tablet or Ipad"},
                    { value: "no", label: "No" },
                  ]}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}

                  />
                )}
                control={control}
                defaultValue=""
              />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>4A.</strong> Did your establishment use the Internet (world-wide web) during the course of business?</label>
              </Col>
              <Col md={{offset:7, span:5}}>
              <Controller
              name="InternetUse"
              render={({ field : {onBlur, onChange} }) => (
                <Select

                  options={[
                    { value: "yes", label: "Yes - Please answer 4B" },
                    { value: "no", label: "No" },
                  ]}
                  defaultValue={currentICT.InternetUse}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                  control={control}
                  defaultValue=""
                />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label check htmlFor="Connection" className="mb-1" ><strong>4B.</strong> If Yes, How did you connect to the internet? <small className="text-info">(Select all that apply)</small></label>
              </Col>
              <Col md={{offset:3, span:9}}>
              <Controller
              name="Connection"
              render= {({ field : {onBlur, onChange}}) =>(
                <Select

                  isMulti
                  className="basic-multi-select"
                  options={[
                    {value: "ConnectionNarrowBand", label: "Connection NarrowBand"},
                    {value: "ConnectionBroadBand", label: "Connection BroadBand"},
                    {value: 'ConnectionMobileBand', label: "Connection MobileBand"}
                  ]}
                  defaultValue={currentICT.Connection}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                control={control}
              />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>5.</strong> How many persons employed in your business used the Internet as part of their normal work routine? </label>
              </Col>

              <Col  md={{offset:8, span:5}}>
                <Controller
                  render={({ field : {onBlur, onChange}}) => <input
                  placeholder="Persons"
                  {...register("NumberInternetUsers")}
                  defaultValue={currentICT.NumberInternetUsers}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}/>}
                  name="NumberInternetUsers"
                  control={control}

                />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>6.</strong>  Was there an internal network in place within your business?<small className="text-info">(This is a network that is not available to the world outside.)</small></label>
              </Col>
              <Col md={{offset:4, span:8}}>
              <Controller
                name="InternalNetworks"
                render= {({ field : {onBlur, onChange}}) =>(
                  <Select
                  isMulti
                  className="basic-multi-select"
                  options={[
                    {value: "InternalNetworkIntranet", label: "Yes - A private Internal Network (Intranet)"},
                    {value: "InternalNetworkLan", label: "Yes - A Local Area Network (LAN)"},
                    { value: "no", label: "No" },
                  ]}
                  defaultValue={currentICT.InternalNetworks}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                control={control}
                defaultValue=""
              />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>7.</strong> Did your business have an extranet as of your Year End?<small className="text-info"> (An Extranet is actually an Internal Network that is partially accessible to authorised outsiders.)</small></label>
              </Col>
              <Col md={{offset:7, span:5}}>
              <Controller
              name="Extranet"
              render={({ field : {onBlur, onChange}}) => (
                <Select
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  defaultValue={currentICT.Extranet}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                  control={control}
                  defaultValue=""
                />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>8.</strong> Did your business have a web presence <small className="text-info"> (Include: Web pages, Social Media pages, or presence on another entity's webpage)</small> as of your Year End?</label>
              </Col>
              <Col md={{offset:7, span:5}}>
              <Controller
              name="WebPresence"
              render={({ field : {onBlur, onChange}}) => (
                <Select
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  defaultValue={currentICT.WebPresence}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                  control={control}
                  defaultValue=""
                />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>9.</strong> Did your business purchase goods or services via the Internet? </label>
              </Col>
              <Col md={{offset:4, span:5}}>
              <Controller
              name="InternetPurchases"
              render={({ field : {onBlur, onChange}}) => (
                <Select
                  options={[
                    { value: "yes", label: "Yes - Enter Value" },
                    { value: "no", label: "No" },
                  ]}
                  defaultValue={currentICT.InternetPurchases}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                  control={control}
                  defaultValue=""
                />
              </Col>
              <Col  md={{span:3}}>
                <Controller
                  render={({ field : {onBlur, onChange}}) => <input
                  placeholder="Amount"
                  {...register("InternetPurchasesValue")}
                  defaultValue={currentICT.InternetPurchasesValue}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)} />}
                  name="InternetPurchasesValue"
                  control={control}

                />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>10.</strong> Did your business sell goods or services via the Internet? </label>
              </Col>
              <Col md={{offset:4, span:5}}>
              <Controller
              name="InternetSales"
              render={({ field : {onBlur, onChange}}) => (
                <Select
                  options={[
                    { value: "yes", label: "Yes - Enter Value" },
                    { value: "no", label: "No" },
                  ]}
                  defaultValue={currentICT.InternetSales}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                  control={control}
                />
              </Col>
              <Col  md={{span:3}}>
                <Controller
                  render={({ field : {onBlur, onChange}}) => <input
                  placeholder="Amount"
                  {...register("InternetSalesValue")}
                  defaultValue={currentICT.InternetSalesValue}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}/>}
                  name="InternetSalesValue"
                  control={control}

                />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>11.</strong> For which of the following activities did your business use the internet?     </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>
              <input type="checkbox"
                {...register("Email")} />
              
              </Col>
              
              <Col className="mb-1" md={6}>
      {/* 1*/}  <label htmlFor="Email">Sending and Receiving e-mail</label>
              </Col>

              <Col  className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                  {...register("internetTelephony")} 
                  />
              </Col>
              <Col className="mb-1" md={7}>
      {/* 2*/}  <label htmlFor="internetTelephony">
              <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          <strong>VoIP</strong> Refers Voice over Internet Protocol
                        </Tooltip>
                      }
                    >
                      <Badge pill className="bg-info">i</Badge>
                    </OverlayTrigger>
                    Telephoning over the internet/VoIP, including video conferencing </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                  placeholder=""
                  {...register("ResearchOfGoodsAndServices")} />
              </Col>


              <Col className="mb-1" md={6}>
    {/* 3*/}    <label htmlFor="InfoFromGovtOrgs"> Getting information about goods or services </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                 
                  placeholder=""
                  
                  {...register("InfoFromGovtOrgs")} 
                  />
              </Col>
              <Col className="mb-1" md={6}>
      {/* 4*/}  <label htmlFor="InfoFromGovtOrgs">Getting information from general government organizations</label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

              <input type="checkbox"
                  placeholder=""
                  {...register("InteractingWithGovtOrgs")} />
              </Col>
              <Col className="mb-1" md={6}>
      {/* 5*/}  <label htmlFor="InteractingWithGovtOrgs"> <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          Includes online forms, making payments, purchasing from and selling to, government organizations, online
                        </Tooltip>
                      }
                    >
                      <Badge pill className="bg-info">i</Badge>
                    </OverlayTrigger>


               Interacting with general government organizations </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                  placeholder=""
                  {...register("InternetBanking")} />
              </Col>
              <Col className="mb-1" md={6}>
    {/* 6*/}    <label htmlFor="InternetBanking"> <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          Includes electronic transactions with a bank; all banking services, including looking up account information
                        </Tooltip>
                      }
                    >
                      <Badge pill className="bg-info">i</Badge>
                    </OverlayTrigger>


               Internet banking </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                  placeholder=""
                  {...register("AccessingOtherFinancialServices")} />
              </Col>
              <Col className="mb-1" md={6}>
    {/* 7*/}    <label htmlFor="AccessingOtherFinancialServices"> <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          Includes electronic transactions via the internet outside of traditional banking services
                        </Tooltip>
                      }
                    >
                      <Badge pill className="bg-info">i</Badge>
                    </OverlayTrigger>


               Accessing other financial services </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                  <input type="checkbox"
                  placeholder=""
                  {...register("ProvidingCustomerServices")} />
              </Col>
              <Col className="mb-1" md={6}>
    {/* 8*/}    <label htmlFor="ProvidingCustomerServices"> Providing Customer Services </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                  placeholder=""
                  {...register("DeliveringProductsOnline")} />
              </Col>
              <Col className="mb-1" md={6}>
    {/* 9*/}    <label htmlFor="DeliveringProductsOnline"> <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          Refers to all products delivered online in Digitized form.
                        </Tooltip>
                      }
                    >
                      <Badge pill className="bg-info">i</Badge>
                    </OverlayTrigger>


               Delivering products online </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                  placeholder=""
                  {...register("InternalOrExternalRecruitment")} />
              </Col>
              <Col className="mb-1" md={6}>
    {/* 10*/}    <label htmlFor="InternalOrExternalRecruitment"> <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          Includes providing information about vacancies an intranet, via email, or website and allowing online applications
                        </Tooltip>
                      }
                    >
                      <Badge pill className="bg-info">i</Badge>
                    </OverlayTrigger>


               Internal or external recruitment </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                  placeholder=""
                  {...register("StaffTraining")} />
              </Col>
              <Col className="mb-1" md={7}>
    {/* 11*/}    <label htmlFor="StaffTraining"> <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          Includes e-learning on an intranet or from the world wide web
                        </Tooltip>
                      }
                    >
                      <Badge pill className="bg-info">i</Badge>
                    </OverlayTrigger>


               Staff Training </label>
              </Col>

              <Col className="mb-1" md={{offset:3, span:2}}>

                <input type="checkbox"
                  placeholder=""
                  {...register("CloudServices")} />

              </Col>
              <Col className="mb-1" md={7}>
    {/* 12*/}    <label htmlFor="CloudServices">

               Using cloud based services to provide functionality to your business <small className="text-info">(Quickbooks, Azure, Office 365, Amazon etc.)</small> </label>
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>12A.</strong>Did your business outsource any of its IT needs thought the year?</label>
              </Col>
              <Col md={{offset:7, span:5}}>
              <Controller
              name="ICTOutsourcing"
              render={({ field : {onBlur, onChange}}) => (
                <Select
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  defaultValue={currentICT.ICTOutsourcing}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                  control={control}
                  defaultValue=""
                />
              </Col>
            </Row>

            <Row className="mb-3 form-group">
              <Col md={9}>
              <label className="mb-1" ><strong>12B.</strong>If Yes, where was the business outsourced?</label>
              </Col>
              <Col md={{offset:7, span:5}}>
              <Controller
              name="ICTOutsourceLocation"
              render={({ field : {onChange, onBlur}}) => (
                <Select
                  options={[
                    { value: "Local Company", label: "Local Company" },
                    { value: "Locally based Internetional company", label: "Locally based Internetional company" },
                    { value: "Overseas company located in Canada", label: "Overseas company located in Canada"},
                    { value: "Overseas company located in USA", label: "Overseas company located in USA" },
                    { value: "Overseas company located in Other, please explain", label: "Overseas company located in Other, please explain" }
                  ]}
                  defaultValue={currentICT.ICTOutsourceLocation}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}
                  />
                )}
                  control={control}
                  defaultValue=""
                />
              </Col>
            </Row>


            <Row className="mb-3 form-group">
              <Col md={{offset:4, span:3}}>
              <label className="mb-1" > Overseas company located in: </label>
              </Col>

              <Col  md={{offset:0, span:5}}>
                <Controller
                  render={({ field : {onChange, onBlur}}) => <input
                  placeholder="Location"
                  {...register("OtherLocations")}
                  defaultValue={currentICT.OtherLocations}
                  onChange={onChange}
                  onBlur={handleSubmit(onSubmit)}/>}
                  name="OtherLocations"
                  control={control}

                />
              </Col>

            </Row>


    </form>

    </>
  )
}

export default Ict;
