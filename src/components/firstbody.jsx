import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import img1 from "../img/1.svg";
import speLogo from "../img/spe_logo.png";
import ouarglaLogo from "../img/ouargla_logo.png";

class FirstBody extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row mt-sm-5 mb-sm-0 mx-sm-5  pb-0 px-0 mx-0 ">
          <div className="col-md-4 order-md-1">
            <img src={img1}></img>
          </div>
          <div className="col-md-7 order-md-0  m-0 mt-4 m-md-2">
            <h1 className="display-4">
              <b>Welcome to</b>
              <b style={{ color: "#0d6efd" }}> PCO Elearning.</b>
              <br></br> <b>An online study library</b>
            </h1>
            <p className="fs-5 text">
              Our goal is to provide a large study resources in one place,
              unique design and direct links. all that with the help of students
              and for students.
            </p>
            <div className="row mt-sm-5 m-0">
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
                href="https://forms.gle/ajUgPJcLDzq3J2uq7"
              >
                Contribute
              </Button>
            </div>
            {/* <p className="mt-2 ">
              <u>Currently there are</u> : <b>0</b> exams, <b>0</b> course and{" "}
              <b>0</b> exercice.
            </p> */}

            {/* <div className="row">
              <div className="col">
                <img src={speLogo}></img>
                {/* <img src={ouarglaLogo}></img> 
              </div>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FirstBody;
