import React, { Component } from "react";
import FirstBody from "./firstbody";
import Specialities from "./specialities";

class Home extends Component {
  state = {
    speciality: "hydrocarbons",
    yearOfStudy: "1",
    branche: "pp",
    googleDriveId: "",
  };
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <FirstBody></FirstBody>
        <Specialities
          speciality={this.state.speciality}
          yearOfStudy={this.state.yearOfStudy}
          branche={this.state.branche}
          googleDriveId={this.state.googleDriveId}
        ></Specialities>
      </div>
    );
  }
}

export default Home;
