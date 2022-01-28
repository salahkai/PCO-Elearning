import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="mt-auto">
        <p className="text-center">
          Made with <FontAwesomeIcon color="red" icon={faHeart} /> By Petroleum
          club of ouargla
        </p>
      </footer>
    );
  }
}

export default Footer;
