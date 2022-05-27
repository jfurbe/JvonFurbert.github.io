import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import LayOut from './Components/LayOut';
import {BrowserRouter} from 'react-router-dom';
import client from './Components/helpers/Realm.js';
import  {ApolloProvider} from "@apollo/client";

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
      <BrowserRouter>
      <LayOut/>
      </BrowserRouter>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default App;
