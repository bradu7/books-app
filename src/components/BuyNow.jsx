import React from "react";
import "./style.css";
import Navlink from "react-router-dom";

function BuyNow({ amazon_product_url }) {
  return (
    <div>
      <a href={amazon_product_url}>
        <p>Buy Now</p>Buy Now
      </a>
    </div>
  );
}

export default BuyNow;
