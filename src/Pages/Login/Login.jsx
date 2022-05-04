import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate, Link, useLocation } from 'react-router-dom';
import './Login.css';

function Login() {

  // Initialization of the login form values
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // Retrieving of singup form values
  const { state } = useLocation();

  // Initialization of valid state and redirect state
  const [valid, setValid] = useState(false);
  const [redirect, setRedirect] = useState(false);

  // Function to handle on submit form event
  const handleLogin = (e) => {
    e.preventDefault();

    // Validation if the form fields have values
    try {
      if (values.email === state.email && values.password === state.password) {
        setValid(true);
      } else {
        alert('Your email or password is wrong.');
      }

    } catch (err) {
      alert('Your email or password is wrong.');
    }

    // Setting redirect to true
    setRedirect(true);
  }

  return (
    <>
      {redirect === true && valid === true && <Navigate replace to="/dummy" />}
      <div className='hack-img'>
        <img src='https://res.cloudinary.com/karlstorage/image/upload/v1651646277/free-img/nlur2ofdggiculxtseko.png' alt='hacker-banner' />
      </div>
      <div className='login-header'>
        <h1>Welcome Hackers</h1>
      </div>
      <div className="bgstyle"></div>
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
              <Button className='button-sign' variant="success" type="submit" size="lg">Log In</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login