import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ReviewAccordian from "./ReviewAccordian";

export default function ReviewTrailModal({ trail, show, setShow }) {
  const { _id } = trail;
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

 ;  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);
  const addReview = () => {
    console.log("we made it");
    fetch(
      `http://localhost:5001/trailmixd-api/us-central1/api/hikingtrails/${_id}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email: email, Comment: review }),
      }
    )
      .then((results) => results.json())
      .then((data) => {
        console.log(data[0].Level);
      })
      .catch((error) => console.error(error));

  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <ModalTitle>{trail.Hiking_Trail}</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First and Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Bridgette Lemus"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              placeholder="The views from this trail were amazing!"
              autoFocus
            >
              <Form.Label>Review</Form.Label>
              <Form.Control
                onChange={(e) => setReview(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <FormGroup>
              <ReviewAccordian trail={trail}/>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
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
