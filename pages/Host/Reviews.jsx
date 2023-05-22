import reviews from '../../assets/images/reviews.png';
import star from '../../assets/images/star.png';

const Reviews = () => {
  return (
    <div>
      <div className="reviews-title">
        <h1>Your reviews</h1>
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <img src={reviews} alt="" />
      <h3 className="reviews-title-comments">Reviews (2)</h3>
      <div className="reviews-personal-comments">
        <div className="reviews-stars">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div>
          <p>
            Elliot <span>December 1, 2022</span>
          </p>
          <p className="reviews-comments">
            The beach bum is such as awesome van! Such as comfortable trip. We
            had it for 2 weeks and there was not a single issue. Super clean
            when we picked it up and the host is very comfortable and
            understanding. Highly recommend!
          </p>
        </div>
      </div>
      <div className="reviews-personal-comments">
        <div className="reviews-stars">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div>
          <p>
            Sandy <span>November 23, 2022</span>
          </p>
          <p className="reviews-comments">
            This is our third time using the Modest Explorer for our travels and
            we love it! No complaints, absolutely perfect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
