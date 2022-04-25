import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Swal from 'sweetalert2';
import './Signup.css';

function Signup() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
  });

  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    setSubmitted(true);
    var year = new Date().getFullYear();
    var validYear = year - 18;
    var birthYear = values.birthdate.slice(0, 4);

    try {
      if (birthYear > validYear) {
        setValues({ ...values, birthdate: "" })
      } else {
        if (values.firstname && values.lastname && values.email && values.password && values.birthdate && values.gender) {
          setValid(true);
          Swal.fire('Success', "You've singed up successfully!", 'success')
          navigate('/', { state: values });
        }
      }
    } catch (err) {
      Swal.fire('Error', "Something is wrong.", 'error')
    }
  }
  return (
    <>
      <div className="form-hldr">
        <div className="signup-form">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Control
                type='text'
                placeholder='First name'
                name='firstname'
                value={values.firstname}
                onChange={(e) => setValues({ ...values, firstname: e.target.value })}
                disabled={valid}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type='text'
                placeholder='Last name'
                name='lastname'
                value={values.lastname}
                onChange={(e) => setValues({ ...values, lastname: e.target.value })}
                disabled={valid}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type='email'
                placeholder='Email address'
                name='email'
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                disabled={valid}
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
                disabled={valid}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Tooltip title="User must be 18 years old or above.">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
              <Form.Control
                type='date'
                name='birthdate'
                value={values.birthdate}
                onChange={(e) => setValues({ ...values, birthdate: e.target.value })}
                disabled={valid}
                required
              />
              {submitted === true && !values.birthdate && <span>Select your birth date.</span>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <div>{submitted === true && !values.gender && <span>Please choose your gender.</span>}</div>
              <div>
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  value={values.gender}
                  onChange={() => setValues({ ...values, gender: 'male' })}
                  disabled={valid}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  value={values.gender}
                  onChange={() => setValues({ ...values, gender: 'female' })}
                  disabled={valid}
                />
                <Form.Check
                  inline
                  label="Others (LGBTQIA+)"
                  name="gender"
                  type="radio"
                  value={values.gender}
                  onChange={() => setValues({ ...values, gender: 'others' })}
                  disabled={valid}
                />
              </div>
            </Form.Group >

            <Form.Group className="mb-3">
              <Link className="back-link" to="/">Back</Link>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="success" type="submit" size="lg" disabled={valid}>Sign up</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Signup