import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "react-router-dom";
import logo from "../img/logo.svg";
import univ from "../img/univ.png";
import spe from "../img/spe.png";
import pco from "../img/pco.png";

import { LinkContainer } from "react-router-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class NavBarCom extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="primary"
          variant="dark"
          className="shadow p-3 mb-5 "
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src={logo}
                  width="36"
                  height="32"
                  className="d-inline-block align-top"
                />{" "}
                PCO E-learning
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              //<nav className="d-flex justify-content-start  ms-4">
                // <div className="d-sm-flex">
                 //  <img className="mx-4" height="100px" src={spe}></img>
                 //  <img className="mx-4" height="100px" src={pco}></img>
                 //  <img className="mx-4" height="100px" src={univ}></img>
              //   </div>
              // </nav>

              <Nav className="ms-auto">
                <Nav.Link
                  style={{ color: "white" }}
                  href="https://forms.gle/ajUgPJcLDzq3J2uq7"
                >
                  <b>Contribute</b>
                </Nav.Link>

                <Nav.Link style={{ color: "white" }} href="#login" disabled>
                  Login
                </Nav.Link>
                <div className="border-start my-2 opacity-50 mx-2"> </div>

                <Nav.Link href="https://www.linkedin.com/company/universit%C3%A9-kasdi-merbah-ouargla-spe-student-chapter/">
                  <FontAwesomeIcon color="white" icon={faLinkedin} />
                </Nav.Link>

                <Nav.Link href="https://www.facebook.com/petroleumclubunivouargla">
                  <FontAwesomeIcon color="white" icon={faFacebook} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBarCom;
