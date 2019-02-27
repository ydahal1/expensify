import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

//css styling
const navElementsStyle = {
  paddingRight: "10px"
};

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand> Expensify</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="ml-auto">
            <Nav>
              <Navbar.Text style={navElementsStyle}>
                <Link to="/create">Create</Link>
              </Navbar.Text>

              <Navbar.Text style={navElementsStyle}>
                <Link to="/help">Help</Link>
              </Navbar.Text>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
