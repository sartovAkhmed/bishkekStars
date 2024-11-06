import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";
import { Container } from "./Container";

function Reviews() {
  let rMessage;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rMessage = reviewMessage.message;
  };

  // list review on visit
  handleReviewsUpdation();

  return (
    <div className="review-section" id="reviews">
      <Container>
        <div className="rw-text-content">
          <p className="rw-text-title">
            <span className="rw-text-num"></span>
          </p>

          <p className="rw-text-desc">Вопросы на данную тему!</p>

          <p className="rw-text-format">
            <span className="rw-text-quote1">''</span>
            <span className="rw-review">{rMessage}</span>
            <span className="rw-text-quote2">''</span>
          </p>

          <div className="rw-authors">
            <div className="rw-btns">
              <button
                className="rw-next-btn"
                type="button"
                onClick={backBtnClick}
              >
                ←
              </button>
              <button
                className="rw-next-btn"
                type="button"
                onClick={frontBtnClick}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Reviews;
