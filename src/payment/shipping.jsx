import "react-credit-cards/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export default class Shipping extends React.Component {
  state = {
    name: "",
    city: "",
    state: "",
    zip: "",
    focus: "",
    // isNameValidated: false,
    // isCityValidated: false,
    // isStateValidated: false,
    // isZipValidated: false,
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  renderBilling = (type, name, className, placeholder, maxLength) => (
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
      <div className="billing-container">
        <h3 className="text-center">Billing Information</h3>
        {this.renderBilling("string", "name", "padding card-form", "Name")}
        {this.renderBilling(
          "string",
          "address",
          "padding card-form",
          "Address"
        )}
        {this.renderBilling("string", "city", "padding", "City")}
        {this.renderBilling("string", "state", "padding", "State", 2)}
        {this.renderBilling("tel", "zip", "padding", "Zip", 5)}
      </div>
    );
  }
}
