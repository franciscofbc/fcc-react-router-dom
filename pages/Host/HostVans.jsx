import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const listVans = vans.map((van) => (
    <Link key={van.id} to={van.id}>
      <div className="host-vans">
        <img src={van.imageUrl} alt={van.name} />
        <div className="host-vans-name-price">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <h1>Explore our van options</h1>
      <div>{listVans}</div>
    </div>
  );
};

export default HostVans;
