import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../pages/ListOfTrails.css";
import ReviewTrailModal from "./ReviewTrailModal";
import Button from "react-bootstrap/Button";


export default function TrailNameCards({ trail }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card key={trail._id} style={{ width: "18rem" }}>
        <Card.Img variant="left" src={trail.Image} />
        <Card.Body>
          <Card.Title>{trail.Hiking_Trail}</Card.Title>
          <Card.Text>{trail.Description}</Card.Text>
          {console.log(trail)}
        </Card.Body>
      <Button className="reviewButton" onClick={() => setShow(true)}>
        Review this Trail ⭐️
      </Button>
      </Card>
      <ReviewTrailModal trail={trail} show={show} setShow={setShow} />
    </>
  );
}
