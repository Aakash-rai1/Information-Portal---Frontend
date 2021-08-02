import React from "react";
import { Link, Redirect } from "react-router-dom";
// import { SidebarData } from './SidebarData';
// import './Navbar.css';
import axios from "axios";
import { Component } from "react";

const token = {
  headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
};

const logout = (e) => {
  axios.delete("http://localhost:2020/logout", token);
  localStorage.removeItem("userToken");

  window.location.href = "/adminlogin";
};
class Navbar extends Component {
  //logout function

  render() {
    const mystyle = {
      position: "relative",
      display: "table-cell",
      width: "60px",
      height: "36px",
      textAlign: "Center",
      fontSize: "20px",
      vericalAlign: "middle",
    };

    return (
      <>
        {/* {adminlogin}
        {auth} */}
        <nav class="main-menu">
          <ul>
            <li class="has-subnav">
              <Link to="/admin/manageUser">
                <i class="fa fa-book fa-2x" style={mystyle}></i>
                <span class="nav-text">Manage Users</span>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/admin/manageAdmin">
                <i class="fa fa-hamburger fa-2x" style={mystyle}></i>
                <span class="nav-text">Manage Admins</span>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/admin/manageNews">
                <i class="fa fa-users fa-2x" style={mystyle}></i>
                <span class="nav-text">Manage News</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/manageEvents">
                <i class="fa fa-table fa-2x" style={mystyle}></i>
                <span class="nav-text">Manage Events</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/manageResults">
                <i class="fa fa-table fa-2x" style={mystyle}></i>
                <span class="nav-text">Manage Results</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/notice">
                <i class="fa fa-id-card fa-2x" style={mystyle}></i>

                <span class="nav-text">Manage Notice</span>
              </Link>
            </li>

            <li>
              <Link to="/admin/profile">
                {/* <i class="fa fa-map-marker fa-2x"style={mystyle}></i> */}
                <i class="fa fa-user fa-2x " style={mystyle}></i>
                <span class="nav-text">My Profile</span>
              </Link>
            </li>
          </ul>

          <ul class="logout">
            <li>
              <a onClick={logout}>
                <i class="fa fa-power-off fa-2x" style={mystyle}></i>
                <span class="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
