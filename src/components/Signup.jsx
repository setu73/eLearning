import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContex';
import './Signup.css';

const Signup = () => {
  const { signup, error } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupStatus, setSignupStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = signup(email, password);

    if (result === 'existing') {
      setSignupStatus('Account already exists. Please login.');
    } else if (result === 'success') {
      setSignupStatus('Account created successfully. Please login.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {signupStatus && <p className="signup-status">{signupStatus}</p>}
      {error && <p className="error">{error}</p>} {/* Add this line */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
