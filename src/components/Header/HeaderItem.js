import React from "react";
import styles from "../../styles/headerItem.module.css";

export default function HeaderItem({ icon, title }) {
  return (
    <div className={styles.headerItem}>
      <img src={icon} alt="" className={styles.icon} />
      <div className={styles.title}>
        <h5>{title}</h5>
      </div>
    </div>
  );
}
