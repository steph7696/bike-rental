import "react-credit-cards/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function Confirmation(props) {
  const [showConfirmationModal, setConfirmationModalVisibility] = useState(
    false
  );

  const openConfirmationModal = () => {
    setConfirmationModalVisibility(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalVisibility(false);
  };

  return (
    <React.Fragment>
      <div className="confirmation-container">
        <h2 className="title flex text-center padding">Review Information</h2>
        <h3 className="text-center">Bikes Renting</h3>
        <h3 className="text-center">Billing and Shipping Information</h3>
        <h3 className="text-center">Payment Details</h3>
        <h3 className="text-center">Total Price</h3>
        <div className="row contbutton-container flex">
          <button
            onClick={openConfirmationModal}
            className="confirmation-button padding"
          >
            Book Reservation
          </button>
        </div>
      </div>

      <ReactModal
        className="modal-dialog modal-content"
        isOpen={showConfirmationModal}
      >
        <Modal.Header>
          <Modal.Title>Happy Biking!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            You will receive an email confirmation detailing your bike rental.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Link
            bsStyle="danger"
            onClick={closeConfirmationModal}
            to={{ pathname: "/" }}
          >
            <button className="continue-button padding">Close</button>
          </Link>
        </Modal.Footer>
      </ReactModal>
    </React.Fragment>
  );
}

export default Confirmation;
