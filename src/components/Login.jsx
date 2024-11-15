import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    
    // Show a login success popup
    alert('Logged in successfully!');
    
    // Redirect to home after a short delay
    setTimeout(() => {
      navigate('/home'); // Redirect to the home page
    }, 500); // 500 ms delay
  };

  const handleSignUpRedirect = () => {
    navigate('/signup'); // Redirect to the signup page if the user doesn't have an account
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-form-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-form-group">
            <label>Email:</label>
            <input
              type="email"
              className="login-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label>Password:</label>
            <input
              type="password"
              className="login-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-form-button">Login</button>
        </form>
        <p className="login-signup-link">
          Don't have an account? <button onClick={handleSignUpRedirect} className="login-signup-button">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
