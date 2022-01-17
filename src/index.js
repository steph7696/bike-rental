import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Checkout from "./payment/checkout";
import Reservations from "./product/reservations";
import Confirmation from "./confirmation/confirmation";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const App = () => (
  <Container className="website-container">
    <AppBar position="sticky" className="navbar">
      <Toolbar className="flex toolbar">
        <div>
          <img
            alt="logo"
            className="bike-logo"
            src={require("./images/bike.png")}
          />
          <Typography variant="h6" className="company-title">
            Rent-A-Bike
          </Typography>
        </div>

        <Typography variant="h6">555-555-5555</Typography>
      </Toolbar>
    </AppBar>

    <main>
      <Switch>
        <Route path="/" component={Reservations} exact />
        <Route path="/checkout" component={Checkout} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </main>
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
