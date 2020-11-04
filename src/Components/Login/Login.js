
import React, { Component } from 'react';
import '../../css/Login.css';







class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      passWord: '',

    };
  }


  render() {
    return (

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


 
              <div className="form-group">
                <input type="button" className="form-control button_login" value="Login" />
              </div>




          </form>
        </div>

    )
  };


}



export default Login;