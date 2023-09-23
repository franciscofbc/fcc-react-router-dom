import React from 'react';
import { Link } from 'react-router-dom';
import image54 from '../assets/images/image54.png';

const About = () => {
  return (
    //
    <>
      <img className="about-image54" src={image54} alt="image54" />
      <div className="container">
        <h1 className="about-h1">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="about-p">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="about-p">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-div">
          <h2 className="about-h2">Your destination is waiting.</h2>
          <h2 className="about-h2">Your van is ready.</h2>
          <div className="about-div-link">
            <Link className="about-link" to="/vans">
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
