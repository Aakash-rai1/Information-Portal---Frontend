import React, { Component } from "react";
import Header from "../components/include/header";
import Footer from "../components/include/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Wow so easy!");
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <button onClick={notify}>Notify!</button>
          <ToastContainer />
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
