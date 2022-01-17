import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";

import React from "react";
import { Typography } from "@material-ui/core";

import products from "../products.json";

const Product = ({ setProductQuantity, selectedProductQuantity }) => {
  return (
    <React.Fragment>
      <Typography variant="h5" className="capitalize selector-title">
        {products.categories[1].name}
      </Typography>

      <select
        className="padding select"
        value={selectedProductQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      >
        {products.amount.map((amt, index) => (
          <option key={index}>{amt.id}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Product;
