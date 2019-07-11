import React from 'react';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './styles/sign-in.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignInForm = () => {

  return (
    <Form className="wrapper">
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Sign In</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignInForm;