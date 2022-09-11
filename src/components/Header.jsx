import styles from "./Header.css";
import react, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const auth = getAuth()
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };
  return (
    <>
      <div className="nav">
        <Nav className="justify-content-end trailmix" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">TRAILMIX'D</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="about">
          <Nav.Item className="about">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item className="team">
            <Nav.Link href="https://bocacode.com/candidates" target="_blank">
              Team
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="/trails">Locations</Nav.Link>
          </Nav.Item> */}
        </div>
        <Nav className="justify-content-end login" activeKey="/home">
          <Nav.Item>
            {user ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}