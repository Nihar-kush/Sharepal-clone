import React from "react";
import styles from "../../styles/products.module.css";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.products}>
        <ProductCard
          image="https://ik.imagekit.io/faskf16pg/sub_category/7_2NkI3F7jEi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660136555278"
          title="Trekking Shoes"
          numberOfProducts="2+ Products"
        />
        <ProductCard
          image="https://ik.imagekit.io/faskf16pg/sub_category/8_n2rLgC9x3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660136555518"
          title="Trekking Jackets"
          numberOfProducts="10+ Products"
        />
        <ProductCard
          image="https://ik.imagekit.io/faskf16pg/sub_category/9_7S6DI_1AY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660136555703"
          title="Backpacks"
          numberOfProducts="4+ Products"
        />
        <ProductCard
          image="https://ik.imagekit.io/faskf16pg/sub_category/10_HmOdVtJ9S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660136556183"
          title="Trek Accessories"
          numberOfProducts="11+ Products"
        />
      </div>
    </div>
  );
}
