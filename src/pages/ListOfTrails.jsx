import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./ListOfTrails.css";
import TrailNameCards from "../components/TrailNameCards.jsx";

export default function ListOfTrails() {
  const [hikingTrails, setHikingTrails] = useState();

  useEffect(() => {
    fetch("https://trailmixd-api.web.app/hikingtrails")
      .then((results) => results.json())
      .then((data) => setHikingTrails(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      {/* {!hikingTrails ? <h2>Loading..</h2>>:  */}
      <Container>
        <Row>
          {hikingTrails?.map((trail) => {
            return (
              <Col xs={5} md={4}>
                <div class="card-columns">
                  <TrailNameCards
                    key={trail._id}
                    trail={trail}
                    style={{ width: "18rem" }}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
