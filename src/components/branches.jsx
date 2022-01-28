import React, { Component } from "react";
import { Accordion, ListGroup, Card } from "react-bootstrap";
import { branches } from "../database/database.js";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Branches = () => {
  const { speciality } = useParams();
  const regex = / /gi;

  let specialityId;

  switch (speciality) {
    case "Hydrocarbons":
      specialityId = 0;
      break;
    case "Geology":
      specialityId = 1;
      break;
    case "RenewableEnergies":
      specialityId = 2;
      break;
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <h1 className="mx-sm-5 mx-3"> {branches[specialityId].speciality}</h1>
      <div className="row m-sm-5 m-1">
        {branches[specialityId].year_of_study.map((b) => (
          <div className="col-sm-6 m-2 m-sm-0">
            <Card>
              <Card.Header as="h3">{b.name}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <div className="">
                    <Accordion defaultActiveKey="">
                      {b.years.map((c) => (
                        <Accordion.Item eventKey={c.id}>
                          <Accordion.Header>{c.name}</Accordion.Header>
                          <Accordion.Body className="m-0 p-0 ">
                            {c.branches.map((d) => (
                              <ListGroup>
                                <LinkContainer
                                  to={`/files?speciality=${speciality
                                    .replace(regex, "_")
                                    .toLowerCase()}&diplome=${b.name
                                    .replace(regex, "_")
                                    .toLowerCase()}&year=${c.name
                                    .replace(regex, "_")
                                    .toLowerCase()}&branch=${d.name
                                    .replace(regex, "_")
                                    .toLowerCase()}`}
                                >
                                  <ListGroup.Item action className="border-0">
                                    {d.name}
                                  </ListGroup.Item>
                                </LinkContainer>
                              </ListGroup>
                            ))}
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
