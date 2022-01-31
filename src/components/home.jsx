import React, { Component } from "react";
import FirstBody from "./firstbody";
import Specialities from "./specialities";

class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <FirstBody></FirstBody>
        <Specialities></Specialities>
      </div>
    );
  }
}

export default Home;
