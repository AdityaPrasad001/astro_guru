import React from "react";
import styles from "./header.module.css";
import guru from "../../../assets/guru.png";

const GuruJi = () => {
  return (
    <div className={styles["guru"]}>
      <a href="#">
        <img className={styles["logo"]} alt="Guru" src={guru} />
      </a>
      <h4 className={styles["guruji"]}>Guruji</h4>
    </div>
  );
};

export default GuruJi;
