import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-image53">
      <div className="container">
        <h1 className="home-h1">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home-p">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <div className="home-div-link">
          <Link className="home-link" to="/vans">
            Find your van
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
