import React from 'react'
import styles from './Card.module.css'


export default function Card({image, title, link}) {
    const renderImage = () => {
        return image ? <img className={styles.image} src={image.src} alt={image.alt} /> : null;
    }
    return (
        <a href={link} target="_blank" style={{ textDecoration: "none"}}>
        <div className={styles.card}>
            {renderImage()}
            <h1 className={styles.title}>{title}</h1>
        </div>
        </a>
    )
}
