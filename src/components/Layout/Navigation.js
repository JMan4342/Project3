import React from "react";
import { Link } from "react-router-dom";
import styles from './Layout.module.css'


export default function Navigation({ title }) {
  // const {title} = props; ->   ^^^^^^^
  console.log(title);
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__ul}>
          <li className={styles.navbar__li} style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
            <Link to="/">{title}</Link>
          </li>
          <li className={styles.navbar__spacer}></li>
          <li className={styles.navbar__li}><Link to="/about">Home</Link></li>
          <li className={styles.navbar__li}><Link to="/portfolio">Camping</Link></li>
          <li className={styles.navbar__li}><Link to="/contact">Hiking</Link></li>
          <li className={styles.navbar__li}><Link to="/resume">Supplies</Link></li>
        </ul>
      </nav>
    </div>
  );
}
