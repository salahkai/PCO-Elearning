import React, { Component } from "react";
import { Card, Button, Row } from "react-bootstrap";
import { specialities } from "../database/database.js";
import { LinkContainer } from "react-router-bootstrap";

class Specialities extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <svg
            className="testt"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0d6efd"
              fill-opacity="1"
              d="M0,192L1440,64L1440,320L0,320Z"
            ></path>
          </svg>
          <div className="mb-5" id="specialities">
            <div className="specialities-div p-0 p-0 pt-0 ">
              <Row
                xs={1}
                md={2}
                className="justify-content-evenly p-5 pt-0 m-0"
              >
                {specialities.map((a) => (
                  <Card
                    className="shadow-lg mx-0 p-0 border-0 rounded-4 my-4"
                    style={{ width: "19rem" }}
                  >
                    <div className="position-relative ">
                      <Card.Img
                        variant="top"
                        src={a.bg}
                        className="p-0 m-0"
                        width="304 "
                        height="242"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 312"
                        className=" w-100 specialities-svg position-absolute"
                      >
                        <path fill="#ffffff" fill-opacity="1" d={a.svg}></path>
                      </svg>
                    </div>

                    <Card.Body>
                      <Card.Title>{a.name}</Card.Title>
                      <Card.Text>{a.text}</Card.Text>
                      <LinkContainer to={`branch/${a.name}`}>
                        <Button variant="primary ">Select</Button>
                      </LinkContainer>
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Specialities;
