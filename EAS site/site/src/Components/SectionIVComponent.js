import React from 'react';
import {Row, Col, } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import Tables from './tableSectionIV';


const SectionIV = ({currentEAS, formType}) => {
  const { control, register, handleSubmit, } = useForm();  //formState: { errors }
  let section4a = '';

  const deprVars = [
    {"ITEM":"P5114", "STOCK OF CAPITAL":"Buildings and other structures", "NET Opening Balance":currentEAS.dic2.P5114,"PLUS Acquisitions":currentEAS.dic2.P5114p,"LESS Disposals":currentEAS.dic2.P5114l,"Depreciation":currentEAS.dic2.P5114d,"NET Closing Balance":currentEAS.dic2.P5114f},
    {"ITEM":"P5116","STOCK OF CAPITAL":"Motor vehicle and other transport equipment", "NET Opening Balance":currentEAS.dic2.P5116,"PLUS Acquisitions":currentEAS.dic2.P5116p,"LESS Disposals":currentEAS.dic2.P5116l,"Depreciation":currentEAS.dic2.P5116d,"NET Closing Balance":currentEAS.dic2.P5116f},
    {"ITEM":"P5117","STOCK OF CAPITAL":"Nachinery, office equipment and other fixed assets", "NET Opening Balance":currentEAS.dic2.P5117,"PLUS Acquisitions":currentEAS.dic2.P5117p,"LESS Disposals":currentEAS.dic2.P5117l,"Depreciation":currentEAS.dic2.P5117d,"NET Closing Balance":currentEAS.dic2.P5117f},
    {"ITEM":"P5118","STOCK OF CAPITAL":"Information & communications technology equipment", "NET Opening Balance":currentEAS.dic2.P5118,"PLUS Acquisitions":currentEAS.dic2.P5118p,"LESS Disposals":currentEAS.dic2.P5118l,"Depreciation":currentEAS.dic2.P5118d,"NET Closing Balance":currentEAS.dic2.P5118f},
    {"ITEM":"P5119","STOCK OF CAPITAL":"Research and Development", "NET Opening Balance":currentEAS.dic2.P5119,"PLUS Acquisitions":currentEAS.dic2.P5119p,"LESS Disposals":currentEAS.dic2.P5119l,"Depreciation":currentEAS.dic2.P5119d,"NET Closing Balance":currentEAS.dic2.P5119f},
    {"ITEM":"P5120","STOCK OF CAPITAL":"Computer software and datebases", "NET Opening Balance":currentEAS.dic2.P5120,"PLUS Acquisitions":currentEAS.dic2.P5120p,"LESS Disposals":currentEAS.dic2.P5120l,"Depreciation":currentEAS.dic2.P5120d,"NET Closing Balance":currentEAS.dic2.P5120f},
    {"ITEM":"P5121","STOCK OF CAPITAL":"Other intellectual property products", "NET Opening Balance":currentEAS.dic2.P5121,"PLUS Acquisitions":currentEAS.dic2.P5121p,"LESS Disposals":currentEAS.dic2.P5121l,"Depreciation":currentEAS.dic2.P5121d,"NET Closing Balance":currentEAS.dic2.P5121f},
    {"ITEM":"P5122","STOCK OF CAPITAL":"Non-Produced assets", "NET Opening Balance":currentEAS.dic2.P5122,"PLUS Acquisitions":currentEAS.dic2.P5122p,"LESS Disposals":currentEAS.dic2.P5122l,"Depreciation":currentEAS.dic2.P5122d,"NET Closing Balance":currentEAS.dic2.P5122f},
    {"ITEM":"P5300","STOCK OF CAPITAL":"Valuables", "NET Opening Balance":currentEAS.dic2.P5300,"PLUS Acquisitions":currentEAS.dic2.P5300p,"LESS Disposals":currentEAS.dic2.P5300l,"Depreciation":currentEAS.dic2.P5300d,"NET Closing Balance":currentEAS.dic2.P5300f}
  ]

  const handleChange = (e)=> {
    let target = e.target
    let name = e.target.name
    
    currentEAS.dic5[name] = target.value
    
  }

  switch(formType){ // Switch different questions for different form types, Constrution, Retail etc. 
    case "5":
      section4a = (
        <Row className="mb-3 form-group">
        <Col md={{offset:2, span:7}}>
        <label className="mb-1" > List the different types of construction activity engaged in: </label>
        </Col>

        <Col  md={{offset:3, span:7}}>
          <Controller
            render={({ field : {onChange, onBlur} }) => <input
            placeholder=""
            {...register("ConstructionActivity1")}
            defaultValue={currentEAS.dic5.ConstructionActivity1}
            onChange={handleChange}
            />}
            name="ConstructionActivity1"
            control={control}

          />
          <Controller
            render={({ field : {onChange, onBlur} }) => <input
            placeholder=""
            {...register("ConstructionActivity2")}
            defaultValue={currentEAS.dic5.ConstructionActivity2}
            onChange={handleChange}
            />}
            name="ConstructionActivity2"
            control={control}

          />
        </Col>
        </Row>
       ) ;
       break;
    case "6":
      section4a = (
        <>
        <Row className="mb-3 form-group">
        <Col md={{offset:2, span:7}}>
        <label className="mb-1" > Please list the major goods sold, wholesale and retail or repair work done: </label>
        </Col>

        <Col  md={{offset:3, span:7}}>
          <Controller
            render={({ field : {onChange, onBlur} }) => <input
            placeholder=""
            {...register('RetailingActivity1')}
            defaultValue={currentEAS.dic5.RetailingActivity1}
            onChange={handleChange}
            />}
            name='RetailingActivity1'
            control={control}
          />
          <Controller
            render={({ field : {onChange, onBlur} }) => <input
            placeholder=""
            {...register('RetailingActivity2')}
            defaultValue={currentEAS.dic5.RetailingActivity2}
            onChange={handleChange}
            />}
            name='RetailingActivity2'
            control={control}
          />
        </Col>
        </Row>
        <Row className="mb-3 form-group">
        <Col md={{offset:2, span:7}}>
        <label className="mb-1" > In your estimate, what percentage of the total income earned by your establishment comes directly from tourist? </label>
        </Col>

        <Col  md={{offset:3, span:5}}>
          <Controller
            render={({ field : {onChange, onBlur} }) => <input
            placeholder="%"
            {...register("PercentageIncomeBusinessTourist")}
            defaultValue={currentEAS.dic5.PercentageIncomeBusinessTourist}
            onChange={handleChange}
            />}
            name="PercentageIncomeBusinessTourist"
            control={control}

          />
        </Col>
        </Row>
        </>
       );
    break;  //'PercentageIncomeBusinessTourist':0,'PercentageIncomeVacationTourists':0,'PercentageIncomeLocals':0
    case ("72") :
      section4a = (<Row className="mb-3 form-group">
      <Col md={{offset:2, span:7}}>
      <label className="mb-1" > In your estimate, what percentage of the total income earned by your establishment comes directly from business tourists and vacation tourists, and locals?  </label>
      </Col>

      <Col  md={{offset:2, span:8}}>
      <label className="p-1">Business Tourist</label><Controller
          render={({ field : {onChange, onBlur} }) => <input
          placeholder="%"
          {...register("PercentageIncomeBusinessTourist")}
          defaultValue={currentEAS.dic5.PercentageIncomeBusinessTourist}
          onChange={handleChange}
          />}
          name="PercentageIncomeBusinessTourist"
          control={control}

        />
        <label className="p-1">Vacation Tourist</label><Controller
          render={({ field : {onChange, onBlur} }) => <input
          placeholder="%"
          {...register('PercentageIncomeVacationTourists')}
          defaultValue={currentEAS.dic5.PercentageIncomeVacationTourists}
          onChange={handleChange}
          />}
          name='PercentageIncomeVacationTourists'
          control={control}

        />
        <label className="p-1">Locals</label><Controller
          render={({ field : {onChange, onBlur} }) => <input
          placeholder="%"
          {...register("PercentageIncomeLocals")}
          defaultValue={currentEAS.dic5.PercentageIncomeLocals}
          onChange={handleChange}
          />}
          name="PercentageIncomeLocals"
          control={control}

        />
      </Col>
      </Row>) ;
    break;
    case ("91" || "92") :
      ( <Row className="mb-3 form-group">
        <Col md={{offset:2, span:7}}>
        <label className="mb-1" > How much revenue from Exempt and Permit Companies (items P1112 and P1113) was remitted abroad?</label>
        </Col>

        <Col  md={{offset:3, span:5}}>
          <Controller
            render={({ field : {onChange, onBlur} }) => <input
            placeholder="$0.00"
            {...register("RemittedAbroad")}
            defaultValue={currentEAS.dic5.RemittedAbroad}
            onChange={handleChange}
            />}
            name="RemittedAbroad"
            control={control}

          />
        </Col>
        </Row>
          );
    break;
    default:
     section4a = (
        <Row className="mb-3 form-group">
        <Col md={{offset:2, span:7}}>
        <label className="mb-1" > In your estimate, what percentage of the total income earned by your establishment comes directly from tourist? </label>
        </Col>

        <Col  md={{offset:3, span:5}}>
          <Controller
            render={({ field : {onChange, onBlur} }) => <input
            placeholder="%"
            {...register("PercentageIncomeBusinessTourist")}
            defaultValue={currentEAS.dic5.PercentageIncomeBusinessTourist}
            onChange={handleChange}
            />}
            name="PercentageIncomeBusinessTourist"
            control={control}

          />
        </Col>
        </Row>
       )
       break;
  }
  //var output = Object.entries(deprVars).map(([key, value,amt = '']) => ({key,value, amt}));
  //console.log(output)
  return(
    <div>
    <div className="dark text-light p-2 m-2 text-center">
    <h5>SECTION IV – ADDITIONAL INFORMATION</h5></div>

    <form>
      
      {section4a}

    <Row className="mb-3 form-group">
      <Col md={{offset:2, span:7}}>
      <label className="mb-1" > What is your estimated revenue loss due to Covid=19 related restrictions?</label>
      </Col>

      <Col  md={{offset:3, span:5}}>
        <Controller
          render={({ field : {onChange, onBlur} }) => <input
          placeholder="%"
          {...register("Covid")}
          defaultValue={currentEAS.dic5.Covid}
          onChange={handleChange}
          />}
          name="Covid"
          control={control}


        />
      </Col>
    </Row>

    <Row className="mb-3 form-group">
      <Col md={{offset:2, span:7}}>
      <label className="mb-1" >What was the total number of normal employees and own-account workers (owners) during this finacial year?
                              <br/><small className="text-info">Include only owners of sole proprietorships or partnerships. Exclude board members and shareholders.</small></label>
      </Col>

      <Col  md={{offset:3, span:5}}>
        <Controller
           render={({ field : {onChange, onBlur} }) => <input
           placeholder="%"
           {...register("NumberEmployees")}
           defaultValue={currentEAS.dic5.Covid}
           onChange={handleChange}
           />}
           name="NumberEmployees"
           control={control}
 
        />
      </Col>
    </Row>

    </form>

      <Tables dataIn={deprVars} nonEdit={[0,1,6]} currentEAS={currentEAS}/>
    </div>
  )
}

export default SectionIV;
