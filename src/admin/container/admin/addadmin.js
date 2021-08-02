import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/Navbar";

const Note = { fontSize: "10px", margin: "5px 0 0 0" };

class AdminAdd extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // fileHandler = (e)=> {
  //     this.setState({
  //         menu_image : e.target.files[0]
  //     })
  // }

  AddAdminData = (e) => {
    e.preventDefault();
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:2020/admin/add", data, this.state.config)
      .then((response) => {
        console.log(response);
        window.location.replace("/dashboard");
      })

      .catch((err) => {
        toast.error("Admin with the email already exists", {
          position: "bottom-right",
        });
      });

    this.setState({ fname: "", lname: "", email: "", password: "" });
  };
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Navbar />

        <div className="paper">
          <Typography component="h1" variant="h5">
            Add Admin
          </Typography>
          <form className="form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
              autoFocus
              value={this.state.fname}
              onChange={this.changeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lname"
              label="Last Name"
              name="lname"
              autoComplete="lname"
              autoFocus
              value={this.state.lname}
              onChange={this.changeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              onClick={this.AddAdminData}
            >
              Add Admin
            </Button>
            <ToastContainer />
          </form>
        </div>
      </Container>
    );
  }
}

export default AdminAdd;
