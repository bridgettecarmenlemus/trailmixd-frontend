import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";

export default function ReviewTrailModal({ trail, show, setShow }) {
  const { _id } = trail;
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  console.log(trail);
  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);
  const addReview = () => {
    console.log("we made it");
    fetch(`http://localhost:5001/trailmixd-api/us-central1/api/hikingtrails/${_id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({Email: email, Comment: review}),
    })
      .then((results) => results.json())
      .then((data) => {
        console.log((data))
      })
      .catch((error) => console.error(error));
      console.log(email, review)
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>{trail.Hiking_Trail}</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Review</Form.Label>
              <Form.Control
                onChange={(e) => setReview(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              addReview();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
