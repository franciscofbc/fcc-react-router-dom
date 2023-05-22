import income from '../../assets/images/income.png';
const Income = () => {
  return (
    <div className="income">
      <h3>Income</h3>
      <p className="income-last">
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img src={income} alt="" />
      <div className="income-flexone">
        <h3>Your transactions (3)</h3>
        <p className="income-last">
          Last <span>30 days</span>
        </p>
      </div>
      <div className="income-flextwo">
        <p className="income-value">$720</p>
        <p className="income-data">1/12/22</p>
      </div>
      <div className="income-flextwo">
        <p className="income-value">$560</p>
        <p className="income-data">10/11/22</p>
      </div>
      <div className="income-flextwo">
        <p className="income-value">$980</p>
        <p className="income-data">23/11/22</p>
      </div>
    </div>
  );
};

export default Income;
