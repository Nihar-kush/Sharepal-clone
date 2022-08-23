import React from "react";
import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        Traveling via Delhi, Dehradun or Chandigarh?
      </div>
      <div className={styles.footerItem}>
        Rent while you transit & save even more!
      </div>
      <div className={styles.footerItem}>
        <div>
          <span>Save upto</span>
          <span>20%</span>
        </div>
        <button>Know more</button>
      </div>
    </div>
  );
}
