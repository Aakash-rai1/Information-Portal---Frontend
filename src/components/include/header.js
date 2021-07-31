import { React } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import axios from "axios";

const token = {
  headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
};

//logout function
const logout = (e) => {
  axios.delete("http://localhost:2020/logout", token);
  localStorage.removeItem("userToken");
  localStorage.removeItem("fav");

  window.location.href = "/";
};

const Header = (props) => {
  if (localStorage.getItem("userToken")) {
    var login = (
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
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
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
  return <>{login}</>;
};

export default Header;
