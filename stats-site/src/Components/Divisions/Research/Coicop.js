import React, {useEffect, useState} from 'react';
import {useQuery, useMutation } from "@apollo/client";
import queries from '../../helpers/gqlQueries.js';
import {Alert, Form, Container} from 'react-bootstrap';

function Coicop() {
  const {loading, error, data} = useQuery(queries.coicopCats);
  const [description,setDescription] = useState({header:'',
                                                description:''});
  const [active, makeActive] = useState(false);
  let head;
  let mid;
  let midHeads;
  let d =[];
 
 if (!loading){
  console.log(data);
  head = (data.coicops.filter(x=> x.UN.length <=2));
 }

  console.log(head);
  function HandleTopPic(e){
    makeActive(true);
    console.log(e);
    e.preventDefault();
    let target = e.target.selectedIndex;
    console.log(head[target]);
    let descr = head[target].Description.split('\n');
    let index = head[target].UN;
    setDescription({header:descr[0], description:descr[1]})
    mid = (data.coicops.filter(x=> x.UN.replace('0','').split('.')[0] == index))
    midHeads = mid.filter(x=> x.UN.length ==3)
    console.log(midHeads)
  }

  return (
    <>
      <h1>Coicop</h1>
     {!loading && <>
    <Form.Group className="mb-3" style={{width:'40rem'}}>
      <Form.Label>Select menu</Form.Label>
      <Form.Select onChange={(e)=>HandleTopPic(e)}>
      {head.map(x=> <option>{x.Description.split('\n')[0]}</option>)}
      </Form.Select>
      </Form.Group>
      </>
    }
    {active && (<>
    <Container>
    <Alert variant="success">
      <Alert.Heading>{description.header}</Alert.Heading>
 
      <hr />
      <p className="mb-0">
       {description.description}
      </p>
    </Alert>
    </Container>
  
    </>)
    }
    </>
  )
}

export default Coicop;