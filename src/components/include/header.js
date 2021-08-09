import { Component, useState } from "react";
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

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home" style={{ color: "#3498db" }}>
          Information Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/events">
              Events
            </Link>
            <Link className="nav-link" to="/news">
              News & Announcements
            </Link>
          </Nav>

          <Nav.Link href="#deets" style={{ padding: "5px" }}>
            <Badge badgeContent={2} color="error" onClick={handleClick}>
              <NotificationsIcon />
            </Badge>
          </Nav.Link>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemText primary="Sent mail" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary="Drafts" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary="Inbox" />
            </StyledMenuItem>
          </StyledMenu>

          <NavDropdown title="My Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My Results</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/" onClick={logout}>
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
