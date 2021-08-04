import React from "react";
import styles from "./Layout.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>Copyright 2021</p>
          <a className={styles.icon} href="https://github.com/stongems" target="_blank">
        <i class="fab fa-facebook-square fa-2x"></i></a>
        <a className={styles.icon} href="https://www.linkedin.com/in/matthew-st-onge-6a8038209/" target="_blank">
        <i class="fab fa-linkedin fa-2x"></i></a>
        <a className={styles.icon} href="https://www.facebook.com/stonge.ms" target="_blank">
        <i class="fab fa-github-square fa-2x"></i></a>
    </div>
  );
}
