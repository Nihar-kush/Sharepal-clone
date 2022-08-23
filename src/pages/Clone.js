import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileFooter from "../components/MobileFooter/MobileFooter";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

export default function Clone() {
  const [scroll, setScroll] = useState(false);
  return (
    <div
      style={{ overflowY: "scroll", height: "100vh" }}
      onScroll={() => setScroll(true)}
    >
      <Navbar scroll={scroll} />
      <Header />
      <h1 className="category">Trekking Gear on rent</h1>
      <img
        src="https://ik.imagekit.io/faskf16pg/Branding/Main/whatapp-sharepal_6GcbqnN5e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657830361133"
        alt="whatsapp"
        className="whatsapp-icon"
      />
      <Products />
      <Footer />
      <MobileFooter />
    </div>
  );
}
