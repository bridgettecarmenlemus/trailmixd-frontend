import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer.jsx";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./ListOfTrails.css";

export default function ListOfTrails() {
  const [hikingTrails, setHikingTrails] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);
  useEffect(() => {
    fetch("https://trailmixd-api.web.app/hikingtrails")
      .then((results) => results.json())
      .then((data) => setHikingTrails(data))
      .catch((e) => console.error(e));
  }, []);

  // useEffect(() => {
  //   fetch(`https://trailmixd-api.web.app/hikingtrails/:${_id}`)
  //     .then((results) => results.json())
  //     .then((data) => setHikingTrails(data))
  //     .catch((e) => console.error(e));
  // }, [setHikingTrails]);

  return (
    <>
      {/* {!hikingTrails ? <h2>Loading..</h2>>:  */}
      <Container>
        <Row>
          {hikingTrails?.map((trail) => {
            return (
              <Col xs={5} md={4}>
                <div class="card-columns">
                  <Card key={trail._id} style={{ width: "18rem" }}>
                    <Card.Img variant="left" src={trail.Image} />
                    <Card.Body>
                      <Card.Title>{trail.Hiking_Trail}</Card.Title>
                      <Card.Text>{trail.Description}</Card.Text>
                      {console.log(trail)}
                      <Button
                        className="reviewButton"
                        onClick={() => setShow(true)}
                      >
                        Review this Trail ⭐️
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <ModalTitle>{trail.Hiking_Trail}</ModalTitle>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="name@example.com"
                                  autoFocus
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
