import "react-credit-cards/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import products from "../products.json";

import { Link } from "react-router-dom";
import Cards from "react-credit-cards";

export default class Payment extends React.Component {
  state = {
    cvc: products.creditCard.cvc,
    expiry: products.creditCard.expiry,
    focus: products.creditCard.focus,
    name: products.creditCard.name,
    number: products.creditCard.number,
  };

  // if each state variable is != null, set flag to true
  // componentDidUpdate() {
  //   if (
  //     this.state.cvc !== null &&
  //     this.state.expiry !== null &&
  //     this.state.name !== null &&
  //     this.state.number !== null
  //   ) {
  //     console.log("CARD ALL SET");
  //   }
  // }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  renderCreditCardField = (type, name, className, placeholder, maxLength) => (
    <React.Fragment>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={this.handleInputChange}
        onFocus={this.handleInputFocus}
        maxLength={maxLength ? maxLength : null}
      />
    </React.Fragment>
  );

  render() {
    return (
      <React.Fragment>
        <h3 className="text-center">Payment</h3>

        <div className="flex payment-container">
          <div className="column text-center">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </div>
          <form className="column">
            {this.renderCreditCardField(
              "tel",
              "number",
              "padding card-form",
              "Card Number",
              16
            )}
            {this.renderCreditCardField(
              "string",
              "name",
              "padding card-form",
              "Name"
            )}
            {this.renderCreditCardField(
              "tel",
              "expiry",
              "padding card-expiration",
              "Expiration Date",
              4
            )}
            {this.renderCreditCardField(
              "tel",
              "cvc",
              "padding card-cvc",
              "CVC",
              3
            )}
          </form>
        </div>

        {/* {showConfirmationButton && ( */}
        <React.Fragment>
          <div className="row">
            <Link
              to={{
                pathname: "/confirmation",
                checkoutProps: {
                  // selectedProduct: selectedProduct,
                },
              }}
            >
              <button className="continue-button contbutton-container padding">
                Review Order
              </button>
            </Link>
          </div>
        </React.Fragment>
        {/* )} */}
      </React.Fragment>
    );
  }
}
