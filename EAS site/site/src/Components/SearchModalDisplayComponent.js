import React from 'react';
import Tables from './TableComponent';
import {Modal} from 'react-bootstrap';

const RenderSearches = (searches)=> {

  if (searches.searches.length > 0){
      const cc = searches.searches
      return(
        <Tables dataIn={cc} />
      )
  }
  else{
    return(
      <div>
      <p>Result not Found</p>
      </div>
    )
  }
}

const SearchModalDisplay = ({isOpen, results, toggle})=> {
   
   return (
      <Modal show={isOpen} onHide={toggle}>
      <Modal.Header toggle={toggle} closeButton> 
      <Modal.Title>Search</Modal.Title> </Modal.Header>
        <Modal.Body>
      <RenderSearches searches={results}/>
        </Modal.Body>
      </Modal>
    )
}

export default SearchModalDisplay;