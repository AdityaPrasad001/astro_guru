import React from "react";
import detailStyles from "./detail.module.css";
import { detailData } from "./data";

const Detail = () => {
  return (
    <section className={detailStyles.section_detail}>
      <div className={detailStyles.logos}>
        {detailData.map((detail, index) => (
          <div className={detailStyles.logo_container} key={index}>
            <img src={detail.logo} loading="lazy" alt="" />
            <p
              className={
                index < 3 ? detailStyles.logo_text : detailStyles.logo_text2
              }
            >
              {detail.text}
            </p>
          </div>
        ))}
      </div>

      <div className={detailStyles.dots}>
        <button className={detailStyles.dot_fill}>&nbsp;</button>
        <button className={detailStyles.dot}>&nbsp;</button>
        <button className={detailStyles.dot}>&nbsp;</button>
      </div>
    </section>
  );
};

export default Detail;
