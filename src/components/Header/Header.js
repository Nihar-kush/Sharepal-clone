import React from "react";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <div className="header">
      <HeaderItem
        icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660844759942x589981560796495700%2Flike.png?w=96&h=96&auto=compress&dpr=1.25&fit=max"
        title="Excellent Quality Products"
        border="true"
      />
      <HeaderItem
        icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660843369408x866190984421172400%2Fgift-box.png?w=96&h=96&auto=compress&dpr=1.25&fit=max"
        title="Delivery Date & Return Date is FREE!!"
        border="true"
      />
      <HeaderItem
        icon="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660843381244x490561632153383440%2Fcash-on-delivery.png?w=96&h=96&auto=compress&dpr=1.25&fit=max"
        title="Pay on Delivery"
        border="false"
      />
    </div>
  );
}
