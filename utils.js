import { Navigate, redirect } from 'react-router-dom';

export async function requireAuth(request) {
  // const isLoggedIn = false;
  const isLoggedIn = localStorage.getItem('loggedin');

  const pathname = new URL(request.url).pathname;
  // console.log(pathname);

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first&redirectTo=${pathname}`
      // `/login?message=You must log in first`
    );
    // return <Navigate to="/login" />;
  }
  // console.log(isLoggedIn);
}
