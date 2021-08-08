import { React, Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Badge } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, withRouter, Redirect } from "react-router-dom";

import NotificationsIcon from "@material-ui/icons/Notifications";
import axios from "axios";

export default function Header() {
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
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/news">News & Announcements</Nav.Link>
          </Nav>

          <Nav.Link href="#deets" style={{ padding: "5px" }}>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </Button>
          </Nav.Link>

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
