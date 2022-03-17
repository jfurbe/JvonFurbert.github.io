import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { DOMMessage, DOMMessageResponse } from './types';

function App() {
  const [msg, setMsg] = useState('');

  const [title, setTitle] = React.useState('');
  const [headlines, setHeadlines] = React.useState<string[]>([]);

  React.useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: 'GET_DOM' } as DOMMessage,
        (response: DOMMessageResponse) => {
          setTitle(response.title);
          setHeadlines(response.headlines);
        });
    });
  });

  let gDiv = document.querySelectorAll('div[class^="Advert"]')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {JSON.stringify(gDiv)}
      <h1>{msg}</h1>
      <h1>{title}</h1>
      <h1>{headlines}</h1>
      <button onClick={()=> setMsg('Clickeds')}>Click me</button>
    </div>
  );
}

export default App;
