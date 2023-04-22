import React from "react";
import GuruJi from "../head/header/GuruJi";
import fb from "../../assets/footer/fb_logo.png";
import insta from "../../assets/footer/insta_logo.png";
import twitter from "../../assets/footer/twitter.png";
import youtube from "../../assets/footer/youtube_logo.png";
import paytm from "../../assets/footer/paytm.png";
import razorpay from "../../assets/footer/razorpay.png";
import stripe from "../../assets/footer/stripe.png";
import "./footer.css";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <div className="guru_in_foot">
            <GuruJi />
          </div>

          <p className="footer_guru_text">
            About Guruji s2 to 3 lines what guruji do and how it works About
            Guruji s2 to 3 lines what guruji do and how it works
          </p>

          <ul className="social_links">
            <li>
              <img src={fb} alt="Facebook" />
            </li>
            <li>
              <img src={insta} alt="Instagram" />
            </li>
            <li>
              <img src={twitter} alt="Twitter" />
            </li>
            <li>
              <img src={youtube} alt="Youtube" />
            </li>
          </ul>

          <h3 className="trusted_seals_text">Trusted & Seals</h3>
          <div className="trusted_seals">
            <img src={paytm} alt="" />
            <img src={razorpay} alt="" />
            <img src={stripe} alt="" />
          </div>
        </div>

        <div>
          <p className="footer_heading">Company</p>
          <address className="contacts">
            <p className="address">Home</p>
            <p className="address">Privacy Policy</p>
            <p className="address">T &C</p>
            <p className="address">Varied Payment</p>
          </address>

          <div className="mt_2">
            <p className="footer_heading">Collaborate</p>
            <address className="contacts">
              <p className="address">Clever Tap</p>
              <p className="address">Exotel</p>
              <p className="address">Facebook</p>
              <p className="address">Quora</p>
              <p className="address">Google</p>
              <p className="address">Youtube</p>
            </address>
          </div>
        </div>

        <div>
          <p className="footer-heading">Support</p>
          <address className="contacts">
            <p className="address">Home</p>
            <p className="address">Privacy Policy</p>
            <p className="address">T &C</p>
            <p className="address">Varied Payment</p>
          </address>

          <div className="mt_2">
            <p className="footer_heading">Collaborate</p>
            <address className="contacts">
              <p className="address">Tarot Reader</p>
              <p className="address">Vedic Astrology </p>
              <p className="address">Palmistry</p>
              <p className="address">Gemology</p>
              <p className="address">Vastu</p>
              <p className="address">Numerology</p>
            </address>
          </div>
        </div>

        <div className="footer_form">
          <FooterForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
