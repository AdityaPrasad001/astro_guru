import React from "react";
import bodyStyles from "../body.module.css";
import sun from "../../../assets/body/sun.png";
import star from "../../../assets/body/star.png";
import trust_banner from "../../../assets/body/trust_banner.png";
import VideoCarousel from "../VideoCarousel/VideoCarousel";

const Testimonial = () => {
  return (
    <div className={bodyStyles.testimonial_container}>
      <div>
        <img src={sun} alt="Sun" className={bodyStyles.sun} />
      </div>
      <div className={bodyStyles.text_container}>
        <img src={star} alt="Star" className={bodyStyles.star} />
        User Testimonial
        <img src={star} alt="Star" className={bodyStyles.star} />
      </div>
      <div>
        <VideoCarousel />
      </div>
      <div>
        <img
          src={trust_banner}
          alt="Trust"
          className={bodyStyles.trust_banner}
        />
      </div>

      <div className={bodyStyles.dots}>
        <button className={bodyStyles.dot_fill}>&nbsp;</button>
        <button className={bodyStyles.dot}>&nbsp;</button>
        <button className={bodyStyles.dot}>&nbsp;</button>
        <button className={bodyStyles.dot}>&nbsp;</button>
      </div>
    </div>
  );
};

export default Testimonial;
