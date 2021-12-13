import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Eas = ({adminData})=> {
   const [data, setdata] = useState()
    console.log(data)
    return(
      <div className="container mt-5">
       <div className="row box flex ">
          <img src="./assets/images/EAS.png" alt="" style={{width:500}} className="col-md-7 float mb-3 ms-md-3"/>
          <div className="col-4 ">
            <ul>
              <li><Link to="/"><Button name="button" id="btn-br" className="btn btn-dark mb-3">Business Register</Button></Link>
              </li>
              <li><Link to="/eas/record"><Button name="button" className="btn btn-dark mb-3">Record</Button></Link>
              </li>
              <li><Button name="button" id="btn-ict"  className="btn btn-dark mb-3">I.C.T</Button>
              </li>
              <li><Button  name="button" id="btn-db" className="btn btn-dark mb-3">DataBase</Button>
              </li>
              <li><Button name="button" id="btn-rs" className="btn btn-dark mb-3" >Response Search</Button>
              </li>
            </ul>
          </div>
         </div>
         
        
      </div>
    )
}


export default Eas;
