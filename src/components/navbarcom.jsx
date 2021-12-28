import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBarCom extends React.Component {
  render() {
    return (
      <div className="mb-2">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#">Ouargla E-Learning</Navbar.Brand>
            <Nav className="">
              <a
                href="https://forms.gle/ZEu6v3DJqvCpztCA8"
                className="Contribute"
              >
                Contribute
              </a>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBarCom;
