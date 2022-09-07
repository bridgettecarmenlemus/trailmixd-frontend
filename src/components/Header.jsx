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
        <Nav className="justify-content-end nav" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">TRAILMIX'D</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="nav">
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://bocacode.com/candidates" target="_blank">
              Team
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="/trails">Locations</Nav.Link>
          </Nav.Item> */}
        </div>
        <Nav className="justify-content-end nav" activeKey="/home">
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

{
  /* <Nav.Item>
  <Nav.Link href="/home">TRAILMIX'D</Nav.Link>
</Nav.Item> */
}
{
  /* <div> */
}
{
  /* <Nav.Item>
  <Nav.Link eventKey="about">About</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="team">Team</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="locations">Locations</Nav.Link>
</Nav.Item> */
}
{
  /* </div> */
}
