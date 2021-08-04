import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
    const img1 = { src: "./assets/code-quiz1.png", alt: "Code Quiz"};
    const img2 = { src: "./assets/Employee-Management-System.png", alt: "Code Quiz"};
    const img3 = { src: "./assets/hwSnipOOP.png", alt: "Code Quiz"};
    const img4 = { src: "./assets/passWordGen.png", alt: "Code Quiz"};
    const img5 = { src: "./assets/portReadme1.png", alt: "Code Quiz"};
    const img6 = { src: "./assets/pSky1.png", alt: "Code Quiz"};
  return (
    <div>
      {/* <Hero title="Portfolio" subtitle="Here" /> */}
      <h1>Portfolio</h1>
      <div className={styles.card_container}>
        <div className={styles.cards}>
          <Card title="Phoenix Sky" image={img6} link="https://github.com/stongems/PhoenixSky"/>
        </div>
        <div className={styles.cards}>
          <Card title="Employee Management System" image={img2} link="https://github.com/stongems/employee-management-system"/>
        </div>
        <div className={styles.cards}>
          <Card title="Password Generator" image={img4} link="https://github.com/stongems/password-generator" />
        </div>
      </div>
      <div className={styles.card_container}>
        <div className={styles.cards}  >
          <Card title="Coding Quiz" image={img1} link="https://github.com/stongems/code_quiz"/>
        </div>
        <div className={styles.cards} >
          <Card title="Object Oriented Programing" image={img3} link="https://github.com/stongems/OOP-Profile-Generator"/>
        </div>
        <div className={styles.cards}>
          <Card title="Portfolio 2.0" image={img5} link="https://github.com/stongems/Portfolio-2.0"/>
        </div>
      </div>
    </div>
  );
}
