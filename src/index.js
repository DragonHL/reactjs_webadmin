import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import './css/Login.css';
// import Login from './Components/Login';
import reportWebVitals from './reportWebVitals';

import './css/Overview.css';
import AdminOverview from './Components/AdminOverview';

ReactDOM.render(
  <React.StrictMode>
    <AdminOverview/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
