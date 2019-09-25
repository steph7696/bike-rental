import "react-credit-cards/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Cards from "react-credit-cards";
import ReactModal from "react-modal";
import { Modal, Button } from "react-bootstrap";

export class Reservations extends Component {
  constructor() {
    super();
    this.state = {
      /* products selected */
      itemSelected: null,
      accessorySelected: null,
      addOnsSelected: null,

      /* quantity values */
      firstQuantity: null,
      secondQuantity: null,
      thirdQuantity: null,

      /* final numbers */
      finalQuantity: null,
      finalPrice: null,

      /* show/hide sections */
      showSummary: false,
      showCheckout: false,
      showShipping: true,
      showModal: false,

      /* credit card values */
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",

      /* quantity drop-down values */
      amount: [
        {
          id: "0",
          value: "0"
        },
        {
          id: "1",
          value: "1"
        },
        {
          id: "2",
          value: "2"
        },
        {
          id: "3",
          value: "3"
        },
        {
          id: "4",
          value: "4"
        },
        {
          id: "5",
          value: "5"
        },
        {
          id: "6",
          value: "6"
        }
      ],

      /* product drop-down values */
      products: [
        {
          id: 1,
          name: "Adult Male Bike",
          price: 20.5,
          image: "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
          product_type: "bike"
        },
        {
          id: 2,
          name: "Adult Female Bike",
          price: 20.5,
          image:
            "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
          product_type: "bike"
        },
        {
          id: 3,
          name: "Kids Unisex Bike",
          price: 12.75,
          image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
          product_type: "bike"
        },
        {
          id: 4,
          name: "Adult Unisex Helmet",
          price: 4.0,
          image:
            "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
          product_type: "accessory"
        },
        {
          id: 5,
          name: "Kids Unisex Helmet",
          price: 3.5,
          image:
            "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
          product_type: "accessory"
        },
        {
          id: 6,
          name: "Insurance",
          price: 9.99,
          image: "http://via.placeholder.com/250x250?text=Insurance",
          product_type: "addon"
        }
      ]
    };

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.calculatePrice = this.calculatePrice.bind(this);
    this.showCheckout = this.showCheckout.bind(this);
    this.showSummary = this.showShipping.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  handleProductChange = async () => {
    var event = document.getElementById("product");
    var event2 = document.getElementById("accessorySelected");
    var event3 = document.getElementById("addOnsSelected");

    const value = event.value;
    const value2 = event2.value;
    const value3 = event3.value;

    await this.setState({
      itemSelected: value,
      accessorySelected: value2,
      addOnsSelected: value3
    });
  };

  handleQuantityChange = async () => {
    var event = document.getElementById("firstQuantity");
    var event2 = document.getElementById("secondQuantity");
    var event3 = document.getElementById("thirdQuantity");

    const value = event.value;
    const value2 = event2.value;
    const value3 = event3.value;

    await this.setState({
      firstQuantity: value,
      secondQuantity: value2,
      thirdQuantity: value3
    });
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  calculatePrice = async () => {
    /* prices */
    const productPrice = this.state.products[
      this.state.itemSelected ? this.state.itemSelected - 1 : 0
    ].price;

    const accessoryPrice = this.state.products[
      this.state.accessorySelected ? this.state.accessorySelected - 1 : 0
    ].price;

    const addOnsPrice = this.state.products[
      this.state.addOnsSelected ? this.state.addOnsSelected - 1 : 0
    ].price;

    /* quantities */
    const productQuantity = this.state.firstQuantity;
    const accessoriesQuantity = this.state.secondQuantity;
    const addOnsQuantity = this.state.thirdQuantity;

    /* total prices */
    const productsTotal = productPrice * productQuantity;
    const accessoriesTotal = accessoryPrice * accessoriesQuantity;
    const addOnsTotal = addOnsPrice * addOnsQuantity;

    const totalPrice = productsTotal + accessoriesTotal + addOnsTotal;

    await this.setState({
      finalPrice: totalPrice,
      finalQuantity:
        parseInt(productQuantity) +
        parseInt(accessoriesQuantity) +
        parseInt(addOnsQuantity),
      showSummary: true
    });
  };

  showCheckout = async () => {
    await this.setState({
      showCheckout: !this.state.showCheckout
    });
  };

  showShipping = async () => {
    await this.setState({
      showShipping: !this.state.showShipping
    });
  };

  onOpenModal = () => {
    this.setState({ showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="container">
        <div
          className="row"
          style={{
            textAlign: "center",
            padding: "15px 15px 15px 15px",
            backgroundColor: "rgb(230, 230, 255)"
          }}
        >
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1> Welcome to Bike Rentals! </h1>
            <h3>
              {" "}
              Please choose the type and quantity of bikes you would like to
              rent.
            </h3>
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="row">
              <div> Product: </div>
              <select
                placeholder="Product"
                id="product"
                onChange={this.handleProductChange}
              >
                <option value={this.state.products[0].id}>
                  {this.state.products[0].name}
                </option>

                <option value={this.state.products[1].id}>
                  {this.state.products[1].name}
                </option>

                <option value={this.state.products[2].id}>
                  {this.state.products[2].name}
                </option>
                {/* {this.state.products.map(obj => {
                    return <option value={obj.id}>{obj.name}</option>;
                  })} */}
              </select>
            </div>

            <div className="row">
              <div> Quantity: </div>
              <select
                placeholder="Amount"
                onChange={this.handleQuantityChange}
                id="firstQuantity"
              >
                {this.state.amount.map(obj => {
                  return <option value={obj.id}>{obj.value}</option>;
                })}
              </select>
            </div>

            {/* <div className="row">
              <div style={{ marginTop: "20px" }}>
                Type:{" "}
                {
                  this.state.products[
                    this.state.itemSelected ? this.state.itemSelected - 1 : 0
                  ].product_type
                }
              </div>
            </div> */}

            <div className="row">
              <div style={{ marginTop: "20px" }} id="firstPrice">
                Price: ${" "}
                {
                  this.state.products[
                    this.state.itemSelected ? this.state.itemSelected - 1 : 0
                  ].price
                }
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <img alt="product"
              src={
                this.state.products[
                  this.state.itemSelected ? this.state.itemSelected - 1 : 0
                ].image
              }
            ></img>
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-6 col-md-6 col-sm-6">
            <div className="row">
              <div
                style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
              >
                <div> Accessories: </div>
                <select
                  placeholder="Product"
                  id="accessorySelected"
                  onChange={this.handleProductChange}
                >
                  <option value={this.state.products[3].id}>
                    {this.state.products[3].name}
                  </option>

                  <option value={this.state.products[4].id}>
                    {this.state.products[4].name}
                  </option>
                </select>
              </div>
            </div>

            <div
              className="row"
              style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
            >
              <div> Quantity: </div>
              <select
                placeholder="Amount"
                onChange={this.handleQuantityChange}
                style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
                id="secondQuantity"
              >
                {this.state.amount.map(obj => {
                  return <option value={obj.id}>{obj.value}</option>;
                })}
              </select>
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
              <div
                id="secondPrice"
                style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
              >
                <div>
                  Price: $
                  {
                    this.state.products[
                      this.state.accessorySelected
                        ? this.state.accessorySelected - 1
                        : 3
                    ].price
                  }
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6 col-md-6 col-sm-6"
            style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
          >
            <img alt="accessory"
              src={
                this.state.products[
                  this.state.accessorySelected
                    ? this.state.accessorySelected - 1
                    : 3
                ].image
              }
            ></img>
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-6 col-md-6 col-sm-6">
            <div
              className="row"
              style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
            >
              <div> Addons: </div>
              <select
                placeholder="Product"
                id="addOnsSelected"
                onChange={this.handleProductChange}
              >
                <option value={this.state.products[5].id}>
                  {this.state.products[5].name}
                </option>
              </select>
            </div>

            <div
              className="row"
              style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
            >
              <div> Quantity: </div>
              <select
                placeholder="Amount"
                id="thirdQuantity"
                onChange={this.handleQuantityChange}
              >
                {this.state.amount.map(obj => {
                  return <option value={obj.id}>{obj.value}</option>;
                })}
              </select>
            </div>

            <div
              className="row"
              id="thirdPrice"
              style={
                this.state.firstQuantity > 0
                  ? { marginTop: "20px" }
                  : { display: "none" }
              }
            >
              <div>
                Price: $
                {
                  this.state.products[
                    this.state.addOnsSelected
                      ? this.state.addOnsSelected - 1
                      : 5
                  ].price
                }
              </div>
            </div>
          </div>

          <div
            className="col-6 col-md-6 col-sm-6"
            style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
          >
            <img alt="addons"
              src={
                this.state.products[
                  this.state.addOnsSelected ? this.state.addOnsSelected - 1 : 5
                ].image
              }
            ></img>
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px", textAlign: "center" }}>
          <div className="col-12 col-md-12 col-sm-12">
            <Button
              style={this.state.firstQuantity > 0 ? {} : { display: "none" }}
              onClick={this.calculatePrice}
            >
              Checkout
            </Button>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "40px",
            textAlign: "center"
          }}
        >
          <div
            className="col-12 col-md-12 col-sm-12"
            style={this.state.showSummary > 0 ? {} : { display: "none" }}
          >
            <div
              style={{
                padding: "15px 15px 15px 15px"
              }}
            >
              <h2
                style={{
                  backgroundColor: "rgb(204, 255, 204)",
                  textAlign: "center"
                }}
              >
                Summary
              </h2>

              <h3>
                Please review your selected products before proceeding to
                checkout.
              </h3>
            </div>

            <h3>
              Item:{" "}
              {
                this.state.products[
                  this.state.itemSelected ? this.state.itemSelected - 1 : 0
                ].name
              }
            </h3>

            <h3>
              {" "}
              Quantity:{" "}
              {this.state.finalQuantity ? this.state.finalQuantity : null}
            </h3>

            <h3
              style={{
                marginBottom: "10px"
              }}
            >
              {" "}
              <mark>
                Total Price: $
                {this.state.finalPrice ? this.state.finalPrice : 0}{" "}
              </mark>
            </h3>
          </div>
          {/* </div> */}
          <div
            className="row"
            style={this.state.showSummary ? {} : { display: "none" }}
          >
            <div
              className="col-12 col-md-12 col-sm-12"
              style={{
                marginTop: "40px",
                textAlign: "center"
              }}
            >
              <Button onClick={this.showCheckout}>Proceed to Checkout</Button>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={
            this.state.showCheckout && this.state.showSummary
              ? { marginTop: "40px" }
              : { display: "none" }
          }
        >
          <h2
            style={{
              backgroundColor: "rgb(204, 255, 204)",
              textAlign: "center"
            }}
          >
            Checkout
          </h2>
        </div>

        <div
          className="row"
          style={
            this.state.showCheckout && this.state.showSummary
              ? { marginTop: "40px" }
              : { display: "none" }
          }
          // style={{borderBottom: "2px solid rgb(204, 255, 204)"}}
        >
          <div className="col-4 col-md-4 col-sm-4">
            <h3>Billing Address</h3>

            <form>
              <label>
                Full Name: <input type="text" name="name" />
              </label>
            </form>

            <form>
              <label>
                Address: <input type="text" name="name" />
              </label>
            </form>

            <form>
              <label>
                City: <input type="text" name="name" />
              </label>
            </form>

            <form>
              <label>
                State: <input type="text" name="name" />
              </label>
            </form>

            <form>
              <label>
                Zip: <input type="text" name="name" />
              </label>
            </form>

            <form>
              <label>
                Country: <input type="text" name="name" />
              </label>
            </form>
          </div>

          <div className="col-4 col-md-4 col-sm-4">
            <h3>Shipping Address</h3>

            <div style={this.state.showShipping ? {} : { display: "none" }}>
            <form>
              <label>
                Full Name: <input type="text" name="name" />
              </label>
            </form>
              
              <form>
                <label>
                  Address: <input type="text" name="name" />
                </label>
              </form>

              <form>
                <label>
                  City: <input type="text" name="name" />
                </label>
              </form>

              <form>
                <label>
                  State: <input type="text" name="name" />
                </label>
              </form>

              <form>
                <label>
                  Zip: <input type="text" name="name" />
                </label>
              </form>

              <form>
                <label>
                  Country: <input type="text" name="name" />
                </label>
              </form>
            </div>

            <div class="inline field">
              <div class="ui checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  onChange={this.showShipping}
                />
                <label for="terms">Same as Billing</label>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-4 col-sm-4">
            <h3>Payment Information</h3>

            <div id="PaymentForm">
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focus={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
              <form style={{ textAlign: "center", marginTop: "20px" }}>
                <input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  maxLength={16}
                />

                <input
                  type="string"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />

                <input
                  type="tel"
                  name="expiry"
                  placeholder="Expiration Date"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  maxLength={4}
                />

                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  maxLength={3}
                />
              </form>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={
            this.state.showCheckout && this.state.showSummary
              ? { marginTop: "40px", textAlign: "center" }
              : { display: "none" }
          }
        >
          <div>
            <Button bsStyle="info" onClick={this.onOpenModal}>
              Book 
            </Button>
            <ReactModal
              className="modal-dialog modal-content"
              isOpen={this.state.showModal}
            >
              <Modal.Header>
                <Modal.Title>Thank You for Renting a Bike!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  You will receive an email confirmation detailing your bike rental.{" "}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle="danger" onClick={this.onCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </ReactModal>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservations;
