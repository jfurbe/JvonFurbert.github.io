import React, {useState} from 'react';
import {UserContext} from './context.js';
import ReactDOM from "react-dom";
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';



function Spa() {
  const [ctx, setCtx] = useState({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100},
                                                  {name:'JJ', email: 'jj@gmail.com',password:'JJPass',balance:1000}],
                                                currentUser:''})
  
  return (
    <BrowserRouter>
      <NavBar/>
      <UserContext.Provider value={[ctx, setCtx]}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/CreateAccount/" element={<CreateAccount/>} />
          <Route path="/login/" element={<Login/>} />
          <Route path="/deposit/" element={<Deposit/>} />
          <Route path="/withdraw/" element={<Withdraw/>} />
          <Route path="/alldata/" element={<AllData/>} />
          </Routes>
        </div>
      </UserContext.Provider>     
    </BrowserRouter>
  );
}

ReactDOM.render(
    <Spa />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
