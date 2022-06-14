import React, { useEffect } from 'react';
import { Row, Col,Card, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1, faBagShopping, faTags, faHandshake, 
  faPeopleGroup, faSyringe, faUpLong, 
  faDownLong, faDownLeftAndUpRightToCenter,
  faPercent} from '@fortawesome/free-solid-svg-icons'
import {useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import queries from './helpers/gqlQueries.js';

const money = <FontAwesomeIcon icon={faMoneyBill1} size='xl'/>
const shop = <FontAwesomeIcon icon={faBagShopping} size='xl'/>
const tags = <FontAwesomeIcon icon={faTags} size='xl'/>
const shake = <FontAwesomeIcon icon={faHandshake} size='xl'/>
const ppl = <FontAwesomeIcon icon={faPeopleGroup} size='xl'/>
const syr = <FontAwesomeIcon icon={faSyringe} size='xl'/>
const up = <FontAwesomeIcon icon={faUpLong} size='xl'/>
const down = <FontAwesomeIcon icon={faDownLong} size='xl'/>
const percent = <FontAwesomeIcon icon={faPercent} size='m'/>

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];

  const loadingStyle = {opacity:'.1', 
                  width: '100%', 
                  margin:'1rem', 
                  backgroundColor:'#e2e8f0', 
                  color:'black', minHeight:'14rem',
                  transition: 'transform .2s',  
                  transition: 'opacity 3s'}

function KeyStats({onEnter, style, onLeave}){
  let thisDay = new Date()
  
  const {loading, error, data} = useQuery(queries.keyStats, {variables: {year: thisDay.getFullYear()}});
  
  let cpiData={data:{}, percent:{}};
  let rsiData={data:{}, percent:{}};
  if(!loading){
    console.log(error, data)
    cpiData.data = data.cpi;
    cpiData.percent = data.cpiPercents[0];
    rsiData.data = data.rsis;
    rsiData.percent = data.rsiPercents;
  };
  //const [update] = useMutation(addT);
  ///console.log(update());
  console.log(error)
  let currMonth = months.filter(x=> cpiData.data[x] != '0').slice(-1)[0];
  ////// RSI //////////////////////////////////
  let rsiLen = rsiData.data.length;
  let rsiPercent = Math.abs(rsiData.percent[rsiLen-1]?.Total)
  let rsiUp = rsiData.percent[rsiLen-1]?.Total > 0;
  ////// CPI  //////////////////////////////////
  let cpiUp = cpiData.percent[currMonth] > 0;

  
  const stats = [
    {
      title : 'GPD',
      icon : money,
      high: '$1,479.1 million',
      text: 'Increasing 3.6 percent, estimated at constant prices'
  
    },
    {
    title: 'RSI',
    icon : shop,
    up : (rsiUp ? up : down),
    high: rsiPercent+'%',
    text:`Sales volume ${(rsiUp ? 'increased' : 'decreased')} to ${rsiData.data[rsiLen-1]?.Total.toFixed(1)} for ${rsiData.data[rsiLen-1]?.Month} ${thisDay.getFullYear()}`
    
    },
    {
    title: 'CPI',
    icon : tags,
    up : (cpiUp ? up : down),
    high : cpiData.percent[currMonth]+'%',
    text : `In ${currMonth} a basket of goods was ${cpiData.data[currMonth]}`,
    link: '/business/#cpi',
  },
    {
      title: 'BOP',
      icon : shake,
      high : '$303 million',
      text : 'Bermuda’s trade surplus for the first quarter of 2021'
    },
    {
      title: 'Population',
      icon: ppl,
      high: '62,090',
      text: 'Boasting an expatriate population of 18,000'
    },
    {
      title: 'Vacinated',
      icon : syr,
      high: '73.7%',
      text: 'Fully Vacinated Individuals'
  
    }
  ];

  return (
  
    <Row>
        {stats.map((x,i)=>
        <Col lg={4} sm={6}>
          
          <Card 
          id={'keyStat-'+i}
          style={loading? loadingStyle :style}
          >
          <Card.Body onMouseEnter={(e)=>onEnter(e)}
          onMouseLeave={(e)=>onLeave(e)}>
          <div>{x.icon}</div>
          <Card.Text className="mb-1">
            <b>{x.title}</b>
          </Card.Text>
            <h4 style={{color:'#D16002'}}
            >{x.up} {x.high} </h4>
            
            <Card.Text >
              {x.text}
            </Card.Text>
            
          </Card.Body>
          <a href={x.link} className='stretched-link'></a>
        </Card>
        
        </Col>)}
  </Row>

)
 }
export default KeyStats;