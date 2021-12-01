import React from 'react';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from "./Util/UserProvider"
import './App.css';


const App =()=> {

  return(
    <UserProvider>
    <BrowserRouter>
    <div>
      <Main />
    </div>
    </BrowserRouter>
    </UserProvider>
  );
};


export default App;
