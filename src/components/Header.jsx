import styles from "./Header.css";
import react from "react";
import Nav from 'react-bootstrap/Nav';


export default function Header() {
  return (
    <>
    <div className="nav">
    <Nav className="justify-content-end nav" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">TRAILMIX'D</Nav.Link>
        </Nav.Item>
      </Nav>
        <div className="nav">
        <Nav.Item>
          <Nav.Link eventKey="">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://bocacode.com/candidates"target="_blank">Team</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="locations">Locations</Nav.Link>
        </Nav.Item>
        </div>
    <Nav className="justify-content-end nav" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </>
  );
}





































{/* <Nav.Item>
  <Nav.Link href="/home">TRAILMIX'D</Nav.Link>
</Nav.Item> */}
{/* <div> */}
{/* <Nav.Item>
  <Nav.Link eventKey="about">About</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="team">Team</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="locations">Locations</Nav.Link>
</Nav.Item> */}
{/* </div> */}