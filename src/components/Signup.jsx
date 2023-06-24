import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContex';
import './Signup.css';

const Signup = () => {
  const { signup, clearError } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = signup(email, password);

    if (result === 'existing') {
      clearError();
      setSignupError('Account already exists. Please choose a different email.');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {signupError && <p className="error">{signupError}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};

export default Signup;
