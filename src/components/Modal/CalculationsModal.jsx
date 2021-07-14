import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PreviousCalculations from "../PreviousCalculations/PreviousCalculations";

const CalculationsModal = () => {
  

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button
        onClick={toggle}
        class="btn btn-outline-primary mx-4"
        type="button"
        data-mdb-ripple-color="dark"
      >
        My Calculations
      </button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>My Previous Calculations</ModalHeader>
        <ModalBody>
          <PreviousCalculations/>
        </ModalBody>
        <ModalFooter>
        <button
              class="btn btn-outline-dark"
              type="button"
              data-mdb-ripple-color="dark"
              onClick={toggle}
            >
            Close
            </button>
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CalculationsModal;
