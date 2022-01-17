import "react-credit-cards/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Price from "../price";
import Shipping from "../payment/shipping";
import Payment from "../payment/payment";
import products from "../products.json";

function Checkout(props) {
  const {
    selectedProduct,
    selectedAccessory,
    selectedInsurance,
    selectedProductIndex,
    selectedAccessoryIndex,
    selectedInsuranceIndex,
    selectedProductQuantity,
    selectedAccessoryQuantity,
  } = props.location.checkoutProps;

  const [totalPrice, setTotalPrice] = useState(0);
  const [productTimesQuantity] = useState(0);
  const [accessoryTimesQuantity, setAccesoryTotalPrice] = useState(0);
  const [insurancePrice, setInsurancePrice] = useState(0);

  useEffect(() => {
    setAccesoryTotalPrice(
      products.products[selectedAccessoryIndex].price *
        Number(selectedAccessoryQuantity)
    );
    setInsurancePrice(products.products[selectedInsuranceIndex].price);
    setTotalPrice(
      (productTimesQuantity + accessoryTimesQuantity + insurancePrice).toFixed(
        2
      )
    );
  }, [
    selectedProductIndex,
    selectedProductQuantity,
    selectedAccessoryIndex,
    selectedAccessoryQuantity,
    selectedInsuranceIndex,
    productTimesQuantity,
    accessoryTimesQuantity,
    insurancePrice,
  ]);

  return (
    <React.Fragment>
      <h2 className="title flex text-center padding">Checkout</h2>

      <div className="checkout-price-container">
        <div className="column">
          <h3 className="text-center">Total Price</h3>

          <div className="total-price-container">
            <div>
              {selectedProduct} x {selectedProductQuantity}
            </div>
            <div>{`$${productTimesQuantity}`}</div>
          </div>

          <div className="total-price-container">
            <div>{selectedInsurance}</div>
            <div>{`$${insurancePrice}`}</div>
          </div>

          <div className="total-price-container">
            {selectedAccessoryQuantity > 0 && (
              <React.Fragment>
                <div>
                  {selectedAccessory} x {selectedAccessoryQuantity}
                </div>
                <div>{`$${accessoryTimesQuantity}`}</div>
              </React.Fragment>
            )}
          </div>

          <Price totalPrice={totalPrice} />
        </div>
      </div>

      <div className="row">
        <div className="column">
          <Shipping />
        </div>
      </div>

      <div className="row">
        <div className="column">
          <Payment />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Checkout;
