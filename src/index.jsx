import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './views/App';
import FirebaseConfig from './services/FirebaseConfig'
import FirebaseContext from './services/FirebaseContext'

ReactDOM.render(
  <FirebaseContext.Provider value={new FirebaseConfig()}>
    <App />
  </FirebaseContext.Provider>
, document.getElementById(process.env.REACT_APP_ROOT));
