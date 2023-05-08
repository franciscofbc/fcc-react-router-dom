import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    setEmail('');
    setPassword('');
  };

  return (
    <div className="container form-container">
      <h1>Sign in to your account</h1>
      <form className="login-form" onSubmit={handleForm}>
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type="submit">Sign in</button>
      </form>
      <p>
        Don't have an account? <span>Create one now</span>
      </p>
    </div>
  );
};

export default Login;
