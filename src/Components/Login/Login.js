
import React, { Component, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../../css/Login.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';

import { useAuth } from '../../Service/LoginService';
import { Link, useHistory } from "react-router-dom";

// import FakeAuth from './FakeAuth';


export default function Login() {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     passWord: '',
  //     redirectToReferrer: false,
  //   };
  // }

  // login = () => {
  //   FakeAuth.authenticate(() => {
  //     this.setState(() => ({
  //       redirectToReferrer: true,

  //     }))
  //   })
  //   console.log("location: " + this.props.location);
  //   console.log(this.props.location);
  // }

  //-------------------------------------------------------

  const emailRef = useRef();
  const passwordRef = useRef();


  const { currentUser, login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
        history.push("/webadmin/admin")
      
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }


  // render() {
  // const { redirectToReferrer } = this.state;
  // if (redirectToReferrer === true) {
  //   return (<Redirect to={'/webadmin/admin'} />);
  // }


  return (
    <div className="body_login">
      {/* <div className="container_login">
          <h1 className="title_login">My Restaurant</h1>
          <form>
            <div className="form-group">
              <input type="email" className="form_login input_email" id="userName" aria-describedby="emailHelp"
                placeholder="User name" />
            </div>
            <div className="form-group">
              <input type="password" className="form_login input_pass" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="button" className="button_login form_login" value="Login" onClick={this.login} />
            </div>
          </form>
        </div> */}

      {/* ------------------------- */}

      <Card className="container_card">
        <Card.Body className="container_login">
          <h6 className="text-center mb-4 title_login">My Restaurant</h6>
          {/* {JSON.stringify(currentUser)}// dua doi tuong ve kieu chuoi */}
          {/* { currentUser.email} */}

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="input_email">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control ref={emailRef} className="form_login input_email" type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group id="password" className="input_pass">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control ref={passwordRef} className="form_login input_pass" type="password" placeholder="Password" required />
            </Form.Group>

            <Button disabled={loading} className="button_login" type="submit" >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>



    </div>

  )
};


// }



