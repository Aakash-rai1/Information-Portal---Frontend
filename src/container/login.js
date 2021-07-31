import React, { Component } from "react";
import HeaderLogin from "../components/include/headerlogin";
import FooterLogin from "../components/include/footerlogin";
import Signup from "../components/Signupform";

class Login extends Component {
  render() {
    return (
      <>
        <HeaderLogin />
        <Signup />
        <FooterLogin />
      </>
    );
  }
}

export default Login;
