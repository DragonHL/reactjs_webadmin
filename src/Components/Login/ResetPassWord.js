
import React, { useRef, useState } from 'react';
// import '../../css/Login.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';

import { useAuth } from '../../Service/LoginService';
import { Link, useHistory } from "react-router-dom";


export default function ChangPass() {

  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory();


  const [isShow, setIsShow] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
      history.push("/")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (

    <div className="body_login">
      <Card className="container_card">
        <Card.Body className="container_login">
          <h6 className="text-center mb-4 title_login">Đổi mật khẩu</h6>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="input_email">
              <Form.Control ref={emailRef} className="form_login input_email" type="email" placeholder="Email" required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit" className="button_reset_pass" >
              Gửi
            </Button>
            <Button onClick={() => { history.push("/") }} className="w-100  mt-4 mb-5" type="submit" className="button_cancel">
              Hủy
            </Button>
          </Form>

        </Card.Body>
      </Card>
    </div>


  )
};


// }



