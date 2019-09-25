import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";
import Reservations from "./reservations";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Reservations />
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


ReactDOM.render(<App />, document.querySelector("#root"));
