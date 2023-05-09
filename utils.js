import { Navigate, redirect } from 'react-router-dom';

export async function requireAuth() {
  // const isLoggedIn = false;
  const isLoggedIn = localStorage.getItem('loggedin');

  if (!isLoggedIn) {
    throw redirect('/login?message=You must log in first');
    // return <Navigate to="/login" />;
  }
  // console.log(isLoggedIn);
}
