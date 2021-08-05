import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
    const img1 = { src: "./assets/fireLg.jpg", alt: "Fire Log"};
    const img2 = { src: "./assets/hikerLg.jpg", alt: "Hiker"};
    const img3 = { src: "./assets/mapLg.jpg", alt: "Map"};
    const img4 = { src: "./assets/vwLg.jpg", alt: "VW Bus"};
    const img5 = { src: "./assets/nightSkyLg.jpg", alt: "Night Sky"};
    const img6 = { src: "./assets/tentLg.jpg", alt: "Tent"};
  return (
    <div>
      {/* <Hero title="Portfolio" subtitle="Here" /> */}
      <h1>Camping</h1>
      <div className={styles.card_container}>
        <div className={styles.cards}>
          <Card title="Camp Fire" image={img1} link="https://unsplash.com/s/photos/camping"/>
        </div>
        <div className={styles.cards}>
          <Card title="Hiking" image={img2} link="https://unsplash.com/s/photos/camping"/>
        </div>
        <div className={styles.cards}>
          <Card title="Map" image={img3} link="https://unsplash.com/s/photos/camping" />
        </div>
      </div>
      <div className={styles.card_container}>
        <div className={styles.cards}  >
          <Card title="VW Bus" image={img4} link="https://unsplash.com/s/photos/camping"/>
        </div>
        <div className={styles.cards} >
          <Card title="Night Sky" image={img5} link="https://unsplash.com/s/photos/camping"/>
        </div>
        <div className={styles.cards}>
          <Card title="Tent Camping" image={img6} link="https://unsplash.com/s/photos/camping"/>
        </div>
      </div>
    </div>
  );
}
