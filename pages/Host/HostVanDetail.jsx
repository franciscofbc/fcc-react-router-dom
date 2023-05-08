import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, Link } from 'react-router-dom';

const HostVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState({});

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
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

  return (
    <>
      &larr;{' '}
      <Link to=".." className="link-back">
        {/* relative="path" */}
        Back to all vans
      </Link>
      <div className="teste">
        {detailVan}
        <nav>
          <NavLink
            to="."
            // to={`/host/vans/${van.id}`}
            end
            className={({ isActive }) => (isActive ? 'isActive' : null)}
          >
            Detail
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? 'isActive' : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? 'isActive' : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={van} />
      </div>
    </>
  );
};

export default HostVanDetail;
