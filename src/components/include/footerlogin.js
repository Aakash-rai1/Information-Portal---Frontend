import React, { Component } from "react";
import "./Footer.css";

class FooterLogin extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row-sm">
            <div className="col-sm">
              &copy;{new Date().getFullYear()} Information Portal | All rights
              reserved | Created by Aakash Rai
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterLogin;
