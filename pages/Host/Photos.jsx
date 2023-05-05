import { useOutletContext } from 'react-router-dom';

const Photos = () => {
  const van = useOutletContext();

  return (
    <div className="host-van-detail-photos">
      <img src={van.imageUrl} alt={van.name} />
    </div>
  );
};

export default Photos;
