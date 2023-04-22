import React from "react";
import styles from "./header.module.css";
import guru from "../../../assets/guru.png";
import GuruJi from "./GuruJi";
import user from "../../../assets/body/user.png";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <GuruJi />

      <nav className={styles["main-nav"]}>
        <ul className={styles["main-nav-list"]}>
          <li>
            <a className={styles["main-nav-link"]} href="#how">
              Home
            </a>
          </li>
          <li>
            <a className={styles["main-nav-link"]} href="#meals">
              Call with Astrologer
            </a>
          </li>
          <li>
            <a className={styles["main-nav-link"]} href="#testimonials">
              Live(Coming Soon)
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles["profile"]}>
        <img src={user} alt="Profile Pic" />
      </div>

      <button className={styles["btn-mobile-nav"]}>
        <ion-icon
          className={styles["icon-mobile-nav"]}
          name="menu-outline"
        ></ion-icon>
        <ion-icon
          className={styles["icon-mobile-nav"]}
          name="close-outline"
        ></ion-icon>
      </button>
    </header>
  );
};

export default Header;
