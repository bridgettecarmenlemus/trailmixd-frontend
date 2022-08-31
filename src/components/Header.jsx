import styles from "./Header.css";
import react from "react";
import Nav from 'react-bootstrap/Nav';


export default function Header() {
  return (
    // <nav className="nav">
    //   <div>TRAILMIX'D</div>
    //   <div>About</div>
    //   <div>Team</div>
    //   <div>Location</div>
    //   <div>Sign up</div>
    // </nav>
    <>
    <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
