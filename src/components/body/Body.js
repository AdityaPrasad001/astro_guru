import React from "react";
import bodyStyles from "./body.module.css";
import Testimonial from "./testimonial/Testimonial";
import Astrologer from "./astrologers/Astrologer";
import roughBorder from "../../assets/body/end_border.png";

const Body = () => {
  return (
    <div className={bodyStyles.container}>
      <Testimonial />

      <Astrologer />
      <img src={roughBorder} alt="" width="100%" />
    </div>
  );
};

export default Body;
