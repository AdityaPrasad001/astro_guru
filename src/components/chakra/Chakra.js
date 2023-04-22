import React from "react";
import chakraStyles from "./chakra.module.css";
import chakraCircle from "../../assets/body/chakra/chakra_circle.png";
import chakraSun from "../../assets/body/chakra/chakra_sun.png";

const Chakra = () => {
  return (
    <div
      className={chakraStyles.chakra_container}
      // style={{ backgroundImage: `url(${chakraSun}) no-repeat` }}
      // style={{ backgroundImage: `url(${chakraSun})` }}
    >
      <img
        src={chakraCircle}
        alt="Chakra Circle"
        className={chakraStyles.chakra_circle}
      />
      {/* <img
        src={chakraSun}
        alt="Chakra Sun"
        className={chakraStyles.chakra_sun}
      /> */}
    </div>
  );
};

export default Chakra;
