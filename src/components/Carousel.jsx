import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Slide1 from "../assets/videos/images/Slide1.jpg";
import Slide2 from "../assets/videos/images/Slide2.jpg";
import Slide3 from "../assets/videos/images/Slide3.jpg";

export default function () {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1400}>
          <img
            width="700"
            height="400"
            className="slide1"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sammy</h3>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1400}>
          <img
            width="700"
            height="400"
            className="slide2"
            src={Slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Jake</h3>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1400}>
          <img
            width="700"
            height="400"
            className="slide3"
            src={Slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Alex</h3>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
