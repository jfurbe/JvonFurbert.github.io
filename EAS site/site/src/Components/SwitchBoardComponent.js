import React,{useState} from 'react';
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchModal from './SearchModal';
import SearchModalDisplay from './SearchModalDisplayComponent';
import { UserContext } from "../Util/UserProvider"

const Switchboard = (props) => {
   const [isResponse, setIsResponse] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [response,setResponse] = useState([])
   const [ state, dispatch ] = React.useContext(UserContext)

   const toggleResponse = () => setIsResponse((prevState)=>!prevState);
   const toggleSearch = () => setIsSearchOpen((prevState)=>!prevState);

   const handleResponseSearch = (searchItem) => {

      //.then((values) => {setResponse(values)})
     props.search(searchItem).then((values) => {setResponse(values)})
     toggleResponse()
  }


   return(
     <div className="container mt-5">
      <div className="row box flex ms-auto">
        <img src="./assets/images/media.jfif" style={{width:500}}  className="col-md-7 float-md-end mb-3 ms-md-3" alt="..."/>
        <div className="col-4 ">
          <ul>
            <li><Link to="/businessreg"><Button name="button" id="btn-br" className="btn btn-dark mb-3">Business Register</Button></Link>
            </li>
            <li><Link to="/eas"><Button name="button" id="btn-eas" className="btn btn-dark mb-3">E.A.S</Button></Link>
            </li>
            <li><Button name="button" id="btn-ict"  className="btn btn-dark mb-3">I.C.T</Button>
            </li>
            <li><Button  name="button" id="btn-db" className="btn btn-dark mb-3">DataBase</Button>
            </li>
            <li><Button name="button" id="btn-rs" className="btn btn-dark mb-3" onClick={toggleSearch}>Response Search</Button>
            </li>
          </ul>
        </div>


      </div>

      <SearchModal search={handleResponseSearch} show={isSearchOpen} toggle={toggleSearch}/>
      <SearchModalDisplay isOpen={isResponse} toggle={toggleResponse} results={response}/>
      </div>

   );
};


export default Switchboard;
