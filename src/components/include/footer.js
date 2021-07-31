import React, { Component } from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";

class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col-6">
              <h4>About Us</h4>
              <p>
                Information portal is an online platform that assists all the
                individuals and organizations related to examination get the
                information about the recent happenings and the result
                publication.
              </p>
            </div>

            {/* col2 */}
            <div className="col">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/home" style={{ color: "white" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/events" style={{ color: "white" }}>
                    Events
                  </a>
                </li>
                <li>
                  <a href="/news" style={{ color: "white" }}>
                    News & Announcements
                  </a>
                </li>
              </ul>
            </div>
            {/* col2 */}
            <div className="col">
              <h4>Contact us</h4>
              <ul className="list-unstyled" style={{ textAlign: "left" }}>
                <li>
                  <LocationOnIcon /> &nbsp; address
                </li>
                <li>
                  <PhoneIcon /> &nbsp; 98611234545
                </li>
                <li>
                  <MailIcon />
                  &nbsp; info@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row-sm">
            <div className="col-sm">
              &copy;{new Date().getFullYear()} Information Portal | All rights
              reserved
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
