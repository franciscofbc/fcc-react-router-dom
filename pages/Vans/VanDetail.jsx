import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const detailVan = (
    <div className="detail-van-div">
      <img src={van.imageUrl} alt={van.name} />
      <p className={`van-type-p ${van.type}`}>{van.type}</p>
      <h3>{van.name}</h3>
      <p className="price-p">${van.price}/day</p>
      <p>{van.description}</p>
    </div>
  );

  return (
    <div className="container">
      {van.name ? (
        <>
          <Link to="/vans" className="link-back">
            Back to all vans
          </Link>
          {detailVan}
          <Link to="/" className="home-link van-detail-link">
            Rent this van
          </Link>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
