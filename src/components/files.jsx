import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { licence, master } from "../database/database.js";
import TreeMenu from "react-simple-tree-menu";

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import "react-simple-tree-menu/dist/main.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

class Files extends React.Component {
  state = {
    tabs: "licence",
    googleDriveId: "",
  };
  handleItemClick = (key) => {
    this.setState({ tabs: key });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3 col-d-3 col-12">
            <TreeMenu
              data={this.state.tabs == "licence" ? licence : master}
              onClickItem={({ gd_id, key, label, ...props }) => {
                this.setState({ googleDriveId: gd_id });
              }}
            />
          </div>
          <div className="col-sm-9  col-d-9 col-12">
            <Tabs
              defaultActiveKey="licence"
              onSelect={(k) => this.setState({ tabs: k, googleDriveId: "" })}
            >
              <Tab eventKey="licence" title="Licence">
                {this.state.googleDriveId == "" ? (
                  <h1 className="m-4">
                    Please select a speciality, then the year of study
                  </h1>
                ) : (
                  <iframe
                    src={
                      "https://drive.google.com/embeddedfolderview?id=" +
                      this.state.googleDriveId +
                      "#list"
                    }
                    className="google-drive-list"
                  ></iframe>
                )}
              </Tab>
              <Tab eventKey="master" title="Master">
                {this.state.googleDriveId == "" ? (
                  <h1 className="m-4">
                    Please select a speciality, then the year of study
                  </h1>
                ) : (
                  <iframe
                    src={
                      "https://drive.google.com/embeddedfolderview?id=" +
                      this.state.googleDriveId +
                      "#list"
                    }
                    className="google-drive-list"
                  ></iframe>
                )}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Files;
