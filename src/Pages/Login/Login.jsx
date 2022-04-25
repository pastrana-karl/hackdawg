import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate, Link, useLocation } from 'react-router-dom';
import './Login.css';

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { state } = useLocation();
  const [valid, setValid] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    try {
      if (values.email === state.email && values.password === state.password) {
        setValid(true);
      } 
    } catch (err) {
      alert('Your email or password is wrong.');
    }

    setRedirect(true);
  }

  return (
    <>
      {redirect === true && valid === true && <Navigate replace to="/dummy" />}
      <div className="form-hldr">
        <div className="login-form">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Control
                type='email'
                placeholder='Email address'
                name='email'
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Link className="signup-link" to="/signup">Sign up</Link>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="success" type="submit" size="lg">Log In</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login