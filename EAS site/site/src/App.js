import React from 'react';
import Main from './Components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from "./Util/UserProvider"
import './App.css';
import './react_table_inverted.css';

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
