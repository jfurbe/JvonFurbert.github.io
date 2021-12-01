import React, {useState} from 'react';
import {Navbar, Container, Nav,
        Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { UserContext } from "../Util/UserProvider";
import LoginModal from './LoginModal';
import SearchModal from './SearchModal';
import CheckUserType from '../Util/CheckUserType';
import app from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Header = (props)=> {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [state, dispatch ] = React.useContext(UserContext);
  
  const AdminLinks = ()=> { //Links loaded for admin users
    return(
      <>
      <Nav.Item>
      <NavLink className="nav-link" to="/switchboard">
        <span className="fa fa-menu fa-lg"></span> Switch Board
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="/businessreg">
        <span className="fa fa-menu fa-lg"></span> Business Register
      </NavLink>
    </Nav.Item>
    </>
    )
  }

  const LoginButton = ()=> {
    return (
      <Nav.Item>
         <Button outline onClick={toggleModal}>
            <span className="fa fa-sign-in fa-lg">Login</span>
         </Button>
      </Nav.Item>
    )
  }

  const SearchButton = ()=> {
    return (
      <Nav.Item className="ms-3">
          <Button outline onClick={showSearch} >
             <span className="fa fa-sign-in fa-lg">Search</span>
          </Button>
      </Nav.Item>
    )
  }

const toggleNav = ()=> {
  setIsNavOpen((prevState)=> !prevState);
}

const showSearch = ()=> setIsSearchOpen((prevState)=> !prevState);
const toggleModal = ()=> setIsModalOpen((prevState)=> !prevState);

const handleSearch = (searchItem)=> {
  showSearch();
  props.search(searchItem, dispatch)

}

const handleLogin = (userName, password)=> { 
  signInWithEmailAndPassword(auth, userName, password)
  .then((userCredential) => {
   console.log( auth, userName) 
   // Signed in 
    const user = userCredential.user.email;
    dispatch({type: 'SET_USER', payload: user})
    dispatch({type: 'SET_USERTYPE', payload: CheckUserType(user)})
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage)
  });

  toggleModal();
}

    return (
      <>
      <Navbar bg='dark' variant="dark" expand="md">
        <Container>
        <Navbar.Brand className="mr-auto" href="/">
          <img src="./assets/images/bermuda.png" alt="logo" height="40" width="21"/>
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleNav}/>
          <Navbar.Collapse isOpen={isNavOpen} navbar>
            <Nav navbar >
              <Nav.Item>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/refGuide">
                  <span className="fa fa-info fa-lg"></span> Reference Guide
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-contact fa-lg"></span> Contact Us
                </NavLink>
              </Nav.Item>
             {state.userType==='Admin' && <AdminLinks/>}
            </Nav>
          </Navbar.Collapse>
          <Nav className="justify-content-end">
            {props.showLogin && <LoginButton/>}
            {props.showSearch && <SearchButton/>}
            </Nav>
        </Container>
        </Navbar>

      <LoginModal login={handleLogin} show={isModalOpen} toggle={toggleModal}/>
      
      <SearchModal search={handleSearch} show={isSearchOpen} toggle={showSearch}/>
      </>
    )
  }


export default Header;
