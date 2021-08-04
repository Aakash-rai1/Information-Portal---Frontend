import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

const Note = { fontSize: "10px", margin: "5px 0 0 0" };

class Login extends Component {
  state = {
    email: "",
    password: "",
    loginSuccess: false,
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2020/adminlogin", this.state)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          console.log(response);
          localStorage.setItem("userToken", response.data.token);
          this.setState({
            loginSuccess: true,
          });

          window.location.reload();
        } else {
        }
      })
      .catch((err) => {
        toast.error("Email/ Password incorrect", { position: "bottom-right" });
      });
    this.setState({ email: "", password: "" });
  };
  render() {
    if (this.state.loginSuccess === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Container component="main" maxWidth="xs">
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" textAlign="center">
            Admin Login
          </Typography>
          <form className="form" noValidate>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              onClick={this.submitLogin}
            >
              Sign In
            </Button>
            <ToastContainer />
            <Typography style={Note}>
              <p>Note: This form is valid for admins only</p>
            </Typography>
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;
