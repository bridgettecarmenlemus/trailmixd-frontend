import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../pages/ListOfTrails.css";
import ReviewTrailModal from "./ReviewTrailModal";
import Button from "react-bootstrap/Button";
import "../components/TrailNameCards.css";

export default function TrailNameCards({ trail }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div id="box">
        <Card className="cards" key={trail._id} style={{ width: "100%" }}>
          <Card.Img variant="left" src={trail.Image} />
          <Card.Body>
            <Card.Title className="title">{trail.Hiking_Trail}</Card.Title>
            <Card.Subtitle className="subtitle">{trail.Park}</Card.Subtitle>
            <Card.Text className="level">{trail.Level}</Card.Text>
            <Card.Text>{trail.Description}</Card.Text>
            {/* {console.log(trail)} */}
          </Card.Body>
          <Button className="reviewButton" onClick={() => setShow(true)}>
            Review this Trail ⭐️
          </Button>
        </Card>
        <ReviewTrailModal trail={trail} show={show} setShow={setShow} />
      </div>
    </>
  );
}
