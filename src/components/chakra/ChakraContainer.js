import React from "react";
import chakraStyles from "./chakra.module.css";
import star from "../../assets/body/star.png";
import Chakra from "./Chakra";

const ChakraContainer = () => {
  return (
    <div className={chakraStyles.container}>
      <div className={chakraStyles.text_container}>
        <img src={star} alt="Star" className={chakraStyles.star} />
        Many Problem one Solution
        <img src={star} alt="Star" className={chakraStyles.star} />
      </div>

      <Chakra />
    </div>
  );
};

export default ChakraContainer;
