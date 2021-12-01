import React from 'react';
import {useTable} from 'react-table';
//import '../react_table_inverted.css';
import {Table} from 'react-bootstrap';

function Tablee({columns, data}){

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return(
    <Table striped bordered hover variant="dark" {...getTableProps()} >
           <thead>
             {headerGroups.map(headerGroup => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                 {headerGroup.headers.map(column => (
                   <th
                     {...column.getHeaderProps()}>
                     {column.render('Header')}
                   </th>
                 ))}
               </tr>
             ))}
           </thead>
           <tbody {...getTableBodyProps()}>
             {rows.map(row => {
               prepareRow(row)
               return (
                 <tr {...row.getRowProps()}>
                   {row.cells.map(cell => {
                     return (
                       <td
                         {...cell.getCellProps()}>
                         {cell.render('Cell')}
                       </td>
                     )
                   })}
                 </tr>
               )
             })}
           </tbody>
         </Table>
  )
}

function createCols(cols){
  cols = (Object.keys(cols));
  let arr = [];

  cols.forEach((item, index) =>{

    if (!item.includes('_')){
      arr.push(
        {
          Header: item,
          accessor: item
        }
      )
    }
  });

  return(arr)
}

function Tables(dataIn){
dataIn = (dataIn.dataIn ? dataIn.dataIn : dataIn)
console.log(dataIn)
const cols = createCols(dataIn[0]);


const data = React.useMemo(
   () => dataIn,
   []
 )

 const columns = React.useMemo(
  () => cols,
  []
)

return(
  <div>
    <Tablee columns={columns} data={data} />
  </div>
  )
}


export default Tables
