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
          <li className={styles.navbar__li}><Link to="/about">About</Link></li>
          <li className={styles.navbar__li}><Link to="/portfolio">Portfolio</Link></li>
          <li className={styles.navbar__li}><Link to="/contact">Contact</Link></li>
          <li className={styles.navbar__li}><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </div>
  );
}
