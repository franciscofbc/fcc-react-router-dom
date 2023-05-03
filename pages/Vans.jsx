import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const listVans = vans.map((van) => (
    <div key={van.id}>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={vans.name} />
        <div className="van-name-price">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            /day
          </p>
        </div>
        <p className={`van-type-p ${van.type}`}>{van.type}</p>
      </Link>
    </div>
  ));

  return (
    <div className="container">
      <h1>Explore our van options</h1>
      <div className="vans-div">{listVans}</div>
    </div>
  );
};

export default Vans;
