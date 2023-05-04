import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HostVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState({});

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [params.id]);

  const detailVan = (
    <div className="detail-van">
      <img src={van.imageUrl} alt={van.name} />
      <div className="host-detail-van-div">
        <p className={`van-type-p ${van.type}`}>{van.type}</p>
        <h3>{van.name}</h3>
        <p className="price">${van.price}/day</p>
      </div>
    </div>
  );

  return <>{detailVan}</>;
};

export default HostVanDetail;
