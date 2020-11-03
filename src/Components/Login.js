
// import React, { Component } from 'react';
// import styles from  '../../public/css/Login.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import '../css/Login.css';

function Login() {
    return (
        <Router>
        <div className="container">

            <h1>My Restaurant</h1>
            <form>
                <div className="form-group">
                    <input type="email" className="form-control" id="userName" aria-describedby="emailHelp"
                        placeholder="User name" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <a className="btn btn-primary button_login" href="" role="button">
                <Link to="/AdminOverview">{'Login'}</Link>
                        </a>

                        
            </form>

        </div>
        </Router>
    );
}



  function AdminOverview() {
    return <h2>AdminOverview</h2>;
  }

export default Login;