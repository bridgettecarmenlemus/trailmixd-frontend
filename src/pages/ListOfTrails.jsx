import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./ListOfTrails.css";
import TrailNameCards from "../components/TrailNameCards.jsx";
import { UserContext } from "../context/UserContext";

export default function ListOfTrails() {
  const {review, setReview} = useContext(UserContext)
  const [hikingTrails, setHikingTrails] = useState();

  useEffect(() => {
    fetch("https://trailmixd-api.web.app/gethikingtrails")
      .then((results) => results.json())
      .then((data) => setHikingTrails(data))
      .catch((e) => console.error(e));
  }, [review, setReview]);
  console.log({review})

  return (
    <>
    <div class="header">
        <h1>The Great State of Washington ⛰ </h1>
        <p>Review any of the following trails below! </p>
      </div>
      {/* !hikingTrails ? <h2>Loading..</h2>  */}
      <div>
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
      </div>
    </>
  );
}
