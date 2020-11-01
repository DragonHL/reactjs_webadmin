
// import React, { Component } from 'react';
// import styles from  '../../public/css/Login.css';
import '../css/Login.css';

function Login() {
    return (
        //   <div className="App">
        //     <header className="App-header">
        //       <img src={logo} className="App-logo" alt="logo" />
        //       <p>
        //         Edit <code>src/App.js</code> and save to reload.
        //       </p>
        //       <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         Learn React
        //       </a>
        //     </header>
        //   </div>

        <div className="container">

             <h1>My Restaurant</h1>
             <form>
                 <div className="form-group">
                     <input type="email" className="form-control" id="userName" aria-describedby="emailHelp"
                         placeholder="User name"/>
                </div>
                     <div className="form-group">
                         <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                         <a className="btn btn-primary button_login" href="./Admin Overview.html" role="button">
                            Login
                        </a>
    
    
            </form>

        </div>

    );
  }
  
  export default Login;