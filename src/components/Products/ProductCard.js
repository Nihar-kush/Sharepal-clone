import React from "react";
import styles from "../../styles/productCard.module.css";

export default function ProductCard({ image, title, numberOfProducts }) {
  return (
    <div className={styles.productCard}>
      <img src={image} alt="product" className={styles.image}/>
      <div className={styles.title}>{title}</div>
      <div className={styles.number}>{numberOfProducts}</div>
    </div>
  );
}
