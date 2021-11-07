import React, {useState} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';

const SearchModal = (props)=> {
   const [searchItem, setSearchItem] = useState('');

   const handleSearchItemChange = (e)=> setSearchItem(e.target.value);

   const handleSearch = (e)=> {
      e.preventDefault();
      props.search(searchItem);
   }
   return (
      <Modal show={props.show} onHide={props.toggle}>
        <Modal.Header toggle={props.toggle} closeButton>
          <Modal.Title>Search</Modal.Title> </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={handleSearch}>
            <Form.Group>
              <Form.Label className="mb-3" htmlFor="searchItem"></Form.Label>
              <input type="text" id="searchItem" name="searchItem"
                value={searchItem} onChange={handleSearchItemChange}/>
            </Form.Group>

              <Button type="submit" value="submit" className="bg-primary mt-3">Search </Button>

          </Form>
        </Modal.Body>
      </Modal>
   )
}

export default SearchModal;