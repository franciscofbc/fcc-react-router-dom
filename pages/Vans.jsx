import { useEffect, useState } from 'react';

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className="container">
      <h1>Explore our van options</h1>

      <div className="vans-div">
        {vans.map((van) => (
          <div key={van.id}>
            <img src={van.imageUrl} alt={vans.name} />
            <div className="van-name-price">
              <h3>{van.name}</h3>
              <p>
                ${van.price}
                /day
              </p>
            </div>
            <i className={`van-type-i ${van.type}`}>{van.type}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vans;
