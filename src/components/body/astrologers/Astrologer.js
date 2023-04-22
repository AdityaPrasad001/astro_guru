import React from "react";
import bodyStyles from "../body.module.css";
import star from "../../../assets/body/star.png";
import { astrologer } from "./_helpers";
import Online from "./Online";

const Astrologer = () => {
  return (
    <div className={bodyStyles.astrologer_container}>
      <div className={bodyStyles.text_container}>
        <img src={star} alt="Star" className={bodyStyles.star} />
        Premium Astrologers
        <img src={star} alt="Star" className={bodyStyles.star} />
      </div>

      <div className={bodyStyles.astrologer_cards}>
        {astrologer.map((a, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${a.img})`,
            }}
            className={bodyStyles.each_card}
          >
            <div className={bodyStyles.card_head}>
              <span>{a.experince}+ Years</span>
              <Online />
            </div>
            <div className={bodyStyles.card_body}>
              <div>
                <h1>{a.name}</h1>
                <h2 className={bodyStyles.small_title}>Specialties</h2>
                <h2>{a.specialities}</h2>
                <div className={bodyStyles.card_body_foot}>
                  <div>
                    <h2 className={bodyStyles.small_title}>Skills</h2>
                    <h2>{a.skills}</h2>
                  </div>
                  <div className={bodyStyles.foot_price}>
                    <h3>Price</h3>
                    <h1>&#8377; {a.price_per_min}/min</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={bodyStyles.card_foot}>
              <div className={bodyStyles.card_foot_box}>
                <span className={bodyStyles.icons}>💬</span>
                Chat
              </div>
              <div className={bodyStyles.card_foot_box}>
                <span className={bodyStyles.icons}>📞</span>
                Call
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Astrologer;

{
  /* 

  
  <div className={bodyStyles.each_card}>1</div>
        <div className={bodyStyles.each_card}>2</div>
        <div className={bodyStyles.each_card}>3</div>
        <div className={bodyStyles.each_card}>4</div>
        <div className={bodyStyles.each_card}>5</div>
        <div className={bodyStyles.each_card}>6</div>
        <div className={bodyStyles.each_card}>7</div>
        <div className={bodyStyles.each_card}>8</div>
        <div className={bodyStyles.each_card}>9</div> */
}
