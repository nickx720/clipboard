import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

const styleDeclarations = {
  navBar: {
    justifyContent: "unset",
    backgroundColor: "#fff",
    padding: "1rem",
  },
  headerBlue: {
    color: "#3896f3",
  },
  headerText: {
    color: "#212521",
    fontWeight: "600",
  },
  button: {
    border: "1px solid #3896f3",
    borderRadius: "15px",
  },
  profileIcon: {
    color: "#fff",
    backgroundColor: "#3896f3",
    padding: "0.5rem",
  },
  logoutSection: {
    marginRight: "1rem",
  },
  notification: {
    backgroundColor: "#f74935",
    padding: "0.5rem",
  },
  circleText: {
    position: "relative",
    left: "0.5rem",
    top: "0.5rem",
  },
};

const Header = () => {
  return (
    <Navbar expand="lg" style={styleDeclarations.navBar}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand className="d-block d-sm-none" href="#home">
        HEALTH EXPLORE
      </Navbar.Brand>
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ justifyContent: "space-between" }}
      >
        <Nav>
          <Navbar.Brand style={styleDeclarations.headerBlue} href="#home">
            HEALTH EXPLORE
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link style={styleDeclarations.headerText} href="#home">
            PROFILE
          </Nav.Link>
          <Nav.Link style={styleDeclarations.headerText} href="#link">
            JOBS
          </Nav.Link>
          <Nav.Link style={styleDeclarations.headerText} href="#link">
            PROFESSIONAL NETWORK
          </Nav.Link>
          <Nav.Link style={styleDeclarations.headerText} href="#link">
            LOUNGE
          </Nav.Link>
          <Nav.Link style={styleDeclarations.headerText} href="#link">
            SALARY
          </Nav.Link>
        </Nav>
        <Nav style={styleDeclarations.logoutSection}>
          <Nav.Link>
            <Button
              variant="outline"
              style={{
                ...styleDeclarations.button,
                ...styleDeclarations.headerBlue,
              }}
            >
              CREATE JOB
            </Button>
          </Nav.Link>
          <Nav.Link
            className="rounded-circle"
            style={styleDeclarations.profileIcon}
            href="#link"
          >
            <span style={styleDeclarations.circleText}>
              JO
              <sup>
                <span
                  className="rounded-circle"
                  style={styleDeclarations.notification}
                >
                  2
                </span>
              </sup>
            </span>
          </Nav.Link>
          <Nav.Link href="#link">LOGOUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
