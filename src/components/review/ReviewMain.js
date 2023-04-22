import React from "react";
import reviewStyles from "./review.module.css";
import filled_star from "../../assets/review/filled_star.png";
import empty_star from "../../assets/review/empty_star.png";

const ReviewMain = () => {
  return (
    <div className={reviewStyles.main_container}>
      <div className={reviewStyles.review_main}>
        <div className={reviewStyles.star_box}>
          <img src={filled_star} alt="" />
          <img src={filled_star} alt="" />
          <img src={filled_star} alt="" />
          <img src={filled_star} alt="" />
          <img src={empty_star} alt="" />
        </div>

        <span className={reviewStyles.main_text}>
          Explore the Mysteries of the Universe with Our Expert Astrology
          Services Explore the Mysteries of the Universe with Our Expert
          Astrology ServicesExplore the Mysteries of the Universe with
        </span>
      </div>
    </div>
  );
};

export default ReviewMain;
