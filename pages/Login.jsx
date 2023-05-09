import React, { useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('message'));

  const message = useLoaderData();

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
      {message && <h3 className="loggin-message">{message}</h3>}
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
        {/* <input type="submit" value="Sing in" /> */}
      </form>
      <p>
        Don't have an account? <span>Create one now</span>
      </p>
    </div>
  );
};

export default Login;
