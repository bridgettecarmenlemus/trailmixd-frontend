import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import { UserContext } from "../context/UserContext";
import ReviewAccordian from "./ReviewAccordian";
import "../components/ReviewTrailModal.css"

export default function ReviewTrailModal({ trail, show, setShow }) {
  const { _id } = trail;
  const [email, setEmail] = useState("");
  const {review, setReview} = useContext(UserContext)
  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);
  console.log({review})
  const addReview = () => {
    console.log("we made it");
    fetch(
      ` https://trailmixd-api.web.app/hikingtrails/${_id}`,
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
        setReview(data);
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
          <Button className="close" variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button className="savechanges"
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
