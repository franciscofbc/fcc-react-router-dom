import star from '../../assets/images/star.png';

const Dashboard = () => {
  return (
    <>
      <div className="income-dashboard">
        <h1>Welcome</h1>
        <div className="income-dashboard-flex">
          <p>
            Income last <span>30 days</span>
          </p>
          <p>Details</p>
        </div>
        <p className="income-dashboard-value">$2,260</p>
      </div>
      <div className="reviews-dashboard">
        <div className="reviews-dashboard-score">
          <h2>Review score</h2>
          <img src={star} alt="" />
          <p>
            <span>5.0</span>/5
          </p>
        </div>
        <p>Details</p>
      </div>
      <div className="vans-dashboard">
        <div className="vans-dashboard-flex">
          <h2>Your listed vans</h2>
          <p>View all</p>
        </div>
        <p>importar vans</p>
      </div>
    </>
  );
};

export default Dashboard;
