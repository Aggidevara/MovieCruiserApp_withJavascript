import React from 'react';
import ReactDOM from 'react-dom';
import Chathistory from './Chathistory';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
const instanceLocator = "v1:us1:2c3f3ef1-82e7-45c7-9b15-c8b362ef0ad3"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/2c3f3ef1-82e7-45c7-9b15-c8b362ef0ad3/token"
const username = "swetha"
const roomId = sw12sw
const chatdata = [
    {
      senderId: "swetha",
      text: "who'll win?"
    },
    {
      senderId: "janedoe",
      text: "who'll win?"
    }
  ]

ReactDOM.render(<Chathistory chathistory={chatdata} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
