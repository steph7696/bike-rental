import "react-credit-cards/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import products from "./products.json";

function Price(props) {
  const { productPrice, totalPrice } = props;

  return (
    <div className="price-container">
      <h3 className="capitalize price-heading">
        {products.categories[3].name}
      </h3>

      <div className="capitalize price-body">{`$${
        productPrice || totalPrice
      }`}</div>
    </div>
  );
}

export default Price;
