import React from "react";
import Footer from "../components/include/footer";
import Header from "../components/include/header";
import ResultComponent from "../components/ResultComponent";

export const Result = (props) => {
  return (
    <div class="sub_page">
      <div class="hero_area">
        <Header />
      </div>
      <ResultComponent />

      <Footer />
    </div>
  );
};
