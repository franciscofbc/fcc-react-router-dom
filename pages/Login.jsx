import React, { useState } from 'react';
import {
  useLoaderData,
  useSearchParams,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { loginUser } from '../api';

export function loader({ request }) {
  // console.log(new URL(request.url).searchParams.get('redirectTo'));
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const pathname = new URL(request.url).searchParams.get('redirectTo');

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('loggedin', true);
    return redirect(pathname ? pathname : '/host');
  } catch (error) {
    return error.message;
  }
}

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('message'));

  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  // console.log(errorMessage);

  // const handleForm = (e) => {
  //   e.preventDefault();

  //   console.log(email);
  //   console.log(password);

  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div className="container form-container">
      <h1>Sign in to your account</h1>
      {message && <h4 className="login-message">{message}</h4>}
      {errorMessage && <h4 className="login-message">{errorMessage}</h4>}
      {/* <Form className="login-form" onSubmit={handleForm}> */}
      <Form className="login-form" method="post" replace>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
          // value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          // onChange={(e) => {
          //   setPassword(e.target.value);
          // }}
          // value={password}
        />
        {/* <button type="submit">Sign in</button> */}
        <button disabled={navigation.state === 'submitting'}>
          {/* <button {navigation.state==='submitting' && disabled}> */}
          {navigation.state === 'submitting' ? 'Submitting' : 'Sign in'}
        </button>
        {/* <input type="submit" value="Sing in" /> */}
      </Form>
      <p>
        Don't have an account? <span>Create one now</span>
      </p>
    </div>
  );
};

export default Login;
