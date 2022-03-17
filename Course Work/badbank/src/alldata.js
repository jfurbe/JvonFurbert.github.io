import React from 'react';
import {UserContext} from './context';
import {Table} from 'react-bootstrap';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

function AllData(){
  const [ctx, setCtx] = React.useContext(UserContext);

  console.log(ctx)
  return (
    <>
    <h5>All Data</h5>
  <Table variant="dark" striped bordered hover>
  
  <thead>
    <tr>
    {Object.keys(ctx.users[0]).map(key=> <th>{key}</th>)}
    </tr>
  </thead>
      
  <tbody>
      
        
    {ctx.users.map(x=> <tr>
      {Object.keys(ctx.users[0]).map(key=> <td>{x[key]}</td>)}
     </tr>)}
        
    
  </tbody>
    
  
</Table>  
    </>
  );
}

export default AllData;