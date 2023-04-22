import React from "react";
import heroStyles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={heroStyles.container}>
      <div className={heroStyles.text_container}>
        <h1 className={heroStyles.main_heading}>"Astrology for Clarity"</h1>

        <h3 className={heroStyles.sub_head}>
          Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
          Theraphy
        </h3>
      </div>

      <button className={heroStyles.consult_btn}>Consult Now</button>
    </section>
  );
};

export default Hero;
