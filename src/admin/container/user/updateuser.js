import { Component } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

class UserUpdate extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",

    config: {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    },

    id: this.props.match.params.id,
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:2020/show/users", this.state.config)
      .then((response) => {
        this.setState({
          fname: response.data.data.fname,
          lname: response.data.data.lname,
          email: response.data.data.email,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  updateUserData = (e) => {
    e.preventDefault();

    axios
      .put(
        "http://localhost:2020/updateUser/" + this.state.id,
        this.state.config
      )
      .then((response) => {
        console.log(response);
        window.location.replace("/admin/updateUser");
      })

      .catch((err) => {
        console.log(err.response);
      });

    window.location.href = "/admin/updateUser";
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
              <div class="col-lg-12 login-title">Update User</div>

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
                      <label class="form-control-label">Email</label>
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div class="col-lg-12 loginbttm">
                      <div class="col-lg-8 login-btm login-button">
                        {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                        <a
                          href="/userdetails"
                          class="btn btn-outline-primary"
                          style={{ alignContent: "center" }}
                          onClick={this.updateUserData}
                        >
                          Update
                        </a>
                      </div>
                    </div>
                  </form>
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

export default UserUpdate;
