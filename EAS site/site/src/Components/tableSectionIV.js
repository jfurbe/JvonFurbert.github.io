import React from 'react';
import {useTable, usePagination} from 'react-table';
import {Table} from 'react-bootstrap';
import ReactHtmlParser from "react-html-parser";

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    console.log(index, id, value)
    updateMyData(index, id, value)

  }

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}

// Create CUSTOM non-editable cell
// note: we'll probably have to change the CSS
const NonEditableCell = ({ cell }) => <div>{cell.value}</div>;

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
}

function Tablee({columns, data, updateMyData, exportMyData, skipPageReset}){

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    usePagination
  )

  return(
    <>
    <Table striped hover variant="dark" {...getTableProps()} >
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
             {page.map((row, i) => {
               prepareRow(row)
               return (
                 <tr {...row.getRowProps()}>
                   {row.cells.map(cell => {
                     return (
                       <td
                         {...cell.getCellProps()}>
                         {/*cell.render('Cell')*/}
                         {(cell.column.Header === 'value') ? ReactHtmlParser(cell.value) : cell.render('Cell')}
                         {/*ReactHtmlParser(cell.value)*/}
                         {/*console.log(cell)*/}
                       </td>
                     )
                   })}
                 </tr>
               )
             })}
           </tbody>
         </Table>
         <div className="pagination justify-content-center">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong className="text-danger">
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      </>
  )
}

function createCols(cols, nonEdit){
  cols = (Object.keys(cols));
  let arr = [];

  cols.forEach((item, index) =>{

    if (!item.includes('_')){

      if (nonEdit.includes(index)){
        arr.push(
          {
            Header: item,
            accessor: item,
            Cell: NonEditableCell
          })
      }
      else{
        arr.push(
          {
            Header: item,
            accessor: item
          })
      }

    }
  });

  return(arr)
}

function Tables({dataIn, nonEdit, currentEAS}){
const cols = createCols(dataIn[0], nonEdit);

 const columns = React.useMemo(
  () => cols,
  [cols]
)

  const [data, setData] = React.useState(() => dataIn)
  const [originalData] = React.useState(data)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data

  const updateMyData = (rowIndex, columnId, value) => {
  // We also turn on the flag to not reset the page

    function sums(obj) {
      obj[columnId] = value
      return parseInt(obj["NET Opening Balance"])+parseInt(obj["PLUS Acquisitions"])-parseInt(obj["LESS Disposals"])-parseInt(obj['Depreciation']);
    }
  console.log(data)
  let sum = sums(data[rowIndex])
  let suf = ['','p','l','d','f']
  let colRef = ["NET Opening Balance","PLUS Acquisitions","LESS Disposals",'Depreciation', 'NET Closing Balance']
  const f = (f) => f === columnId.toString();

  setSkipPageReset(true)
  setData(old =>
    old.map((row, index) => {
      if (index === rowIndex) {
        //console.log(data[index].ITEM + suf[colRef.findIndex(f)])
        currentEAS.dic2[data[index].ITEM + suf[colRef.findIndex(f)]] = value
        currentEAS.dic2[data[index].ITEM + 'f'] = sum
        return {
          ...old[rowIndex],
          [columnId]: value,
          "NET Closing Balance": sum

        }
      }
      return row
    })
  )
}

// After data chagnes, we turn the flag back off
// so that if data actually changes when we're not
// editing it, the page is reset
React.useEffect(() => {
  setSkipPageReset(false)
}, [data])

// Let's add a data resetter/randomizer to help
// illustrate that flow...
//const resetData = () => setData(originalData)

return(
  <div>
    {/*<button onClick={resetData}>Reset Data</button>*/}
    <Tablee columns={columns} data={data} updateMyData={updateMyData} skipPageReset={skipPageReset}/>
  </div>
  )
}


export default Tables
