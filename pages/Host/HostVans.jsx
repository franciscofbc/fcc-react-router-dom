import React, { useEffect, useState } from 'react';
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';

export async function loader({ request }) {
  await requireAuth(request);
  // return getHostVans();
  return defer({ hostVans: getHostVans() });
}

const HostVans = () => {
  // const [vans, setVans] = useState([]);

  // const vans = useLoaderData();
  const vansPromisse = useLoaderData();

  // useEffect(() => {
  //   fetch('/api/host/vans')
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  function renderHostVansElement(vans) {
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

    return <>{listVans}</>;
  }

  return (
    <div>
      <h1>Explore our van options</h1>
      {/* <div>{listVans}</div> */}
      <React.Suspense fallback={<h2>Loading host vans...</h2>}>
        <Await resolve={vansPromisse.hostVans}>{renderHostVansElement}</Await>
      </React.Suspense>
    </div>
  );
};

export default HostVans;
