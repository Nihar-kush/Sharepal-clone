import React from "react";
import styles from "../../styles/navbar.module.css";

export default function NavItem({ Icon, title }) {
  return (
    <div className={styles.navItem}>
      <img src={Icon} alt="navicon" />
      <p>{title}</p>
    </div>
  );
}
