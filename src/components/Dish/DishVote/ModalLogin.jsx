import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import FormLoginModal from "./FormLoginModal";

export default function ModalLogin({ handleClick }) {
  const isUser = useSelector((state) => state.auth.login.currentUser);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleClickButton = () => {
    if (isUser === null) {
      setShow(true);
    } else {
      handleClick();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleClickButton}>
        Vote
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLoginModal hide={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
