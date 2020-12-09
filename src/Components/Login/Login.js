
import React, {  useRef, useState } from 'react';
import '../../css/Login.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';

import { useAuth } from '../../Service/LoginService';
import { useHistory } from "react-router-dom";



export default function Login() {

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

  return (
    <div className="body_login">

      <Card className="container_card">
        <Card.Body className="container_login">
          <h6 className="text-center mb-4 title_login">My Restaurant</h6>
          {/* {JSON.stringify(currentUser)}// dua doi tuong ve kieu chuoi */}
          {/* { currentUser.email} */}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="input_email">
              <Form.Control ref={emailRef} className="form_login input_email" type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group id="password" className="input_pass">
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



