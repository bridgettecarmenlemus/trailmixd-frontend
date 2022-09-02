import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";

export default function ListOfTrails() {
  const [hikingTrails, setHikingTrails] = useState();
  useEffect(() => {
    fetch("https://trailmixd-api.web.app/hikingtrails")
      .then((results) => results.json())
      .then((data) => setHikingTrails(data))
      .catch((e) => console.error(e));
  }, [setHikingTrails]);

  return (
    <>
      {/* {!hikingTrails ? <h2>Loading..</h2>>:  */}
      {hikingTrails?.map((trail) => {
        return (
        <Card key={trail._id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{trail.Hiking_Trail}</Card.Title>
            <Card.Text>{trail.Description}</Card.Text>
            {console.log(trail)}
            <Button variant="primary">Review this Trail ⭐️ </Button>
          </Card.Body>
        </Card>
        )
      })}
      <Footer />
    </>
  );
}
