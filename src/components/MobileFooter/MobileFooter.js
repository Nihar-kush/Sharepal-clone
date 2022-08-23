import React from "react";
import MobileFooterItem from "./MobileFooterItem";
import { Apps, CreditCardOutlined, Search,People,Person} from "@mui/icons-material";
import styles from "../../styles/mobileFooter.module.css";
export default function MobileFooter() {
  return (
    <div className={styles.mobileFooter}>
      <MobileFooterItem Icon={Apps} title="Categories" />
      <MobileFooterItem Icon={CreditCardOutlined} title="Offers" />
      <MobileFooterItem Icon={Search} title="Search" />
      <MobileFooterItem Icon={People} title="Refer & Earn" />
      <MobileFooterItem Icon={Person} title="Sign up" />
    </div>
  );
}
