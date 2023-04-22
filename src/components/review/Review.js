import React from "react";
import reviewStyles from "./review.module.css";
import roughBorder from "../../assets/body/end_border.png";
import star from "../../assets/body/star.png";
import ReviewMain from "./ReviewMain";

const Review = () => {
  return (
    <div className={reviewStyles.container}>
      <div className={reviewStyles.text_container}>
        <img src={star} alt="Star" className={reviewStyles.star} />
        User Review
        <img src={star} alt="Star" className={reviewStyles.star} />
      </div>

      <ReviewMain />

      <img src={roughBorder} alt="" width="100%" />
    </div>
  );
};

export default Review;
