import { DOMMessage, DOMMessageResponse } from '../types';
 
// Function called when a new message is received
const messagesFromReactAppListener = (
   msg: DOMMessage,
   sender: chrome.runtime.MessageSender,
   sendResponse: (response: DOMMessageResponse) => void) => {
  
   console.log('[content.js]. Message received', msg);
 
   const headlines = Array.from(document.querySelectorAll('div[class^="Advert"]'));
 
    // Prepare the response object with information about the site
   const response: DOMMessageResponse = {
       title: document.title,
       headlines
   };
 
   sendResponse(response);
}

export default messagesFromReactAppListener;
/**
* Fired when a message is sent from either an extension process or a content script.
*/
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);