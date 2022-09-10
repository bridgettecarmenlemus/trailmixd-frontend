import React, { useContext } from "react";
import { useEffect } from "react";
import "./Hero.css";
import video from "../assets/videos/mtnrange.mp4";
import Carousel from "./Carousel";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { UserContext } from "../context/UserContext";

export default function Hero() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };
  return (
    <>
      <div className="hero-container">
        <div className="welcome-container">
          <h1>Welcome</h1>
          <h2>Please sign up to review your first hiking trail!</h2>
          <Nav className="justify-content-center nav" activeKey="/home">
            <Nav.Item>
              {user ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <Nav.Link href="/login">Login or Sign Up with Google!</Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </div>
        <div className="video-container">
          <video src={video} autoPlay loop muted className="background-video" />
        </div>
      </div>
      <div>
        <h1 className="body-two">
          See what others are saying about Trailmix'D
        </h1>
        <h2>
          <Carousel />
        </h2>
      </div>
    </>
  );
}
