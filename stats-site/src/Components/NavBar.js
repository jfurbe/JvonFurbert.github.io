import React from 'react';
import {Nav, Navbar, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import CoatOfArms from '../Resources/Bermuda-coat-of-arms_2.png';

function NavBar(){

return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed="top">
  <Container >
    <Navbar.Brand href="#Home">
      <img
        src={CoatOfArms}
        width="10%"
        //height="80"
        className="d-inline-block align-top mx-3"
        alt="Bermuda Coat of Arms"
      />
        {' '}<div className="d-inline-block mt-5" ><h3 style={{color:'#e2e8f0'}}>Bermuda Department of Statistics</h3>
            <h6 style={{color:'#e2e8f0'}}>Bermuda’s official national statistics agency</h6>
            </div>
            
        </Navbar.Brand>
        
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav justify  defaultActiveKey="/home"
        className=" d-flex my-3 my-lg-0 p-1"
        style={{ maxHeight: '100px', fontSize:'125%', letterSpacing: '.2rem'}}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Publications</Nav.Link>
        <NavDropdown bg="dark" title="Divisions" id="navbarScrollingDropdown">
          <NavDropdown.Item  href="#action3">Social Division</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Business Division</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Social Division</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Research Division</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Survey 
        </Nav.Link>
        <Nav.Link href="#Footer">Contact Us</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar;