import React from "react";
import styles from "./Layout.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>UofA Coding bootcamp</p>
          <a className={styles.icon} href="https://github.com/stongems" target="_blank">
        <i className="fab fa-facebook-square fa-2x"></i></a>
    </div>
  );
}
