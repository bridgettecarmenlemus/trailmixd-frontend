import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./ListOfTrails.css";
import TrailNameCards from "../components/TrailNameCards.jsx";
import { UserContext } from "../context/UserContext";

export default function ListOfTrails() {
  const {
    review,
    hikingTrails,
    fetchHikingTrails,
  } = useContext(UserContext);

  useEffect(() => {
    fetchHikingTrails();
  }, []);
  console.log({ review });

  return (
    <>
      <div className="header">
        <h1>The Great State of Washington ⛰ </h1>
        <p>Review any of the following trails below! </p>
      </div>
      <div>
        <Container>
          <Row>
            {hikingTrails?.map((trail) => {
              return (
                <Col key={trail._id} xs={5} md={4}>
                  <div className="card-columns">
                    <TrailNameCards
                     trail={trail} 
                     style={{ width: "18rem" }} />
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
