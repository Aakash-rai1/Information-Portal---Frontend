import { Component } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.error("User with the email already exists", {
          position: "bottom-right",
        });
      });

    this.setState({ fname: "", lname: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        <Navbar />

        {/* <Paper elevation={10} style={paperStyle}></Paper> */}
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-book" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">Add Admin</div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                  <form>
                    <div class="form-group">
                      <label class="form-control-label">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="fname"
                        value={this.state.fname}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="lname"
                        value={this.state.lname}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Email Address</label>
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div class="form-group">
                      <label class="form-control-label">Password</label>
                      <input
                        type="text"
                        class="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div class="col-lg-12 loginbttm">
                      <div class="col-lg-8 login-btm login-button">
                        {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                        <a
                          href="/admindetails"
                          class="btn btn-outline-primary"
                          style={{ alignContent: "center" }}
                          onClick={this.AddAdminData}
                        >
                          Add
                        </a>
                      </div>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Paper/> */}
      </div>
    );
  }
}

export default AdminAdd;
