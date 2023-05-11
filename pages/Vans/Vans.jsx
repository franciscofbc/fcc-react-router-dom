import React, { useEffect, useState } from 'react';
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useSearchParams,
} from 'react-router-dom';
import { getVans } from '../../api';

export const loader = () => {
  return defer({ vans: getVans() });
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
    const filterVans = typeFilter
      ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
      : vans;

    const listVans = filterVans.map((van) => (
      <div key={van.id}>
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), type: van.type }}
        >
          <img src={van.imageUrl} alt={van.name} />
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
      <>
        <div className="vans-filter">
          <button
            className={`vans-filter-link btn-simple ${
              typeFilter === 'simple' && 'selected-simple'
            }`}
            onClick={() => setSearchParams({ type: 'simple' })}
          >
            Simple
          </button>
          <button
            className={`vans-filter-link btn-luxury ${
              typeFilter === 'luxury' && 'selected-luxury'
            }`}
            onClick={() => setSearchParams({ type: 'luxury' })}
          >
            Luxury
          </button>
          <button
            className={`vans-filter-link btn-rugged ${
              typeFilter === 'rugged' && 'selected-rugged'
            }`}
            onClick={() => setSearchParams({ type: 'rugged' })}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              className="vans-filter-clear"
              onClick={() => setSearchParams({})}
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="vans-div">{listVans}</div>
      </>
    );
  }

  return (
    <div className="container">
      <h1>Explore our van options</h1>
      <React.Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={dataPromise.vans}>
          {renderVanElements}
          {/* {(vans) => {
            const filterVans = typeFilter
              ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
              : vans;

            const listVans = filterVans.map((van) => (
              <div key={van.id}>
                <Link
                  to={van.id}
                  state={{ search: searchParams.toString(), type: van.type }}
                >
                  <img src={van.imageUrl} alt={van.name} />
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
              <>
                <div className="vans-filter">
                  <button
                    className={`vans-filter-link btn-simple ${
                      typeFilter === 'simple' && 'selected-simple'
                    }`}
                    onClick={() => setSearchParams({ type: 'simple' })}
                  >
                    Simple
                  </button>
                  <button
                    className={`vans-filter-link btn-luxury ${
                      typeFilter === 'luxury' && 'selected-luxury'
                    }`}
                    onClick={() => setSearchParams({ type: 'luxury' })}
                  >
                    Luxury
                  </button>
                  <button
                    className={`vans-filter-link btn-rugged ${
                      typeFilter === 'rugged' && 'selected-rugged'
                    }`}
                    onClick={() => setSearchParams({ type: 'rugged' })}
                  >
                    Rugged
                  </button>
                  {typeFilter && (
                    <button
                      className="vans-filter-clear"
                      onClick={() => setSearchParams({})}
                    >
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="vans-div">{listVans}</div>
              </>
            );
          }} */}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default Vans;

// const [vans, setVans] = useState([]);
// const [loading, setLoading] = useState(false);
// console.log(vans);
// console.log(data[0]);
// setVans(useLoaderData());

// useEffect(() => {
//   async function loadVans() {
//     // setLoading(true);
//     const data = await getVans();
//     setVans(data);
//     // setLoading(false);
//   }
//   loadVans();
// }, []);

// if (loading) {
//   return <h1>Loading...</h1>;
// }

// const filterVans = typeFilter
//   ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
//   : vans;

// const listVans = filterVans.map((van) => (
//   <div key={van.id}>
//     <Link
//       to={van.id}
//       state={{ search: searchParams.toString(), type: van.type }}
//     >
//       <img src={van.imageUrl} alt={van.name} />
//       <div className="van-name-price">
//         <h3>{van.name}</h3>
//         <p>
//           ${van.price}
//           /day
//         </p>
//       </div>
//       <p className={`van-type-p ${van.type}`}>{van.type}</p>
//     </Link>
//   </div>
// ));

{
  /* <div className="vans-filter">
  <button
    className={`vans-filter-link btn-simple ${
      typeFilter === 'simple' && 'selected-simple'
    }`}
    onClick={() => setSearchParams({ type: 'simple' })}
  >
    Simple
  </button>
  <button
    className={`vans-filter-link btn-luxury ${
      typeFilter === 'luxury' && 'selected-luxury'
    }`}
    onClick={() => setSearchParams({ type: 'luxury' })}
  >
    Luxury
  </button>
  <button
    className={`vans-filter-link btn-rugged ${
      typeFilter === 'rugged' && 'selected-rugged'
    }`}
    onClick={() => setSearchParams({ type: 'rugged' })}
  >
    Rugged
  </button>
  {typeFilter && (
    <button
      className="vans-filter-clear"
      onClick={() => setSearchParams({})}
    >
      Clear filters
    </button>
  )}
</div>
<div className="vans-div">{listVans}</div> */
}

{
  /* <Link className="vans-filter-link" to="?type=simple">
                  Simple
                </Link>
                <Link className="vans-filter-link" to="?type=luxury">
                  Luxury
                </Link>
                <Link className="vans-filter-link" to="?type=rugged">
                  Rugged
                </Link>
                <Link className="vans-filter-clear" to=".">
                  Clear filters
                </Link> */
}
