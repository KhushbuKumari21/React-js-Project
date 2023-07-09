import React, { useState } from 'react';
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication logic here

    // Example: Simulating successful login
    if (email === 'example@example.com' && password === 'password') {
      // Redirect to the main application or dashboard
      console.log('Login successful');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Company Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {loginError && <div className="error-message">{loginError}</div>}
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default Login;
