import React, { Component } from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";

class Footer extends Component {
  render() {
    return (
      // <div className="main-footer">
      //   <div className="container">
      //     <div className="row">
      //       {/* column1 */}
      //       <div className="col-6">
      //         <h4>About Us</h4>
      //         <p>
      //           Information portal is an online platform that assists all the
      //           individuals and organizations related to examination get the
      //           information about the recent happenings and the result
      //           publication.
      //         </p>
      //       </div>

      //       {/* col2 */}
      //       <div className="col">
      //         <h4>Quick Links</h4>
      //         <ul className="list-unstyled">
      //           <li>
      //             <a href="/home" style={{ color: "white" }}>
      //               Home
      //             </a>
      //           </li>
      //           <li>
      //             <a href="/events" style={{ color: "white" }}>
      //               Events
      //             </a>
      //           </li>
      //           <li>
      //             <a href="/news" style={{ color: "white" }}>
      //               News & Announcements
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //       {/* col2 */}
      //       <div className="col">
      //         <h4>Contact us</h4>
      //         <ul className="list-unstyled" style={{ textAlign: "left" }}>
      //           <li>
      //             <LocationOnIcon /> &nbsp; address
      //           </li>
      //           <li>
      //             <PhoneIcon /> &nbsp; 98611234545
      //           </li>
      //           <li>
      //             <MailIcon />
      //             &nbsp; info@gmail.com
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //     <hr />
      //     <div className="row-sm">
      //       <div className="col-sm">
      //         &copy;{new Date().getFullYear()} Information Portal | All rights
      //         reserved
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <section class="info_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="info_menu">
                <h5>QUICK LINKS</h5>
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="course.html">
                      {" "}
                      Courses{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="event.html">
                      {" "}
                      Events{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="login.html">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info_course">
                <h5>TOP RATED COURSE</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humou
                </p>
              </div>
            </div>

            <div class="col-md-5 offset-md-1">
              <div class="info_news">
                <h5>FOR ANY QUERY, PLEASE WRITE TO US</h5>
                <div class="info_contact">
                  <a href="">Location</a>
                  <a href="">demo@gmail.com</a>
                  <a href="">Call : +01 1234567890</a>
                </div>
                <form action="">
                  <input type="text" placeholder="Enter Your email" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
