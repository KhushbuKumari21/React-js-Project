import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here

    // Example: Simulating successful registration
    if (password !== confirmPassword) {
      setRegisterError('Passwords do not match');
    } else {
      // Redirect to the login page or display a success message
      console.log('Registration successful');
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h2>Company Registration</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          {registerError && <div className="error-message">{registerError}</div>}
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
