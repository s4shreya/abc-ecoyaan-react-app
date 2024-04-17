import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
import SubscribeForm from "./SubscribeForm";
import { FaRegCopyright } from "react-icons/fa";
import { FaTrademark } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.links}>
        <p>
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/sell-on-ecoyaan">Sell on Ecoyaan</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </p>
        <p>
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </p>
        <p>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </p>
        <SubscribeForm />
      </section>
      <hr />
      <section className={styles.details}>
        <div>
          <h3>Registered Address:</h3>
          <p>
            1-N-12T-781/1 Sri Krishna Vilasa, Urvastores, Ashoknagar(MR),
            Mangalore, Dakshina Kannada- 575006, Karnataka, India
          </p>
        </div>
        <div>
          <h3>Legal Business Name:</h3>
          <p>
            Kindkarma E-Retail Private Limited CIN: U47912KA2023PTC182592
            Telephone: +91 9980490777
          </p>
        </div>
      </section>
      <p className={styles.copyright}>
        <FaRegCopyright /> 2023 - 2024, Ecoyaan <FaTrademark />
      </p>
    </footer>
  );
};
export default Footer;
