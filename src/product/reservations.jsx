/* eslint-disable eqeqeq */
import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { Typography, Box, Grid } from "@material-ui/core";

import Price from "../price";
import Product from "./product";
import Quantity from "./quantity";
import products from "../products.json";
import RentalDates from "./rental_dates";
import AccessoriesAddons from "./accessories-addons";

function Reservations(props) {
  /* date picker data */
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  /* product data */
  const [selectedProductIndex, setProductIndex] = useState(0);
  const [selectedProductQuantity, setProductQuantity] = useState(0);
  const [selectedProduct, setProduct] = useState(
    // products.products[selectedProductIndex].name
    "Select"
  );

  /* accessory data */
  const [selectedAccessoryIndex, setAccessoryIndex] = useState(0);
  const [selectedAccessoryQuantity, setAccessoryQuantity] = useState(0);
  const [selectedAccessory, setAccessory] = useState(products.products[3].name);

  /* insurance data */
  const [selectedInsuranceIndex, setInsuranceIndex] = useState(0);
  const [selectedInsurance, setInsurance] = useState(products.products[5].name);

  /* visibility data */
  const [showAccessAddonsButton, setAccessAddonButtonVisibility] = useState(
    false
  );
  const [showAccessAddons, setAccessAddonsVisibility] = useState(false);
  const [showCheckoutButton, setCheckoutButton] = useState(false);

  /* price data */
  const [productPrice, setProductPrice] = useState(0);

  useEffect(() => {
    const productTimesQuantity =
      products.products[selectedProductIndex].price *
      Number(selectedProductQuantity);

    setProductPrice(productTimesQuantity);
  }, [setProductPrice, selectedProductIndex, selectedProductQuantity]);

  useEffect(() => {
    /* changes from Number to String after selecting a value */
    if (selectedProductQuantity != 0) {
      setAccessAddonButtonVisibility(true);
    } else if (selectedProductQuantity == 0) {
      setAccessAddonButtonVisibility(false);
    }
  }, [selectedProductQuantity]);

  useEffect(() => {
    if (selectedInsurance.includes("No")) {
      setInsuranceIndex(6);
    } else {
      setInsuranceIndex(5);
    }
  }, [selectedInsurance, setInsuranceIndex]);

  useEffect(() => {
    if (selectedAccessory.includes("Adult")) {
      setAccessoryIndex(3);
    } else if (selectedAccessory.includes("Kids")) {
      setAccessoryIndex(4);
    }
  }, [selectedAccessory, setAccessoryIndex]);

  useEffect(() => {
    if (selectedProduct.includes("Male")) {
      setProductIndex(0);
    } else if (selectedProduct.includes("Female")) {
      setProductIndex(1);
    } else if (selectedProduct.includes("Unisex")) {
      setProductIndex(2);
    }
  }, [selectedProduct, setProductIndex]);

  const handleAccessoriesAddons = () => {
    setAccessAddonsVisibility(true);
    setCheckoutButton(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div id="root">
      <Box>
        <Grid className="bike-banner-container">
          <img
            alt="biking trail"
            className="banner-image"
            src={require("../images/biking-trail.jpg")}
          />

          <Typography
            variant={"h2"}
            align={"center"}
            className="flex bike-selection-title"
          >
            Bike Selection
          </Typography>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          className="section-container"
        >
          {products.products.map((product, index) => (
            <Grid item direction="column" xs={12} sm={6} md={4} lg={4} xl={4}>
              {product.product_type == "bike" && (
                <React.Fragment>
                  <div className="flex" key={index}>
                    <img
                      alt="bike"
                      className="bike-image"
                      src={products.products[index].image}
                    ></img>
                  </div>

                  <Typography variant="body1" className="text-center">
                    {product.name}
                  </Typography>

                  <div className="about-container" key={index}>
                    {product.about.split(",")}
                  </div>
                </React.Fragment>
              )}
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className="text-center selection-container"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="selection"
          >
            <Product
              setProduct={setProduct}
              selectedProduct={selectedProduct}
              selectedProductIndex={selectedProductIndex}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="selection"
          >
            {products.categories.map((category, index) => (
              <React.Fragment key={index}>
                {category.name === "Quantity" && (
                  <Quantity
                    setProductQuantity={setProductQuantity}
                    selectedProductQuantity={selectedProductQuantity}
                  />
                )}
              </React.Fragment>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="selection"
          >
            <RentalDates
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className="text-center"
        >
          {showAccessAddonsButton && (
            <div className="row cont-btn-container flex">
              <button
                onClick={handleAccessoriesAddons}
                className="continue-button padding"
              >
                Continue to Accessories/Addons
              </button>
            </div>
          )}
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className="text-center"
        >
          {showAccessAddons && (
            <AccessoriesAddons
              setInsurance={setInsurance}
              setAccessory={setAccessory}
              showAccessAddons={showAccessAddons}
              selectedAccessory={selectedAccessory}
              selectedInsurance={selectedInsurance}
              setAccessoryQuantity={setAccessoryQuantity}
              selectedAccessoryQuantity={selectedAccessoryQuantity}
            />
          )}
        </Grid>
      </Box>

      {/* <Price productPrice={productPrice} /> */}

      {/* <Grid container>
          {showCheckoutButton && (
            <React.Fragment>
              <div className="row">
                <Link
                  to={{
                    pathname: "/checkout",
                    checkoutProps: {
                      selectedProduct: selectedProduct,
                      selectedAccessory: selectedAccessory,
                      selectedInsurance: selectedInsurance,
                      selectedProductIndex: selectedProductIndex,
                      selectedInsuranceIndex: selectedInsuranceIndex,
                      selectedAccessoryIndex: selectedAccessoryIndex,
                      selectedProductQuantity: selectedProductQuantity,
                      selectedAccessoryQuantity: selectedAccessoryQuantity,
                    },
                  }}
                >
                  <button className="continue-button contbutton-container padding">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </React.Fragment>
          )}
        </Grid> */}
    </div>
  );
}

export default Reservations;
