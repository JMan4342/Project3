import React from "react";
import styles from './Hero.module.css'

export default function Hero({ title, subtitle, image }) {
  const renderImage = () => {
    if (!image) return null;
    return (<img className={styles.img} src={image.src} alt={image.alt} />)
  }
  return (
    <>
      <h1>{title}</h1>
    <br></br>
    <div style={{ backgroundColor: "white", height: 500, padding:"1rem", display:"flex", flexDirection:"column", justifyContent:"space-around", fontFamily: "Gowun Dodum" }}>
      <p>{subtitle}</p>
      {renderImage()}
    </div>
    </>
  );
}
