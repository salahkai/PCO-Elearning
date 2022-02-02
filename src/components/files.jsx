import React, { Component } from "react";
import queryString from "query-string";
import { files } from "../database/database.js";
import TreeMenu from "react-simple-tree-menu";

class Files extends React.Component {
  state = {
    speciality: "hydrocarbons",
    googleDriveId: "",
  };

  handleItemClick = (key) => {
    this.setState({ tabs: key });
  };
  render() {
    const query = queryString.parse(window.location.search);
    const { speciality, diplome, year, branch } = query;
    return (
      <div className="mt-3 px-5 d-flex flex-column min-vh-100">
        <div className="row">
          <div className="col-sm-3 col-d-3 col-12">
            <TreeMenu
              data={files[speciality][diplome][year][branch]}
              onClickItem={({ gd_id, key, label, ...props }) => {
                this.setState({ googleDriveId: gd_id });
              }}
            />
          </div>
          <div className="col-sm-9 col-d-9 col-12">
            <div>
              {this.state.googleDriveId == "" ? (
                <h1 className="m-4">Please select a subject.</h1>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Files;
