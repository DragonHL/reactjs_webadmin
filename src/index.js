import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import './css/Login.css';
// import Login from './Components/Login';
import reportWebVitals from './reportWebVitals';

import './css/Overview.css';
// import AdminOverview from './Components/AdminOverview';
import TrackOrder from './Components/TrackOrder';
// import Test from './Components/Test';
// import Header from './Components/Header';

// import SideBar from './Components/SideBar';
// import ContentAdminOverview from './Components/ContentAdminOverview';
// import Footer from './Components/Footer';

// import '../js/FontAwesome';

ReactDOM.render(
  <React.StrictMode>
    <TrackOrder/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
