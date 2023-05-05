import { useOutletContext } from 'react-router-dom';

const Pricing = () => {
  const van = useOutletContext();

  return (
    <div className="host-van-detail-pricing">
      <h3>${van.price}/day</h3>
    </div>
  );
};

export default Pricing;
