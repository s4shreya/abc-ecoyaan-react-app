import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.sitename}>
        <Link to="/">
          {"Ecoyaan".split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </Link>
      </h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </nav>
    </header>
  );
};
export default Header;
