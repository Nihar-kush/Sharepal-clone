import React from "react";
import styles from "../../styles/mobileFooter.module.css";

export default function MobileFooterItem({ Icon, title }) {
  return (
    <div className={styles.mobileFooterItem}>
      <Icon />
      <p>{title}</p>
    </div>
  );
}
