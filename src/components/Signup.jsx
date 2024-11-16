import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    
    // Show a success popup
    alert('Account created successfully!');

    // Redirect to login after a short delay
    setTimeout(() => {
      navigate('/login');
    }, 500); // 1000 ms = 1 second delay
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-form-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="signup-form-group">
            <label>Name:</label>
            <input
              type="text"
              className="signup-form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-group">
            <label>Email:</label>
            <input
              type="email"
              className="signup-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-group">
            <label>Password:</label>
            <input
              type="password"
              className="signup-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-form-button">Sign Up</button>
        </form>
        <p className="signup-login-link">
          Already have an account? <button onClick={handleLoginRedirect} className="signup-login-button">Login</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
