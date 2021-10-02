import { Component, useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Badge } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, withRouter, Redirect } from "react-router-dom";

import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [notification, setNotification] = useState({});
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
  };
  const logout = (e) => {
    axios.delete("http://localhost:2020/logout", token);
    localStorage.removeItem("userToken");
    localStorage.removeItem("fav");

    window.location.href = "/";
  };

  const getUser = () => {
    axios({
      url: "http://localhost:2020/checklogin",
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllNotification = () => {
    axios({
      url: "http://localhost:2020/admin/getnotificaiton",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data.result);
        setNotification(res.data.result);
        const num = res.data.result.length;
        setNum(num);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUser();
    getAllNotification();
  }, []);
  return (
    <>
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <Link to="/home" class="navbar-brand" href="index.html">
              <h3>Information</h3>
              <span style={{ color: "white" }}> Portal</span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse ml-auto"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav  ml-auto">
                <li class="nav-item ">
                  <Link class="nav-link" to="/home">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/news">
                    {" "}
                    New{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/result">
                    {" "}
                    Result{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/events">
                    {" "}
                    Events{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact us
                  </a>
                </li>
                {loading === true ? (
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link  dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      Notificaiton{" "}
                      <sup>
                        <span
                          class="badge badge-pill badge-danger ml-1"
                          style={{ fontSize: "85%" }}
                        >
                          {num}
                        </span>
                      </sup>
                    </a>

                    <ul class="dropdown-menu" style={{ width: 300 }}>
                      {notification.map((notification, index) => (
                        <div class="row px-2 mb-3">
                          <div class="col-2 pr-0">
                            <div class="education_block_author justify-content-center">
                              <div class="path-img notif-img">
                                <div
                                  class="avatar-circle mx-auto bg-cl-I"
                                  style={{
                                    width: 35,
                                    position: "relative",
                                    maxWidth: 35,
                                    minWidth: 35,
                                    borderRadius: 50,
                                    display: "flex",
                                    alignItmes: "center",
                                    height: 35,
                                    justifyContent: "center",
                                  }}
                                >
                                  {/* <span class="initials">IP </span> */}
                                  <img src="images/admin.jpg" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-10">
                            <div class="row">
                              <div class="col-md-12">
                                <h6 class="wrapword">
                                  {notification.title}...
                                </h6>
                              </div>
                              <div class="col-md-12">
                                <small class="text-secondary">
                                  <i class="fa fa-clock mr-2"></i>3 days
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link  dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      Notificaiton{" "}
                      <sup>
                        <span
                          class="badge badge-pill badge-danger ml-1"
                          style={{ fontSize: "85%" }}
                        >
                          0
                        </span>
                      </sup>
                    </a>

                    <ul class="dropdown-menu" style={{ width: 300 }}>
                      <div class="row px-2 mb-3">
                        <div class="col-2 pr-0">
                          <div class="education_block_author justify-content-center">
                            <div class="path-img notif-img">
                              <div
                                class="avatar-circle mx-auto bg-cl-I"
                                style={{
                                  width: 35,
                                  position: "relative",
                                  maxWidth: 35,
                                  minWidth: 35,
                                  borderRadius: 50,
                                  display: "flex",
                                  alignItmes: "center",
                                  height: 35,
                                  justifyContent: "center",
                                }}
                              >
                                {/* <span class="initials">IP </span> */}
                                <img src="https://www.bing.com/images/search?view=detailV2&ccid=YdkNhFNL&id=025BC56F57F8363B5F96A4E0214663B38B187114&thid=OIP.YdkNhFNLUQ_NN3gZir70pQHaHZ&mediaurl=https%3a%2f%2fwww.w3schools.com%2fw3images%2favatar2.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.61d90d84534b510fcd3778198abef4a5%3frik%3dFHEYi7NjRiHgpA%26pid%3dImgRaw%26r%3d0&exph=498&expw=499&q=avatar+image&simid=607990197574519288&FORM=IRPRST&ck=D73DAC5990CC09717B2BF7592B2E00E0&selectedIndex=11" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-10">
                          <p>Loading</p>
                        </div>
                      </div>
                    </ul>
                  </li>
                )}

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    {userDetails.fname} {userDetails.lname}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
