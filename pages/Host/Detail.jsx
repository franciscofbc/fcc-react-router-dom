import { useOutletContext } from 'react-router-dom';

const Detail = () => {
  const van = useOutletContext();

  return (
    <div className="host-van-detail-detail">
      <p>
        <b>Name:</b> {van.name}
      </p>
      <p>
        <b>Category:</b> {van.type}
      </p>
      <p>
        <b>Description:</b> {van.description}
      </p>
      <p>
        <b>Visibility:</b> Public
      </p>
    </div>
  );
};

export default Detail;
