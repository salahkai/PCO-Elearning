import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import img1 from "../img/1.svg";

class FirstBody extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row my-sm-5 mx-sm-5 pb-0 px-5 mx-0 ">
          <div className="col-sm-4 order-sm-1">
            <img width="373" height="356" src={img1}></img>
          </div>
          <div className="col-sm-8 order-sm-0 test2 m-4 m-sm-0">
            <h1 className="display-4">
              <b>Welcome to</b>
              <b style={{ color: "#0d6efd" }}> Knowy.</b>
              <br></br> <b>An online study library</b>
            </h1>
            <p className="fs-5 text">
              Our goal is to provide a large study resources in one place, with
              unique design and direct links. all that with the help of students
              and for students.
            </p>
            <div className="row mt-sm-5">
              <Button
                variant="primary"
                size="lg"
                href="#specialities"
                className=" col-sm-3 m-sm-1 m-1"
              >
                Get started
              </Button>{" "}
              <Button
                variant="secondary"
                size="lg"
                className="col-sm-3 m-sm-1 m-1"
              >
                Contribute
              </Button>
            </div>
            <p className="mt-2 ">
              <u>Currently there are</u> : <b>0</b> exams, <b>0</b> course and{" "}
              <b>0</b> exercice.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FirstBody;
