import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="notfound-message">
        Sorry, the page that you were looking for was not found.
      </h1>
      <Link to="/" className="notfound-link">
        Return to home
      </Link>
    </div>
  );
};

export default NotFound;
