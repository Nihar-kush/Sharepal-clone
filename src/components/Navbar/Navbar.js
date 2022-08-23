import React from "react";
import styles from "../../styles/navbar.module.css";
import NavItem from "./NavItem";
import {
  HelpOutlineOutlined,
  KeyboardArrowDown,
  Person,
  ShoppingCart,
} from "@mui/icons-material";

export default function Navbar({ scroll }) {
  return (
    <div className={`${styles.navbar} ${scroll && styles.floatingNavbar}`}>
      <div className={styles.navContainer}>
        <img
          className={styles.logo}
          src="https://dd7tel2830j4w.cloudfront.net/f1602334871226x948889548138196900/SharePal%20Logo2%20%281%29.svg"
          alt="Logo"
        />
        <div className={styles.navLocation}>
          <p>Bangalore</p>
          <KeyboardArrowDown className={styles.navIcon} fontSize="large" />
        </div>
        <div className={styles.navItemContainer}>
          <NavItem
            Icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648987966794x479811749978756400%2Ftrekking%2520%25281%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1.25"
            title="Trekking"
          />
          <NavItem
            Icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648989517307x231484877400689020%2Fmotorcycle%2520%25282%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1.25"
            title="Riding"
          />
          <NavItem
            Icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648986722707x666964559860979700%2Faction-camera%2520%25282%2529.png?w=48&h=48&auto=compress&fit=crop&dpr=1.25"
            title="GoPro"
          />
          <NavItem
            Icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648988411487x619738649722601200%2Fdslr-camera%2520%25282%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1.25"
            title="DSLR"
          />
          <NavItem
            Icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648989408507x660597966311601900%2Fconsole%2520%25281%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1.25"
            title="PS4/Xbox"
          />
          <NavItem
            Icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648987880884x852483720686704400%2Fcd-player%2520%25282%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1.25"
            title="Games"
          />
        </div>
        <ShoppingCart
          className={`${styles.navIcon} ${styles.screenItem}`}
          fontSize="large"
          style={{ color: "#0927EB" }}
        />
        <div className={styles.mobileItem}>
          <HelpOutlineOutlined
            className={styles.navIcon}
            fontSize="large"
          />
          <Person
            className={styles.navIcon}
            fontSize="large"
          />
        </div>

        <button className={styles.screenItem}>Login/Signup</button>
      </div>
    </div>
  );
}
