import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";

import React from "react";
import { Typography } from "@material-ui/core";

import products from "../products.json";

const Quantity = ({ setProduct, selectedProduct, selectedProductIndex }) => {
  return (
    <React.Fragment>
      {products.products[selectedProductIndex].product_type === "bike" && (
        <React.Fragment>
          <Typography variant="h5" className="capitalize selector-title">
            {products.products[selectedProductIndex].product_type}
          </Typography>

          <select
            value={selectedProduct}
            className="padding select"
            onChange={(e) => setProduct(e.target.value)}
          >
            {products.products.map(
              (product, index) =>
                product.name.includes("Bike") && (
                  <option key={index}>{product.name}</option>
                )
            )}
          </select>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Quantity;
