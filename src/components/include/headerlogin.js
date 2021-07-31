import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "./Footer.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class HeaderLogin extends Component {
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
      .post("http://localhost:2020/login", this.state)
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
      return <Redirect to="/home" />;
    }

    return (
      <>
        <header id="aa-header">
          <div className="aa-header-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="aa-header-bottom-area">
                    <div className="aa-logo">
                      <a href="index.html">
                        <span className="fa fa-travel"></span>
                        <p>
                          Information Portal{" "}
                          <span>Information made simpler</span>
                        </p>
                      </a>
                    </div>

                    <div className="aa-search-box">
                      <div className="aa-login">
                        <form>
                          <input
                            type="text"
                            name="email"
                            id=""
                            placeholder="Username/Email"
                            required
                            value={this.state.email}
                            onChange={this.changeHandler}
                          />

                          <input
                            type="password"
                            name="password"
                            id=""
                            placeholder="Password"
                            required
                            value={this.state.password}
                            onChange={this.changeHandler}
                          />
                          <button
                            type="submit"
                            style={{ backgroundColor: "#3498db" }}
                            onClick={this.submitLogin}
                          >
                            Login
                          </button>
                          <ToastContainer />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default HeaderLogin;
