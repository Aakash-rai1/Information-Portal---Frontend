// import React from 'react';
import { Component } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/*
        <div className="container">
        <div> <p> { this.state.longeur}</p> </div>
        </div> */}
        <div class="container">
          <h1 style={{ textAlign: "center" }}>Home</h1>
          <div class=" row d-flex justify-content-center">
            <div class="col-lg-3 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <Link to="/userdetails">
                  <i class="fa fa-users " aria-hidden="true"></i>
                </Link>
              </div>
              <div class="col-lg-12 login-title">User</div>
              <div class="col-lg-12 login-title">
                {/* <p> No of User:{this.state.longeur}</p> */}
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form"></div>
              </div>
            </div>

            <div class="col-lg-3 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <Link to="/menu">
                  {" "}
                  <i class="fa fa-book fa" aria-hidden="true"></i>
                </Link>
              </div>
              <div class="col-lg-12 login-title">Menu</div>
              <div class="col-lg-12 login-title">
                {/* <p> No of Menu Item:{this.state.menu}</p> */}
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form"></div>
              </div>
            </div>

            <div class="col-lg-3 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <Link to="/fooditems">
                  <i class="fa fa-hamburger" aria-hidden="true"></i>
                </Link>
              </div>
              <div class="col-lg-12 login-title">Food Item</div>

              <div class="col-lg-12 login-title">
                {/* <p> No Of Food: {this.state.longeur}</p> */}
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form"></div>
              </div>
            </div>

            <div class="col-lg-3 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <Link to="/tablebooking">
                  <i class="fa fa-table " aria-hidden="true"></i>
                </Link>
              </div>
              <div class="col-lg-12 login-title">Table Booked</div>

              <div class="col-lg-12 login-title">
                {/* <p> No of Table Booked:{this.state.table}</p> */}
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form"></div>
              </div>
            </div>

            <div class="col-lg-3 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <Link to="/admindetails">
                  <i class="fa fa-user-tie "></i>
                </Link>
              </div>
              <div class="col-lg-12 login-title">Admin</div>

              <div class="col-lg-12 login-title">
                {/* <p> No of Admin:{this.state.admin}</p> */}
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form"></div>
              </div>
            </div>

            <div class="col-lg-3 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <Link to="/admindetails">
                  <i class="fa fa-id-card "></i>
                </Link>
              </div>
              <div class="col-lg-12 login-title">Staff</div>

              <div class="col-lg-12 login-title">
                {/* <p> No of Staff:{this.state.employee}</p> */}
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
